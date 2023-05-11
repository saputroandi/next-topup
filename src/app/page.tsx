"use client";
/* eslint-disable @next/next/no-img-element */
import Slider from "@/components/slider";
import { dummyItems } from "@/constant/variable";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
	const [filter, setFilter] = useState("all");

	const filterCategory = (e: React.MouseEvent, val: string) => {
		e.preventDefault();
		setFilter(val);
	};

	return (
		<section className="flex flex-col items-center">
			<div className="mt-8 mb-5 flex justify-center">
				<Slider />
			</div>
			<div className="mb-5 flex gap-4 w-[90vw] lg:w-[69.375rem]">
				<button
					onClick={(e) => filterCategory(e, "all")}
					className="p-2 shadow-md bg-blue-300 rounded-md"
				>
					Semua Kategori
				</button>
				<button
					onClick={(e) => filterCategory(e, "payment")}
					className="p-2 shadow-md bg-blue-300 rounded-md"
				>
					E-Wallet
				</button>
				<button
					onClick={(e) => filterCategory(e, "pulsa")}
					className="p-2 shadow-md bg-blue-300 rounded-md"
				>
					Pulsa
				</button>
			</div>
			<div className="w-[90vw] lg:w-[69.375rem] grid grid-cols-2 lg:grid-cols-6 gap-x-2 gap-y-4 place-content-center mb-8 ">
				{dummyItems
					.filter((e) => (filter === "all" ? true : e.category === filter))
					.map((item, idx) => {
						return (
							<>
								<Link href={`/${item.name.toLocaleLowerCase()}`}>
									<div
										className="w-full bg-red-500 rounded-md p-4 hover:-translate-y-3 transition-all duration-300 shadow-md hover:shadow-xl"
										key={idx}
									>
										<div className="">
											<img
												alt={item.name}
												src={item.src}
												className="object-cover object-center rounded-md"
											/>
										</div>
										<div className="mt-2 text-center font-bold">
											<p>{item.name}</p>
										</div>
									</div>
								</Link>
							</>
						);
					})}
			</div>
		</section>
	);
}
