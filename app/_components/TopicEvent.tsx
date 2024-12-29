import React from 'react'


interface Topicevent {
    groupName?: string;
    listPlaylist?: ArrPlaylist;
}

interface Playlistitems {
    thumbnail: string;
    title: string;
}

interface ArrPlaylist extends Array<Playlistitems> { }

const Topicevent: React.FC<Topicevent> = ({ groupName, listPlaylist }) => {
    return (
        <div className='flex flex-col items-start gap-4 w-full'>
            <div className='text-2xl text-sky-500 font-thin'>
                {groupName?.split('_')[0].toUpperCase()}
            </div>
                <div className='flex space-x-4 pb-4 '>
                    {listPlaylist?.slice(0, 7).map((items) => (
                        <div key={items.title} className='flex-shrink-0 w-32 sm:w-40'>
                            <div className='aspect-square w-full overflow-hidden rounded-sm'>
                                <img
                                    src={items?.thumbnail}
                                    alt={`${items?.title || "Hình ảnh bài hát"}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className='text-center mt-2 text-sm line-clamp-2 w-full'>
                                {items?.title}
                            </div>
                        </div>
                    ))}
                    {Array.from({ length: Math.max(0, 7 - (listPlaylist?.length || 0)) }).map((_, index) => (
                        <div key={`placeholder-${index}`} className='flex-shrink-0 w-32 sm:w-40'>
                            <div className='aspect-square w-full bg-gray-200 rounded-sm'></div>
                            <div className='text-center mt-2 text-sm text-transparent'>Placeholder</div>
                        </div>
                    ))}
                </div>
        </div>
    )
}

export default Topicevent