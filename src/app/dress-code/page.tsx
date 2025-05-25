import Image from 'next/image';

export default function DressCode() {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-16 space-y-40">
        
        {/* Section 1: Dress Code Intro */}
        <div className="text-center mb-12">
        <div className="flex justify-start mb-2">
            <Image
              src="/icons/subpage-icons/cherub.svg"
              alt="Ring Icon"
              width={64}
              height={64}
              className="opacity-80"
            />
          </div>
          <h1 className="text-4xl font-light mb-4 text-black">
            Dress Code:
          </h1>
          <p className="text-gray-900 font-unifraktur text-5xl font-semibold pb-12">Cocktail Attire</p>
          <p className="mb-4 pb-4 text-gray-900">
            Dress to impress, baby. Think of what you'd wear to a dinner and dancing night then take it up two more notches.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1 md:text-left text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Fun, Colorful, and Sparkly</h2>
            <p className="text-gray-700">
            Think body double on the practical magic set.. feathers, sparkles, and crotchet. Betsy's grandma Katie has the vibe down (even in her day to day life)- so if you see her you can congratulate her on best outfit.            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/dress-code/womens-fun.png"
              alt="Women's Fun Dress"
              width={420}
              height={600}
              className="rounded-xl object-cover"
            />
          </div>
        </div>
        {/* Section 2: Womens LBD (Text left, Image right) */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 md:text-left text-center">
            <h2 className="text-2xl font-semibold mb-4">Little Black Dress</h2>
            <p>
              Audrey forever. Betsy's other grandma BB (whom she is named after) always said that Audrey Hepburn and Grace Kelly never got it wrong. You won't either if you follow that advice.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/dress-code/womens-lbd.png"
              alt="Women's Little Black Dress"
              width={420}
              height={600}
              className="rounded-xl object-cover"
            />
          </div>
        </div>

        {/* Section 3: Mens Western (Image left, Text right) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1 md:text-left text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Western-Inspired Menswear</h2>
            <p className="text-gray-700">
              Think Canadian tuxedos, Beyonce's Rennaisance tour, and Jeff Golblum. We heavily encourage western wear.</p> 
              <p className="text-gray-700 pt-4">Bolo ties are central to the McCauley family style repertoire thanks to CJ's maternal grandfather and the family's ties to New Mexico. And if you see a guy wearing shit-kickers and jeans, say hello to CJ's uncle Peter.</p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/dress-code/mens-western.png"
              alt="Men's Western Style"
              width={420}
              height={600}
              className="rounded-xl object-cover"
            />
          </div>
        </div>

        {/* Section 4: Mens Black (Text left, Image right) */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 md:text-left text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Classic Black Suit</h2>
            <p className="text-gray-700">
              You can never go wrong with black on black à la Nick Cave or Neo from The Matrix. CJ's Dad, uncertain if he owns anything but Tommy Bahama shirts anymore, is opting for a T-shirt under a sport coat.  
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/dress-code/mens-black.png"
              alt="Men's Black Suit"
              width={420}
              height={600}
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}