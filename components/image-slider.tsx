"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"


export function ImageSlider() {
    const [currentIndex, setCurrentIndex] = React.useState(0)

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }

    const handleThumbnailClick = (index: number) => {
        setCurrentIndex(index)
    }

    return (
        <div className="relative w-full mx-auto px-4 py-8 bg-black">
            <div className="flex items-center gap-4">
                {/* Main large image */}
                <div className="relative flex-1 w-96">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                        <Image
                            src={images[currentIndex].src || "/placeholder.svg"}
                            alt={images[currentIndex].alt}
                            width={500}
                            height={1000}
                            className="object-cover transition-transform duration-500"
                            priority
                        />
                        {images[currentIndex].title && (
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                                <h3 className="text-xl font-semibold">{images[currentIndex].title}</h3>
                                {images[currentIndex].description && (
                                    <p className="mt-2 text-sm text-white/90">{images[currentIndex].description}</p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <div className="relative hidden md:flex flex-row gap-4 w-[800px] h-60">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => handleThumbnailClick(index)}
                            className={cn(
                                "relative aspect-[4/3] overflow-hidden rounded-xl transition-all duration-300",
                                currentIndex === index ? "border" : "opacity-60 hover:opacity-100",
                            )}
                        >
                            <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                        </button>
                    ))}

                    <div className="absolute space-x-4 -bottom-10 right-1/2">
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm"
                            onClick={handlePrevious}
                        >
                            <ChevronLeft className="h-4 w-4" />
                            <span className="sr-only">Previous slide</span>
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm"
                            onClick={handleNext}
                        >
                            <ChevronRight className="h-4 w-4" />
                            <span className="sr-only">Next slide</span>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="mt-4 flex justify-center items-center gap-2 md:hidden">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleThumbnailClick(index)}
                        className={cn(
                            "h-2 w-2 rounded-full transition-all",
                            currentIndex === index ? "bg-black w-4" : "bg-black/30",
                        )}
                    />
                ))}
            </div>
            <div className="block md:hidden">
                <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-8 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-lg"
                    onClick={handlePrevious}
                >
                    <ChevronLeft className="h-5 w-5" />
                    <span className="sr-only">Previous slide</span>
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-8 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-lg"
                    onClick={handleNext}
                >
                    <ChevronRight className="h-5 w-5" />
                    <span className="sr-only">Next slide</span>
                </Button>
            </div>
        </div>
    )
}

const images = [
    {
        src: "/Gift/1.webp",
        alt: "Bedroom interior with blue walls and gold lamps",
        title: "Dream Design",
        description: "Luxurious and stylish, this furniture is a perfect blend of comfort and elegance",
    },
    {
        src: "/Gift/2.webp",
        alt: "Modern living room",
        title: "Contemporary Living",
        description: "Open spaces with modern furniture and clean lines",
    },
    {
        src: "/Gift/3.webp",
        alt: "Minimalist kitchen",
        title: "Kitchen Dreams",
        description: "Functional and beautiful kitchen designs",
    },
]
