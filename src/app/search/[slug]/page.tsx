import SearchBar from "../component/SearchBar";
import ProductCard from "@/app/_component/common/ProductCard";
import SearchFilterModal from "./component/SearchFilter";

interface SearchResultPageProps {
  params: string;
}

const SearchResultPage = ({ params }: SearchResultPageProps) => {
  return (
    <main className="w-[90%] mx-auto">
      <SearchBar />
      <h1>진행중인 경매 상품</h1>
      <div className="flex justify-between">
        <button>필터</button>
        <button>추천순</button>
      </div>
      <ProductCard id={1}>
        <ProductCard.CardImage titleImage="/public/logoIcon.png" />
      </ProductCard>
      <SearchFilterModal />
    </main>
  );
};

export default SearchResultPage;
