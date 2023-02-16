import React, { PropsWithChildren, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Unauthorized from "./Unauthorized";

const ProtectedSeller: React.FC<PropsWithChildren> = ({ children }) => {
    const [cookie] = useCookies(["token", "user", "role"]);
    const navigate = useNavigate()
    return cookie.role === '[ROLE_SELLER]' ? <div>{children}</div> : <Unauthorized />;
};

export default ProtectedSeller;
