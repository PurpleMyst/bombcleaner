export const createSquareGridTemplate = (side: number): string => {
  const template = [];
  for (let i = 0; i < side; ++i) template.push("auto");
  const templateString = template.join(" ");
  return `${templateString} / ${templateString}`;
};
