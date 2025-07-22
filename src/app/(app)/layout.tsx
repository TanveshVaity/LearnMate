import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="pt-16 h-screen overflow-y-auto">
        <SidebarTrigger className="lg:hidden" /> 
        {children}
      </div>
    </SidebarProvider>
  );
}