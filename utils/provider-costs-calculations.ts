const calculateProviderCostsSpace = () => {
  const squareFeet = Number(window.localStorage.getItem('roomSpaceSqFeet')); // Parameters!C98
  const squareFeetCostPerHour = Number(window.localStorage.getItem('costOfSqFtPerHour')); // Parameters!C120

  const result = String(Number(squareFeet * squareFeetCostPerHour).toFixed(2));
  window.localStorage.setItem('providerCostsSpace', result);

  return result;
}

const getTotalSpecialistWageRate = () => {
  const wageRateForSpecialist = Number(window.localStorage.getItem('specialistWageRate')); // Parameters!C104
  const fringeWageRateForSpecialist = Number(window.localStorage.getItem('averageFringeSpecialistWageRate')); // Parameters!C106

  return wageRateForSpecialist + fringeWageRateForSpecialist;
}

const calculateProviderCostsSpecialistTime = () => {
  const totalSpecialistWageRate = getTotalSpecialistWageRate();
  const numOfDoctors = Number(window.localStorage.getItem('numOfDoctors')); // Parameters!C96

  const result = String(Number(totalSpecialistWageRate * numOfDoctors).toFixed(2));
  window.localStorage.setItem('providerCostsSpecialistTime', result);

  return result;
}

const getTotalNurseWageRate = () => {
  const wageRateForNurse = Number(window.localStorage.getItem('averageWageRateForSupportingStaff')); // Parameters!C112
  const fringeWageRateForNurse = Number(window.localStorage.getItem('averageFringeWageRateForSupportingStaff')); // Parameters!C114

  return wageRateForNurse + fringeWageRateForNurse;
}

const calculateProviderCostsNursesTime = () => {
  const totalNurseWageRate = getTotalNurseWageRate();
  const numOfNurses = Number(window.localStorage.getItem('numOfSupportingStaff')); // Parameters!C96

  const result = String(Number(totalNurseWageRate * numOfNurses).toFixed(2));
  window.localStorage.setItem('providerCostsNursesTime', result);

  return result;
}

const calculateProviderCostsAdministrative = () => {
  const weightedTimeAverage = Number(window.localStorage.getItem('averageTimeSpentAdministrativeWork')); // Parameters!D128
  const nurseTimePercentage = Number(window.localStorage.getItem('supportingStaffPercentage')) / 100; // Parameters!C132
  const specialistTimePercentage = Number(window.localStorage.getItem('specialistPercentage')) / 100; // Parameters!B132
  const totalNurseWageRate  = getTotalNurseWageRate();
  const totalSpecialistWageRate = getTotalSpecialistWageRate();

  const result = String(Number(specialistTimePercentage * (weightedTimeAverage * totalSpecialistWageRate) + nurseTimePercentage * (weightedTimeAverage * totalNurseWageRate)).toFixed(2));
  window.localStorage.setItem('providerCostsAdministrative', result);

  return result;
}

export const calculateProviderCostsEConsultTotal = () => {
  const equipementCosts = Number(window.localStorage.getItem('equipmentTechPerHour')); // Parameters!C116
  const phoneInternetCosts = Number(window.localStorage.getItem('phoneInternetPerHour')); // Parameters!C118
  const spaceCost = Number(calculateProviderCostsSpace());
  const specialistTimeCost = Number(calculateProviderCostsSpecialistTime());
  const nurseTimeCost = Number(calculateProviderCostsNursesTime());
  const administrativeCost = Number(calculateProviderCostsAdministrative());
  const weightedTimeAverage = Number(window.localStorage.getItem('averageTimeSpentOnEConsultByDoctor')); // Parameters!C92

  const result = String(Number((equipementCosts + phoneInternetCosts + spaceCost + specialistTimeCost + nurseTimeCost + administrativeCost) * (weightedTimeAverage/60)).toFixed(2));
  window.localStorage.setItem('providerCostsEConsultTotal', result);

  return result;
}
