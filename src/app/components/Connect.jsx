import { FaRegEnvelope } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import Link from 'next/link';

function Connect() {
  return (
    <div id="Connect" className="w-full max-w-[1500px] mx-auto mb-12">
        <div className="basis-full p-4 lg:p-6">
            <div className='text-3xl font-semibold text-gray-300 border-b-4 border-teal-600 max-w-max pb-2 mx-auto mb-16'>
            Connect
            </div>
            <div className="flex flex-row w-full max-w-[600px] mx-auto">
                <div className="basis-1/3 text-center">
                    <Link href="mailto:dssmith.0617@gmail.com" className="text-gray-300 text-2xl block">
                        <FaRegEnvelope className="mx-auto" />
                    </Link>
                </div>
                <div className="basis-1/3 text-center">
                    <Link href="https://github.com/dssmith-0617" className="text-gray-300 text-2xl block">
                        <FiGithub className="mx-auto" />
                    </Link>              
                </div>
                <div className="basis-1/3 text-center">
                    <Link href="https://www.linkedin.com/in/david-smith-8795b41a5/" className="text-gray-300 text-2xl block">
                        <SlSocialLinkedin className="mx-auto" />
                    </Link>               
                </div>
            </div>
        </div>
    </div>
  )
}

export default Connect
