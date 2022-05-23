import { useEffect, useState } from "react";
import { Card, Navbar, PlaylistModal, Sidebar } from "../../components";
import { useAuth, useLiked, usePlaylistModal } from "../../context";
import {
  addToLikeVideoHandler,
  categoryFilter,
  getVideosHandler,
  searchFilter,
} from "../../utils";
import "./videoListing.css";
const VideoListing = () => {
  const [exploreVideos, setExploreVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const {
    playlistModalState: { showPlaylistModal },
  } = usePlaylistModal();

  const categoryHandler = (e) => {
    setSelectedCategory((prevCategory) => e.target.value);
  };

  useEffect(() => getVideosHandler(setExploreVideos), []);

  const categoryFilteredVideos = categoryFilter({
    exploreVideos,
    selectedCategory,
  });
  const searchFilteredVideos = searchFilter({
    categoryFilteredVideos,
    searchQuery,
  });

  return (
    <>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {showPlaylistModal ? <PlaylistModal /> : null}
      <div className="category_container">
        <select
          name="videoCategory"
          id="videoCategory"
          onChange={categoryHandler}
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
