import Image from 'next/image';

export default function DressCode() {
  return (
    <div className="min-h-screen pt-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-light text-center mb-8 text-black">Dress Code: <strong>Cocktail Attire</strong></h1>
        <p className="text-center mb-8 text-black">Dress to impress, baby. Think of what you'd wear to a dinner and dancing night then take it up two more notches.</p>
        <p className="text-center mb-8 text-black">For visual learners, Betsy has created this moodboard for inspo:</p>
        <div className="flex justify-center">
          <Image
            src="/images/dresscode2withwriting.mp41-ezgif.com-optimize.gif"
            alt="Dress code inspiration"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
} 