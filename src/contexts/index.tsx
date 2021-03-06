import { AuthProvider } from "./AuthContext";

export function AppProvider({ children }) {
  return (
    <>
      <AuthProvider>{children}</AuthProvider>
    </>
  );
}
