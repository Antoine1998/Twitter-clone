import React, { useState } from "react";
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from "@heroicons/react/outline";


function TweetBox() {
    const [input, setInput]= useState<string>('')
    console.log(input)
  return (
    <div className="flex space-x-2 p-5">
      
      <img
        className="w-14 h-14 object-cover rounded-full mt-4"
        
        src="https://lh3.googleusercontent.com/ISNC83UrXbYeN6OzhDNq6WVwIeBnSmDYYxb91fNaAbTl4egx6a2Rb8sAO5gXChCNlEMaTJAtF7ukmHBi_0hV_vw6SwChxcOKRmzdwWXZVsA_RPBJkxVZ41YA07xm_pvK3PnzIZepKpxdTU0higVIeUDVXjjybBB-yGaAU4sbDPoNRxlRBHMEBw2CsT_dGmx9GvjfoojEBZ3JAA2mva08bG4aG8dD-HcBA-Kap-4bQgXsP-ZT0Jh7kMwWVe33CNzv0HI_jMphLuSbYgqoqXvYaqP_nY-9C4ImWC-FeM3nYUteAAAwZmBJqUJpVPNAXSQ9OwhUFylDe9nyNrRs94B3fSwcnielovI3z1iQJtQCjSkZSLRUlgU0dJ6FglMOIan8d60A1H_bIqKs1ieUZAVy-YC5SulEefJrETWwDkdCTV7dvz5aQclheB4URLVrcBsls_RKCajKRwvCv6FVtvwh6rxUuV-7owpta2rifio421xqQIMOuYf-RinuXo9_4HvChoKSCFgJOMtb-ru2REualqsKrtzriTnY8A73ZeUGdWkQhQuqRMrbeY9l9e1MfHsJuT6GaK1Di4m0dAXuYKJW01VBVu8PspBgixqb_FZHZ1SIBCOolLh-wc0xLirP7zMtGpU4UNvny7sIXpA4i2A_3Ooor_5vH1_A0T48ppWy92PMIZUxV6Z8DYTdu1FPv9rik5OZIMoPOC-gPwiIEgOPvslK_rfmwpnNPYgQv8nCPdmzzYAMKFTDkjitsW4jTJGrc_7j9nr_3fm7dxkAseyWMnkjtpv4JuY-xwfvqb9qX1IMSPmh3thHEblZS31WDdzk7sSbd6iZap-ojRa3OP7L8v3qi-yTufOfUPPC0sXkxqoIUrRLknZmVI2dir4PNnKq0-qh89SETeMKGyQDRFxuRGrBjy5S8ZfdFiHRl-Y6ncilHigO60yU1gtiynIB7MVtOZD6xNRg_vEllp9VG1wo2Q=w1605-h1326-no?authuser=0"
        alt=""
      />

      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          <input
            type="text"
            value={input}  //store the changes in the useState
            onChange={(e) => setInput(e.target.value)} //update the input value while typing
            
            placeholder="What's happening?"
            className="h-24 text-xl outline-none placeholder:text-xl "
          />
          <div className="flex items-center">
            <div className="flex flex-1 space-x-2 text-twitter">
              {/* Icon */}
              <PhotographIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <SearchCircleIcon className="h-5 w-5" />
              <EmojiHappyIcon className="h-5 w-5" />
              <CalendarIcon className="h-5 w-5" />
              <LocationMarkerIcon className="h-5 w-5" />
            </div>
            <button
            disabled={!input}
            className="px-5 py-2 font-bold rounded-full bg-twitter text-white disabled:opacity-40">
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TweetBox;
