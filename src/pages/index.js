import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Etusivu" />
    <h1>Mikä? Miksi?</h1>
    <p>Feministinen kalenteri pyrkii kokoamaan yhteen paikkaan erilaisia vuoden merkkipäiviä, 
      jotta ne olisi helpompi ottaa huomioon esimerkiksi aktivismissa.</p>
  </Layout>
)

export default IndexPage
