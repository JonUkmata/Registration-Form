"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { registerSchema, RegisterFormData } from "@/schemas/register-schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RegistrationForm() {

  const form = useForm<RegisterFormData>({
  resolver: zodResolver(registerSchema),
});

const register = form.register;
const handleSubmit = form.handleSubmit;
const formState = form.formState;
const errors = formState.errors;

function onSubmit(data: RegisterFormData) {
  console.log(data);
}

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-80 space-y-3 bg-white p-6 rounded-xl shadow"
    >
      <Input placeholder="Full Name" {...register("fullName")} />
      {errors.fullName && (
        <p className="text-sm text-red-500">{errors.fullName.message}</p>
      )}

      <Input type="email" placeholder="Email" {...register("email")} />
      {errors.email && (
        <p className="text-sm text-red-500">{errors.email.message}</p>
      )}

      <Input type="password" placeholder="Password" {...register("password")} />
      {errors.password && (
        <p className="text-sm text-red-500">{errors.password.message}</p>
      )}

      <Input
        type="password"
        placeholder="Confirm Password"
        {...register("confirmPassword")}
      />
      {errors.confirmPassword && (
        <p className="text-sm text-red-500">
          {errors.confirmPassword.message}
        </p>
      )}

      <Button type="submit" className="w-full">
        Register
      </Button>
    </form>
  );
}
