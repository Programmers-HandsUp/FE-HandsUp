const setSearchRecordInLocalStorage = (keyword: string) => {
  console.log(keyword);

  const record = localStorage.getItem("searchKeyword");
  if (record) {
    const recordList = [...JSON.parse(record)];
    if (recordList.length >= 5) {
      recordList.pop();
    }
    recordList.unshift(keyword);
    localStorage.setItem("searchKeyword", JSON.stringify(recordList));
  } else {
    localStorage.setItem("searchKeyword", JSON.stringify([keyword]));
  }
};

export default setSearchRecordInLocalStorage;
