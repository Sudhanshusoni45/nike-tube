import "./playlistTile.css";

const PlaylistTile = ({ title }) => {
  return (
    <>
      <div className="playlistTile">
        <h3>{title}</h3>
      </div>
    </>
  );
};

export { PlaylistTile };
