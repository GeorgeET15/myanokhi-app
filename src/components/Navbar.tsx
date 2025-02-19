"use client";

import * as React from "react";
import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-black shadow-lg">
      {/* Left: Logo */}
      <Link href="/" passHref>
        <img
          src="https://myanokhi.in/cdn/shop/files/anokhi_logo.jpg?v=1673852099&width=500"
          alt="Brand Logo"
          className="h-16 w-auto cursor-pointer"
        />
      </Link>

      {/* Center: Menu */}
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-6 text-white">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white hover:text-yellow-500 transition-colors bg-black">
              Collection
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid grid-cols-3 gap-4 p-4 w-[500px] bg-white rounded-lg shadow-md">
                {[
                  "Dresses",
                  "Kurta Sets",
                  "Kurtis",
                  "Mens Shirts",
                  "Tops",
                  "Pants",
                  "Jackets",
                  "Jashn",
                  "Noor",
                  "Dhara",
                  "Kaarigari",
                  "Gul",
                ].map((item) => (
                  <ListItem
                    key={item}
                    href={`/collection/${item.toLowerCase().replace(" ", "-")}`}
                    title={item}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavItem href="/new-arrivals" title="New Arrivals" />
          <NavItem href="/kurtas" title="Kurtas" />
          <NavItem href="/kurta-sets" title="Kurta Sets" />
          <NavItem href="/festive-edits" title="Festive Edits" />
          <NavItem href="/dresses" title="Dresses" />
          <NavItem href="/about-us" title="About Us" />
          <NavItem href="/sale" title="Sale" />
        </NavigationMenuList>
      </NavigationMenu>

      {/* Right: Icons */}
      <div className="flex space-x-6">
        <button className="p-2 text-white hover:text-yellow-500 transition-all">
          <Search className="w-6 h-6" />
        </button>
        <button className="p-2 text-white hover:text-yellow-500 transition-all">
          <ShoppingCart className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}

// Reusable Menu Item Component
const NavItem = ({ href, title }: { href: string; title: string }) => (
  <NavigationMenuItem>
    <Link href={href} legacyBehavior passHref>
      <NavigationMenuLink className="text-white px-4 py-2 rounded-md hover:text-yellow-500 transition-all">
        {title}
      </NavigationMenuLink>
    </Link>
  </NavigationMenuItem>
);

// Reusable List Item Component for Dropdown
const ListItem = ({ href, title }: { href: string; title: string }) => (
  <li>
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className="block p-2 text-gray-700 hover:text-yellow-500 rounded-md transition-all"
      >
        {title}
      </Link>
    </NavigationMenuLink>
  </li>
);
