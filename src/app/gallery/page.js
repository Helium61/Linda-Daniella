import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <header className="    text-white body-font">
      <div className="bg-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/whatIoffer" className="mr-5 hover:text-gray-900 text-black">What i offer</Link>
            <Link href="/article" className="mr-5 hover:text-gray-900 text-black">Articles</Link>
            <a className="mr-5 hover:text-gray-900 text-black text-3xl font-serif"> Linda Daniella</a>
            <Link href="/gallery" className="mr-5 hover:text-gray-900 text-black">Gallery</Link>
            <Link href="/contact" className="mr-5 hover:text-gray-900 text-black">Contact</Link>
          </nav>
        </div>
        <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
    <Image src="/g3.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"width={800} height={900} />
		<Image alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/g1.jpg" width={800} height={900} />
		<Image alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/g2.jpg" width={800} height={900} />
		<Image alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/g4.jpg" width={800} height={900} />
		<Image alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/g5.jpg" width={800} height={900} />
		
		<Image alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/g6.jpg" width={800} height={900} />
		<Image alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/g8.jpg"width={800} height={900} />
		<Image alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/g9.jpg"width={800} height={900} />
		<Image alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="/g10.jpg" width={800} height={900} />
		<Image src="/g4.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" width={1200} height={1300} />
	</div>
</section>
        </div>
        </header>
  );
}