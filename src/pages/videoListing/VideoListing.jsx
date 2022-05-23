import { useEffect, useState } from "react";
import { Card, Navbar, PlaylistModal, Sidebar } from "../../components";
import { useAuth, useLiked, usePlaylistModal } from "../../context";
import {
  addToLikeVideoHandler,
  getVideosHandler,
  searchFilter,
} from "../../utils";
import "./videoListing.css";
const VideoListing = () => {
  const [exploreVideos, setExploreVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const {
    playlistModalState: { showPlaylistModal },
  } = usePlaylistModal();

  useEffect(() => getVideosHandler(setExploreVideos), []);

  const searchFilteredVideos = searchFilter({ exploreVideos, searchQuery });

  return (
    <>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {showPlaylistModal ? <PlaylistModal /> : null}
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
