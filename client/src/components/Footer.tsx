
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
export default function Footer() {
  return (
    <>
      <footer className="relative bg-gray-200 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-orange-400">Cool-Ecommerce</h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-400">Find us on any of these platforms, we respond 1-2 business days.</h5>
              {/* icon */}
              <div className="mt-6 lg:mb-0 mb-6 flex">
                <button type="button" className="text-2xl bg-white text-black shadow-lg font-normal h-10 w-10  flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2">
                  <BsTwitter />
                </button>
                <button type="button" className="text-2xl bg-white text-black shadow-lg font-normal h-10 w-10  flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2">
                  <BsFacebook />
                </button>
                <button type="button" className="text-2xl bg-white text-black shadow-lg font-normal h-10 w-10  flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2">
                  <BsInstagram />
                </button>
                <button type="button" className="text-2xl bg-white text-black shadow-lg font-normal h-10 w-10  flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2">
                  <BsGithub />
                </button>
              </div>
            </div>
            <div className='w-full lg:w-6/12 px-4'>

            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
