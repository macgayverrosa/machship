"use client";

import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface FormInputProps {
  form: any;
  name: string;
  act: string;
}

const FormDatePicker = ({ form, name, act }: FormInputProps) => {
  const captalize = name.charAt(0).toUpperCase() + name.slice(1);
  const label = captalize.replaceAll("_", " ");

  function functionInput({ field }: { field: any }) {
    if (act === "Delete")
      return (
        <Button
          variant={"outline"}
          disabled
          className={cn(
            "w-[240px] pl-3 text-left font-normal",
            !field.value && "text-muted-foreground"
          )}
        >
          {field.value ? (
            format(new Date(field.value), "PPP")
          ) : (
            <span>Pick a date</span>
          )}
          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      );
    else
      return (
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] pl-3 text-left font-normal",
            !field.value && "text-muted-foreground"
          )}
        >
          {field.value ? (
            format(new Date(field.value), "PPP")
          ) : (
            <span>Pick a date</span>
          )}
          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      );
  }

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <div className="w-1/2 p-2">
          <FormItem className="w-full">
            {/* <FormItem className="flex flex-col"> */}
            <FormLabel>{label}</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>{functionInput({ field })}</FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={(date) =>
                    date > new Date() || date < new Date("1900-01-01")
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            {/* <FormDescription>
            Your date of birth is used to calculate your age.
          </FormDescription> */}
            <FormMessage />
          </FormItem>
        </div>
      )}
    />
  );
};

export default FormDatePicker;