export const createSquareGridTemplate = (side: number): string => {
  const template = [];
  for (let i = 0; i < side; ++i) template.push("auto");
  const templateString = template.join(" ");
  return `${templateString} / ${templateString}`;
};

// https://stackoverflow.com/a/12646864
export const shuffle = (array: unknown[]) => {
  for (let i = array.length - 1; i > 0; --i) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
