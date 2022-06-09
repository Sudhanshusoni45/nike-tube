const searchFilter = ({ categoryFilteredVideos, searchQuery }) => {
  if (searchQuery === "") {
    return categoryFilteredVideos;
  } else {
    return categoryFilteredVideos.filter((video) => {
      return video.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }
};

export { searchFilter };
