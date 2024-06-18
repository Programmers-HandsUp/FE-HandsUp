"use client";
import React, { useState } from "react";

import Modal from "@/app/_component/common/Modal";
import useModalState from "@/app/_hooks/useModalState";

import SearchFilterModal from "./_component/searchFilter";
import SearchHeader from "./_component/SearchHeader";

export const SearchOptionContext = React.createContext({
  alignOption: "",
  filterOptions: {} as Record<string, string | number | null> | undefined
});

export default function MainPageLayout({
  children
}: {
  children: React.ReactElement;
}) {
  const [filterOptions, setFilterOptions] =
    useState<Record<string, string | number | null>>();
  const [alignOption, setAlignOption] = useState("마감 임박 순");
  const { open, isOpen, close } = useModalState();

  const value = {
    alignOption,
    filterOptions
  };

  return (
    <SearchOptionContext.Provider value={value}>
      <section>
        <header>
          <SearchHeader
            filterModalOpen={open}
            setAlignOption={setAlignOption}
            alignOption={alignOption}
          />
        </header>
        {children}
        <Modal
          className="dark:bg-black"
          modalType="fullScreen"
          animate="slide"
          isOpen={isOpen}
          close={close}>
          <SearchFilterModal
            setFilterOption={(
              newFilterOptions?: Record<string, string | number | null>
            ) => setFilterOptions(newFilterOptions)}
            closeModal={close}
          />
        </Modal>
      </section>
    </SearchOptionContext.Provider>
  );
}
