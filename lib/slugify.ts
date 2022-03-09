/**
 * creates a slug from the given text
 * for instance: My Cool Post => my-cool-post
 * note that this function isn't ready for every edge-case (like having parentheses) but it works fine for the API we use in this project
 */
export const slugify = (text: string) => text.replace(/\ /g, "-").toLowerCase();
