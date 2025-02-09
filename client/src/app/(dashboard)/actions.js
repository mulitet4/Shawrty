// FILE: actions.js
"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function handleLogout() {
  cookies().delete("theme");
  redirect("/login"); // Add redirect after logout
}
