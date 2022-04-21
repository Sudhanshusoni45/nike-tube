import { useEffect, useState } from "react";
import { Card, Sidebar } from "../../components";
import { useAuth, useLiked } from "../../context";
import { addToLikeVideoHandler, getVideosHandler } from "../../utils";
import "./videoListing.css";
const VideoListing = () => {
  const [exploreVideos, setExploreVideos] = useState([]);

  useEffect(() => getVideosHandler(setExploreVideos), []);
  const {
    authState: { token },
  } = useAuth();

  const { likedDispatch } = useLiked();

  const video = {
    _id: 21,
    title: "test video",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    creator: "Nike",
  };

  return (
    <>
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
