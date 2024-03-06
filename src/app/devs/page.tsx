import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CustomTable from "../../components/custom/custom-table";
import { columns } from "./components/tableColumns";
import CustomDashboard from "@/components/custom/custom-dashboard";
import { LayoutDashboard, LayoutList } from "lucide-react";
import useGetElement from "@/hooks/useGetTool";
import { CalendarDateRangePicker } from "@/components/data-range-picker";





export default function DevsPage() {
  const tool = useGetElement({ name: "devs" });

  return (
    <div className="container relative pt-10">
      <section>
        <div className="hidden flex-col md:flex">
          <div className="border-b">
            <div className="flex h-16 items-center px-4">
              {/* <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div> */}
            </div>
          </div>
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight capitalize">
                {tool?.name} Management
              </h2>
              <div className="flex items-center space-x-2">
                {/* <Button>Download</Button> */}
                <CalendarDateRangePicker />
              </div>
            </div>
            <Tabs defaultValue="table" className="space-y-4">
              <TabsList>
                <TabsTrigger value="overview">
                  <LayoutDashboard className="mr-2 h-5 w-5 text-muted-foreground" />{" "}
                  Overview
                </TabsTrigger>
                <TabsTrigger value="table">
                  <LayoutList className="mr-2 h-5 w-5 text-muted-foreground" />{" "}
                  Table
                </TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <CustomDashboard />
              </TabsContent>

              <TabsContent value="table" className="space-y-4">
                <CustomTable
                  tool={tool?.name}
                  columns={columns}
                  filterBy="name"
                  addFunc="y"
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
}
