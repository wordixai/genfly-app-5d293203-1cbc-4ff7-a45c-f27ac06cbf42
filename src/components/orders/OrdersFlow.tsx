import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MoreHorizontal, MapPin, Clock, DollarSign } from "lucide-react";

const orderStatuses = [
  { status: "待付款", count: 45, color: "bg-yellow-100 text-yellow-800" },
  { status: "待发货", count: 32, color: "bg-blue-100 text-blue-800" },
  { status: "配送中", count: 28, color: "bg-purple-100 text-purple-800" },
  { status: "已完成", count: 156, color: "bg-green-100 text-green-800" },
  { status: "已取消", count: 12, color: "bg-gray-100 text-gray-800" },
];

const recentOrders = [
  {
    id: "ORD-001234",
    customer: "张三",
    amount: "¥299.00",
    status: "待发货",
    time: "10分钟前",
    items: 2,
    location: "北京市朝阳区",
  },
  {
    id: "ORD-001235",
    customer: "李四",
    amount: "¥599.00",
    status: "配送中",
    time: "25分钟前",
    items: 1,
    location: "上海市浦东新区",
  },
  {
    id: "ORD-001236",
    customer: "王五",
    amount: "¥1,299.00",
    status: "待付款",
    time: "1小时前",
    items: 3,
    location: "广州市天河区",
  },
  {
    id: "ORD-001237",
    customer: "赵六",
    amount: "¥199.00",
    status: "已完成",
    time: "2小时前",
    items: 1,
    location: "深圳市南山区",
  },
];

export function OrdersFlow() {
  return (
    <div className="space-y-6">
      {/* 订单状态流程 */}
      <div className="grid gap-4 md:grid-cols-5">
        {orderStatuses.map((status) => (
          <Card key={status.status} className="border-0 shadow-sm bg-white hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-3 ${status.color}`}>
                <span className="text-lg font-bold">{status.count}</span>
              </div>
              <p className="font-medium text-gray-900">{status.status}</p>
              <p className="text-sm text-gray-500">待处理</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 最近订单 */}
      <Card className="border-0 shadow-sm bg-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold text-gray-900">最近订单</CardTitle>
            <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
              查看全部
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-gray-100">
            {recentOrders.map((order) => (
              <div key={order.id} className="p-6 hover:bg-gray-50/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white">
                        {order.customer.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center space-x-2">
                        <p className="font-medium text-gray-900">{order.id}</p>
                        <Badge 
                          variant="outline" 
                          className={`
                            ${order.status === "待付款" ? "border-yellow-300 text-yellow-700 bg-yellow-50" : ""}
                            ${order.status === "待发货" ? "border-blue-300 text-blue-700 bg-blue-50" : ""}
                            ${order.status === "配送中" ? "border-purple-300 text-purple-700 bg-purple-50" : ""}
                            ${order.status === "已完成" ? "border-green-300 text-green-700 bg-green-50" : ""}
                          `}
                        >
                          {order.status}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 mt-1">
                        <p className="text-sm text-gray-600">{order.customer}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-3 w-3 mr-1" />
                          {order.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-3 w-3 mr-1" />
                          {order.time}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="flex items-center text-lg font-semibold text-gray-900">
                        <DollarSign className="h-4 w-4 mr-1 text-gray-400" />
                        {order.amount}
                      </div>
                      <p className="text-sm text-gray-500">{order.items} 件商品</p>
                    </div>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}