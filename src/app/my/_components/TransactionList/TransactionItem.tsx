import Timer from "@/app/_component/common/Timer";
import ProductCard from "@/app/_component/common/ProductCard";
import setMoneyUnitString from "@/utils/setMoneyUnitString";
import { DefaultProps } from ".";
import { Purchase, Sale } from "../../types";

interface TransactionItemProps extends DefaultProps {
  transaction: Sale | Purchase;
}

function TransactionItem({
  transaction,
  selectStatus,
  tradeMethod
}: TransactionItemProps) {
  const isPurchase = tradeMethod === "구매";
  const isFinishedSale = tradeMethod === "판매" && selectStatus === "finished";
  const isBiddingSale = tradeMethod === "판매" && selectStatus === "bidding";

  const calculatePrice = () => {
    if (isPurchase) {
      return (transaction as Purchase).biddingPrice;
    } else {
      if (isFinishedSale) return (transaction as Sale).completeBiddingPrice;
      return (transaction as Sale).maxBiddingPrice;
    }
  };

  const calculateDate = () => {
    if (isPurchase) {
      return (transaction as Purchase).tradeTime;
    } else {
      if (isFinishedSale) return (transaction as Sale).auctionCompleteTime;
      return (transaction as Sale).auctionLeftTime;
    }
  };

  const renderDate = () => {
    if (isPurchase || isFinishedSale) return formatDate(calculateDate());
    if (isBiddingSale) {
      return (
        <Timer
          isIcon={false}
          createdAt={new Date("2024-02-29T10:59:59")}
          deadline={new Date(`${calculateDate()}T10:59:59`)}
        />
      );
    }
    return null;
  };

  const formatDate = (dateString: string) => {
    const date = dateString.split("-");
    const year = date[0].substring(2);
    return `${year}/${date[1]}/${date[2]}`;
  };

  return (
    <ProductCard
      key={transaction.auctionId}
      id={transaction.auctionId}>
      <div className="grid grid-cols-6 items-center w-full border-t py-4">
        <ProductCard.CardImage
          titleImage="/assets/logoicon.png"
          imageSize="xsmall"
        />
        <ProductCard.CardTitle className="pl-2 col-span-2 text-base overflow-hidden whitespace-nowrap">
          {transaction.auctionTitle}
        </ProductCard.CardTitle>
        <p className="text-sm col-span-2 text-center">
          <strong>{setMoneyUnitString(calculatePrice())}원</strong>
        </p>
        <p className="text-sm text-[#ABABAB] text-right">{renderDate()}</p>
      </div>
    </ProductCard>
  );
}

export default TransactionItem;
