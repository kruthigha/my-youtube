import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import Video, { AdVideo } from "./Video";
import { Link } from "react-router-dom";

const VideoContainer = ({ search }) => {
  console.log("VC", search);
  const [videos, setVideos] = useState([]);
  const [page,setPage] = useState(1)
  const limit = 6
  const startIndex = (page - 1) * limit
  const currentVideos = videos.slice(startIndex, startIndex+limit )
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
    <div>
    <div className="m-2 p-2 flex flex-wrap">
      {/* <AdVideo info={videos[10]} className="" /> */}
      {currentVideos 
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
        <div className="flex text-center justify-center">
        <button className="border border-black p-2 m-2 hover:bg-slate-100 cursor-pointer rounded-md" onClick={()=>{setPage((t)=> t-1)}} disabled = {page ===1}>Prev</button>
        <p className="p-2 m-2">Page : {page}</p>
        <button className="border border-black p-2 m-2  hover:bg-slate-100 cursor-pointer rounded md" onClick={()=>{setPage((t)=> t+1)}} disabled = {page ===8}>Next</button>
        </div>
    </div>
  );
};

export default VideoContainer;
