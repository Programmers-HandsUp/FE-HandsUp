"use client";
import RealTimePopular from "./_component/RealTimePopular";
import RecentSearch from "./_component/RecentSearch";
import SearchBar from "./_component/SearchBar";

export default function Search() {
  return (
    <main className="w-[90%] mx-auto">
      <SearchBar />
      <RealTimePopular />
      <RecentSearch />
    </main>
  );
}
