import "./card.css";

const Card = () => {
  return (
    <div className="videoCard_container">
      <div className="videoCard"></div>
      <div className="videoCard_body">
        <img
          src="https://picsum.photos/200/300"
          alt=""
          className="avatar videoCard_thumbnail"
        />
        <div className="videoCard_body_content">
          <h3>Lorem ipsum dolor</h3>
          <small>Channel name</small>
          <div>
            <small>112 views</small>
            <small> • </small>
            <small>7 days ago</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };
