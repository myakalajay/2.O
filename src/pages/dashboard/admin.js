import { useEffect, useState } from 'react';
import ProtectedRoute from '../../components/ProtectedRoute';
import Navbar from '../../components/Navbar';

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch('/api/dashboard', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    }).then(res => res.json()).then(data => {
      setUsers(data.users || []);
      setApps(data.applications || []);
    });
  }, []);

  return (
    <ProtectedRoute allowedRoles={['admin']}>
      <Navbar />
      <div className="container mt-4">
        <h3>All Users</h3>
        <ul className="list-group mb-4">
          {users.map(user => (
            <li key={user._id} className="list-group-item">
              {user.username} - <strong>{user.role}</strong>
            </li>
          ))}
        </ul>

        <h3>All Applications</h3>
        <ul className="list-group">
          {apps.map(app => (
            <li key={app._id} className="list-group-item">
              {app.type} - ₹{app.amount} - <strong>{app.status}</strong>
            </li>
          ))}
        </ul>
      </div>
    </ProtectedRoute>
  );
}
