import React, { useReducer } from "react";

const AuthContext = React.createContext();

const initialState = {
  id: 0,
  name: "",
  email: ""
};

function reducer(state, action) {
  const { payload, type } = action;

  switch (type) {
    case "LOGIN":
      if (payload.email) {
        return { ...state, id: 1, name: "New user", email: "jonasgroendahl@gmail.com" };
      }
      return state;
    case "LOGOUT":
      return {
        id: 0,
        name: "",
        email: ""
      };
    default:
      return state;
  }
}

export function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { ...state, dispatch };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
