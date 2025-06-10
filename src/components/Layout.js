import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('user');
    if (data) setUser(JSON.parse(data));
  }, []);

  function logout() {
    localStorage.removeItem('user');
    router.push('/');
  }

  return (
    <div className="container mt-4">
      <header className="d-flex justify-content-between align-items-center mb-4">
        <h4>🏠 Mortgage Dashboard</h4>
        {user && (
          <div>
            <span className="me-3">Logged in as: <strong>{user.role}</strong></span>
            <button className="btn btn-sm btn-danger" onClick={logout}>Logout</button>
          </div>
        )}
      </header>
      {user && (
        <nav className="nav nav-pills mb-4">
          {user.role === 'homeowner' && (
            <>
              <Link className="nav-link" href="/dashboard/homeowner">My Loans</Link>
              <Link className="nav-link" href="#">Apply for Mortgage</Link>
              <Link className="nav-link" href="#">Support</Link>
            </>
          )}
          {user.role === 'mortgage' && (
            <>
              <Link className="nav-link" href="/dashboard/mortgage">Client Applications</Link>
              <Link className="nav-link" href="#">Loan Processing</Link>
              <Link className="nav-link" href="#">Reports</Link>
            </>
          )}
          {user.role === 'admin' && (
            <>
              <Link className="nav-link" href="/dashboard/admin">Admin Panel</Link>
              <Link className="nav-link" href="#">Manage Users</Link>
              <Link className="nav-link" href="#">System Logs</Link>
            </>
          )}
        </nav>
      )}
      {children}
    </div>
  );
}
