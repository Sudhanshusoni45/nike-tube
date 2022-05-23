const searchFilter = ({ exploreVideos, searchQuery }) => {
  if (searchQuery === "") {
    return exploreVideos;
  } else {
    return exploreVideos.filter((video) => {
      return video.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }
};

export { searchFilter };
