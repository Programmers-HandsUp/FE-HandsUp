/** 만, 천 단위로 표현 */
export const formatPriceWithUnits = (money: number) => {
  let price = "";

  const tenThousand = Math.floor(money / 10000);
  const thousand = Math.floor((money % 10000) / 1000);
  const remainder = Math.floor(money % 1000);

  if (tenThousand > 0) {
    price += `${tenThousand}만`;
  }

  if (thousand > 0) {
    price += `${thousand}천`;
  }

  if (remainder > 0) {
    price += `${remainder}`;
  }

  return price;
};
