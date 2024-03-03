"use client";

import React from "react";
import { ItemSchema, itemSchema } from "./schema";
import FormInput from "@/components/forms/form-Input";
import FormFooter from "@/components/forms/layout/form-footer";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormDatePicker from "@/components/forms/form-datapicker";
import FormComboBox from "@/components/forms/form-combobox";

interface ToolFormProps {
  act: string;
  funcSubmit: any;
  item: any;
  submitting: boolean;
  tool: string;
}

const ToolForm = ({
  act,
  funcSubmit,
  item,
  submitting,
  tool,
}: ToolFormProps) => {
  const form = useForm<ItemSchema>({
    resolver: zodResolver(itemSchema),
    defaultValues: item,
  });

  const items = [
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
  ] as const;
  


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(funcSubmit)} className="space-y-8">
        <div className="flex flex-nowrap">
          <FormInput name="name" form={form} act={act} type="text" />
          <FormInput name="email" form={form} act={act} type="email" />
        </div>
        <div className="flex flex-nowrap">
          <FormComboBox name="status" form={form} act={act} items={items} />
          <FormDatePicker name="start_date" form={form} act={act} />
        </div>

        <FormFooter act={act} submitting={submitting} tool={tool} />
      </form>
    </Form>
  );
};

export default ToolForm;