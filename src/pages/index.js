import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="The definitive resource for scaling AI on embedded platforms.">
      <main style={{ padding: '10vh 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>{siteConfig.title}</h1>
        <p style={{ fontSize: '1.5rem', color: '#666' }}>
          Where AI Meets Physical Reality.
        </p>
      </main>
    </Layout>
  );
}