import type { IReadTime } from "../types/read-time";

export const calculateReadTime = (body: string): IReadTime => {
  const wordsCount = body.split(" ").length;
  const mins = Math.ceil(wordsCount / 5);
  const degree = Math.ceil(mins / 4);
  return { mins, degree };
};
