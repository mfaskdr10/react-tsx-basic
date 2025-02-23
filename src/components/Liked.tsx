import { useState } from "react";

export const Liked = () => {
  const [liked, setliked] = useState(false);

  const handleClick = () => {
    setliked(!liked);
  };

  return (
    <>
      <button onClick={handleClick}>
        {liked ? "Liked" : "Like"}: {liked ? "❤️" : "🔳"}
      </button>
    </>
  );
};
