"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface FormInputProps {
  form: any;
  name: string;
  act: string;
  type: string;
}

const FormInput = ({ form, name, act, type }: FormInputProps) => {
  const captalize = name.charAt(0).toUpperCase() + name.slice(1);
  const label = captalize.replaceAll("_", " ");
  const placeHolder = `Please type the ${label}...`;

  function functionInput({ field }: { field: any }) {
    if (act === "Delete")
      return <Input placeholder={placeHolder} disabled {...field} />;
    else return <Input placeholder={placeHolder} type={type} {...field} />;
  }

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <div className="w-1/2 p-2">
          <FormItem className="w-full">
            <FormLabel>{label}</FormLabel>
            <FormControl>
              {functionInput({ field })}
              {/* <Input placeholder={placeHolder} {...field} /> */}
            </FormControl>
            <FormMessage />
          </FormItem>
        </div>
      )}
    />
  );
};

export default FormInput;