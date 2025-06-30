import Scholars from '@/components/scholars/Scholars';
import { getScholars } from '@/helper/actions';
import React from 'react';

const Page = async() => {

   const scholars = await getScholars();
  return (
    <div>
      <Scholars scholars={scholars}/>
    </div>
  );
}

export default Page;
