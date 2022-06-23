import Dexie from 'dexie';

export interface Code {
  id?: number,
  code: string,
  code_details: string,
  CMS_non_facility_price: number,
  percentage_of_total_visits: number,
  avg_physician_time_spent: number,
}

export interface GeneralInformation {
  id?: number,
  // amount for e consult
  amount_for_e_consult_percentage: Number,
  amount_for_e_consult_time_spent: Number,
  // amount for office visit
  medicare_fee: Number,
  medicare_percentage: Number,
  commercial_fee: Number,
  commercial_percentage: Number,
  other_insurance_fee: Number,
  other_insurance_percentage: Number,
  amount_for_office_visit: Number,
  // average time spent on e-consult by doctor
  time_spent_on_e_consult: Number,
  sevent_point_five: Number,
  fifteen: Number,
  twenty_five: Number,
  fourty_five: Number
  // wage rate for specialist per hour
  wage_rate_specialist: Number,
  // average fringe wage rate for specialist per hour
  average_fringe_wage_rate_specialist: Number,
  // number of supporting staff per e-consult
  supporting_staff_per_consult: Number,
  // average wage rate for supporting staff per hour
  wage_rate_for_supporting_staff: Number,
  // average fringe wage rate for supporting staff
  fringe_wage_rate_for_supporting_staff: Number,
  // other costs for e-consult
  other_cost_equipment: Number,
  other_cost_phone_internet: Number,
  other_cost_room_space: Number,
  other_cost_of_space: Number,
}

export class MyAppDatabase extends Dexie {
  codes!: Dexie.Table<Code, number>;
  general_information!: Dexie.Table<GeneralInformation, number>;

  constructor() {
    super("MyAppDatabase");

    //
    // Define tables and indexes
    // (Here's where the implicit table props are dynamically created)
    //
    this.version(1).stores({
      codes: '++id, code, code_details, CMS_non_facility_price, percentage_of_total_visits',
      general_information: '++id, amount_for_e_consult_percentage, amount_for_e_consult_time_spent, amount_for_office_visit, other_insurance_percentage, other_insurance_fee, commercial_percentage, commercial_fee, medicare_percentage, medicare_fee, fourty_five, twenty_five, fifteen, sevent_point_five, time_spent_on_e_consult, fringe_wage_rate_for_supporting_staff, wage_rate_for_supporting_staff, supporting_staff_per_consult, average_fringe_wage_rate_specialist, wage_rate_specialist, other_cost_of_space, other_cost_room_space, other_cost_phone_internet, other_cost_equipment',
    });
  }
}

export const db = new MyAppDatabase();
