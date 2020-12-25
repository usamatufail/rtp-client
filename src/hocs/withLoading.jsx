import { Loader } from 'components';
import { useLoading } from 'context/LoadingContext';

export const withLoading = (WrappedComponent) => (props) => {
  const { loading } = useLoading();

  if (loading) return <Loader />;

  return <WrappedComponent {...props} />;
};
