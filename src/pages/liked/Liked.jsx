import { useEffect } from "react";
import { useAuth } from "../../context/auth-context";
import { getLikedVideoHandler } from "../../utils/likedVideo/getLikedVideoHandler";

const Liked = () => {
  const {
    authState: { token },
  } = useAuth();
  useEffect(() => getLikedVideoHandler(token), []);
  return <>Liked</>;
};

export { Liked };
