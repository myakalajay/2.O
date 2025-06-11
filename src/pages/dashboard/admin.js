import AuthGuard from '../components/AuthGuard';

export default function AdminDashboard() {
  return <AuthGuard role='admin'><h2>Admin Dashboard - Full Access</h2></AuthGuard>;
}