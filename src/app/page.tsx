import Image from "next/image";
import { unifraktur, caveat } from "@/lib/fonts";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section with Banner Image */}
      <div className="relative h-screen">
        <Image
          src="/images/homepage-banner.jpg"
          alt="Wedding Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-4">
          <div className="text-center">
            <h1 className={`${unifraktur.className} text-5xl md:text-7xl mb-4 text-yellow-300`}>
              C.J. & Betsy
            </h1>
            <p className={`${caveat.className} text-2xl md:text-4xl mb-2 text-yellow-300`}>
              11.1.25
            </p>
            <p className="text-lg md:text-xl mb-8 text-yellow-300">
              ERA STUDIO • Downtown Los Angeles
            </p>
          </div>
        </div>
      </div>

      {/* Welcome Message */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-6">Welcome</h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              Welcome to our wedding website! We're getting married and couldn't be more excited 
              to celebrate with the people who mean the most to us. This site has everything 
              you need to know—details about the weekend, travel info, and a few personal 
              touches along the way.
            </p>
            <p>
              Thanks for being a part of our lives. We can't wait to see you soon!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
