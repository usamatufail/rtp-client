import { Error403 } from "components";
import { useAuth } from "context/AuthContext";

export const withAuth = (WrappedComponent) => (props) => {
  const { currentUser } = useAuth();

  if (!currentUser) return <Error403 />;

  return <WrappedComponent {...props} />;
};
