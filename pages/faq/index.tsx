import type { NextPage } from "next";
import Navbar from "../../components/app_shell/Navbar";
import Footer from "../../components/app_shell/Footer";

const DOUBLE_RIGHT_ARROW = String.fromCharCode(0x21d2);

interface FAQ {
  id: string;
  question: string;
  answers: Array<string>;
  heading: boolean;
  secondaryHeading: boolean;
}

const faqs: Array<FAQ> = [
  {
    id: "parameters",
    question: "Parameters",
    answers: [
      `Parameters are divided into two sections: payor and provider.`,
      `For the payor section, enter parameters from the perspective of an insurance company or any other
      entity that pays for healthcare.`,
      `For the provider section, enter parameters from the perspective of a healthcare provider or group of
      providers such as a clinic or office.`,
    ],
    heading: true,
    secondaryHeading: false,
  },
  {
    id: "payor-costs",
    question: "Payor Costs",
    answers: [
      `Enter costs for a payor perspective. Imagine you are an insurance company or any other entity that pays for healthcare. How much are you paying for patient visits?`,
      `First, enter details of how much a payor would pay for telemedicine visits. We have entered commonly used telephone and inter professional consult CPT codes and their respective Center for Medicare/Medicaid Services payments. But feel free to enter whatever type of visit best reflects your situation. For example, if you only pay a set amount for any type of telemedicine encounter, simply delete all but one line and enter the price paid. For each different line, enter a percent of total visits that you anticipate that level of care encompasses. Similarly, for each different line, enter an estimate of how many minutes it takes your providers to complete such a visit. Use “+New Code” to enter more lines. Use “Set to default” to return to our original values. Make sure all lines add up to 100%. Once the table is complete, the tool will automatically calculate an average cost per visit and average time spent per visit displayed at the top.`,
      `Next, enter details of how much a payor would pay for traditional in person patient visits. If you know your average reimbursement for your Medicare/Medicaid or commercial insurance patients, enter that value in the respective lines. Use the other insurance line to account for other types of payment you receive for in person visits. Enter the percent of total visits that you currently receive from each insurance type. Make sure all lines add up to 100%. Once the table is complete, the tool will automatically calculate an average cost per visit displayed at the top.`,
    ],
    heading: false,
    secondaryHeading: false,
  },
  {
    id: "provider-costs",
    question: "Provider Costs",
    answers: [
      `Enter parameters from the perspective of a healthcare provider or clinic. How much is it costing you to perform telemedicine? How many support staff do you need? How much are your providers and support staff paid? How much administrative time do you need for each telemedicine visit?`,
      `Enter the number of physicians and support staff required to perform EACH telemedicine visit. For example, if you have 5 medical assistants in your clinic but only 1 medical assistant is required to support each telemedicine visits, enter “1” for number of support staff.`,
      `Enter your best estimate for the distribution of time required to perform administrative work for EACH telemedicine visit.`,
      `Finally, enter your estimate for ancillary costs for equipment, communications, and real estate. As always, feel free to use our default values. Select “Set to default” at any time to return to our default values.`,
    ],
    heading: false,
    secondaryHeading: false,
  },
  {
    id: "decision-tree",
    question: "Decision Tree",
    answers: [
      `Use this page to view and change how patients are routed through your telemedicine program versus your traditional in person clinic. Change the values to reflect your experience or enter difference scenarios to see how they affect your results. As always, choose “Set to default” to return to our default decision tree.`,
      `Customize the decision tree to reflect your telemedicine program. For example, if your telemedicine program will always contact patient for telemedicine visits and will never make any recommendations without speaking to the patient, simply change the “Don’t Contact Patient” percentage to zero.`,
    ],
    heading: true,
    secondaryHeading: false,
  },
  {
    id: "contact-patient-schedule-appointment",
    question: `Contact Patient ${DOUBLE_RIGHT_ARROW} Schedule Appointment`,
    answers: [
      `This pathway if for patients who are re-routed to an in person clinic visit after the telemedicine visit. These patients may have more complicated needs than first appearances. An example in gastroenterology may be patients who are referred for a simple problem (anemia) but during the telemedicine visit is discovered to have a more complicated condition (inflammatory bowel disease).`,
    ],
    heading: false,
    secondaryHeading: false,
  },
  {
    id: "contact-patient-make-recommendations",
    question: `Contact Patient ${DOUBLE_RIGHT_ARROW} Make Recommendations`,
    answers: [
      `This pathway results in a successful telemedicine visit where recommendations are made to the patient. This is the typical outcome for a telemedicine visit.`,
    ],
    heading: false,
    secondaryHeading: false,
  },
  {
    id: "dont-contact-patient-schedule-appointment",
    question: `Don't Contact Patient ${DOUBLE_RIGHT_ARROW} Schedule Appointment`,
    answers: [
      `This pathway is for patients who are immediately assessed to need an in person visit rather than a telemedicine visit. These patients are referred for a complex problem and are deemed to need an in person visit. A telemedicine visit is not attempted.`,
    ],
    heading: false,
    secondaryHeading: false,
  },
  {
    id: "dont-contact-patient-make-recommendations",
    question: `Don't Contact Patient ${DOUBLE_RIGHT_ARROW} Make Recommendations`,
    answers: [
      `This pathway is for patients who are immediately assessed to need a telemedicine visit rather than an in person visit. These patients are referred for a simple problem and are deemed to need a telemedicine visit. An in person visit is not attempted.`,
    ],
    heading: false,
    secondaryHeading: false,
  },
  {
    id: "results",
    question: "Results",
    answers: [
      `The results page provides cost calculations that are based on the parameters and decision tree probabilities. Just like the parameters, each result is based on either the payor or provider perspective. Results that we think are especially important are presented at the top of the page.`,
    ],
    heading: true,
    secondaryHeading: false,
  },
  {
    id: "payor-perspective-results",
    question: "Payor Perspective Results",
    answers: [],
    heading: false,
    secondaryHeading: true,
  },
  {
    id: "payor-average-cost-per-patient-with-e-consults-program",
    question: "Payor Average Cost Per Patient With E-Consults Program",
    answers: [
      `The average cost per patient from the payor perspective if every patient gets an E-consult first. If I am an insurance company, how much am I paying on average for every patient if every patient is evaluated via an E-consult first. Keep in mind, not every patient can have their referral question resolved with telemedicine alone. This cost includes patients who are seen with E-consults first and are determined to need an in-person clinic visit to resolve the referral question.`,
    ],
    heading: false,
    secondaryHeading: false,
  },
  {
    id: "payor-average-cost-per-patient-with-in-person-clinic",
    question: "Payor Average Cost Per Patient With In-Person Clinic",
    answers: [
      `The average cost per traditional in-person visit from the payor perspective. If I am an insurance company, how much am I paying on average for every patient if every patient is seen only with a traditional in-person visit?`,
    ],
    heading: false,
    secondaryHeading: false,
  },
  {
    id: "payor-average-savings-or-loss-per-patient-if-using-an-e-consult-program",
    question:
      "Payor Average Savings or Loss Per Patient If Using an E-Consult Program",
    answers: [
      `The average savings or loss per patient when using an E-consult program versus only in person clinic visits from a payor perspective. In essence, if I am an insurance company (payor), am I paying more or less per visit if a patient is seen with an E-consult program in place when compared with a traditional model of in-person visits?`,
    ],
    heading: false,
    secondaryHeading: false,
  },
  {
    id: "payor-cost-per-patient-taken-care-of-by-e-consults-without-need-for-in-person-clinic",
    question:
      "Payor Cost Per Patient Taken Care of by E-Consults Without Need for In-Person Clinic",
    answers: [
      `How much does each patient cost the payor if the referral question is resolved only with telemedicine in the E-consult program? In E-consult programs, payors should not be charged if the E-consult results in the patient being scheduled in physical clinic. For example, if a patient is called by the E-consult program and the provider determines that the patient is best taken care of in clinic, the provider should not charge for the E-consult because the patient will be seen in clinic and be charged for a traditional in-person visit at that time. Charging for the E-consult in this scenario would be, in some sense, double charging the payor since the provider is admitting that the referral question cannot be answered with telemedicine alone. This result takes the above into account and gives the cost per patient whose referral question is resolved by telemedicine alone.`,
    ],
    heading: false,
    secondaryHeading: false,
  },
  {
    id: "payor-willingness-to-pay-per-e-consult",
    question: "Payor Willingness to Pay Per E-Consult",
    answers: [
      `If I am an insurance company (payor), how much should I pay per E-consult? This result is calculated by adding the average savings or loss per patient taken care of by E-consults plus the amount charged to the payor per E-consult visit. Payor should be willing to pay up to this amount and still have an overall savings compared to a traditional model of all in-person clinic. If this number is negative, E-consults would not make economic sense for the payor.`,
    ],
    heading: false,
    secondaryHeading: false,
  },
  {
    id: "provider-perspective-results",
    question: "Provider Perspective Results",
    answers: [],
    heading: false,
    secondaryHeading: true,
  },
  {
    id: "provider-total-cost-per-e-consult",
    question: "Provider Total Cost Per E-Consult",
    answers: [
      `How much does it cost a provider to perform each E-consult? This takes into account salary and time of providers and supporting staff as well as ancillary costs of space and services.`,
    ],
    heading: false,
    secondaryHeading: false,
  },
  {
    id: "provider-average-profit-or-loss-per-e-consult",
    question: "Provider Average Profit or Loss Per E-Consult",
    answers: [
      `How much profit or loss will a provider have per E-consult? Therefore, does running an E-consult program make economic sense for a provider?`,
    ],
    heading: false,
    secondaryHeading: false,
  },
];

