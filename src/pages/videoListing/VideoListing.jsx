import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, Navbar, PlaylistModal, Sidebar } from "../../components";
import { usePlaylistModal } from "../../context";
import { selectPlaylistModal } from "../../redux/slice/playlistModalSlice";
import { categoryFilter, getVideosHandler, searchFilter } from "../../utils";
import "./videoListing.css";
const VideoListing = () => {
  const [exploreVideos, setExploreVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  // const {
  //   playlistModalState: { showPlaylistModal },
  // } = usePlaylistModal();

  const categoryHandler = (e) => {
    setSelectedCategory((prevCategory) => e.target.value);
  };

  const { showPlaylistModal } = useSelector(selectPlaylistModal);

  const categoryFilteredVideos = categoryFilter({
    exploreVideos,
    selectedCategory,
  });

  const searchFilteredVideos = searchFilter({
    categoryFilteredVideos,
    searchQuery,
  });

  useEffect(() => getVideosHandler(setExploreVideos), []);

  return (
    <>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {showPlaylistModal ? <PlaylistModal /> : null}
      <div className="category_container">
        <select
          name="videoCategory"
          id="videoCategory"
          onChange={categoryHandler}
          className="category_filter"
        >
          <option value="">view all</option>
          <option value="jordan">jordan</option>
          <option value="selfLacing">self lacing</option>
          <option value="official">nike official</option>
        </select>
      </div>
      <div className="sidebar_videogrid_container">
        <Sidebar />
        <div className="videoCard_grid">
          {searchFilteredVideos.length !== 0
            ? searchFilteredVideos.map(
                ({ _id, title, channelName, thumbNail }) => (
                  <li key={_id} className="list_reset">
                    <Card
                      _id={_id}
                      title={title}
                      channelName={channelName}
                      thumbNail={thumbNail}
                    />
                  </li>
                )
              )
            : null}
        </div>
      </div>
    </>
  );
};

export { VideoListing };
