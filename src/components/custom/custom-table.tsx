"use client";

import { DataTable } from "../data-table/data-table";
import { useEffect, useState } from "react";
import { ArrowLeftCircle } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import callApiService from "@/services/apiService";
import { ItemSchema } from "@/app/devs/data/schema";

interface CustomTableProps {
  tool: any;
  columns: any;
  filterBy?: any;
  addFunc?: any;
  // data: any;
}

export default function CustomTable({
  tool,
  columns,
  filterBy,
  addFunc,
}: // data
CustomTableProps) {
  // interface IUserProfileResponse {
  //   response: {
  //     meta: Meta;
  //     data: IUserProfileResponseData;
  //   };
  // }

  // const [data, setData] = useState(null);
  // const [isLoading, setLoading] = useState(true);

  // useEffect(() => {
  //   async function fetch() {
  //     try {
  //       const response = await makeApiCallService<ItemSchema>(
  //         "/api/devs",
  //         {
  //           method: "GET",
  //         }
  //       );
  //       setData(response)
  //       // setUserProfile(response as IUserProfileResponse);
  //       setLoading(false);
  //     } catch (err) {
  //       setLoading(false);
  //     }
  //   }
  //   fetch();
  // }, []);

  const router = useRouter();
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function fetch() {
      try {
        const response:any = await callApiService("/api/devs", { method: "GET" });
        setData(response);
      } catch (error) {
        setLoading(false);
      }
    }
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  // const router = useRouter();
  // const [data, setData] = useState(null);
  // const [isLoading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch(`/api/devs`)
  //   // fetch(`/api/${tool}`)
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

  console.log(data)

  return (
    <div className="grid gap-4">
      <div className="hidden h-full flex-1 flex-col space-y-8 pt-5 md:flex">
        {/* <DataTable
          data={data}
          columns={columns}
          addFunc={addFunc}
          filterBy={filterBy}
          tool={tool}
        /> */}
      </div>
    </div>
  );
}
