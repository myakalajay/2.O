import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      router.push('/');
    } else {
      switch (user.role) {
        case 'homeowner':
          router.push('/dashboard/homeowner');
          break;
        case 'mortgage':
          router.push('/dashboard/mortgage');
          break;
        case 'admin':
          router.push('/dashboard/admin');
          break;
        default:
          router.push('/');
      }
    }
  }, []);

  return null;
}
