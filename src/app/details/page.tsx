import Image from 'next/image';

export default function Details() {
  return (
    <div className="min-h-screen pt-16 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">
        {/* Section 1: Venue Info (Text left, Image right) */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">Join Us at Era Studio</h2>
            <p className="text-gray-700 mb-6">
              Located just south of the Arts District in Downtown Los Angeles.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2 text-gray-900">Address</h3>
                <p className="text-gray-700">
                  1919 Bay St<br />
                  Los Angeles, CA 90021
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2 text-gray-900">Timing</h3>
                <p className="text-gray-700">
                  The celebration will take place on November 1st from 6:00 PM to 11:00 PM.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2 text-gray-900">Parking</h3>
                <p className="text-gray-700 mb-4">
                  If you're driving to the wedding, there's plenty of street parking on Bay street and other streets around the venue. 
                  You might notice some signs along Bay street in front of the warehouses that say "Parking only for ____ customers"—don't worry, 
                  those aren't official! The venue owner informed us we can park in those spots. 
                </p>
                <p className="text-gray-700">
                  If street parking is full, there's an additional lot available just two blocks away at:<br />
                  <span className="font-medium">826 Mateo St, Los Angeles, CA 90021</span>
                </p>
                <p className="text-gray-700 mt-4">
                  If that all sounded like WAY too much... Uber! Life is too short! Do not stress on parking!
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/Betsy-CJ/LP0_7239_Retouched_LindseyByrnes.jpg"
              alt="Betsy and CJ 1"
              width={400}
              height={600}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Section 2: Dinner (Image left, Text right) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">Dinner by Kogi</h2>
            <p className="text-gray-700 mb-6">
              We're excited to have the famous Kogi food truck serving their 
              delicious Korean-Mexican fusion tacos at our reception.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2 text-gray-900">Menu Highlights</h3>
                <ul className="text-gray-700 list-disc list-inside">
                  <li>Short Rib, Spicy Pork, Chicken, and Tofu Kogi Tacos served on corn tortillas</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/Betsy-CJ/LP0_7102 copy-retouched_LindseyByrnes.jpg"
              alt="Betsy and CJ 2"
              width={400}
              height={600}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Section 3: Places to Stay (Text left, Image right) */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">Places to Stay</h2>
            <p className="text-gray-700">
              If you are coming from out of town and would like suggestions of hotels or 
              accommodations please contact Betsy.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/Betsy-CJ/LP0_7260 copy.jpg"
              alt="Betsy and CJ 3"
              width={400}
              height={600}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>

        {/* FAQ CTA Section */}
        <div className="max-w-2xl mx-auto px-4 py-8 text-center">
          <p className="text-gray-700 mb-6">
            Have more questions? Check out our frequently asked questions for additional information.
          </p>
          <a 
            href="/faqs" 
            className="inline-block px-8 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            View FAQs
          </a>
        </div>
      </div>
    </div>
  );
} 