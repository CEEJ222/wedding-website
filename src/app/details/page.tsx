import Image from 'next/image';

export default function Details() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative h-[50vh]">
        <Image
          src="/images/era-studio.jpg"
          alt="Era Studio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-light">Venue Details</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Venue Information */}
          <div>
            <h2 className="text-2xl font-light mb-4">Era Studio</h2>
            <p className="text-gray-600 mb-6">
              Located in the heart of Downtown Los Angeles, Era Studio features 
              beautiful industrial architecture with exposed brick walls and wooden beams, 
              creating a unique and memorable atmosphere for our celebration.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Address</h3>
                <p className="text-gray-600">
                  [Era Studio Address]<br />
                  Los Angeles, CA
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Parking</h3>
                <p className="text-gray-600 mb-4">
                  If you're driving to the wedding, there's plenty of street parking near the venue. 
                  You might notice some signs along the street that say "No Parking"—don't worry, 
                  those aren't official! The venue owner put them up to discourage non-guests from 
                  parking, but you're totally fine to park there.
                </p>
                <p className="text-gray-600">
                  If street parking is full, there's an additional lot available just two blocks away at:<br />
                  <span className="font-medium">826 Mateo St, Los Angeles, CA 90021</span>
                </p>
                <p className="text-gray-600 mt-4">
                  Feel free to park wherever works best, and we can't wait to see you there!
                </p>
              </div>
            </div>
          </div>

          {/* Food Information */}
          <div>
            <h2 className="text-2xl font-light mb-4">Dinner by Kogi</h2>
            <p className="text-gray-600 mb-6">
              We're excited to have the famous Kogi food truck serving their 
              delicious Korean-Mexican fusion cuisine at our reception. Their 
              signature dishes will be available throughout the evening.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Menu Highlights</h3>
                <ul className="text-gray-600 list-disc list-inside">
                  <li>Kogi Tacos</li>
                  <li>Kimchi Quesadillas</li>
                  <li>Short Rib Burritos</li>
                  <li>Vegetarian Options Available</li>
                </ul>
              </div>
            </div>
            
            {/* Accommodation Information */}
            <div className="mt-8">
              <h2 className="text-2xl font-light mb-4">Places to Stay</h2>
              <p className="text-gray-600">
                If you are coming from out of town and would like suggestions of hotels or 
                accommodations please contact Betsy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 