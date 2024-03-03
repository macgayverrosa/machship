"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import FormBody from "@/components/forms/layout/form-body";
import FormHeader from "@/components/forms/layout/form-header";
import usePathToolName from "@/hooks/usePathToolName";
import { z } from "zod";

interface CreateProps {
  ToolForm: any;
  iniValue: any;
  setValues: any;
  itemSchema: any;
}

const PageCreate = ({
  ToolForm,
  iniValue,
  setValues,
  itemSchema,
}: CreateProps) => {
  const tool = usePathToolName();
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
    <>
      <FormHeader tool={tool} />
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
    </>
  );
};

export default PageCreate;