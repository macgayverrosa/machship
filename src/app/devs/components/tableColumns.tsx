"use client"

//import { Badge } from "@/components/ui/badge"


// UPDATE THOSE FIELDS
//import { labels, priorities, statuses } from "@/app/devs/data/data"
//import { Task } from "@/app/devs/data/schema"


import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { ItemSchema } from "../data/schema"
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header"
import { DataTableRowActions } from "@/components/data-table/data-table-row-actions"
import Actions from "./tableActions"
import format from "date-fns/format"


export const columns: ColumnDef<ItemSchema>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={table.getIsAllPageRowsSelected()}
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },

  {
    id: "actions",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Options" />
    ),    
    cell: ({ row }) => <DataTableRowActions row={row} actions={Actions({row})} />,
  },

  // {
  //   id: "actions",
  //   cell: ({ row }) => <DataTableRowActions row={row} />,
  // },


  {
    accessorKey: "_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" className="hidden" />
    ),
    cell: ({ row }) => <div className="hidden">{row.getValue("_id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },


  {
    accessorKey: "address",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Address" />
    ),
  },
  {
    accessorKey: "phone",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Phone" />
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
  },
  // {
  //   accessorKey: "start_date",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Date" />
  //   ),
  //   cell: ({ row }) => <div className="">{format(new Date(row.getValue("start_date")), "PPP")}</div>,
  // },  
  {
    accessorKey: "business_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Business ID" />
    ),
  },
]