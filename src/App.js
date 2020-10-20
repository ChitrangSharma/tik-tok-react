import React, { useRef, useState, useEffect } from "react";
import Video from "./Video";
import db from "./firebase";

import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="App">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, share }) => (
            <Video
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              share={share}
            />
          )
        )}
        {/* <Video
          url=""
          channel="rafequazi"
          description="this is a song"
          song="this is a song"
          likes={123}
          messages={400}
          share={44}
        /> */}
        {/* <Video />
        <Video />
        <Video /> */}
      </div>
    </div>
  );
}

export default App;
