<<<<<<< HEAD
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [role, setRole] = useState('');

  useEffect(() => {
    const savedRole = localStorage.getItem('role');
    if (savedRole) setRole(savedRole);
  }, []);

  function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    router.push('/login');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a className="navbar-brand" href="#">Mortgage App</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          {role === 'homeowner' && (
            <li className="nav-item"><a className="nav-link" href="/dashboard/homeowner">Dashboard</a></li>
          )}
          {role === 'mortgage' && (
            <li className="nav-item"><a className="nav-link" href="/dashboard/mortgage">Applications</a></li>
          )}
          {role === 'admin' && (
            <li className="nav-item"><a className="nav-link" href="/dashboard/admin">Admin Panel</a></li>
          )}
        </ul>
        <button className="btn btn-outline-light" onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}
=======
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [role, setRole] = useState('');

  useEffect(() => {
    const savedRole = localStorage.getItem('role');
    if (savedRole) setRole(savedRole);
  }, []);

  function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    router.push('/login');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a className="navbar-brand" href="#">Mortgage App</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          {role === 'homeowner' && (
            <li className="nav-item"><a className="nav-link" href="/dashboard/homeowner">Dashboard</a></li>
          )}
          {role === 'mortgage' && (
            <li className="nav-item"><a className="nav-link" href="/dashboard/mortgage">Applications</a></li>
          )}
          {role === 'admin' && (
            <li className="nav-item"><a className="nav-link" href="/dashboard/admin">Admin Panel</a></li>
          )}
        </ul>
        <button className="btn btn-outline-light" onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}
>>>>>>> 37699c39feb6fc1d37c3a2ec38806ea85ecce4ab
