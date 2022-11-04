
import type { NextPage } from 'next'
import Navbar from '../../components/app_shell/Navbar'
import Footer from '../../components/app_shell/Footer'

const faqs = [
  {
    id: 1,
    question: "Parameters",
    answer: `
    Parameters are divided into two sections: payor and provider.
    For the payor section, enter parameters from the perspective of an insurance company or any other
    entity that pays for healthcare.
    For the provider section, enter parameters from the perspective of a healthcare provider or group of
    providers such as a clinic or office.`
  },
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
]

const Faq: NextPage = () => {
  return (
    <div>
    <Navbar { ...{ active_page: 'FAQ' } } />
    <div className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none pb-8 border-b border-casal/5">
            <div>
              <h2 className="text-base mt-4 text-casal-200 font-semibold tracking-wide uppercase">Frequently Asked</h2>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Questions
              </h3>
            </div>
          </div>
          <div className="bg-white">
            <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:py-8 lg:px-8">
              <div>
                <dl className="divide-y divide-gray-200">
                  {faqs.map((faq) => (
                    <div key={faq.id} className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
                      <dt className="text-base font-medium text-gray-900 md:col-span-5">{faq.question}</dt>
                      <dd className="mt-2 md:col-span-7 md:mt-0">
                        <p className="text-base text-gray-500">{faq.answer}</p>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer />
    </div>
  )
}

export default Faq; 