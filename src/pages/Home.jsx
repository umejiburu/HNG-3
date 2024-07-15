import { useEffect, useState } from 'react'
import { Banner, FashSale, Hero, RecentSale } from '../components'

function Home() {
//   const apiKey = '929295486d704094906c71a55d4e44ee20240712132529573435';
// const appId = 'MSXNR22706370IM'
//   console.clog("https://api.timbu.cloud/products?organizationId=92d5bd3aec3f4257846b5d8fe0ba9b99&reverse_sort=false&page=2&size=10&appId=MSXNR22706370IM&apiKey=929295486d704094906c71a55d4e44ee20240712132529573435");


  return (
    <div className='container'>
      <Banner/>
      <FashSale/>
      <RecentSale/>
      <Hero/>
    </div>
  )
}

export default Home