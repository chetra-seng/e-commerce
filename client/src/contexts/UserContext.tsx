import React, { PropsWithChildren } from "react";
import { useCookies } from "react-cookie";

const UserContext = React.createContext(null);

const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [cookie] = useCookies(["user"]);

  return (
    <UserContext.Provider value={cookie.user}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
export { UserContext };
