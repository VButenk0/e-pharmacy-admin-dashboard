export const handleFilterChange = (event, setFilter) => {
  setFilter(event.target.value);
};

export const filteredFunc = (array, filter) => {
  const filtered = array.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  return filtered;
};

export const pageOfCustomersFunc = (filteredArray) =>
  Math.ceil(filteredArray.length / 5);

export const displayedFunc = (filteredArray, page) =>
  filteredArray.slice((page - 1) * 5, page * 5);
