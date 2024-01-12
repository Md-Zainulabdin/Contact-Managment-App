"use client";
import { Button } from "@/components/ui/button";
import { baseUrl } from "@/constants";
import axios from "axios";

const Logout: React.FC = () => {
  const logout = async () => {
    const response = await axios.post(`${baseUrl}/auth/logout`);
    document.cookie = `auth_token=""`
    console.log(response);
  };
  return (
    <Button size={"sm"} variant={"outline"} onClick={() => logout()}>
      Logout
    </Button>
  );
};

export default Logout;
