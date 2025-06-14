import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { CalendarDays, Download, Filter } from "lucide-react";
import { useState } from "react";

const salesData = [
  { name: '1月', 销售额: 45000, 访客: 2400, 转化率: 4.2 },
  { name: '2月', 销售额: 52000, 访客: 2800, 转化率: 4.8 },
  { name: '3月', 销售额: 48000, 访客: 2600, 转化率: 4.5 },
  { name: '4月', 销售额: 61000, 访客: 3200, 转化率: 5.1 },
  { name: '5月', 销售额: 58000, 访客: 3000, 转化率: 4.9 },
  { name: '6月', 销售额: 67000, 访客: 3500, 转化率: 5.4 },
];

const categoryData = [
  { name: '电子产品', value: 35, color: '#3b82f6' },
  { name: '服装鞋包', value: 28, color: '#8b5cf6' },
  { name: '家居用品', value: 20, color: '#06b6d4' },
  { name: '美妆护肤', value: 17, color: '#f59e0b' },
];

const dailyOrders = [
  { time: '00:00', orders: 12 },
  { time: '04:00', orders: 8 },
  { time: '08:00', orders: 45 },
  { time: '12:00', orders: 78 },
  { time: '16:00', orders: 65 },
  { time: '20:00', orders: 89 },
];

export function AnalyticsDashboard() {
  const [timeRange, setTimeRange] = useState("month");
  const [category, setCategory] = useState("all");

  return (
    <div className="space-y-6">
      {/* 筛选控制栏 */}
      <Card className="border-0 shadow-sm bg-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <CalendarDays className="h-4 w-4 text-gray-500" />
                <Select value={timeRange} onValueChange={setTimeRange}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="day">今日</SelectItem>
                    <SelectItem value="week">本周</SelectItem>
                    <SelectItem value="month">本月</SelectItem>
                    <SelectItem value="year">今年</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="选择分类" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">全部分类</SelectItem>
                    <SelectItem value="electronics">电子产品</SelectItem>
                    <SelectItem value="fashion">服装鞋包</SelectItem>
                    <SelectItem value="home">家居用品</SelectItem>
                    <SelectItem value="beauty">美妆护肤</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Button variant="outline" className="flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>导出报告</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 销售趋势图 */}
      <Card className="border-0 shadow-sm bg-white">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900">销售趋势分析</CardTitle>
          <CardDescription>销售额与访客数量趋势对比</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="name" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                  }} 
                />
                <Legend />
                <Line type="monotone" dataKey="销售额" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }} />
                <Line type="monotone" dataKey="访客" stroke="#8b5cf6" strokeWidth={3} dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* 分类占比和订单分布 */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-0 shadow-sm bg-white">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">销售分类占比</CardTitle>
            <CardDescription>各商品分类的销售占比分析</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: any) => [`${value}%`, '占比']} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-white">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">24小时订单分布</CardTitle>
            <CardDescription>今日各时段订单数量分布</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={dailyOrders}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="time" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px'
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="orders" 
                    stroke="#06b6d4" 
                    fill="url(#colorOrders)"
                    strokeWidth={2}
                  />
                  <defs>
                    <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}