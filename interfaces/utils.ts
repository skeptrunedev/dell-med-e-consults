import { Dispatch } from "react";

export interface LargeInputProps {
  label: string,
  placeholder: string,
  value: string,
  setValue: Dispatch<string>,
  type: string,
  errored: boolean,
  disabled: boolean
}

export interface SmallInputProps {
  placeholder: string,
  value: string,
  setValue: Dispatch<string>,
  type: string,
  errored: boolean,
  disabled: boolean
}

export interface DecisionTreeInputProps {
  placeholder: string,
  value: string,
  setValue: Dispatch<string>,
  type: string,
  errored: boolean,
  disabled: boolean,
  borderColor: string
}
