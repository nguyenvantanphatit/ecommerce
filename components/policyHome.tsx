"use client"

import { useState } from "react"

export default function PolicyHome() {
  const [activeImage, setActiveImage] = useState(0)

  const images = [
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxuYXR1cmV8ZW58MHwwfHx8MTcyMTA0MjYwMXww&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1493770348161-369560ae357d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8MHx8fDE3MjEwNDI2MTR8MA&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0ZWNobm9sb2d5fGVufDB8MHx8fDE3MjEwNDI2Mjh8MA&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1493770348161-369560ae357d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8MHx8fDE3MjEwNDI2MTR8MA&ixlib=rb-4.0.3&q=80&w=1080",
  ]

  return (
    <>
      <section>
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          <h2 className="mb-8 text-3xl font-bold md:mb-12 md:text-4xl lg:mb-16 lg:text-5xl">
            Make every step user-centric
          </h2>
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-15 items-center justify-between">
            <img
              alt="Featured image"
              src={images[activeImage] || "/placeholder.svg"}
              className="inline-block h-[350px] max-h-lg w-full object-cover"
            />
            <div className="flex flex-col gap-8 lg:justify-between">
              <a
                className={`flex rounded-md p-4 text-gray-500 [box-shadow:rgba(0,_0,_0,_0.05)_0px_0px_10px] ${activeImage === 0 ? "border-l-4 border-black" : ""}`}
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  setActiveImage(0)
                }}
              >
                <img
                  alt=""
                  src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                  className="inline-block h-16 w-16 rounded-full object-cover"
                />
                <div className="ml-4 flex flex-col">
                  <p className="font-semibold">Flexibility</p>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.
                  </p>
                </div>
              </a>
              <a
                className={`flex rounded-md p-4 text-gray-500 [box-shadow:rgba(0,_0,_0,_0.05)_0px_0px_10px] ${activeImage === 1 ? "border-l-4 border-black" : ""}`}
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  setActiveImage(1)
                }}
              >
                <img
                  alt=""
                  src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                  className="inline-block h-16 w-16 rounded-full object-cover"
                />
                <div className="ml-4 flex flex-col">
                  <p className="font-semibold">Scale</p>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.
                  </p>
                </div>
              </a>
              <a
                className={`flex rounded-md p-4 text-gray-500 [box-shadow:rgba(0,_0,_0,_0.05)_0px_0px_10px] ${activeImage === 2 ? "border-l-4 border-black" : ""}`}
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  setActiveImage(2)
                }}
              >
                <img
                  alt=""
                  src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                  className="inline-block h-16 w-16 rounded-full object-cover"
                />
                <div className="ml-4 flex flex-col">
                  <p className="font-semibold">Support</p>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.
                  </p>
                </div>
              </a>
              <a
                className={`flex rounded-md p-4 text-gray-500 [box-shadow:rgba(0,_0,_0,_0.05)_0px_0px_10px] ${activeImage === 3 ? "border-l-4 border-black" : ""}`}
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  setActiveImage(3)
                }}
              >
                <img
                  alt=""
                  src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                  className="inline-block h-16 w-16 rounded-full object-cover"
                />
                <div className="ml-4 flex flex-col">
                  <p className="font-semibold">Support</p>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

