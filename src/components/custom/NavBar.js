"use client";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

import { navBar } from "@/resources/content"

export default function NavBar() {

    return (
        <>
            <div className="max-sm:hidden w-full h-auto bg-blue-950 text-gray-100">
                <NavigationMenu className="p-3">
                    <NavigationMenuList>
                        {navBar.map((item, index) => (
                            <NavigationMenuItem key={index}>
                                {item.children ? (
                                    <>
                                        <NavigationMenuTrigger className="text-base font-medium bg-blue-950">
                                                {item.name}
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent as="div">
                                            <ul className="grid w-[400px] gap-3 p-2 md:w-[600px] md:grid-cols-2 lg:w-[800px]">
                                                {item.children.map((child, childIndex) => (
                                                    <li key={childIndex}>
                                                        <NavigationMenuLink href={item.path + child.path} asChild>
                                                            <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                                {child.name}
                                                            </a>
                                                        </NavigationMenuLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </>
                                ) : (
                                    <NavigationMenuLink href={item.path} className="text-base font-medium">{item.name}</NavigationMenuLink>
                                )}
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <Sheet side="left">
                <SheetTrigger side="left" className={cn("sm:hidden p-4 cursor-pointer w-full bg-blue-950 text-gray-100 flex")}>
                    <Menu className="h-6 w-6" />
                    <p className="text-center top-0 w-full mx-2">โรงเรียนกาญจนาภิเษกวิทยาลัย สุพรรณบุรี</p>
                </SheetTrigger>
                <SheetContent side="left" className="border-none text-gray-100">
                    <SheetHeader className="p-0">
                        <SheetTitle className="bg-blue-950 p-4 text-gray-100">โรงเรียนกาญจนาภิเษกวิทยาลัย สุพรรณบุรี</SheetTitle>
                        <ul className="p-3">
                            {navBar.map((item, index) => (
                                <li key={index}>
                                    <SheetDescription>
                                        <a href={item.path} className="block py-4 px-4 hover:bg-blue-950 rounded text-black hover:text-gray-100">{item.name}</a>
                                    </SheetDescription>
                                </li>
                            ))}
                        </ul>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </>
    );
}