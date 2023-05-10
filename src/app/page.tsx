/* eslint-disable @next/next/no-img-element */
import Slider from "@/components/slider";
import { dummyItems } from "@/constant/variable";
import Image from "next/image";

export default function Home() {
	return (
		<section className="flex flex-col items-center">
			<div className="my-8 flex justify-center">
				<Slider />
			</div>
			<div className="w-[90vw] lg:w-[69.375rem] grid grid-cols-2 lg:grid-cols-6 gap-x-2 gap-y-4 place-content-center mb-8">
				{dummyItems.map((item, idx) => {
					return (
						<>
							<div
								className="w-full bg-red-300 rounded-md p-4 hover:-translate-y-3 transition-all duration-300"
								key={idx}
							>
								<div className="">
									<img
										alt={item.name}
										src={item.src}
										className="object-cover object-center"
									/>
								</div>
								<div className="mt-2 text-center font-bold">
									<p>{item.name}</p>
								</div>
							</div>
						</>
					);
				})}
			</div>
		</section>
	);
}
