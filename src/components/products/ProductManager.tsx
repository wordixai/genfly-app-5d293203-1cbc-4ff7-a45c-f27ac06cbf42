import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { Search, Plus, MoreHorizontal, Package, TrendingUp, TrendingDown } from "lucide-react";

const initialProducts = [
  {
    id: "1",
    name: "苹果 iPhone 15 Pro",
    category: "电子产品",
    price: "¥7,999",
    stock: 45,
    sales: 128,
    trend: "up",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=200&h=200&fit=crop",
    status: "热销"
  },
  {
    id: "2", 
    name: "Nike Air Max 270",
    category: "运动鞋",
    price: "¥899",
    stock: 23,
    sales: 89,
    trend: "up",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop",
    status: "畅销"
  },
  {
    id: "3",
    name: "戴森吸尘器 V15",
    category: "家用电器", 
    price: "¥4,299",
    stock: 12,
    sales: 56,
    trend: "down",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop",
    status: "缺货"
  },
  {
    id: "4",
    name: "SK-II 神仙水",
    category: "美妆护肤",
    price: "¥1,699",
    stock: 67,
    sales: 234,
    trend: "up",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=200&fit=crop",
    status: "热销"
  },
  {
    id: "5",
    name: "MacBook Air M2",
    category: "电子产品",
    price: "¥8,999",
    stock: 18,
    sales: 78,
    trend: "up", 
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=200&h=200&fit=crop",
    status: "畅销"
  }
];

export function ProductManager() {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(products);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setProducts(items);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* 搜索和操作栏 */}
      <Card className="border-0 shadow-sm bg-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between space-x-4">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="搜索商品名称或分类..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Button className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              添加商品
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 商品列表 */}
      <Card className="border-0 shadow-sm bg-white">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900 flex items-center">
            <Package className="h-5 w-5 mr-2 text-blue-600" />
            商品列表 (支持拖拽排序)
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="products">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} className="divide-y divide-gray-100">
                  {filteredProducts.map((product, index) => (
                    <Draggable key={product.id} draggableId={product.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`p-6 hover:bg-gray-50/50 transition-all cursor-move ${
                            snapshot.isDragging ? "shadow-lg bg-white border border-blue-200" : ""
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <div className="flex items-center space-x-2">
                                  <h3 className="font-medium text-gray-900">{product.name}</h3>
                                  <Badge 
                                    variant="outline"
                                    className={`
                                      ${product.status === "热销" ? "border-red-300 text-red-700 bg-red-50" : ""}
                                      ${product.status === "畅销" ? "border-green-300 text-green-700 bg-green-50" : ""}
                                      ${product.status === "缺货" ? "border-yellow-300 text-yellow-700 bg-yellow-50" : ""}
                                    `}
                                  >
                                    {product.status}
                                  </Badge>
                                </div>
                                <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                                  <span>分类: {product.category}</span>
                                  <span>库存: {product.stock}</span>
                                  <div className="flex items-center">
                                    <span>销量: {product.sales}</span>
                                    {product.trend === "up" ? (
                                      <TrendingUp className="h-3 w-3 ml-1 text-green-600" />
                                    ) : (
                                      <TrendingDown className="h-3 w-3 ml-1 text-red-600" />
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-4">
                              <div className="text-right">
                                <p className="text-lg font-semibold text-gray-900">{product.price}</p>
                                <p className="text-sm text-gray-500">单价</p>
                              </div>
                              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-600">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </CardContent>
      </Card>
    </div>
  );
}