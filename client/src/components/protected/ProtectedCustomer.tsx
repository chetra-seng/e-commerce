import React, { PropsWithChildren } from "react";
import { useCookies } from "react-cookie";
import Login from "../../pages/Login";
import Unauthorized from "./Unauthorized";

const ProtectedCustomer: React.FC<PropsWithChildren> = ({ children }) => {
  const [cookie] = useCookies(["token", "user", "role"]);

  if (cookie.role === undefined) {
    return <Login />;
  }

  return cookie.role === "[ROLE_USER]" ? (
    <>{children}</>
  ) : cookie.role === "[ROLE_SELLER]" ? (
    <Unauthorized />
  ) : (
    <></>
  );
};

export default ProtectedCustomer;