const Faq: NextPage = () => {
  return (
    <div>
      <Navbar {...{ active_page: "FAQ" }} />
      <div className="overflow-hidden bg-white">
        <div className="relative mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto border-b border-casal/5 pb-8 text-base lg:max-w-none">
            <div>
              <h2 className="mt-4 text-base font-semibold uppercase tracking-wide text-casal-200">
                Frequently Asked
              </h2>
              <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                Questions
              </h3>
            </div>
          </div>
          <div className="bg-white">
            <div className="mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-8">
              <div>
                <dl className="divide-y divide-gray-200">
                  {faqs.map((faq) => {
                    return faq.heading ? (
                      <div
                        key={faq.id}
                        id={faq.id}
                        className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8"
                      >
                        <dt className="text-xl font-bold text-black-900 md:col-span-5">
                          {faq.question}
                        </dt>
                        <dd className="mt-2 md:col-span-7 md:mt-0 font-semibold">
                          {faq.answers.map((answer, i) => (
                            <p
                              key={i}
                              className={`text-lg text-gray-500 ${
                                i == 0 ? "" : "mt-2"
                              }`}
                            >
                              {answer}
                            </p>
                          ))}
                        </dd>
                      </div>
                    )
                    : (
                      <div
                        key={faq.id}
                        id={faq.id}
                        className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8"
                      >
                        <dt className="text-base font-medium text-gray-900 md:col-span-5">
                          {faq.question}
                        </dt>
                        <dd className="mt-2 md:col-span-7 md:mt-0">
                          {faq.answers.map((answer, i) => (
                            <p
                              key={i}
                              className={`text-base text-gray-500 ${
                                i == 0 ? "" : "mt-2"
                              }`}
                            >
                              {answer}
                            </p>
                          ))}
                        </dd>
                      </div>
                    );
                  })}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
