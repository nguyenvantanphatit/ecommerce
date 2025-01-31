"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

const ITEMS_PER_PAGE = 5

type BlogItem = {
  id: number
  title: string
  description: string
  image: string
  isLarge: boolean
}

const items: BlogItem[] = [
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
      {
        id: 6,
        title: "Explore Nature",
        description: "Discover the beauty of the natural world",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxuYXR1cmV8ZW58MHwwfHx8MTcyMTA0MjYwMXww&ixlib=rb-4.0.3&q=80&w=1080",
        isLarge: false,
      },
      {
        id: 7,
        title: "Culinary Delights",
        description: "",
        image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8MHx8fDE3MjEwNDI2MTR8MA&ixlib=rb-4.0.3&q=80&w=1080",
        isLarge: false,
      },
      {
        id: 8,
        title: "Tech Innovations",
        description: "",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0ZWNobm9sb2d5fGVufDB8MHx8fDE3MjEwNDI2Mjh8MA&ixlib=rb-4.0.3&q=80&w=1080",
        isLarge: false,
      },
      {
        id: 9,
        title: "Explore Nature",
        description: "",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0ZWNobm9sb2d5fGVufDB8MHx8fDE3MjEwNDI2Mjh8MA&ixlib=rb-4.0.3&q=80&w=1080",
        isLarge: false,
      },
      {
        id: 10,
        title: "Culinary Delights",
        description: "",
        image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8MHx8fDE3MjEwNDI2MTR8MA&ixlib=rb-4.0.3&q=80&w=1080",
        isLarge: false,
      },
]

export function BlogList({ initialPage }: { initialPage: number }) {
  const [currentPage, setCurrentPage] = useState(initialPage)
  const [totalPages, setTotalPages] = useState(Math.ceil(items.length / ITEMS_PER_PAGE))
  const router = useRouter()

  const getCurrentPageItems = () => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE
    const end = start + ITEMS_PER_PAGE
    return items.slice(start, end)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    router.push(`/blog?page=${page}`, { scroll: false })
  }

  const getPageRange = () => {
    let start = Math.max(1, currentPage - 1)
    let end = Math.min(totalPages, currentPage + 1)

    if (currentPage === 1) {
      end = Math.min(3, totalPages)
    } else if (currentPage === totalPages) {
      start = Math.max(1, totalPages - 2)
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
  }

  const pageRange = getPageRange()
  const showStartEllipsis = pageRange[0] > 1
  const showEndEllipsis = pageRange[pageRange.length - 1] < totalPages

  const currentItems = getCurrentPageItems()

  return (
    <>
      <div className="hidden md:block">
        <div className="mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {currentItems.map((item) => (
              <div
                key={item.id}
                className={`relative overflow-hidden rounded-2xl shadow-lg group ${
                  item.isLarge ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className={`w-full ${item.isLarge ? "h-full" : "h-full"} object-cover`}
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className={`text-white ${item.isLarge ? "text-2xl" : "text-xl"} font-bold`}>{item.title}</h3>
                    {item.description && <p className="text-white">{item.description}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="block md:hidden py-12">
        <Carousel className="w-full h-full">
          <CarouselContent>
            {currentItems.map((item, index) => (
              <CarouselItem key={index} className="basis-2/3 h-full flex">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative overflow-hidden rounded-2xl shadow-lg group ${
                    item.isLarge ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                >
                  <Link key={index} href={item.title}>
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={600}
                      height={600}
                      className={`w-full ${item.isLarge ? "h-full" : "h-full"} object-cover`}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className={`text-white ${item.isLarge ? "text-2xl" : "text-xl"} font-bold`}>
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

      {totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={`/blog?page=${currentPage - 1}`}
                onClick={(e) => {
                  e.preventDefault()
                  if (currentPage > 1) handlePageChange(currentPage - 1)
                }}
              />
            </PaginationItem>

            {showStartEllipsis && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            {pageRange.map((pageNumber) => (
              <PaginationItem key={pageNumber}>
                <PaginationLink
                  href={`/blog?page=${pageNumber}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handlePageChange(pageNumber)
                  }}
                  isActive={currentPage === pageNumber}
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            ))}

            {showEndEllipsis && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            <PaginationItem>
              <PaginationNext
                href={`/blog?page=${currentPage + 1}`}
                onClick={(e) => {
                  e.preventDefault()
                  if (currentPage < totalPages) handlePageChange(currentPage + 1)
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </>
  )
}

