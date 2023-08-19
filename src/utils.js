import { redirect } from "react-router-dom";

export const requireAuth = () => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    //because of mirage.js we should give redirect response a body to work correctly
    const response = redirect("/login");
    response.body = true;
    return response;
  }
  return null;
};
