import { useEffect, useState } from "react";
import { Card, PlaylistModal, Sidebar } from "../../components";
import { useAuth, useLiked, usePlaylistModal } from "../../context";
import { addToLikeVideoHandler, getVideosHandler } from "../../utils";
import "./videoListing.css";
const VideoListing = () => {
  const [exploreVideos, setExploreVideos] = useState([]);
  const {
    playlistModalState: { showPlaylistModal },
  } = usePlaylistModal();
  useEffect(() => getVideosHandler(setExploreVideos), []);

  return (
    <>
      {showPlaylistModal ? <PlaylistModal /> : null}
      <div className="sidebar_videogrid_container">
        <Sidebar />
        <div className="videoCard_grid">
          {exploreVideos.length !== 0
            ? exploreVideos.map(({ _id, title, channelName, thumbNail }) => (
                <li key={_id} className="list_reset">
                  <Card
                    _id={_id}
                    title={title}
                    channelName={channelName}
                    thumbNail={thumbNail}
                  />
                </li>
              ))
            : null}
        </div>
      </div>
    </>
  );
};

export { VideoListing };
