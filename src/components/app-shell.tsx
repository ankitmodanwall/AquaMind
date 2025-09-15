"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  BookCheck,
  Library,
  MessageSquare,
  Droplets,
} from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/quiz", label: "Quiz", icon: BookCheck },
  { href: "/resources", label: "Resources", icon: Library },
  { href: "/community", label: "Community", icon: MessageSquare },
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const isWelcomePage = pathname === '/';

  if (isWelcomePage) {
    return <main className="flex-1 p-4">{children}</main>;
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar>
          <SidebarHeader className="border-b">
            <Link href="/" className="flex items-center gap-2 p-2" aria-label="Home">
                <Button variant="ghost" size="icon" className="shrink-0 text-primary hover:bg-primary/10">
                    <Droplets className="h-6 w-6" />
                </Button>
                <h1 className="text-xl font-bold font-headline tracking-tight text-foreground">
                    AquaMind
                </h1>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    as={Link}
                    href={item.href}
                    isActive={pathname.startsWith(item.href) && (item.href !== '/' || pathname === '/')}
                    tooltip={item.label}
                    className="text-base"
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="flex-row items-center border-t p-2">
            <ThemeToggle />
            <div className="flex-1" />
            <SidebarTrigger />
          </SidebarFooter>
        </Sidebar>
        <SidebarInset className="flex-1 p-4 sm:p-6">{children}</SidebarInset>
      </div>
    </SidebarProvider>
  );
}
