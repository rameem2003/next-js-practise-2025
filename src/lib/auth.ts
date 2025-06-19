import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginValidator, password } from "./validators";
import { dataBaseConnect } from "./db";
import user from "@/models/user.model";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },

      async authorize(credentials, req) {
        const { data, error } = loginValidator.safeParse({
          email: credentials?.email,
          password: credentials?.password,
        });

        if (error) {
          throw new Error(error.errors[0].message);
        }

        try {
          await dataBaseConnect();

          let exist = await user.findOne({ email: data.email });

          if (!exist) {
            throw new Error("User does not exist");
          }

          const isValidPassword = bcrypt.compareSync(
            data.password,
            exist.password
          );

          if (!isValidPassword) {
            throw new Error("Invalid password");
          }

          return { id: exist._id.toString(), email: exist.email };
        } catch (error) {
          throw error;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
};
