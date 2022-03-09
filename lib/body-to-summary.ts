const MAX_BODY_LENGTH = 6;

export const bodyToSummary = (body: string) => {
  const arrayOfWords = body.split(" ");
  if (arrayOfWords.length <= MAX_BODY_LENGTH) {
    return body;
  }
  return arrayOfWords.slice(0, MAX_BODY_LENGTH).join(" ") + ".";
};
