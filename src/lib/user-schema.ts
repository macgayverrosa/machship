import { object, string, TypeOf } from "zod";

export const createUserSchema = object({
  name: string({ required_error: "Name is required" })
    .min( 2, "Min 2 letters for the Name"),
  email: string({ required_error: "Email is required" })
    .min( 2, "Min 2 letters for the Email" )
    .email("Invalid email"),
  password: string({ required_error: "Password is required" })
    .min( 8, "Must be more than 8 characters" )
    .max( 32, "Must be less than 32 characters"),
  passwordConfirm: string({ required_error: 'Please confirm your password'})
    .min(1,'Please confirm your password')
}).refine((data) => data.password === data.passwordConfirm, {
  path: ['passwordConfirm'],
  message: 'Passwords do not match',
});

export const loginUserSchema = object ({
  email: string({ required_error: "Email is required" })
    .min( 2, "Min 2 letters for the Email" )
    .email("Invalid email"),
  password: string({ required_error: "Password is required" })
    .min( 1, "Password is required" ),  
})

export type CreateUserSchema = TypeOf<typeof createUserSchema>;
export type LoginUserSchema = TypeOf<typeof loginUserSchema>;