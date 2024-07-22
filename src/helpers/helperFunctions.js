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

export const fetchImages = async (array, setImages, defaultCustomer) => {
  const imageStatus = {};
  const removedImageUrl = "https://i.imgur.com/removed.png";

  const promises = array.map(async (item) => {
    let imageUrl = item.image || item.photo;

    if (imageUrl) {
      try {
        const response = await fetch(imageUrl);
        if (response.ok && response.url !== removedImageUrl) {
          imageStatus[item._id] = imageUrl;
        } else {
          imageStatus[item._id] = defaultCustomer;
        }
      } catch (error) {
        imageStatus[item._id] = defaultCustomer;
      }
    } else {
      imageStatus[item._id] = defaultCustomer;
    }
  });

  await Promise.all(promises);
  setImages(imageStatus);
};
