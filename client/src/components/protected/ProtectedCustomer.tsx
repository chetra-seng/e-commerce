import React, { PropsWithChildren, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Login from "../../pages/Login";
import Unauthorized from "./Unauthorized";

const ProtectedCustomer: React.FC<PropsWithChildren> = ({ children }) => {
  const [cookie] = useCookies(["token", "user", "role"]);
  const navigate = useNavigate()

  if (cookie.role === undefined) {
    return <Login/>
  }
    
  return (
      cookie.role === "[ROLE_USER]" ? (
        <>{ children }</>
      ) : cookie.role === "[ROLE_SELLER]" ? (
        <Unauthorized />
      ) : (
        <></>
      )
      )
    };

export default ProtectedCustomer;
