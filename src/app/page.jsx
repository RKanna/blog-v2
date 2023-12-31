import Image from "next/image";
import Card from "./components/Card";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center p-3">
      <Card />
    </main>
  );
}

// sm:w-3/4 md:w-1/2 lg:w-1/2 xl:w-1/2
