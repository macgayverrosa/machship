"use client";

import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import FormBody from "@/components/forms/layout/form-body";
import FormHeader from "@/components/forms/layout/form-header";
import usePathToolName from "@/hooks/usePathToolName";
import { z } from "zod";

import ToolForm from "@/app/devs/data/form";
import { itemSchema, iniValue, setValues } from "@/app/devs/data/schema";
import { Plus } from "lucide-react";

export interface CustomModalAddProps {
  actionTitle?: string;
  actionIcon?: any;
  tool: any;
}

export default function CustomModalAdd({
  actionTitle,
  actionIcon,
  tool,
}: CustomModalAddProps) {
  // const tool = usePathToolName();
  const router = useRouter();
  const [item, setItem] = useState(iniValue);
  const [submitting, setIsSubmitting] = useState(false);
  const act = "Add";
  type ItemSchema = z.infer<typeof itemSchema>;

  async function createItem(values: ItemSchema) {
    // console.log(values);
    setIsSubmitting(true);
    try {
      const response = await fetch(`/api/${tool}`, {
        method: "POST",
        body: JSON.stringify(setValues({ item: values })),
      });
      if (response.ok) router.push(`/${tool}`);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="hidden h-10 lg:flex ml-3">
          <Plus className="mr-2 h-5 w-5" /> Add {tool}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        {/* <DialogHeader>
          <DialogTitle className="capitalize text-3xl font-bold">
            Add {tool}
          </DialogTitle>
          <DialogDescription className="capitalize text-md">
            {tool} Management
          </DialogDescription>
        </DialogHeader> */}
        {/* <div className="grid gap-4 py-4">
        </div> */}

        <DialogClose asChild>
          <FormBody
            tool={tool}
            act={act}
            form={
              <ToolForm
                funcSubmit={createItem}
                item={item}
                tool={tool}
                act={act}
                submitting={submitting}
              />
            }
          />

          {/* <Button type="submit">Save changes222</Button> */}
        </DialogClose>

        <DialogFooter>
          {actionTitle ? (
            <Button type="submit">{actionIcon} Save changes</Button>
          ) : (
            ""
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
