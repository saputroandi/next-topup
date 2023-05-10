import Navigation from "@/components/navigation";
import "./globals.css";
import Footer from "@/components/footer";

export const metadata = {
	title: "Next Topup | Dashboard",
	description: "Next Topup",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="flex flex-col w-[90vw] mx-auto relative min-h-screen">
				<Navigation />
				<main className="flex-grow">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
