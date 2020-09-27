import React, { Component } from 'react';
import Layout from '../components/Layout';

export default function Index({ youtube, preview }) {
  return (
    <Layout>
      <div className='centerer'>
        <img
          className='porthole'
          src='https://media.giphy.com/media/3o85xJhackBStfkdBC/giphy.gif'
        />
      </div>
      <div className='centerer'>
        <p className='text one'>2020/10/05 17:00 UTC</p>
      </div>
      <div className='centerer'>
        <p className='text two'>2020/10/05 17:00 UTC</p>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const youtube = 'hi';

  return {
    props: { youtube }, // will be passed to the page component as props
  };
}
