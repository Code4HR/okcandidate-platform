import Link from 'next/link';
import Head from 'next/head';

import Header from './templates/Header';
import Sidebar from './templates/Sidebar';
import Tagline from './molecules/Tagline';

import 'skeleton-scss/scss/skeleton.scss';
import './../styles/style.scss';

export default ({children}) => (
  <div>
    <Head>
      <title>OKCandidate</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link rel="stylesheet" href="/_next/static/style.css" />
    </Head>
    <Header />

    { children }

    <Tagline />
  </div>
);

