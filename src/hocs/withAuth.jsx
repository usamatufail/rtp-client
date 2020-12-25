import { Loader } from "components";
import { useAuth } from "context/AuthContext";

export const withAuth = (WrappedComponent) => (props) => {
  const { currentUser } = useAuth();

  if (!currentUser) return <Loader />;

  return <WrappedComponent {...props} />;
};
