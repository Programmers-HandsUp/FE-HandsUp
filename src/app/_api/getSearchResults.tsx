export const getSearchResults = async (
  searchKeyword: string,
  pageParam: number
) => {
  const res = await fetch(
    `http://localhost:9090/api${searchKeyword}?page=${pageParam}&size=5`
  );
  return await res.json();
};
