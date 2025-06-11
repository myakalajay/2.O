import Link from 'next/link';
const Layout = ({ children }) => (
  <div className="container mt-4">
    <nav className="mb-4">
      <Link href="/" className="me-3">Home</Link>
      <Link href="/login" className="me-3">Login</Link>
      <Link href="/register">Register</Link>
    </nav>
    {children}
  </div>
);
export default Layout;