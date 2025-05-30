import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./StoryDetail.css";

function StoryDetail() {
  const { id } = useParams();
  const [story, setStory] = useState(null);

  useEffect(() => {
    fetch(`https://mxpertztestapi.onrender.com/api/sciencefiction/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Full Story Data:", data);
        setStory(data);
      });
  }, [id]);

  if (!story) return <div>Loading...</div>;

  return (
    <div className="story-detail">
      <h1>{story.Title}</h1>

      {/* Main Images */}
      {story.Image?.length > 0 ? (
        <div className="main-images">
          {story.Image.map((img, idx) => (
            <img
              key={idx}
              src={`https://ik.imagekit.io/dev24/${img}`}
              alt="Story"
              className="main-story-image"
            />
          ))}
        </div>
      ) : (
        <p className="no-data">No images available.</p>
      )}

      {/* Story Adventure */}
      {story?.Storyadvenure?.Storytitle && (
        <>
          <h2>{story.Storyadvenure.Storytitle}</h2>
          {story.Storyadvenure.content?.length > 0 ? (
            story.Storyadvenure.content.map((section, index) => (
              <div className="story-section" key={index}>
                <div className="section-images">
                  {section.Storyimage?.map((img, i) => (
                    <img
                      key={i}
                      src={`https://ik.imagekit.io/dev24/${img}`}
                      alt="Section"
                    />
                  ))}
                </div>
                <div className="section-paragraphs">
                  {section.Paragraph?.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="no-data">No adventure content available.</p>
          )}
        </>
      )}

      {/* Word Explore */}
      <h2>Word Explore</h2>
      {story.Wordexplore?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
  {story.Wordexplore.map((word, i) => (
    <div
      className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105 duration-300"
      key={i}
    >
      <h3 className="text-lg font-semibold text-blue-700 mb-3">{word.Storytitle}</h3>

      {word.Storyimage?.[0] && (
        <img
          src={`https://ik.imagekit.io/dev24/${word.Storyimage[0]}`}
          alt={word.Storytitle}
          className="w-full max-w-[200px] rounded-md shadow mb-4"
        />
      )}

      <p className="text-sm text-gray-700 mb-1">
        <strong className="text-gray-800">Storyttext:</strong> {word.Storyttext}
      </p>
      <p className="text-sm text-gray-700 mb-1">
        <strong className="text-gray-800">Storyitext:</strong> {word.Storyitext}
      </p>
      <p className="text-sm text-gray-700 mb-1">
        <strong className="text-gray-800">Synonyms:</strong> {word.Synonyms}
      </p>
      <p className="text-sm text-gray-700 mb-1">
        <strong className="text-gray-800">Antonyms:</strong> {word.Antonyms}
      </p>
      <p className="text-sm text-gray-700">
        <strong className="text-gray-800">Noun:</strong> {word.Noun}
      </p>
    </div>git branch -M main

      ) : (
        <p className="no-data">No Word Explore content.</p>
      )}
<br/>
      {/* Brain Quest */}
      <h2>Brain Quest</h2>
      {story.Brainquest?.length > 0 ? (
        <div className="quiz-section">
          {story.Brainquest.map((q, i) => (
            <div className="quiz-card" key={i}>
              <p><strong>Q{i + 1}:</strong> {q.Question}</p>
              <ul>
                {q.Option?.map((opt, j) => (
                  <li key={j}>{opt}</li>
                ))}
              </ul>
              <p><strong>Answer:</strong> {q.Answer}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-data">No Brain Quest available.</p>
      )}
    </div>
  );
}

export default StoryDetail;
