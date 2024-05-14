import { object, string } from "zod";

const userLoginSchema = object({
  email: string({ required_error: "email is required" }).email(),

  password: string({ required_error: "password is required" })
    .min(6, "username must be at least 6 characters")
    .max(20, "user accept maximum 20 characters"),
});

export default userLoginSchema;
