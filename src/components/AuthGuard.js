import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AuthGuard({ role, children }) {
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user.role !== role) {
      router.push('/');
    }
  }, []);

  return <>{children}</>;
}
