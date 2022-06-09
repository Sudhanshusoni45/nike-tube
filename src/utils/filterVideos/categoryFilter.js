const categoryFilter = ({ exploreVideos, selectedCategory }) => {
  if (!selectedCategory) {
    return exploreVideos;
  } else {
    return exploreVideos.filter(
      ({ category }) => category === selectedCategory
    );
  }
};

export { categoryFilter };
