export const filterUseEffect = (array, filter) => {
  const filtered = filter
    ? array.filter((customer) =>
        customer.name.toLowerCase().includes(filter.toLowerCase())
      )
    : array;
  return filtered;
};

// useEffect(() => {
//   const filtered = filter
//     ? customers.filter((customer) =>
//         customer.name.toLowerCase().includes(filter.toLowerCase())
//       )
//     : customers;
//   setFilteredCustomers(filtered);
// }, [filter, customers]);

// const handleFilterChange = (event) => {
//   setFilter(event.target.value);
// };

export const filteredFunc = (array, filter) => {
  const filtered = array.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  return filtered;
};

export const handlePageChange = (value) => {
  dispatch(changePaginPage(value));
};

export const pageOfCustomersFunc = (filteredArray) =>
  Math.ceil(filteredArray.length / 5);

export const displayedCustomersFunc = (filteredArray, page) =>
  filteredArray.slice((page - 1) * 5, page * 5);
