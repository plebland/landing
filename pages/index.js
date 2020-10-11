import React, { Component, createRef } from 'react';
import Layout from '../components/Layout';

export default function Index({ youtube, preview }) {
  return (
    <Layout>
      <section className='content'>
        <p className='top'>
          1700{' '}
          <a href='https://siasky.net/AAAM3ck_hT54ATRL-DWEbJ1BxesNUaWbyP8WKshfuA8QDQ'>
            U
          </a>
          TC
        </p>
        <h1>2020-10-18</h1>
        <p className='bottom'>
          <a href='https://hubs.link'>104925</a>
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
