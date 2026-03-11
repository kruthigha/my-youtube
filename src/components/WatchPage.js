import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../utils/slice";
import { useSearchParams, useParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();
  console.log({ params, searchParams }, searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSideBar());
  }, []);
  return (
    <div className="flex flex-col p-2 w-full">
  <div className="flex w-full gap-4">
    
    {/* Video Section */}
    <div className="flex-[3]">
      <iframe
        className="w-full h-[500px] rounded-lg"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>

    {/* Live Chat Section */}
    <div className="flex-[1]">
      <LiveChat />
    </div>

  </div>

  <CommentsContainer />
</div>
  )
};

export default WatchPage;
