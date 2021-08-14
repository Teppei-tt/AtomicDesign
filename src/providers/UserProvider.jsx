import React, { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;
  const [uesrInfo, setUserInfo] = useState(null);

  return (
    <UserContext.Provider value={{ uesrInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
