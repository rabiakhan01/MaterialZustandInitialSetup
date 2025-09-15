import { setAuthToken } from "../store/http";

// Check authentication of user
export const useIsAuthenticatedUser = () => {
  const token = "token";
  if (!token) {
    return false;
  }
  setAuthToken(token);
  return true;
};
