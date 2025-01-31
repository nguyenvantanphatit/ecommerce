"use client"
import { useState } from "react"
export default function PolicyHome() {
  const [activeImage, setActiveImage] = useState(0)
  return (
    <>
        <div className="mx-auto w-full px-5 py-16 md:px-10 md:py-20 bg-black rounded-t-[100px] my-8">
            <div className="flex gap-4 lg:justify-between">
              <div
                className={`flex rounded-md p-4 text-gray-500 [box-shadow:rgba(0,_0,_0,_0.05)_0px_0px_10px] ${activeImage === 0 ? "border-l-4 border-black" : ""}`}
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
              </div>
              <div
                className={`flex rounded-md p-4 text-gray-500 [box-shadow:rgba(0,_0,_0,_0.05)_0px_0px_10px] ${activeImage === 1 ? "border-l-4 border-black" : ""}`}
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
              </div>
              <div
                className={`flex rounded-md p-4 text-gray-500 [box-shadow:rgba(0,_0,_0,_0.05)_0px_0px_10px] ${activeImage === 2 ? "border-l-4 border-black" : ""}`}
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
              </div>
              <div
                className={`flex rounded-md p-4 text-gray-500 [box-shadow:rgba(0,_0,_0,_0.05)_0px_0px_10px] ${activeImage === 3 ? "border-l-4 border-black" : ""}`}
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
              </div>
            </div>
          </div>
    </>
  )
}

