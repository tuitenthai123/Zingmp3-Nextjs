"use client"
import React from 'react'
import { Carousel } from "flowbite-react";

interface showcase {

}

const page = () => {
  const [showcase, setshowcase] = React.useState([])
  // React.useEffect(() => {
  //   const handlefetchdata = async () => {
  //     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api`, {
  //       method: "get",
  //       headers: new Headers({
  //         "ngrok-skip-browser-warning": "69420",
  //       }),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => console.log(data))
  //       .catch((err) => console.log(err));
  //   }
  //   handlefetchdata()
  // }, [])

  return (
    <div className=''>
      <div className="h-48 sm:h-64 md:h-80 lg:h-96">
        <Carousel pauseOnHover slideInterval={5000}>
          {[1, 2, 3, 4, 5].map((index) => (
            <img
              key={index}
              src={`https://flowbite.com/docs/images/carousel/carousel-${index}.svg`}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default page