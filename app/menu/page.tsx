import { MenuItem } from "@/components/menu/item";
import { prisma } from "@/lib/prisma";

export type Item = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};
 

export default async function MenuPage() {
  const menuItems = await prisma.menuItem.findMany({
    orderBy: {
      name: "desc",
    },
  }); 
  
  return (
    <div className="container mx-auto py-8">
      <div className="gap-4 mb-8">
        <h1 className="text-3xl font-bold">Our Menu</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item: Item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
