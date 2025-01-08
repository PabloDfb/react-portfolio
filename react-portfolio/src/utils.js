// TODO: this function isn't working. Check if it can be fixed, then use it to render all the web images
export const getImageUrl = (path) => {
  return new URL(`../assets/${path}`, import.meta.url).href;
};
