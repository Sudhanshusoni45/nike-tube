import { useParams } from "react-router-dom";

const SinglePlaylist = () => {
  const { playlistId } = useParams();
  return <>Single PlaylistId: {playlistId}</>;
};

export { SinglePlaylist };
