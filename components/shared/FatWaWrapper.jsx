import React from 'react'
import { getFatwa } from '@/helper/actions';
import FatwaSwiper from './FatwaSwiper';

export default async function FatWaWrapper() {

const fatwas = await getFatwa();

  return (
    <div>
<FatwaSwiper fatwas={fatwas}/>


    </div>
  )
}
