import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Users, Package } from "lucide-react";

const stats = [
  {
    title: "今日销售额",
    value: "¥124,567",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    description: "比昨日增长",
  },
  {
    title: "待处理订单",
    value: "342",
    change: "+3.2%",
    trend: "up",
    icon: ShoppingCart,
    description: "新增订单",
  },
  {
    title: "活跃用户",
    value: "2,157",
    change: "-2.1%",
    trend: "down",
    icon: Users,
    description: "在线用户数",
  },
  {
    title: "库存商品",
    value: "8,945",
    change: "+5.4%",
    trend: "up",
    icon: Package,
    description: "总商品数量",
  },
];

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown;
        const trendColor = stat.trend === "up" ? "text-green-600" : "text-red-600";
        
        return (
          <Card key={stat.title} className="border-0 shadow-sm bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="flex items-center text-xs">
                <TrendIcon className={`h-3 w-3 mr-1 ${trendColor}`} />
                <span className={trendColor}>{stat.change}</span>
                <span className="text-gray-500 ml-1">{stat.description}</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}