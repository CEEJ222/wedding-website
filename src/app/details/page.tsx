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
            <div>
              <h3 className="font-medium mb-2 text-gray-900">Address</h3>
              <p className="text-gray-700">
                1919 Bay St<br />
                Los Angeles, CA 90021
              </p>
            </div>
            <div className="mt-6">
              <h3 className="font-medium mb-2 text-gray-900">Timing</h3>
              <p className="text-gray-700">
                The celebration will take place on November 1st from 6:00 PM to 11:00 PM.
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/Era-Studio.JPG"
              alt="Era Studio"
              width={400}
              height={600}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Section 2: Parking (Image left, Text right) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">Parking</h2>
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
          <div className="flex-1 flex justify-center">
            { <Image
              src="/images/parking.png"
              alt="Parking"
              width={400}
              height={600}
              className="rounded-xl shadow-lg object-cover"
            /> }
          </div>
        </div>

        {/* Section 3: Dinner (Text left, Image right) */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">Dinner by Kogi</h2>
            <p className="text-gray-700 mb-6">
              We're excited to have the famous Kogi food truck serving their 
              delicious Korean-Mexican fusion tacos at our reception.
            </p>
            <div>
              <h3 className="font-medium mb-2 text-gray-900">Menu Highlights</h3>
              <ul className="text-gray-700 list-disc list-inside">
                <li>Short Rib, Spicy Pork, Chicken, and Tofu Kogi Tacos served on corn tortillas</li>
              </ul>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/kogi-truck.png"
              alt="Betsy and CJ 2"
              width={400}
              height={600}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Section 4: Places to Stay (Text left, Image right) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">Places to Stay</h2>
            <p className="text-gray-700 mb-4">
              We recommend staying in the area of <span className="font-medium text-gray-900">Old Town Pasadena</span> for the best experience—it's lively, walkable, and full of great restaurants, shops, and hotels.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>
                <a
                  href="https://www.hilton.com/en/book/reservation/rooms/?ctyhocn=PASPHHF&arrivalDate=2025-10-31&departureDate=2025-11-02&room1NumAdults=2&inputModule=HOTEL_SEARCH&viewPackagesAndPromotionsRate=true&WT.mc_id=zLADA0US1HF2OLX3GGL4ADVSP5LF6_PASPHHF7_281530522_&adType=PD&gclid=CjwKCAjw3MXBBhAzEiwA0vLXQRh9k5v6WTNYVWAzVDq9TeKYqbQzBT9Xl-SeP1A4Ta41OFhM6P_HuRoC89wQAvD_BwE&dsclid=70244261337247744&dclid=CN-4seKYvY0DFVvi_QUdsiAycw&hmGUID=5cf0be6d-3526-4f2b-8b62-a2580d077ef4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Hilton Pasadena
                </a>
              </li>
              <li>
                <a
                  href="https://be.synxis.com/?adult=2&arrive=2025-10-31&chain=26561&child=0&currency=USD&depart=2025-11-02&hotel=39736&level=hotel&locale=en-US&productcurrency=USD&rooms=1&start=availresults&tt_ad_type=paid&tt_cid=22231527995&tt_claim_key=claim%3A21d647189033bf90648b5d2309a5c52ff2f30c01442a4a60851b595a850a90d7%3A74fa405338eb47fc8effc13632815fc8%3A1748127181701&tt_clsrc=bl&tt_meta=gha&utm_campaign=google_hotel_ads&utm_content=paid&utm_medium=meta&utm_source=triptease_attract"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Pasadena Hotel & Pool
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.google.com%2Faclk%3Fsa%3Dl%26ai%3DDChcSEwjro9Ssmb2NAxV7OUQIHc2RCCIYABAOGgJkeg%26co%3D1%26ase%3D2%26gclid%3DCjwKCAjw3MXBBhAzEiwA0vLXQUPyjT-MTkQGrxQQiy6oTYTEHV5kts9ba4g4qvGtiNuSKlmk1R8MLRoCDX8QAvD_BwE%26category%3Dacrcp_v1_0%26sig%3DAOD64_0rLB8SbaRA4V9mNI8G6F81gVWdiw%26adurl&psig=AOvVaw1jiWybSsS98__t_JpYGj8x&ust=1748212731564000&rct=j&opi=106273886&ved=0CAcQx94CahgKEwiQgdOIlr2NAxUAAAAAHQAAAAAQ4wQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Westin Pasadena
                </a>
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              For those looking for a quiet, more boutique stay, we recommend 
              <a
                href="https://www.langhamhotels.com/en/the-langham/los-angeles/?htl=tllax&src=organic&eng=google&size=na&cid=yext_profile&y_source=1_MTAwNjI1OTQtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline ml-1"
              >
                The Langham in South Pasadena
              </a>
              .
            </p>
            <p className="text-gray-700 mb-4">
              For a broader selection, here's a 
              <a
                href="https://www.google.com/travel/search?q=pasadena%20hotels&g2lb=4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72414906%2C72471280%2C72472051%2C72481459%2C72485658%2C72560029%2C72573224%2C72616120%2C72647020%2C72648289%2C72686036%2C72760082%2C72803964%2C72832976%2C72882230%2C72885032%2C72946003%2C72948010%2C72958594%2C72958624%2C72959982%2C72969407&hl=en-US&gl=us&cs=1&ssta=1&ts=CAESCgoCCAMKAggDEAAaUgo0EjAyJDB4ODBjMmMyZGMzODMzMGI1MToweDUyYjQxMTYxYWQxOGY0YToIUGFzYWRlbmEaABIaEhQKBwjpDxAKGB8SBwjpDxALGAIYAjICCAEqCQoFOgNVU0QaAA&qs=CAE4BkIJEb48AgxhemLxQgkR44jSQJD7-1hCCRGnE_U943AsrVpKCAEyRqoBQxABKgoiBmhvdGVscygAMh4QASIatvpFNwWvxRybsiBCjkJO5MBjy2bzl2-9qy0yExACIg9wYXNhZGVuYSBob3RlbHM&ap=MAFoAQ&ictx=111&ved=0CAAQ5JsGahcKEwiA8Inilb2NAxUAAAAAHQAAAAAQBw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline ml-1"
              >
                list of hotels in Pasadena
              </a>.
            </p>
            <p className="text-gray-700">
              If you'd like personalized suggestions or have any questions, please contact Betsy or CJ.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/hotels.png"
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