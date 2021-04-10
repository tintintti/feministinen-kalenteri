import React from 'react'
import EmbeddedForm from '../components/EmbeddedForm'
import Layout from '../components/layout'
import SEO from "../components/seo"

export default function Contribute() {
  return (
    <Layout>
      <SEO title="Ehdota" />
      <div className='container'>
        <h1>Ehdota merkkipäivää kalenteriin</h1>
        <p>Puuttuuko mielestäsi tärkeä merkkipäivä kalenterista? Ehdota alla olevan lomakkeen avulla sitä meille!</p>
        <EmbeddedForm />
      </div>
    </Layout>
  )
}