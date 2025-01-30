"use client"
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronsRight } from 'lucide-react';
export default function Blog() {
  return (
    <>
      <div className="bg-black hidden md:block">
        <div className="mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-white">Tin tức</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {items.map((item) => (
              <div
                key={item.id}
                className={`relative overflow-hidden rounded-2xl shadow-lg group ${item.isLarge ? 'md:col-span-2 md:row-span-2' : ''
                  }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full ${item.isLarge ? 'h-full' : 'h-full'} object-cover`}
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className={`text-white ${item.isLarge ? 'text-2xl' : 'text-xl'} font-bold`}>
                      {item.title}
                    </h3>
                    {item.description && <p className="text-white">{item.description}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='block md:hidden py-12'>
        <Carousel className="w-full h-full bg-black">
          <CarouselContent>
            {items.map((item, index) => (
              <CarouselItem key={index} className="basis-2/3 h-full flex">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative overflow-hidden rounded-2xl shadow-lg group ${item.isLarge ? 'md:col-span-2 md:row-span-2' : ''
                    }`}
                >
                  <Link key={index} href={item.title}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={600}
                      className={`w-full ${item.isLarge ? 'h-full' : 'h-full'} object-cover`}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className={`text-white ${item.isLarge ? 'text-2xl' : 'text-xl'} font-bold`}>
                          {item.title}
                        </h3>
                        {item.description && <p className="text-white">{item.description}</p>}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  )
}



const items = [
  {
    id: 1,
    title: "Explore Nature",
    description: "Discover the beauty of the natural world",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxuYXR1cmV8ZW58MHwwfHx8MTcyMTA0MjYwMXww&ixlib=rb-4.0.3&q=80&w=1080",
    isLarge: true,
  },
  {
    id: 2,
    title: "Culinary Delights",
    description: "",
    image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8MHx8fDE3MjEwNDI2MTR8MA&ixlib=rb-4.0.3&q=80&w=1080",
    isLarge: false,
  },
  {
    id: 3,
    title: "Tech Innovations",
    description: "",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0ZWNobm9sb2d5fGVufDB8MHx8fDE3MjEwNDI2Mjh8MA&ixlib=rb-4.0.3&q=80&w=1080",
    isLarge: false,
  },
  {
    id: 4,
    title: "Explore Nature",
    description: "",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0ZWNobm9sb2d5fGVufDB8MHx8fDE3MjEwNDI2Mjh8MA&ixlib=rb-4.0.3&q=80&w=1080",
    isLarge: false,
  },
  {
    id: 5,
    title: "Culinary Delights",
    description: "",
    image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8MHx8fDE3MjEwNDI2MTR8MA&ixlib=rb-4.0.3&q=80&w=1080",
    isLarge: false,
  },
];