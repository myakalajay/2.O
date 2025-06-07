import React from 'react';
import Head from 'next/head';

export default function DashboardPage() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="container mt-5">
        <h2>Welcome to your Dashboard</h2>
        <p>This is your main dashboard area. You can customize this page with widgets, charts, and more.</p>
      </div>
    </>
  );
}
