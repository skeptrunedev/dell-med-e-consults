import type { NextPage } from "next";
import Navbar from "../../components/app_shell/Navbar";
import Footer from "../../components/app_shell/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar {...{ active_page: "About The Tool" }} />
      <div className="overflow-hidden bg-white">
        <div className="relative mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
          <div className="mx-auto flex ">
            <div>
              <h2 className="mt-4 text-base font-semibold uppercase tracking-wide text-casal-200">
                Welcome To
              </h2>
              <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                EconAnalysis
              </h3>
            </div>
            <a
              type="button"
              className="focus:ring-none ml-8 mt-4 h-fit w-fit self-center justify-self-end rounded-xl border-2 border-casal-300 bg-honeysuckle-600/20 px-8 py-4 text-center font-medium text-casal-400 hover:bg-honeysuckle-600/40 focus:outline-none sm:mt-8"
              href="/parameters"
            >
              Get Started
            </a>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:col-start-2 lg:row-start-1">
              <svg
                className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                />
              </svg>
              <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <img
                      className="rounded-lg object-cover object-center shadow-lg"
                      src="/Dell_Medical_animation.gif"
                      alt="Whitney leaning against a railing on a downtown street"
                      width={1184}
                      height={1376}
                    />
                  </div>
                </figure>
              </div>
            </div>
            <div className="mx-auto mt-8 max-w-prose text-lg text-gray-500 lg:mt-0 lg:max-w-none">
              <p className="mb-4">
                Telemedicine is being more widely adapted by medical practices
                than ever before. These include eConsult programs where medical
                specialists review patient referrals and communicate with the
                patient preemptively to provide care and make recommendations.
              </p>
              <p className="mb-4">
                But questions about the financial feasibility of this model
                abound.
              </p>
              <p className="mb-4">
                How do payors determine how much to pay for each telemedicine
                visit?
              </p>
              <p className="mb-4">
                How do payors know if telemedicine programs are saving or
                costing money when compared to traditional reimbursement models
                for in person visits?
              </p>
              <p className="mb-4">
                From a clinic perspective, what is the total cost of a
                telemedicine visit considering all provider, support staff, and
                administrative costs?
              </p>
              <p className="mb-4">
                Are clinics losing money by performing telemedicine instead of
                seeing patients in person?
              </p>
              <p className="mb-4">
                Dell Medical School and the LBJ School of Public Affairs at the
                University of Texas at Austin has teamed up to bring you this
                telemedicine cost effectiveness calculator to answer your
                questions about the cost effectiveness of any outpatient
                eConsult or telemedicine program.
              </p>
              <p className="mb-4">
                Use{" "}
                <a
                  className="text-casal-300"
                  href="https://pubmed.ncbi.nlm.nih.gov/32954940/"
                >
                  {" "}
                  data from the Dell Medical School Gastroenterology eConsult
                  program{" "}
                </a>{" "}
                by default or enter your own parameters to calculate the cost
                effectiveness of telemedicine for your situation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
