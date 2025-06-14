import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarTrigger } from "@/components/ui/sidebar";
import { BarChart3, Package, ShoppingCart, Users, Settings, Home, TrendingUp } from "lucide-react";
import { TopNavigation } from "./TopNavigation";

const menuItems = [
  { icon: Home, label: "首页", href: "/" },
  { icon: BarChart3, label: "数据看板", href: "/dashboard" },
  { icon: ShoppingCart, label: "订单管理", href: "/orders" },
  { icon: Package, label: "商品管理", href: "/products" },
  { icon: Users, label: "客户管理", href: "/customers" },
  { icon: TrendingUp, label: "营销分析", href: "/analytics" },
  { icon: Settings, label: "系统设置", href: "/settings" },
];

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar>
        <SidebarHeader className="border-b border-gray-200 px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">ECommerce</h2>
              <p className="text-xs text-gray-500">运营后台</p>
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent className="px-3 py-4">
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton>
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter className="border-t border-gray-200 px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <Users className="w-4 h-4 text-gray-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">管理员</p>
              <p className="text-xs text-gray-500 truncate">admin@company.com</p>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset className="bg-white">
        <TopNavigation />
        <main className="px-0">
          {children}
        </main>
      </SidebarInset>
    </div>
  );
}