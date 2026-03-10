import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../utils/slice";
import { useSearchParams, useParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();
  console.log({ params, searchParams }, searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSideBar());
  }, []);
  return (
    <div  className="flex flex-col p-2">
      <iframe
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
