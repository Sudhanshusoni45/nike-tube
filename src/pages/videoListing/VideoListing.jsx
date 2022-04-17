import { Card, Sidebar } from "../../components";
import "./videoListing.css";
const VideoListing = () => {
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
