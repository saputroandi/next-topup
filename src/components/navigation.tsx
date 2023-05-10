import React from "react";

type Props = {};

function Navigation({}: Props) {
	return (
		<nav className="w-full flex justify-between items-center py-8 px-6 bg-blue-500 rounded-b-lg">
			<div className="cursor-pointer p-4">
				<p>NextTopup</p>
			</div>
			<div className="md:flex hidden w-min-1/4 justify-between">
				<div className="cursor-pointer p-4">
					<p>Halaman Utama</p>
				</div>
				<div className="cursor-pointer p-4">
					<p>Cek Pesanan</p>
				</div>
				<div className="cursor-pointer p-4">
					<p>Syarat dan Ketentuan</p>
				</div>
			</div>
		</nav>
	);
}

export default Navigation;
