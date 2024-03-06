import { ZodType, z } from "zod";

export type FormProps = {
  name: string,
  fullname: string,
  title: string,
  team: string,
  country: string,
  email: string,
  start_date: Date,
  status: string,
}

export const itemSchema: ZodType<FormProps> = z.object({
  name: z.string(),
  fullname: z.string(),
  title: z.string(),
  team: z.string(),
  country: z.string(),
  email: z.string().email(),
  start_date: z.date(),
  status: z.string(),
});

export const iniValue = {
  name: "",
  fullname: "",
  title: "",
  team: "",
  country: "",
  email: "",
  start_date: "",
  status: "",
};

export function setValues({ item }: { item: any }) {
  const setArray = {
    name: item.name,
    email: item.email,
    start_date: item.start_date,
    status: item.status,
  };
  return setArray;
}

export type ItemSchema = z.infer<typeof itemSchema>;