"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { DataTableViewOptions } from "./data-table-view-options";
import Link from "next/link";
import { priorities, statuses } from "@/app/devs/data/data";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { buttonVariants } from "../ui/button";
import { PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import CustomModalAdd from "../custom/custom-modal-add";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  buttonAddPath?: string;
  buttonAddName?: string;
  filterBy: string;
  tool: any;
}

export function DataTableToolbar<TData>({
  table,
  buttonAddPath,
  buttonAddName,
  filterBy,
  tool,
}: DataTableToolbarProps<TData>) {
  // const isFiltered =
  //   table.getPreFilteredRowModel().rows.length >
  //   table.getFilteredRowModel().rows.length

  const toolName = filterBy.replaceAll("_", " ");
  const placeH = `Filter by ${toolName}...`;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder={placeH}
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {/* {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={statuses}
          />
        )}
        {table.getColumn("priority") && (
          <DataTableFacetedFilter
            column={table.getColumn("priority")}
            title="Priority"
            options={priorities}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )} */}
      </div>
      <DataTableViewOptions table={table} />
      {buttonAddPath ? (
        <CustomModalAdd tool={tool} />
      ) : (
        ""
      )}
    </div>
  );
}
