"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/constant/variable";

type Props = {};

const variants = {
	enter: (direction: number) => {
		return { x: direction < 0 ? -50 : 50, opacity: 0 };
	},
	center: { x: 0, opacity: 1 },
	exit: (direction: number) => {
		return { x: direction > 0 ? -50 : 50, opacity: 0 };
	},
};

const Slider = (props: Props) => {
	const [[slide, direction], setSlide] = useState([0, -1]);
	const paginate = (direction: number) => {
		switch (direction) {
			case -1:
				setSlide([slide === 0 ? images.length - 1 : slide - 1, -1]);
				break;
			default:
				setSlide([slide === images.length - 1 ? 0 : slide + 1, 1]);
				break;
		}
	};

	const swipeConfidenceThreshold = 1000;
	const swipePower = (offset: number, velocity: number) => {
		return Math.abs(offset) * velocity;
	};
	return (
		<div className="flex items-center justify-center">
			<AnimatePresence initial={false} mode="wait" custom={direction}>
				<motion.div
					className="flex flex-col items-center overflow-hidden text-center"
					key={slide}
					variants={variants}
					custom={direction}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{
						x: { type: "spring", stiffness: 300, damping: 30 },
						opacity: { duration: 0.05 },
					}}
				>
					<div className="relative flex items-center">
						<motion.img
							src={images[slide].src}
							alt={images[slide].desc}
							className="w-[90vw] md:w-[69.375rem] md:h-[26.625rem] rounded-md object-cover object-center"
							drag="x"
							dragConstraints={{ left: 0, right: 0 }}
							dragElastic={1}
							onDragEnd={(e, { offset, velocity }) => {
								const swipe = swipePower(offset.x, velocity.x);

								if (swipe < -swipeConfidenceThreshold) {
									paginate(1);
								} else if (swipe > swipeConfidenceThreshold) {
									paginate(-1);
								}
							}}
						/>
					</div>
				</motion.div>
			</AnimatePresence>
			<div
				className="absolute top-1/2 right-2 z-20 hidden cursor-pointer md:block"
				onClick={() => paginate(-1)}
			>
				{/* <ArrowRight /> */}
			</div>
			<div
				className="absolute top-1/2 left-2 z-20 hidden cursor-pointer md:block"
				onClick={() => paginate(1)}
			>
				{/* <ArrowLeft /> */}
			</div>
		</div>
	);
};

export default Slider;
