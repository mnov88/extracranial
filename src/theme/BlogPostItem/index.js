import React from 'react'
import BlogPostItem from '@theme-original/BlogPostItem'
import Giscus from '../../components/Giscus'
import OldPostNotice from '../../components/OldPostNotice'
import Head from '@docusaurus/Head'

const getUrlPercentEncoding = (text) => {
  return encodeURIComponent(text)
}

export default function BlogPostItemWrapper(props) {
  console.log(props)
  return (
    <>
      <Head>
        <title>{props.frontMatter.title}</title>
        <meta name='description' content={props.frontMatter.description} />
        <meta property='og:title' content={props.frontMatter.title} />
        <meta property='og:description' content={props.frontMatter.description} />
        <meta
          property='og:image'
          content={
            props.frontMatter.image ??
            `https://og-image.cho.sh/**${getUrlPercentEncoding(
              props.frontMatter.title
            )}**.png?theme=%235597ec&md=1&fontSize=100px&images=https%3A%2F%2Fcho.sh%2Fimg%2Ffavicon.png`
          }
        />
      </Head>
      <OldPostNotice {...props} />
      <BlogPostItem {...props} />
      <Giscus />
    </>
  )
}
