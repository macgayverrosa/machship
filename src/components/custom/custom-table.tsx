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
  addFunc?: any;
}

export default async function CustomTable({
  tool,
  columns,
  filterBy,
  addFunc,
}: CustomTableProps) {

  let addPath;
  { addFunc == 'y' ? addPath = `/test/add` : addPath = `` }

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
        <DataTable
          // data={data}
          data={""}
          columns={columns}
          buttonAddPath={addPath}
          filterBy={filterBy}
          tool={tool}
        />
      </div>
    </div>
  );
}
