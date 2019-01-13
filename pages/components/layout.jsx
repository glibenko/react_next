import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

// import styles from './styles.scss';

export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="/static/reset.css" rel="stylesheet" />
      <link href="/static/styles.css" rel="stylesheet" />
    </Head>
    <header >
      <div> it's plane header for each page </div>
      <nav>
        <Link href="/"><a>Home</a></Link>
        <Link href="/react_page"><a>React</a></Link>
        <Link href="/contact"><a>Contact</a></Link>
      </nav>
    </header>

    <div className="container">
      { children }
    </div>

    <footer >
      <div> it's plane footer for each page </div>
    </footer>
  </div>
);
