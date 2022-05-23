import { useEffect } from "react";
import { Navbar, Sidebar } from "../../components";
import { useLiked } from "../../context";
import { useAuth } from "../../context/auth-context";
import { getLikedVideoHandler } from "../../utils/likedVideo/getLikedVideoHandler";
import "./liked.css";
const Liked = () => {
  const {
    authState: { token },
  } = useAuth();
  const { likedState, likedDispatch } = useLiked();
  useEffect(() => getLikedVideoHandler({ token, likedDispatch }), []);
  return (
    <>
      <Navbar />
      <div className="sidebar_likedVideos_container">
        <Sidebar />
        <div>
          {likedState.map((item) => (
            <>
              <h1>{item.title}</h1>
              <img src={item.thumbNail} alt="" />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export { Liked };
