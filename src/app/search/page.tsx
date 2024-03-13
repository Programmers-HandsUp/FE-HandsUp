"use client";
import RealTimePopluar from "./_component/RealTimePopluar";
import RecentSearch from "./_component/RecentSearch";
import SearchBar from "./_component/SearchBar";

export default function Search() {
  return (
    <main className="w-[90%] mx-auto">
      <SearchBar />
      <RealTimePopluar />
      <RecentSearch />
    </main>
  );
}
