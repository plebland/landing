import React, { Component } from 'react';
import Layout from '../components/Layout';

export default function Index({ youtube, preview }) {
  return (
    <Layout>
      <section className='content'>
        <p className='top'>1700 UTC</p>
        <h1>2020-10-04</h1>
        <p className='bottom'>
          <a href='https://hubs.link'>346485</a>
        </p>
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
