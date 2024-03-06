"use client";

import { Eye, Pencil, Trash } from "lucide-react";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Row } from "@tanstack/react-table";
import routes from "@/config/routes";

interface ActionsProps<TData> {
  row: Row<TData>;
}

export default function Actions<TData>({ row }: ActionsProps<TData>) {
  const hrefEdit = ""; //routes.EMPLOYEES_EDIT + row.getValue('_id')
  const hrefDelete = ""; //routes.EMPLOYEES_DELETE + row.getValue('_id')

  return (
    <DropdownMenuContent align="end" className="w-[160px]">
      {/* <DropdownMenuItem>
        <Eye className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
        View
      </DropdownMenuItem> */}
      {/* <DropdownMenuSeparator /> */}

      <Link href={hrefEdit}>
        <DropdownMenuItem>
          <Pencil className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
          Edit
        </DropdownMenuItem>
      </Link>
      <Link href={hrefDelete}>
        <DropdownMenuItem>
          <Trash className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
          Delete
        </DropdownMenuItem>
      </Link>
    </DropdownMenuContent>
  );
}
