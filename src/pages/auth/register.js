import React from 'react';
import Head from 'next/head';

export default function RegisterPage() {
  return (
    <>
      <Head>
        <title>Register | Dashboard</title>
      </Head>
      <div className="container mt-5">
        <h2>Register</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="fullname" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="fullname" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" required />
          </div>
          <button type="submit" className="btn btn-success">Register</button>
        </form>
      </div>
    </>
  );
}
