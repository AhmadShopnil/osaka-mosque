import React from 'react'
import { getFatwa, getSettings } from '@/helper/actions';
import FatwaSwiper from './FatwaSwiper';
import { getMetaValueByMetaName } from '@/helper/metaHelpers';

export default async function FatWaWrapper() {
const settings = await getSettings();

  const fatwa_heading_bar = getMetaValueByMetaName(settings, "fatwa_heading_bar") || "Fatwa";
const fatwas = await getFatwa();

  return (
    <div>
<FatwaSwiper fatwas={fatwas} fatwa_heading_bar={fatwa_heading_bar}/>


    </div>
  )
}
