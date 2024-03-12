const setMoneyUnitString = (price: string | number) => {
  if (typeof price === "number") {
    price = price.toString();
  }
  let returnString = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return returnString;
};

export default setMoneyUnitString;
