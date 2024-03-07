import { deserialiseUser } from "@/server/auth-middleware";
import { inferAsyncReturnType } from "@trpc/server";

export const createContext = async () => deserialiseUser()
export type Context = inferAsyncReturnType<typeof createContext>