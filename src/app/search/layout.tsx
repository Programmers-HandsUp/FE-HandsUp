"use client";

import SearchBar from "./_component/SearchBar";

export default function MainPageLayout({
  children
}: {
  children: React.ReactElement;
}) {
  return (
    <section>
      <header className="w-fit mx-auto">
        <SearchBar />
      </header>
      {children}
    </section>
  );
}
