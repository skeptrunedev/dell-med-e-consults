
import type { NextPage } from 'next'
import { useState } from 'react';
import PayerCostParametersHeading from './payer_cost_parameters/payer_cost_parameters_heading';
import AmountForOfficeVisit from './payer_cost_parameters/amount_for_office_visits';
import AmountForEConsults from './payer_cost_parameters/amount_for_e_consults';


const  Forms: NextPage = () => {
  const [expandAllSetting, setExpandAllSetting] = useState('');

  return (
    <div>
      <PayerCostParametersHeading {...{setExpandAllSetting}} />
      <AmountForEConsults {...{expandAllSetting}} />
      <AmountForOfficeVisit {...{expandAllSetting}}/>
    </div>
  )
}

export default Forms;