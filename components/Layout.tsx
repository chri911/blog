import React from 'react';
import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';
import { CardLink } from './Styles';

export default function Layout({
  children,
  home,
  title,
}: {
  children: React.ReactNode;
  home?: boolean;
  title: string;
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
      </Head>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <CardLink color="#000">← Back to all posts</CardLink>
          </Link>
        </div>
      )}
    </div>
  );
}
