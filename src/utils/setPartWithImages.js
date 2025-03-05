export const setPartsWithImages = (elements, count) => {
  const selectedImages = [];
  for (let i = 0; i < elements.length; i += count) {
    selectedImages.push(elements.slice(i, i + count));
  }
  return selectedImages;
};
