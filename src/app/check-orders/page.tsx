"use client";
import React, { useState } from "react";

type Props = {};

const CheckOrders = (props: Props) => {
	const [data, setData] = useState<string>();
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setData(e.target.value);
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(data);
	};
	return (
		<section className="flex flex-col items-center">
			<div className="mt-8 mb-5 flex justify-center flex-col items-center w-[90vw] lg:w-[69.375rem]">
				<div className="w-full">
					<form onSubmit={handleSubmit}>
						<label>
							Cek Pemesanan:
							<input
								name="check-id"
								value={data}
								type="text"
								placeholder="Masukan ID Pesanan"
								className="p-2 w-full focus:outline-none border-2 border-blue-400 rounded-md my-4"
								onChange={handleChange}
							/>
						</label>
						<button
							type="submit"
							className="w-full py-4 bg-blue-400 rounded-md"
						>
							Cek Pesanan
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default CheckOrders;
