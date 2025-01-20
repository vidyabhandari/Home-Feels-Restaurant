import heroimg from "../assets/hero.jpg";
const Hero = () => {
  return (
    <div className="flex items-center py-8 flex-col justify-center gap-4">
      <div className="text-center">
        <h1 className="text-[70px] font-[Playfair-Display] pb-3">
          Home Feels - Savor the Flavor
        </h1>
        <p className="text-2xl font-[Playfair-Display]">
          Where flavors tell stories and every meal feels like home.
        </p>
      </div>
      <div className="h-[30rem] w-full rounded-lg mt-4">
        <img src={heroimg} className="object-cover h-[30rem] w-full rounded-2xl" />
      </div>
    </div>
  );
};

export default Hero;
