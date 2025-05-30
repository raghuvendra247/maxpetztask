import { Link } from "react-router-dom";
import "./StoryCard.css";

function StoryCard({ story }) {
  return (
    <div className="story-card">
      {story?.Image?.length > 0 && (
        <img
          src={
            story?.Image?.length > 0
              ? `https://ik.imagekit.io/dev24/${story.Image[0]}`
              : "/images/story.jpeg"
          }
          alt={story?.Title || "Story"}
          className="story-image"
        />

      )}
      <div className="story-content">
        <h2 className="story-title">{story?.Title}</h2>
        <p className="story-description">
          {story?.Short_Description?.slice(0, 100)}...
        </p>
        <Link to={`/story/${story._id}`} className="story-button">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default StoryCard;
















