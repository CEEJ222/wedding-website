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
          <h1 className="text-4xl md:text-5xl text-white font-light">The Details</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Venue Information */}
          <div>
            <h2 className="text-2xl font-light mb-4">Join Us at Era Studio</h2>
            <p className="text-gray-600 mb-6">
              Located just south of the Arts District in Downtown Los Angeles.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Address</h3>
                <p className="text-gray-600">
                  1919 Bay St<br />
                  Los Angeles, CA 90021
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Timing</h3>
                <p className="text-gray-600">
                  The celebration will take place from 6:00 PM to 11:00 PM.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Parking</h3>
                <p className="text-gray-600 mb-4">
                  If you're driving to the wedding, there's plenty of street parking on Bay street and other streets around the venue. 
                  You might notice some signs along Bay street in front of the warehouses that say "Parking only for ____ customers"—don't worry, 
                  those aren't official! The venue owner informed us we can park in those spots. 
                </p>
                <p className="text-gray-600">
                  If street parking is full, there's an additional lot available just two blocks away at:<br />
                  <span className="font-medium">826 Mateo St, Los Angeles, CA 90021</span>
                </p>
                <p className="text-gray-600 mt-4">
                  If this stresses you out we encourage Ubering! We cannot wait to see you there!
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
                  <li>Short Rib, Pork, Chicken, and Tofu Kogi Tacos</li>
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

      {/* FAQ CTA Section */}
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <p className="text-gray-600 mb-6">
          Have more questions? Check out our frequently asked questions for additional information.
        </p>
        <a 
          href="/faq" 
          className="inline-block px-8 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
        >
          View FAQs
        </a>
      </div>
    </div>
  );
} 