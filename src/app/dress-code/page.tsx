import Image from 'next/image';

export default function DressCode() {
  return (
    <div className="min-h-screen pt-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-light text-center mb-8 text-black">Dress Code</h1>
        
        <div className="flex justify-center">
          <Image
            src="/videos/MSW.gif"
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