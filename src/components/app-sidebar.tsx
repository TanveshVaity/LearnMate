import { LayoutDashboard, FileText, Layers, ListChecks } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Summaries",
        url: "/summaries",
        icon: FileText,
    },
    {
        title: "Flashcards",
        url: "/flashcards",
        icon: Layers,
    },
    {
        title: "Quizzes",
        url: "/quizzes",
        icon: ListChecks,
    },
]

export function AppSidebar() {
    return (
        <Sidebar className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 z-40 bg-white dark:bg-gray-900 shadow">
            <SidebarContent className="overflow-y-auto h-full">
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title} className="my-1">
                                    <SidebarMenuButton asChild>
                                        <a href={item.url} className="flex items-center gap-2 px-3 py-2">
                                            <item.icon className="w-4 h-4" />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}