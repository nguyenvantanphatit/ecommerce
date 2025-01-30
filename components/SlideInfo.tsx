import React from "react";
import { motion } from "framer-motion";
import { CurrentSlideData, Data } from "./hero";
import OtherInfo from "./OtherInfo";

type Props = {
  transitionData: Data;
  currentSlideData: CurrentSlideData;
};

function SlideInfo({ transitionData, currentSlideData }: Props) {
  return (
    <>
      <OtherInfo
        data={transitionData ? transitionData : currentSlideData.data}
      />
      <motion.div layout className="mt-2 flex items-center gap-3">
        <button
          className=" w-fit rounded-full border-[1px] border-[#ffffff8f] px-6 py-3 text-[10px] font-thin transition duration-300 
            ease-in-out hover:bg-white hover:text-black "
        >
          Lear more
        </button>
      </motion.div>
    </>
  );
}

export default SlideInfo;
