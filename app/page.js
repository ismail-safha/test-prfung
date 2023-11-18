import Image from "next/image";
import LesenTeil_1 from "./lesen/[lesen]/page";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();
  console.log(route);
  return (
    <main className="">
      <LesenTeil_1 />
    </main>
  );
}
