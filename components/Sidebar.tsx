import React from "react";
import SidebarRow from './SidebarRow' 

import {
     BellIcon,
      HashtagIcon,
      BookmarkIcon,
      CollectionIcon,
      DotsHorizontalIcon,
      MailIcon,
      UserIcon,
      HomeIcon
   } from '@heroicons/react/outline' ;




function Sidebar() {
  return <div className="flex flex-col col-span-2 items-center px-4 md:items-start">
    <img className="m-3 h-10 w-10" src="https://links.papareact.com/drq" alt="" />
    <SidebarRow Icon={HomeIcon} title='Home' />
    <SidebarRow Icon={HashtagIcon} title='Explore' />
    <SidebarRow Icon={BellIcon} title='Notifications' />
    <SidebarRow Icon={MailIcon} title='Messages' />
    <SidebarRow Icon={BookmarkIcon} title='Bookmarks' />
    <SidebarRow Icon={CollectionIcon} title='Lists' />
    <SidebarRow Icon={UserIcon} title='Sign In' />
    <SidebarRow Icon={DotsHorizontalIcon} title='More' />

    </div>
}

export default Sidebar;
