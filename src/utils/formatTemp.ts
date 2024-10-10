export const formatTemp = (tempK: number): string => {
  return (tempK - 273).toFixed();
};
