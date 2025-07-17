// app/admin/dashboard/layout.tsx

import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* 你可以在這裡加上 sidebar、navbar 等統一外觀 */}
      <main>{children}</main>
    </div>
  );
}

