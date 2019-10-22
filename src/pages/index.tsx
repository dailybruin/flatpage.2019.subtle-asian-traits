import * as React from 'react'
import { graphql } from 'gatsby'
import {
  Article,
  CoverPhoto,
  Footer,
  Head,
  XPosition,
  YPosition,
} from '@dailybruin/lux'
import Header from '../components/Header'

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteName
        description
        url
        image
      }
    }
    kerckhoffArticle {
      headline
      author
      coverImg
      coverAlt
      coverCredit
      content {
        type
        value
      }
    }
  }
`
const IndexPage = ({ data }) => (
  <>
    <Head {...data.site.siteMetadata} />
    <Header imageURL={data.kerckhoffArticle.coverImg} author={data.kerckhoffArticle.author} title={data.kerckhoffArticle.headline} />
    <Article dropcap={true} content={data.kerckhoffArticle.content} />
    <Footer developers="Dustin Newman" copyrightYear={2019} />
  </>
)

export default IndexPage
