import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const cookie = cookies();
  
  if (cookie.get("auth_token")) {
    console.log(cookie.get("auth_token"));
    
    redirect("/contacts");
  }

  return <div>{children}</div>;
};

export default AuthLayout;
