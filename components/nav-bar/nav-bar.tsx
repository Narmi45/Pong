import Image from "next/image";

export default function NavBar() {
  return (
    <>
      <nav>
        <Image
          src="/images/arcade-machine-512x512.png"
          alt="arcade cabinet icon"
          width={64}
          height={64}
        ></Image>
      </nav>
    </>
  );
}
