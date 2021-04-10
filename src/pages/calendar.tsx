import React from 'react'
import EmbeddedCalendar from '../components/EmbeddedCalendar'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function Calendar() {
  return (
    <Layout>
    <SEO title="Kalenteri" />
      <div>
        <div className='container'>
          <h1>Kalenteri</h1>
          <EmbeddedCalendar />
        </div>
      </div>
    </Layout>
  )
}