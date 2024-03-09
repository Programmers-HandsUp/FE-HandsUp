import { DefaultProps } from ".";

const SALE_LABEL = {
  bidding: ["최고 입찰가", "남은 시간"],
  pending: ["최고 입찰가", "-"],
  finished: ["낙찰가", "날짜"]
};

function TransactionListHeader({ tradeMethod, selectStatus }: DefaultProps) {
  const headers =
    tradeMethod === "판매" ? SALE_LABEL[selectStatus] : ["구매 희망가", "날짜"];

  const [priceHeader, dateHeader] = headers;

  return (
    <div className="grid grid-cols-4 text-sm text-end py-2 px-1">
      <p className="col-start-3">{priceHeader}</p>
      <p>{dateHeader}</p>
    </div>
  );
}

export default TransactionListHeader;
