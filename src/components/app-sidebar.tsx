"use client";
import { ChevronRight, CornerDownRight } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { SideBarHeader } from "./ui/sidebar-header";

const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Asia Pacific",
      url: "#",
      items: [
        {
          title: "Afghanistan",
          url: "#",
        },
        {
          title: "Australia",
          url: "#",
        },
        {
          title: "Bangladesh",
          url: "#",
        },
      ],
    },
    {
      title: "Americas",
      url: "#",
      items: [
        {
          title: "Argentina",
          url: "#",
        },
        {
          title: "Barbados",
          url: "#",
          isActive: false,
        },
        {
          title: "Bolivia",
          url: "#",
        },
      ],
    },
    {
      title: "Europe",
      url: "#",
      items: [
        {
          title: "Albania",
          url: "#",
        },
        {
          title: "Andorra",
          url: "#",
        },
        {
          title: "Armenia",
          url: "#",
        },
        {
          title: "Austria",
          url: "#",
        },
        {
          title: "Azerbaijan",
          url: "#",
        },
        {
          title: "Belarus",
          url: "#",
        },
      ],
    },
    {
      title: "Middle East & Africa",
      url: "#",
      items: [
        {
          title: "Algeria",
          url: "#",
        },
        {
          title: "Bahrain",
          url: "#",
        },
        {
          title: "Benin",
          url: "#",
        },
        {
          title: "Botswana",
          url: "#",
        },
        {
          title: "Burkina Faso",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader style={{ backgroundColor: "white" }}>
        <SideBarHeader />
      </SidebarHeader>
      <SidebarContent className="gap-0" style={{ backgroundColor: "#037EF2" }}>
        {data.navMain.map((item) => (
          <Collapsible
            key={item.title}
            title={item.title}
            defaultOpen={false}
            className="group/collapsible"
          >
            <SidebarGroup>
              <SidebarGroupLabel
                asChild
                className="group/label text-sm text-white hover:bg-white hover:text-blue-500 transition-colors duration-200"
              >
                <CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-2">
                  {item.title}{" "}
                  <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent
                className={cn(
                  "text-popover-foreground outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 "
                )}
              >
                <SidebarGroupContent>
                  <SidebarMenu>
                    {item.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          isActive={item.isActive}
                          className="text-white hover:bg-white hover:text-blue-500 transition-colors duration-200"
                        >
                          <a href={item.url}>
                            <div style={{ width: "16px", height: "16px" }} />
                            {item.title}
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
