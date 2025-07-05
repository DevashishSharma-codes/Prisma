"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ShoppingCart, Search, User } from "lucide-react";
import { useStore } from "@/store/store";

export function Header() {
  const cart = useStore((store) => store.cart);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link href="/" className="font-bold text-lg">
            Gourmet
          </Link>
          <nav className="flex items-center space-x-6">
            <Link href="/menu" className="text-sm font-medium">
              Menu
            </Link>
            <Link href="/about" className="text-sm font-medium">
              About
            </Link>
            <Link href="/admin/menu/create" className="text-sm font-medium">
              Admin
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search menu..."
              className="pl-10 w-[200px] md:w-[300px]"
            />
          </div>
          <Link href="/cart" className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <h1>{cart.length}</h1>
            </Button>
          </Link>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
