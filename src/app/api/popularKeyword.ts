const getPopluarKeyword = async (): Promise<string[]> => {
  const request = await fetch(
    "http://localhost:9090/api/search/popularkeyword"
  );

  if (!request.ok) {
    throw new Error("서버 통신 에러");
  }
  return request.json();
};

export default getPopluarKeyword;
