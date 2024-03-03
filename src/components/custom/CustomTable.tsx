import { promises as fs } from "fs";
import path from "path";
// import Image from "next/image"
import { z } from "zod";
import { DataTable } from "../data-table/data-table";
// import { UserNav } from "@/components/layout/NavUser"
import { taskSchema } from "../../app/devs/data/schema";
import { Button } from "../ui/button";
import { ArrowLeftCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/app/devs/data/tasks.json")
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

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
  const data = await getTasks();

  const addPath = `/${tool}/add`;
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
        {/* <DataTable data={tasks} columns={columns} /> */}

        <DataTable
          data={data}
          columns={columns}
          buttonAddPath={addPath}
          buttonAddName={nameButton}
          filterBy={filterBy}
        />
      </div>
    </div>
  );
}
