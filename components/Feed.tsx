import React, {useState} from "react";
import TweetBox from "./TweetBox";
import { RefreshIcon } from "@heroicons/react/outline";
import { Tweet } from "../typings";
import TweetComponent from './Tweet'
import { fetchTweets } from "../utils/fetchTweets";
import toast from 'react-hot-toast'


interface Props {
  tweets: Tweet[]
}

function Feed({tweets: tweetsProp}: Props) {
  const [tweets, setTweets] = useState<Tweet[]>(tweetsProp);

  const handlerefresh = async () => {
    // To add animate to the UI 
    const refreshToast = toast.loading('Rereshing...')

    const tweets: Tweet[] = await fetchTweets();
    setTweets(tweets);

    toast.success('Feed is refreshed', {
      id: refreshToast
    }) //change the message to sucess after the loading is finished
  };

  return (
    <div className="col-span-7 lg:col-span-5 border-x">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold cursor-pointer">Home</h1>
        <RefreshIcon onClick={handlerefresh} className="w-8 h-8 mr-5 mt-5 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125 " />
      </div>
      <div className="">
        {/* Tweetbox */}
        <TweetBox />
      </div>

      {/* Feed */}
      <div className="">
          {tweets.map(tweet => (
            <TweetComponent key={tweet._id} tweet={tweet}/>
          ))}
      </div>
    </div>
  );
}

export default Feed;
