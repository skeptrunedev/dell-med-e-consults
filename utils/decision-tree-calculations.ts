// This is for e-consultation purposes
export const calculatePayerPerspectiveCallPatient = () => {

}

// DecisionTree!L20
export const calculatePayerCostScheduleAppointmentCallPatient = () => {
  const amountForEConsultsWeightedCostPerVisit = Number(window.localStorage.getItem('amountForEConsultsWeightedCostPerVisit')); // DecisionTree!Q7
  const doNotShowInPerson = 0; // DecisionTree!Q13
  const costsPayorOne = amountForEConsultsWeightedCostPerVisit + doNotShowInPerson; // DecisionTree!Q19
  const noShowPercentage = Number(window.localStorage.getItem('patientNoShowCallPatientEConsult')) / 100; // DecisionTree!N19
  const eConsultUpside = costsPayorOne * noShowPercentage;
  
  const amountForOfficeVisit = Number(window.localStorage.getItem('amountForOfficeVisit')); // DecisionTree!Q21
  console.log("Q21: ", amountForOfficeVisit)
  const showPercentage = Number(window.localStorage.getItem('patientShowsCallPatientEConsult')) / 100; // DecisionTree!N22
  const officeVisitUpside = amountForOfficeVisit * showPercentage;
  console.log("Q21 * N22: ", officeVisitUpside)

  const result = String(Number(eConsultUpside + officeVisitUpside).toFixed(2));
  window.localStorage.setItem('payerCostScheduleAppointmentCallPatientDT', result); // DecisionTree!L20

  return result;
}

// DecisionTree!J23
export const calculatePayerCostCallPatient = () => {
  const payerCostScheduleAppointment = calculatePayerCostScheduleAppointmentCallPatient(); // DecisionTree!L20
  console.log("L20: ", payerCostScheduleAppointment)
  const payerCostScheduleAppointmentPercentage = Number(window.localStorage.getItem('scheduleAppointmentCallPatient')) / 100; // DecisionTree!K22
  const payerCostScheduleAppointmentUpside = Number(payerCostScheduleAppointment) * payerCostScheduleAppointmentPercentage;

  const reccToPCP = Number(window.localStorage.getItem('amountForEConsultsWeightedCostPerVisit')) // DecisionTree!Q7 & Q29 - Parameters!E66
  const reccToPCPPercentage = Number(window.localStorage.getItem('recommendPhysicianCallPatient')) / 100; // DecisionTree!K28
  const reccToPCPUpside = reccToPCP * reccToPCPPercentage;

  const doNothing = Number(window.localStorage.getItem('amountForEConsultsWeightedCostPerVisit')); // DecisionTree!Q7
  const doNothingPercentage = Number(window.localStorage.getItem('noActionCallPatient')) / 100;
  const doNothingUpside = doNothing * doNothingPercentage;

  const result = String(Number(payerCostScheduleAppointmentUpside + reccToPCPUpside + doNothingUpside).toFixed(2));
  window.localStorage.setItem('payerCostCallPatientDT', result);

  return result;
}

// DecisionTree!L35
export const calculatePayerCostScheduleAppointmentDoNotCallPatient = () => {
  const doNothing = Number(window.localStorage.getItem('amountForEConsultsWeightedCostPerVisit')); // DecisionTree!Q7
  const doNothingPercentage = Number(window.localStorage.getItem('patientNoShowDoNotCallPatientEConsult')) / 100;
  const doNothingUpside = doNothing * doNothingPercentage;

  const amountForOfficeVisit = Number(window.localStorage.getItem('amountForOfficeVisit')); // DecisionTree!Q8
  const amountForOfficeVisitPercentage = Number(window.localStorage.getItem('patientShowsDoNotCallPatientEConsult')) / 100; // DecisionTree!N34
  const amountForOfficeVisitUpside = amountForOfficeVisit * amountForOfficeVisitPercentage;

  const result = String(Number(doNothingUpside + amountForOfficeVisitUpside).toFixed(2));
  window.localStorage.setItem('payerCostScheduleAppointmentDoNotCallPatientDT', result);

  return result;
}

