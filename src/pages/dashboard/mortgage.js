import { useEffect, useState } from 'react';
import ProtectedRoute from '../../components/ProtectedRoute';
import Navbar from '../../components/Navbar';

export default function MortgageDashboard() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch('/api/dashboard', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    }).then(res => res.json()).then(data => {
      setApps(data.allApplications || []);
    });
  }, []);

  return (
    <ProtectedRoute allowedRoles={['mortgage']}>
      <Navbar />
      <div className="container mt-4">
        <h3>All Loan Applications</h3>
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
