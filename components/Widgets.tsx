import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function Widgets() {
  return (
    <div className="mt-2 px-2 hidden col-span-2 lg:inline">
      {/* Search Box */}
      <div className="rounded-full bg-gray-100 flex my-2 p-3 items-center space-x-2">
        <SearchIcon className="w-5 h-5 text-gray-400" />
        <input
          className="flex-1 outline-none bg-transparent hover:border-0"
          placeholder="Search Twitter"
        />
      </div>
      <div className="mt-5">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="elonmusk"
          options={{ height: 1000 }}
        />
      </div>
    </div>
  );
}

export default Widgets;
