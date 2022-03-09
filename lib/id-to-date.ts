import { format } from "date-fns";

const BASE_DATE = 1646000000000; // Mon Feb 28 2022 01:43:20 GMT+0330 (Iran Standard Time)

/**
 * creates a dummy date based on the ID
 */
export const idToDate = (id: number) =>
  format(new Date(id * 100000000 + BASE_DATE), "MMMM dd, yyyy");
