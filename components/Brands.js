import Image from "next/image";

function Brands() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center mt-10 gap-5">
      <div className="relative w-52 h-32 sm:w-64 sm:h-40 border-[3px] border-[#f9f9f9] border-opacity-10 rounded-xl cursor-pointer">
        <Image src="/images/disnep.png" layout="fill" objectFit="cover" />
      </div>

      <div className="relative w-52 h-32 sm:w-64 sm:h-40 border-[3px] border-[#f9f9f9] border-opacity-10 rounded-xl cursor-pointer">
        <Image src="/images/pixar.png" layout="fill" objectFit="cover" />
      </div>

      <div className="relative w-52 h-32 sm:w-64 sm:h-40 border-[3px] border-[#f9f9f9] border-opacity-10 rounded-xl cursor-pointer">
        <Image src="/images/marvel.png" layout="fill" objectFit="cover" />
      </div>

      <div className="relative w-52 h-32 sm:w-64 sm:h-40 border-[3px] border-[#f9f9f9] border-opacity-10 rounded-xl cursor-pointer">
        <Image src="/images/starwars.png" layout="fill" objectFit="cover" />
      </div>

      <div className="relative w-52 h-32 sm:w-64 sm:h-40 border-[3px] border-[#f9f9f9] border-opacity-10 rounded-xl cursor-pointer">
        <Image
          src="/images/national-geographic.png"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
}

export default Brands;
