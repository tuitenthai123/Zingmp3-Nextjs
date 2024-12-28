"use client"
import React from "react";
import { Carousel } from "flowbite-react";
import { FaAngleRight } from "react-icons/fa6";
import SongCard from "./_components/SongCard";
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

interface ArrShowcase extends Array<Showcase> {}
interface ArrSonginfo extends Array<infosong> {}
interface Arrartists extends Array<artists> {}

const Page = () => {
  const [showcase, setShowcase] = React.useState<ArrShowcase>([]);
  const [Songinfo, setSonginfo] = React.useState<ArrSonginfo>([]);

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
      } catch (error) {
        console.error(error);
      }
    };
    handleFetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="relative h-[270px] sm:h-[320px] lg:h-[370px] w-[90%] md:w-[80%] mx-auto">
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
      <ScrollArea>
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
    </div>
  );
};

export default Page;
