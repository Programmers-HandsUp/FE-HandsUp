"use client";
import { useForm } from "react-hook-form";

if (process.env.NODE_ENV === "development") {
  import("@/utils/mockServer");
}
interface AuthType {
  email: string;
  password: string;
}

export default function Home() {
  const { register, handleSubmit } = useForm<AuthType>();
  const onLogin = async (formData: AuthType) => {
    await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };
  return (
    <main className="">
      <form onSubmit={handleSubmit(onLogin)}>
        <input type="email" {...register("email", { required: true })} />
        <input type="password" {...register("password", { required: true })} />
        <input type="submit" />
      </form>
    </main>
  );
}
