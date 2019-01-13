import React from 'react';
import Layout from './components/layout';

export default () => (
  <Layout>
    <div className="page-1">
      <div> Hello World.</div>
      <div> here - import image and use styles from global file</div>
      <img src="/static/ok.svg" alt=""/>
    </div>
  </Layout>

);