import type { IReadTime } from "../types/read-time";

/**
 * calculates the estimated read time depending on the length of the body
 * please note that this is just a dummy function
 */
export const calculateReadTime = (body: string): IReadTime => {
  const wordsCount = body.split(" ").length;
  const mins = Math.ceil(wordsCount / 5);
  const degree = Math.ceil(mins / 4);
  return { mins, degree };
};
