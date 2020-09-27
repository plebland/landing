import React, { Component } from 'react';
import Layout from '../components/Layout';

export default function Index({ youtube, preview }) {
  return (
    <Layout>
      <section className='content'>
        <p className='top'>Hey</p>
        <h1>pleb</h1>
        <p className='bottom'>Retro</p>
      </section>
      <section className='lighth'>
        <section className='lightv'></section>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const youtube = 'hi';

  return {
    props: { youtube }, // will be passed to the page component as props
  };
}
