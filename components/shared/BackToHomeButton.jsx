"use Client"
import { getSettings } from '@/helper/actions';
import { getMetaValueByMetaName } from '@/helper/metaHelpers';
import Link from 'next/link'


export default  function BackToHomeButton({settings}) {

    const backToHomeButton = getMetaValueByMetaName(settings, "back_to_home") || "Back Home";
  return (
    <Link
            href="/"
            className="bg-[#00401A] hover:bg-[#80b918] px-5 py-2.5 rounded-md font-bold text-[15px] text-white transition"
          >
            {/* Back Home */}
            {backToHomeButton } 
          </Link>
  )
}
