/**
 * creates a slug from the given title
 */
export const slugify = (title: string) =>
  title.replace(/\ /g, "-").toLowerCase();
