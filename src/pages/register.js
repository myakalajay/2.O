import { useState } from 'react';
import Layout from '../components/Layout';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'homeowner', nmlsId: '' });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    if (res.ok) alert('Registration successful'); else alert(data.msg);
  };
  return (
    <Layout>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" name="name" placeholder="Name" onChange={handleChange} />
        <input className="form-control mb-2" name="email" placeholder="Email" onChange={handleChange} />
        <input className="form-control mb-2" name="password" type="password" placeholder="Password" onChange={handleChange} />
        <select className="form-control mb-2" name="role" onChange={handleChange}>
          <option value="homeowner">Homeowner</option>
          <option value="mortgage">Mortgage Professional</option>
          <option value="admin">Admin</option>
        </select>
        {form.role === 'mortgage' && (
          <input className="form-control mb-2" name="nmlsId" placeholder="NMLS ID" onChange={handleChange} />
        )}
        <button className="btn btn-primary">Register</button>
      </form>
    </Layout>
  );
}