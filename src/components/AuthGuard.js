import { useEffect } from 'react';
import { useRouter } from 'next/router';
const AuthGuard = ({ children, role }) => {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('role');
    if (!token || userRole !== role) router.push('/login');
  }, []);
  return <>{children}</>;
};
export default AuthGuard;