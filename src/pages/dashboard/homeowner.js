import AuthGuard from '../components/AuthGuard';

export default function HomeownerDashboard() {
  return <AuthGuard role='homeowner'><h2>Homeowner Dashboard</h2></AuthGuard>;
}