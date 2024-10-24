import React from "react";
import Post from "./Post";

const Posts = () => {
  return (
    <div className="sm:py-4 flex flex-col gap-4">
      <Post
        date="25 June 2024"
        caption="Finally I finished my Task Management project,
          featuring both web and mobile applications! 🚀📱🌐 It’s been an
          incredible journey developing tools to help streamline productivity
          and organization."
        image="/posts/post1.png"
      />
      <Post
        date="18 January 2024"
        caption="Excited to share that I’m now Alibaba Cloud certified! Looking forward
          to exploring new possibilities in cloud technology. 📚🌍"
        image="/certs/alibaba.jpg"
      />
      <Post
        date="25 December 2022"
        caption="Proud to have completed the Advent of Cyber 2022 challenge on
          TryHackMe! 🎉🔐 It was an exciting and educational experience diving
          into the world of cybersecurity."
        image="/certs/thm.png"
      />
    </div>
  );
};

export default Posts;
