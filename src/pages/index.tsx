import * as React from 'react'
import { graphql } from 'gatsby'
import {
  Article,
  CoverPhoto,
  Head,
  XPosition,
  YPosition,
} from '@dailybruin/lux'
import Header from '../components/Header';
import colors from '../utils/colors';
import Footer from "../components/Footer";

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
    <Header title={data.kerckhoffArticle.headline} />
    <div style={{
      backgroundColor: `${colors.gray.bg}`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <div style={{
        backgroundColor: "white",
        border: `1px solid ${colors.gray.medium}`,
        margin: "2em 0px"
      }}>
        <h2 style={{
          fontWeight: "bold",
          color: `${colors.blue.dark}`,
          paddingLeft: "1rem",
          paddingTop: "2rem"
        }}>{data.kerckhoffArticle.headline}</h2>
        <p style={{
          color: `${colors.gray.dark}`,
          paddingLeft: "1rem"
        }}>By {data.kerckhoffArticle.author}</p>
        <Article content={data.kerckhoffArticle.content} />
      </div>
      <Footer developers="Dustin Newman" designers="Lauren Ho" year={2019} />
    </div>
  </>
)

export default IndexPage
