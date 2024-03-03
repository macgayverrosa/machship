"use client";

import { DataTable } from "../data-table/data-table";
import { useEffect, useState } from "react";
import { ArrowLeftCircle } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface CustomTableProps {
  tool: any;
  columns: any;
  filterBy: any;
}


export default async function CustomTable({
  tool,
  columns,
  filterBy,
}: CustomTableProps) {
  const addPath = `/${tool}/func/add`;
  const nameButton = tool.slice(0, -1);
  // const router = useRouter();
  // const [data, setData] = useState(null);
  // const [isLoading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch(`/api/${tool}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       setLoading(false);
  //     });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // if (isLoading || !data)
  //   return (
  //     <div className="flex items-center space-x-4">
  //       <h3>Loading...</h3> <br />
  //       <Skeleton className="h-12 w-12 rounded-full" />
  //       <div className="space-y-2">
  //         <Skeleton className="h-4 w-[250px]" />
  //         <Skeleton className="h-4 w-[200px]" />
  //       </div>
  //     </div>
  //   );

  return (
    <div className="grid gap-4">
      <div className="hidden h-full flex-1 flex-col space-y-8 pt-5 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight capitalize">
              {tool} Datatable
            </h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of all your {tool}!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            {/* <Button variant={"ghost"} onClick={() => router.back()}>
              <ArrowLeftCircle className="mr-1 h-4 w-4" /> Return
            </Button> */}
          </div>
        </div>

        <DataTable
          // data={data}
          data={""}
          columns={columns}
          buttonAddPath={addPath}
          buttonAddName={nameButton}
          filterBy={filterBy}
        />
      </div>
    </div>
  );
}
