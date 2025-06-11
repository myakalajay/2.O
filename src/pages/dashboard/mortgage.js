import AuthGuard from '../../components/AuthGuard';

export default function MortgageDashboard() {
  return <AuthGuard role='mortgage'><h2>Mortgage Professional Dashboard</h2></AuthGuard>;
}