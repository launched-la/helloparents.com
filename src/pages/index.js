import React from 'react'
import {Helmet} from 'react-helmet'

import '../components/global.css'

import Page from '../components/page'

export default () => <Page>
  <Helmet>
    <title>Hello Parents</title>
  </Helmet>

  <div style={{width: '400px'}}>
    <h1>Hello Parents</h1>
    <p>Coming soon!</p>
  </div>
</Page>
