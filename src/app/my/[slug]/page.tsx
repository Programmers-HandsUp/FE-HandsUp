import AllReviews from "../_components/AllReviews";
import TransactionList from "../_components/TransactionList";

type Slug = "review" | "buying" | "selling";
function MyPage({ params }: { params: { slug: Slug } }) {
  const { slug } = params;

  const componentMap: Record<Slug, JSX.Element> = {
    review: <AllReviews />,
    buying: <TransactionList tradeMethod="구매" />,
    selling: <TransactionList tradeMethod="판매" />
  };

  return componentMap[slug] || null;
}

export default MyPage;
