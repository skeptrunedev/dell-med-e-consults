
import type { NextPage } from 'next'


const  Footer: NextPage = () => {
  return (
    <footer className="bg-white">
      <div className="w-full mx-auto py-12 px-6">
        <div className="mt-4">
          <p className="w-full text-center text-base text-gray-400">
          Property of The University of Texas at Austin, Dell Medical School.  <br></br> Designed by <a className="text-casal-300" href="http://linkedin.com/in/divya-mirchandani">Divya Mirchandani</a> and developed by
           <a className="text-casal-300" href="https://nicholaskhami.site/"> Nicholas Khami</a> at the <a className="text-casal-300" href="https://sites.utexas.edu/sagalab/">SAGA Lab</a>.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;