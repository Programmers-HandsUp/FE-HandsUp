"use client";
import RealTimePopluar from "./component/RealTimePopluar";
import RecentSearch from "./component/RecentSearch";
import SearchBar from "./component/SearchBar";

export default function Search() {
  return (
    <main className="w-[90%] mx-auto">
      <SearchBar />
      <RealTimePopluar />
      <RecentSearch />
    </main>
  );
}
