import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <SidebarProvider>
        <AppSidebar />
        {children}
      </SidebarProvider>
    </section>
  );
}
