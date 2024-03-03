"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormInputProps {
  form: any;
  name: string;
  act: string;
  items: any;
}

const FormComboBox = ({ form, name, act, items }: FormInputProps) => {
  const captalize = name.charAt(0).toUpperCase() + name.slice(1);
  const label = captalize.replaceAll("_", " ");

  function functionInput({ field }: { field:any }) {
    if (act === "Delete")
      return (
        <Button
          variant="outline"
          role="combobox"
          disabled
          className={cn(
            "w-full justify-between",
            !field.value && "text-muted-foreground"
          )}
        >
          {field.value
            ? items.find((item:any) => item.value === field.value)?.label
            : `Please one option`}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      );
    else
      return (
        <Button
          variant="outline"
          role="combobox"
          className={cn(
            "w-full justify-between",
            !field.value && "text-muted-foreground"
          )}
        >
          {field.value
            ? items.find((item:any) => item.value === field.value)?.label
            : `Select one option`}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
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
                <FormControl>{functionInput({ field:field })}</FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search..." />
                  <CommandEmpty>No item found.</CommandEmpty>
                  <CommandGroup>
                    {items.map((item:any) => (
                      <CommandItem
                        value={item.value}
                        key={item.value}
                        onSelect={(value) => {
                          form.setValue(name, value);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            item.value === field.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {item.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
            {/* <FormDescription>
            This is the language that will be used in the dashboard.
          </FormDescription> */}
            <FormMessage />
          </FormItem>
        </div>
      )}
    />
  );
};

export default FormComboBox;