"use client"
import React from "react";
import { Carousel } from "flowbite-react";
import { FaAngleRight } from "react-icons/fa6";
import SongCard from "./_components/SongCard";
import Topicevent from "./_components/TopicEvent";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

interface Showcase {
  key: string;
  imageUrl: string;
  title: string;
  description: string;
  thumbnail: string;
}

interface infosong {
  key: string;
  artists?: Arrartists;
  thumbnail?: string;
  title?: string;
}

interface artists {
  name: string;
}
interface TopicEvent {
  groupName: string;
  listPlaylist: Array<any>;
}

interface ArrShowcase extends Array<Showcase> { }
interface ArrSonginfo extends Array<infosong> { }
interface Arrartists extends Array<artists> { }

const Page = () => {
  const [showcase, setShowcase] = React.useState<ArrShowcase>([]);
  const [Songinfo, setSonginfo] = React.useState<ArrSonginfo>([]);
  const [topicEvent, setTopicEvent] = React.useState<TopicEvent[]>([])
  

  React.useEffect(() => {
    const handleFetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api`, {
          method: "GET",
          headers: new Headers({
            "ngrok-skip-browser-warning": "69420",
          }),
        });
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        setShowcase(jsonResponse?.showcase || []);
        setSonginfo(jsonResponse?.song || []);
        setTopicEvent(jsonResponse?.topicEvent || [])
      } catch (error) {
        console.error(error);
      }
    };
    handleFetchData();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="h-[270px] sm:h-[320px] lg:h-[370px] w-full">
        <Carousel pauseOnHover slideInterval={4000}>
          {showcase.map((item, index) => (
            <img
              key={item.key}
              src={item?.imageUrl}
              alt={`${item.title || "Carousel Image"} ${index}`}
              className="w-full h-full object-fill rounded-md"
            />
          ))}
        </Carousel>
      </div>
      <div className="my-5">
        <span className="flex items-center gap-2 text-2xl text-sky-500 font-thin">
          MỖI NGÀY MỖI BÀI <FaAngleRight />
        </span>
      </div>
      <ScrollArea className="w-full">
        <div className="grid grid-rows-3 grid-flow-col gap-4 mb-5">
          {Songinfo.map((items) => (
            <div key={items?.key} className="flex flex-col items-center justify-center">
              <SongCard
                artists={items?.artists?.map(artist => artist.name).join(", ")}
                thumbnail={items?.thumbnail}
                title={items?.title}
              />
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="mt-5">
        {topicEvent.map((items, index) => (
          <Topicevent key={index} groupName={items?.groupName} listPlaylist={items?.listPlaylist}/>
        ))}
      </div>
    </div>
  );
};

export default Page;
