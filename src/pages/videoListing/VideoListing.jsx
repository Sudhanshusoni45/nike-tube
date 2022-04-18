import { useEffect } from "react";
import { Card, Sidebar } from "../../components";
import { getVideosHandler } from "../../utils";
import "./videoListing.css";
const VideoListing = () => {
  useEffect(() => getVideosHandler(), []);
  return (
    <>
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
