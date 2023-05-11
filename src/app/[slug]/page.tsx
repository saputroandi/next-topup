/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation";

export default function Shop({ params }: { params: { slug: string } }) {
	// if (params.slug !== "andi") notFound();
	return (
		<section className="">
			<form action="#">
				<div className="flex flex-col md:w-4/6 w-full md:ml-auto my-6 gap-4">
					<div className="w-full md:w-11/12 p-4 bg-blue-400 rounded-md">
						<div className="mb-4">
							<p className="text-2xl font-extrabold">Lengkapi Data</p>
						</div>
						<div className="flex gap-4">
							<input
								name="userId"
								type="text"
								placeholder="User ID"
								className="p-2 w-full focus:outline-none border-2 rounded-md"
							/>
							<input
								name="userId"
								type="text"
								placeholder="User ID"
								className="p-2 w-full focus:outline-none border-2 rounded-md"
							/>
						</div>
					</div>
					<div className="w-full md:w-11/12 p-4 bg-blue-400 rounded-md">
						<div className="mb-4">
							<p className="text-2xl font-extrabold">Pilih Produk</p>
						</div>
						<div className="grid grid-cols-2 gap-4 ">
							<div className="flex justify-between items-center border border-black rounded-md p-2 cursor-pointer">
								<p className="text-lg font-bold">5 Diamond</p>
								<img
									className="w-8 h-8"
									src="https://tokoden.com/assets/images/product/1683288901_b62e865e2b05b2ded81c.png"
									alt="gambar-diamond"
								/>
							</div>
							<div className="flex justify-between items-center border border-black rounded-md p-2 cursor-pointer">
								<p className="text-lg font-bold">5 Diamond</p>
								<img
									className="w-8 h-8"
									src="https://tokoden.com/assets/images/product/1683288901_b62e865e2b05b2ded81c.png"
									alt="gambar-diamond"
								/>
							</div>
							<div className="flex justify-between items-center border border-black rounded-md p-2 cursor-pointer">
								<p className="text-lg font-bold">5 Diamond</p>
								<img
									className="w-8 h-8"
									src="https://tokoden.com/assets/images/product/1683288901_b62e865e2b05b2ded81c.png"
									alt="gambar-diamond"
								/>
							</div>
							<div className="flex justify-between items-center border border-black rounded-md p-2 cursor-pointer">
								<p className="text-lg font-bold">5 Diamond</p>
								<img
									className="w-8 h-8"
									src="https://tokoden.com/assets/images/product/1683288901_b62e865e2b05b2ded81c.png"
									alt="gambar-diamond"
								/>
							</div>
							<div className="flex justify-between items-center border border-black rounded-md p-2 cursor-pointer">
								<p className="text-lg font-bold">5 Diamond</p>
								<img
									className="w-8 h-8"
									src="https://tokoden.com/assets/images/product/1683288901_b62e865e2b05b2ded81c.png"
									alt="gambar-diamond"
								/>
							</div>
							<div className="flex justify-between items-center border border-black rounded-md p-2 cursor-pointer">
								<p className="text-lg font-bold">5 Diamond</p>
								<img
									className="w-8 h-8"
									src="https://tokoden.com/assets/images/product/1683288901_b62e865e2b05b2ded81c.png"
									alt="gambar-diamond"
								/>
							</div>
							<div className="flex justify-between items-center border border-black rounded-md p-2 cursor-pointer">
								<p className="text-lg font-bold">5 Diamond</p>
								<img
									className="w-8 h-8"
									src="https://tokoden.com/assets/images/product/1683288901_b62e865e2b05b2ded81c.png"
									alt="gambar-diamond"
								/>
							</div>
						</div>
					</div>
					<div className="w-full md:w-11/12 p-4 bg-blue-400 rounded-md">
						<div className="mb-4">
							<p className="text-2xl font-extrabold">Pilih Metode Pembayaran</p>
						</div>
						<div className="w-full flex flex-col gap-4">
							<div className="flex justify-between items-center border border-black rounded-md p-2 cursor-pointer">
								<img
									className="h-10"
									src="https://tokoden.com/assets/images/method/1682909953_a47ba55b4dcbe2b89c79.png"
									alt="bank bca"
								/>
								<p className="text-lg font-bold">Rp 50.000,00</p>
							</div>
							<div className="flex justify-between items-center border border-black rounded-md p-2 cursor-pointer">
								<img
									className="h-10"
									src="https://tokoden.com/assets/images/method/1682909953_a47ba55b4dcbe2b89c79.png"
									alt="bank bca"
								/>
								<p className="text-lg font-bold">Rp 50.000,00</p>
							</div>
							<div className="flex justify-between items-center border border-black rounded-md p-2 cursor-pointer">
								<img
									className="h-10"
									src="https://tokoden.com/assets/images/method/1682909953_a47ba55b4dcbe2b89c79.png"
									alt="bank bca"
								/>
								<p className="text-lg font-bold">Rp 50.000,00</p>
							</div>
							<div className="flex justify-between items-center border border-black rounded-md p-2 cursor-pointer">
								<img
									className="h-10"
									src="https://tokoden.com/assets/images/method/1682909953_a47ba55b4dcbe2b89c79.png"
									alt="bank bca"
								/>
								<p className="text-lg font-bold">Rp 50.000,00</p>
							</div>
							<div className="flex justify-between items-center border border-black rounded-md p-2 cursor-pointer">
								<img
									className="h-10"
									src="https://tokoden.com/assets/images/method/1682909953_a47ba55b4dcbe2b89c79.png"
									alt="bank bca"
								/>
								<p className="text-lg font-bold">Rp 50.000,00</p>
							</div>
							<div className="flex justify-between items-center border border-black rounded-md p-2 cursor-pointer">
								<img
									className="h-10"
									src="https://tokoden.com/assets/images/method/1682909953_a47ba55b4dcbe2b89c79.png"
									alt="bank bca"
								/>
								<p className="text-lg font-bold">Rp 50.000,00</p>
							</div>
						</div>
					</div>
					<div className="w-full md:w-11/12 p-4 bg-blue-400 rounded-md">
						<div className="mb-4">
							<p className="text-2xl font-extrabold">Masukan Email &amp; HP</p>
						</div>
						<div className="flex flex-col gap-4">
							<input
								name="email"
								type="text"
								placeholder="Email"
								className="p-2 w-full focus:outline-none border-2 rounded-md"
							/>
							<input
								name="handphone"
								type="text"
								placeholder="No Handphone"
								className="p-2 w-full focus:outline-none border-2 rounded-md"
							/>
						</div>
						<div className="mt-1">
							<p className="text-xs text-gray-500">
								&#42; Format Nomor yang digunakan adalah 08XXXXXXX
							</p>
						</div>
					</div>
				</div>
			</form>
		</section>
	);
}
