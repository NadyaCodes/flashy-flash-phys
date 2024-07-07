import Link from "next/link";

export default function LocationLocationLocation() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col gap-12 px-4 py-16 ">
        <Link
          className="flex w-fit flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          href="/"
        >
          <h3 className="text-2xl font-bold">Back</h3>
        </Link>
        <div className="flex justify-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Location,{" "}
            <span className="text-[hsl(280,100%,70%)]">Location, </span>{" "}
            Location
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8"></div>
        </div>
      </div>
    </main>
  );
}
