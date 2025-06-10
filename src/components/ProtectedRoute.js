<<<<<<< HEAD
// Wrapper for protecting pages from unauthenticated access

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function ProtectedRoute({ children, allowedRoles }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if (!token || !role || !allowedRoles.includes(role)) {
      router.push('/login');
    } else {
      setRole(role);
      setLoading(false);
    }
  }, []);

  if (loading) return <p className="text-center mt-5">Loading...</p>;
  return children;
}
=======
// Wrapper for protecting pages from unauthenticated access

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function ProtectedRoute({ children, allowedRoles }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if (!token || !role || !allowedRoles.includes(role)) {
      router.push('/login');
    } else {
      setRole(role);
      setLoading(false);
    }
  }, []);

  if (loading) return <p className="text-center mt-5">Loading...</p>;
  return children;
}
>>>>>>> 37699c39feb6fc1d37c3a2ec38806ea85ecce4ab
