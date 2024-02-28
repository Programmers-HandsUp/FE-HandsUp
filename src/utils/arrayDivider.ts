export const divideArray = <T>(array: T[], size: number): T[][] => {
  return array.reduce((result: T[][], value: T, index: number, array: T[]) => {
    if (index % size === 0) result.push(array.slice(index, index + size));
    return result;
  }, []);
};
