import { z } from "zod";

export const email = z
  .string()
  .trim()
  .email({ message: "Invalid email" })
  .max(100, { message: "Email must be less than 100 characters" });
export const password = z
  .string()
  .min(6, { message: "Password must be at least 6 characters" })
  .max(12, { message: "Password must be less than 12 characters" });

export const loginValidator = z.object({
  email,
  password,
});
