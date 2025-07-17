"use client";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [user, setUser] = useState("");
  const [pw, setPw] = useState("");
  const router = useRouter();

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      username: user,
      password: pw,
    });
    if (result?.ok) {
      router.push("/admin/dashboard");
    } else {
      alert("登入失敗");
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <h1>後台登入</h1>
      <label>帳號：<input value={user} onChange={e => setUser(e.target.value)} /></label>
      <label>密碼：<input type="password" value={pw} onChange={e => setPw(e.target.value)} /></label>
      <button type="submit">送出</button>
    </form>
  );
}

