import AllReviews from "../_components/AllReviews";
import TransactionList from "../_components/TransactionList";

function MyPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  if (slug === "profile-edit") {
    return;
  } else if (slug === "review") {
    return <AllReviews />;
  } else if (slug === "buying") {
    return <TransactionList tradeMethod="구매" />;
  } else if (slug === "selling") {
    return <TransactionList tradeMethod="판매" />;
  }
}

export default MyPage;
