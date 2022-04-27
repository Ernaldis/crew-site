import React from 'react'
import { MetaData } from '../../components/Meta/MetaData'
import './NotFound.css'

const meta = {
  title: '404',
  desc: 'The page your looking for is not here.',
  url: 'https://scoutcpr.org/404',
  img: '../../assets/C911_Pick3.JPG'
}

const NotFound = () => (
  <div>
    <MetaData {...meta}>
      <meta name='prerender-status-code' content='404' />
    </MetaData>

    <div className='fourOfour'>
      <h1>404</h1>
    </div>
    <div className='return'>
      <p>Page Not Found</p>
    </div>
  </div>
)

export default NotFound
