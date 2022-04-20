import ReactPlayer from "react-player";

const SingleVideoPage = () => {
  return (
    <>
      <p>Single vid page</p>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=4VxdufqB9zg"
        controls={true}
      />
      <i className="fas fa-thumbs-up"></i>
    </>
  );
};

export { SingleVideoPage };
