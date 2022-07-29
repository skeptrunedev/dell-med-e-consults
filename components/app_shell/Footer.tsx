
import type { NextPage } from 'next'


const  Footer: NextPage = () => {
  return (
    <footer className="bg-white">
      <div className="w-full mx-auto py-12 px-6">
        <div className="mt-8">
          <p className="w-full text-center text-base text-gray-400">
          Property of The University of Texas at Austin.  Designed by Divya Mirchandani and developed by
          Created by <a href="https://nicholaskhami.site/">Nicholas Khami</a>, at the SAGA Lab .
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;