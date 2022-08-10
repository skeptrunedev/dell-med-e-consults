
import type { NextPage } from 'next'
import { useState } from 'react';
import PayerCostParametersHeading from './payer_cost_parameters/payer_cost_parameters_heading';
import AmountForOfficeVisit from './payer_cost_parameters/amount_for_office_visits';
import AmountForEConsults from './payer_cost_parameters/amount_for_e_consults';
import ProviderCostParametersHeading from './provider_cost_parameters/provider_cost_parameters_heading';
import AverageTimeSpentOnEConsultByDoctor from './provider_cost_parameters/average_time_spent_on_e_consult_by_doctor';
import WageRateForSpecialist from './provider_cost_parameters/wage_rate_for_specialist';
import AverageFringeWageRateForSpecialist from './provider_cost_parameters/average_fringe_wage_rate_for_specialist';
import NumberOfSupportingStaffPerEConsult from './provider_cost_parameters/number_of_supporting_staff_per_e_consult';
import AverageWageRateForSupportingStaff from './provider_cost_parameters/average_wage_rate_for_supporting_staff';
import OtherCostsForEConsult from './provider_cost_parameters/other_costs_for_e_consult';
import AmountForMedicaidConsults from './payer_cost_parameters/amount_for_medicaid_consults';


const  Forms: NextPage = () => {
  const [expandAllSetting, setExpandAllSetting] = useState('');

  return (
    <div>
      <PayerCostParametersHeading {...{setExpandAllSetting}} />
      <AmountForEConsults {...{expandAllSetting}} />
      <AmountForMedicaidConsults {...{expandAllSetting}} />
      <AmountForOfficeVisit {...{expandAllSetting}}/>
      <ProviderCostParametersHeading />
      <AverageTimeSpentOnEConsultByDoctor {...{expandAllSetting}}/>
      <WageRateForSpecialist />
      <AverageFringeWageRateForSpecialist />
      <NumberOfSupportingStaffPerEConsult />
      <AverageWageRateForSupportingStaff />
      <OtherCostsForEConsult {...{expandAllSetting}}/>
      <div className="grid mt-12 mx-4 px-6 py-6 md:mx-28">
        <a
          href="/results"
          className="justify-self-end self-center w-fit h-fit px-16 py-4 font-medium rounded-xl text-white text-xl bg-casal-400 hover:bg-casal-400/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </a>
      </div>
    </div>
  )
}

export default Forms;