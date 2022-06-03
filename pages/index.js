import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'

import ExerciseList from '../components/ExerciseList'
import { StyledPageSelection } from './exercises/styles'


export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Swol Not Swollen</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>
          Welcome to Swol Not Swollen, an app to organize your circus maintenance pursuits!
        </h2>

      <div className='pageDropdown'>
        <StyledPageSelection/>
      </div> 

      <div>
        <ExerciseList/>
      </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> and a lot of tea
          </span>
        </a>
      </footer>
    </div>
  )
}
