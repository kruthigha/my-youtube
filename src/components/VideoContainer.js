import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import Video, { AdVideo } from "./Video";
import { Link } from "react-router-dom";

const VideoContainer = ({ search }) => {
  console.log("VC", search);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    try {
      async function fetchAPI() {
        const response = await fetch(YOUTUBE_API);
        const data = await response.json();
        setVideos(data.items);
      }
      fetchAPI();
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div className="flex flex-wrap m-2 p-2">
      <AdVideo info={videos[10]} />
      {videos
        .filter((v) => {
          if (!search) return true;
          const { title } = v.snippet;
          return title.toLowerCase().includes(search.toLowerCase());
        })
        .map((v) => {
          return (
            <Link to={"/watch?v=" + v.id} key={v.id}>
              <Video info={v} />
            </Link>
          );
        })}
    </div>
  );
};

export default VideoContainer;
