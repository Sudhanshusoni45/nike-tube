import { useEffect } from "react";
import { useLiked } from "../../context";
import { useAuth } from "../../context/auth-context";
import { getLikedVideoHandler } from "../../utils/likedVideo/getLikedVideoHandler";

const Liked = () => {
  const {
    authState: { token },
  } = useAuth();
  const { likedState, likedDispatch } = useLiked();
  useEffect(() => getLikedVideoHandler({ token, likedDispatch }), []);
  console.log(likedState);
  return <>Liked</>;
};

export { Liked };
