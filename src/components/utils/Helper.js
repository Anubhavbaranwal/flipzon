export const filterData = (SearchText, allData) => {
  console.log(allData);
  const filtereddata = allData
    .map((res) => res)
    .filter((response) =>
      response?.title?.toLowerCase().includes(SearchText.toLowerCase())
    );
  console.log(filtereddata);
  return filtereddata;
};
export const isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0;
};
