import { format } from "date-fns";

const BASE_DATE = 1600000000000; // Sun Sep 13 2020 16:56:40 GMT+0430 (Iran Standard Time)

/**
 * creates a dummy date based on the ID
 */
export const idToDate = (id: number) => new Date(id * 100000000 + BASE_DATE);

/**
 * creates a user-friendly date string
 */
export const formatDate = (date: Date) => format(date, "MMMM dd, yyyy");
