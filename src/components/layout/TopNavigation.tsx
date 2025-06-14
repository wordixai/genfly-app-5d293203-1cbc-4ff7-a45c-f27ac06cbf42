import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Bell, Search, User } from "lucide-react";

export function TopNavigation() {
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white">
        <div className="flex h-16 items-center px-6 space-x-4">
          <SidebarTrigger className="text-white hover:bg-white/10" />
          
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70" />
              <Input 
                placeholder="搜索订单、商品、客户..." 
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white focus:text-gray-900 focus:placeholder:text-gray-500"
              />
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-[10px] p-0 flex items-center justify-center">
                3
              </Badge>
            </Button>

            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}