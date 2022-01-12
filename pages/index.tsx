import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next/Cypress/Docker Demo</title>
        <meta name="description" content="Demo app to test Next.js via Cypress and Docker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Testing Next.js Apps
        </h1>
        <h3 className={styles.subtitle}>
          with Cypress and Docker
        </h3>

        <div className={styles.description}>
          <p>Start by running this command in a terminal window{' '}
            <code className={styles.code}>yarn up:ci</code>
          </p>

          <p className={styles.description}>
            That will do the following:
            <ol>
              <li>Create a new image with everything needed to run this Next.js app</li>
              <li>Start the app and serve it at port 3000</li>
              <li>Create another image - <code className={styles.code}>cypress/included:8.3.0</code></li>
              <li>Run Cypress tests against the app and exit on completion</li>
            </ol>
          </p>

          <p className={styles.description}>
            Note: If you'd like to develop the app and not run tests run{' '}
            <code className={styles.code}>yarn up:dev</code>
          </p>
        </div>

        <div className={styles.grid}>
          <a href="https://on.cypress.io" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Learn more about Cypress and its API</p>
          </a>

          <a href="https://on.cypress.io/ci" className={styles.card}>
            <h2>CI/CD &rarr;</h2>
            <p>Learn how to use Cypress in CI</p>
          </a>

          <a
            href="https://on.cypress.io/docker"
            className={styles.card}
          >
            <h2>Docker</h2>
            <p>Explore Cypress Docker images and examples</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples/with-cypress"
            className={styles.card}
          >
            <h2>Cypress + Next</h2>
            <p>Learn how to configure Next to use Cypress</p>
          </a>
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
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
