"use client";
import RealTimePopular from "./_component/RealTimePopular";
import RecentSearch from "./_component/RecentSearch";

export default function Search() {
  return (
    <main className="w-[90%] mx-auto flex flex-col gap-6">
      <RealTimePopular />
      <RecentSearch />
    </main>
  );
}
