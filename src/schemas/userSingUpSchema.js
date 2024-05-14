import { object, string } from "zod";

const userSingUpSchema = object({
  username: string({ message: "username is required." })
    .min(4, "username must be at least 4 characters")
    .max(8, "user accept maximum 8 characters"),

  email: string({ required_error: "email is required" }).email(
    "The valid email is required"
  ),

  password: string({ required_error: "password is required" })
    .min(6, "password must be at least 6 characters")
    .max(20, "user accept maximum 20 characters"),
});

export default userSingUpSchema;
