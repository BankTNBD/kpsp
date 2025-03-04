"use server";

import { redirect } from "next/navigation";
import { createSession, deleteSession } from "@/lib/session";

export async function login(formData) {
  const pass = formData.get("password");

  if (pass === process.env.ADMIN_PASS) {
    
    await createSession();
    await redirect("/admin");
  } else {
    return { message: "Wrong Password" };
  }
}

export async function logout() {
    deleteSession()
    redirect('/login')
  }