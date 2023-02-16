import React, { PropsWithChildren } from "react";
import { useCookies } from "react-cookie";
import Unauthorized from "./Unauthorized";

const ProtectedSeller: React.FC<PropsWithChildren> = ({ children }) => {
  const [cookie] = useCookies(["token", "user", "role"]);
  return cookie.role === "[ROLE_SELLER]" ? (
    <div>{children}</div>
  ) : (
    <Unauthorized />
  );
};

export default ProtectedSeller;
