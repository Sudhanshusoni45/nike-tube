import { useEffect } from "react";
import { Card, Sidebar } from "../../components";
import { useAuth, useLiked } from "../../context";
import { addToLikeVideoHandler, getVideosHandler } from "../../utils";
import "./videoListing.css";
const VideoListing = () => {
  useEffect(() => getVideosHandler(), []);
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
      <button
        className="btn"
        onClick={() => addToLikeVideoHandler({ video, likedDispatch, token })}
      >
        Test add to Like
      </button>
      <div className="sidebar_videogrid_container">
        <Sidebar />
        <div className="videoCard_grid">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export { VideoListing };
