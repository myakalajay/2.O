import { useEffect, useState } from 'react';
import ProtectedRoute from '../../components/ProtectedRoute';
import Navbar from '../../components/Navbar';

export default function HomeownerDashboard() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const fetchApps = async () => {
      const res = await fetch('/api/dashboard', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      const data = await res.json();
      setApps(data.applications || []);
    };
    fetchApps();
  }, []);

  return (
    <ProtectedRoute allowedRoles={['homeowner']}>
      <Navbar />
      <div className="container mt-4">
        <h3>Your Applications</h3>
        <ul className="list-group mt-3">
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