// DecisionTree!J38
export const calculatePayerCostDoNotCallPatient = () => {
  const payerCostScheduleAppointment = Number(calculatePayerCostScheduleAppointmentDoNotCallPatient()); // DecisionTree!L35
  const payerCostScheduleAppointmentPercentage = Number(window.localStorage.getItem('scheduleAppointmentDoNotCallPatient')) / 100; // DecisionTree!L37
  const payerCostScheduleAppointmentUpside = payerCostScheduleAppointment * payerCostScheduleAppointmentPercentage;

  const reccToPCP = 36.34 // DecisionTree!Q11 & Q29
  const reccToPCPPercentage = Number(window.localStorage.getItem('recommendPhysicianDoNotCallPatient')) / 100; // DecisionTree!K44
  const reccToPCPUpside = reccToPCP * reccToPCPPercentage;

  const result = String(Number(payerCostScheduleAppointmentUpside + reccToPCPUpside).toFixed(2));
  window.localStorage.setItem('payerCostDoNotCallPatientDT', result);

  return result;
}

export const calculatePayerCostEConsult = () => {
  const payerCostCallPatient = Number(calculatePayerCostCallPatient()); // DecisionTree!J23
  const payerCostCallPatientPercentage = Number(window.localStorage.getItem('callPatient')) / 100; // DecisionTree!I25
  const payerCostCallPatientUpside = payerCostCallPatient * payerCostCallPatientPercentage;

  const payerCostDoNotCallPatient = Number(calculatePayerCostDoNotCallPatient()); // DecisionTree!J38
  const payerCostDoNotCallPatientPercentage = Number(window.localStorage.getItem('doNotCallPatient')) / 100; // DecisionTree!I41
  const payerCostDoNotCallPatientUpside = payerCostDoNotCallPatient * payerCostDoNotCallPatientPercentage;
  
  const result = String(Number(payerCostCallPatientUpside + payerCostDoNotCallPatientUpside).toFixed(2));
  window.localStorage.setItem('payerCostEConsultDT', result);

  return result;
}

export const calculatePayerCostScheduleAppointmentUsualCare = () => {
  const amountForOfficeVisit = Number(window.localStorage.getItem('amountForOfficeVisit')); // DecisionTree!Q8
  const amountForOfficeVisitPercentage = Number(window.localStorage.getItem('patientShowsUsualCare')) / 100; // DecisionTree!N34
  const amountForOfficeVisitUpside = amountForOfficeVisit * amountForOfficeVisitPercentage;

  const result = String(Number(amountForOfficeVisitUpside).toFixed(2));
  window.localStorage.setItem('payerCostScheduleAppointmentUsualCareDT', result);

  return result;
}

export const calculatePayerCostUsualCare = () => {
  const payerCostScheduleAppointment = Number(calculatePayerCostScheduleAppointmentUsualCare()); // DecisionTree!L40
  const payerCostScheduleAppointmentPercentage = Number(window.localStorage.getItem('scheduleAppointmentUsualCare')) / 100;
  const payerCostScheduleAppointmentUpside = payerCostScheduleAppointment * payerCostScheduleAppointmentPercentage;

  const result = String(Number(payerCostScheduleAppointmentUpside).toFixed(2));
  window.localStorage.setItem('payerCostUsualCareDT', result);

  return result;
}

export const calculateDecisionTreeAveragedOverProgram = () => {
  const payerCostDoNotCallPatientPercentage = Number(window.localStorage.getItem('doNotCallPatient')) / 100; // DecisionTree!I41
  const payerCostScheduleAppointmentDoNotCallPatientPercentage = Number(window.localStorage.getItem('scheduleAppointmentDoNotCallPatient')) / 100; // DecisionTree!L37
  const valOne = payerCostDoNotCallPatientPercentage * payerCostScheduleAppointmentDoNotCallPatientPercentage;

  const payerCostCallPatientPercentage = Number(window.localStorage.getItem('callPatient')) / 100; // DecisionTree!I25
  const payerCostScheduleAppointmentCallPatientPercentage = Number(window.localStorage.getItem('scheduleAppointmentCallPatient')) / 100; // DecisionTree!K22
  const valTwo = payerCostCallPatientPercentage * payerCostScheduleAppointmentCallPatientPercentage;

  const result = String(Number((1 - valOne - valTwo)).toFixed(2));

  return result;
}
