import React, { Component, createRef } from 'react';
import Layout from '../components/Layout';

export default function Index({ youtube, preview }) {
  return (
    <Layout>
      <section className='content'>
        <p className='top'>
          1700{' '}
          <a href='https://siasky.net/AACN0cG7qBFE8zF_J7r0s2Q5BwrLd1J3K0lkKSQ5JRdILw/'>
            U
          </a>
          TC
        </p>
        <h1>2020-11-1</h1>
        <p className='bottom'>
          <a href='https://hubs.link'>787589</a>
        </p>
      </section>
      <section className='lighth'>
        <section className='lightv'></section>
      </section>
      <center>
        <audio id='savetheworld' loop controls>
          <source src='media/savetheworld.mp3' type='audio/mp3' />
        </audio>
      </center>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const youtube = 'hi';

  return {
    props: { youtube }, // will be passed to the page component as props
  };
}
