import { useEffect, useState } from "react";
import StoryCard from "../StoryCardComponent/StoryCard";
import "./Home.css";

function Home() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://mxpertztestapi.onrender.com/api/sciencefiction")
      .then((res) => res.json())
      .then((data) => {
        setStories(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">Science Fiction Stories</h1>

      {loading ? (
        <p className="loading">Loading stories...</p>
      ) : stories.length === 0 ? (
        <p className="no-stories">No stories found.</p>
      ) : (
        <div className="card-grid">
          {stories.map((story) => (
            <StoryCard key={story._id} story={story} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
