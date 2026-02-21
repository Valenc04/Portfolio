import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-w-0 max-w-full px-4 sm:px-6 box-border">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-2 order-1 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-sans text-green-900">Valentín Cabanas</h1>
          <h2 className="text-lg sm:text-xl font-extrabold font-sans text-green-800">Desarrollador web</h2>
        </div>
        <Image
          className="w-full max-w-[200px] sm:max-w-[260px] md:max-w-[300px] h-auto shrink-0 order-2"
          src="/images/chico-crema5.png"
          alt="foto"
          width={300}
          height={200}
        />
      </div>
    </main>
  );
}
