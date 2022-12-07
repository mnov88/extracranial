import BrowserOnly from '@docusaurus/BrowserOnly'
import Head from '@docusaurus/Head'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import React from 'react'
import Layout from '@theme/Layout'
import styles from './index.module.css'

const RandomUrl = () => {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title="To Infinity and Beyond"
      description={siteConfig.tagline}
    >
      <>
        <Head>
          <title>{'To Infinity and Beyond'}</title>
          <meta
            name="description"
            content={siteConfig.tagline}
          />
          <meta
            property="og:title"
            content={'To Infinity and Beyond'}
          />
          <meta
            property="og:description"
            content={siteConfig.tagline}
          />
          <meta
            property="og:image"
            content={`https://og-image.cho.sh/**${encodeURIComponent(
              'To Infinity and Beyond'
            )}**.png?theme=%235597ec&md=1&fontSize=100px&images=https%3A%2F%2Fcho.sh%2Fimg%2Ffavicon.png`}
          />
        </Head>
        <main>
          <BrowserOnly>
            {() => {
              let urls: Element[]
              let randomUrl: string
              console.log(
                '/' + siteConfig.baseUrl + '/sitemap.xml'
              )
              fetch(
                '/' + siteConfig.baseUrl + '/sitemap.xml'
              )
                .then((res) => res.text())
                .then((text) => {
                  const parser = new DOMParser()
                  const xml = parser.parseFromString(
                    text,
                    'text/xml'
                  )
                  urls = Array.from(
                    xml.querySelectorAll(
                      'urlset > url > loc'
                    )
                  )
                  randomUrl =
                    urls[
                      Math.floor(
                        Math.random() * urls.length
                      )
                    ].textContent

                  randomUrl = randomUrl.replace(
                    siteConfig.url,
                    ''
                  )
                  window.location.href = randomUrl
                })
              return (
                <div className={styles.container}>
                  <button
                    className={styles.diceButton}
                    onClick={() => {
                      window.location.href = randomUrl
                    }}
                  >
                    <div className={styles.dice}>🎲</div>
                  </button>
                </div>
              )
            }}
          </BrowserOnly>
        </main>
      </>
    </Layout>
  )
}

export default RandomUrl
