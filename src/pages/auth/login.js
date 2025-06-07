import React from 'react';
import Head from 'next/head';

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login | Dashboard</title>
      </Head>
      <div className="container mt-5">
        <h2>Login</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" required />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </>
  );
}
