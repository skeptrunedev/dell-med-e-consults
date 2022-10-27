import { round, isNumber, toNumber } from "lodash";

export const DetermineErrorStateForWholeNumbers = (input: number): { correctedInput: number; valid: boolean } => {
  const decimalPlaces = (input.toString().split(".")[1] || []).length;
  const valid = decimalPlaces == 0;

  const correctedInput = round(input, 0);
  return { correctedInput, valid };
};


export const DetermineErrorStateForTwoDecimals = (
  input: number
): { correctedInput: number; valid: boolean } => {
  if (input < 0) {
    // if the percent is less than 0, set it to 0
    return { correctedInput: 0, valid: false };
  }

  // get the number of decimal places on the percent
  const decimalPlaces = (input.toString().split(".")[1] || []).length;

  if (decimalPlaces > 2) {
    // if there are more than two decimal places, round to two decimal places
    return { correctedInput: round(input, 2), valid: false };
  }

  return { correctedInput: input, valid: true };
};

export const DetermineErrorStateForPercent = (
  input: number
): { correctedInput: number; valid: boolean } => {
  const { correctedInput, valid } = DetermineErrorStateForTwoDecimals(input);

  if (correctedInput > 100) {
    // if the percent is greater than 100, set it to 100
    return { correctedInput: 100, valid: false };
  }

  return { correctedInput: input, valid };
};

export const DetermineErrorStateForTextTwoDecimals = (
  input: string
): { correctedInput: string; valid: boolean } => {
  if(isNaN(Number(input))) {
    return {correctedInput: input, valid: false}
  }

  const { correctedInput, valid } = DetermineErrorStateForTwoDecimals(toNumber(input));

  return { correctedInput: correctedInput.toString(), valid };
}

export const DetermineErrorStateForTextPercent = (
  input: string
): { correctedInput: string; valid: boolean } => {
  if(isNaN(Number(input))) {
    return {correctedInput: input, valid: false}
  }

  const { correctedInput, valid } = DetermineErrorStateForPercent(toNumber(input));

  return { correctedInput: correctedInput.toString(), valid };
}

export const DetermineErrorStateForTextWholeNumbers = (
  input: string
): { correctedInput: string; valid: boolean } => {
  if(isNaN(Number(input))){
    return {correctedInput: input, valid: false}
  }

  const { correctedInput, valid } = DetermineErrorStateForWholeNumbers(toNumber(input));

  return { correctedInput: correctedInput.toString(), valid };
}
