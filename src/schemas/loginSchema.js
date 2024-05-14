import { object, string } from "zod";

const userLoginSchema = object({
  email: z.email("The valid email is required"),

  password: string({ required_error: "password is required" })
    .min(6, "username must be at least 6 characters")
    .max(20, "user accept maximum 20 characters"),
});

export default userLoginSchema;
