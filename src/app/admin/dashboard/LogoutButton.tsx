'use client';

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/admin/login" })}
      style={{
        marginTop: "1rem",
        padding: "0.5rem 1rem",
        backgroundColor: "#cc3333",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      登出
    </button>
  );
}

