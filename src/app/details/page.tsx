import Image from 'next/image';
import { spectral, instrumentSans } from '@/lib/fonts';

export default function Details() {
  return (
    <div 
      className="min-h-screen pt-16 bg-gray-50 relative"
      style={{
        background: `
          radial-gradient(circle 200px at 75% 25%, rgba(255, 192, 203, 0.6) 0%, rgba(205, 167, 190, 0.4) 30%, rgba(255, 255, 0, 0.3) 60%, transparent 80%),
          radial-gradient(circle 180px at 25% 45%, rgba(255, 255, 0, 0.5) 0%, rgba(205, 167, 190, 0.3) 30%, rgba(255, 192, 203, 0.2) 60%, transparent 80%),
          radial-gradient(circle 220px at 75% 65%, rgba(205, 167, 190, 0.55) 0%, rgba(255, 192, 203, 0.4) 30%, rgba(255, 255, 0, 0.25) 60%, transparent 80%),
          radial-gradient(circle 190px at 25% 85%, rgba(255, 255, 0, 0.4) 0%, rgba(255, 192, 203, 0.3) 30%, rgba(205, 167, 190, 0.2) 60%, transparent 80%),
          #F9FAFB
        `
      }}
    >
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Header and Intro Area with Icons (tight spacing) */}
        <div className="mb-12">
          <div className="flex justify-start mb-2">
            <Image
              src="/icons/subpage-icons/ring.svg"
              alt="Ring Icon"
              width={64}
              height={64}
              className="opacity-80"
            />
          </div>
          <h1 className={`${spectral.className} text-4xl font-light text-center mb-2 pb-8 text-gray-900`}>Wedding Details</h1>
          <div className="text-center mb-4 pb-24">
            <p className={`${instrumentSans.className} text-gray-900`}>
              On the day of the wedding, we are having a very small ceremony in nature with just a few friends. We prefer to keep it small and intimate. We're inviting you to join us after to have the best party and celebrate us embarking on this next chapter of our lives together.
            </p>
          </div>
        </div>
        {/* Main Content Sections with Large Spacing */}
        <div className="space-y-40">
          {/* Section 1: Venue Info (Text left, Image right) */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 md:text-left text-center">
              <h2 className={`${spectral.className} text-3xl font-semibold mb-4 text-gray-900`}>Join Us at Era Studio</h2>
              <p className={`${instrumentSans.className} text-gray-700 mb-6`}>
                Located just south of the Arts District in Downtown Los Angeles.
              </p>
              <div>
                <h3 className={`${spectral.className} font-bold mb-2 text-gray-900`}>Address</h3>
                <a
                    href="https://g.co/kgs/dXQ1M8r"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium hover:underline"
                  >
                <p className={`${instrumentSans.className}`}>
                  1919 Bay St<br />
                  Los Angeles, CA 90021
                </p>                    
                </a>

              </div>
              <div className="mt-6">
                <h3 className={`${spectral.className} font-bold mb-2 text-gray-900`}>Timing</h3>
                <p className={`${instrumentSans.className} text-gray-700`}>
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
            <div className="flex-1 md:text-left text-center">
              <h2 className={`${spectral.className} text-3xl font-semibold mb-4 text-gray-900`}>Parking</h2>
              <p className="text-gray-700 mb-4">
                If you're driving to the wedding, there's plenty of street parking on Bay street and other streets around the venue. 
                You might notice some signs along Bay street in front of the warehouses that say "Parking only for [business name] customers"—don't worry, 
                those aren't official! The venue owner informed us we can park in those spots. 
              </p>
              <p className="text-gray-700">
                If street parking is full, there's an additional lot available just two blocks away at:<br />
                <a
                    href="https://g.co/kgs/waAB17g"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    <span className="font-medium ">826 Mateo St, Los Angeles, CA 90021</span>
                    </a>
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
            <div className="flex-1 md:text-left text-center">
              <h2 className={`${spectral.className} text-3xl font-semibold mb-4 text-gray-900`}>Dinner by Kogi</h2>
              <p className="text-gray-700 mb-6">
                We're excited to have the famous Kogi food truck serving their 
                delicious Korean-Mexican fusion tacos at our reception.
              </p>
              <div>
                <h3 className={`${spectral.className} font-medium mb-2 text-gray-900`}>Kogi Tacos Menu</h3>
                <ul className="text-gray-700 list-inside">
                  <li>Short Rib</li>
                  <li>Spicy Pork</li>
                  <li>Chicken</li>
                  <li>Tofu</li>
                    <p className="text-gray-700 font-style: italic mt-4">All tacos will be served on corn tortillas</p>
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
            <div className="flex-1 md:text-left text-center">
              <h2 className={`${spectral.className} text-3xl font-semibold mb-4 text-gray-900`}>Places to Stay</h2>
              <p className="text-gray-700 mb-4">
                We recommend staying in the area of <span className="font-medium text-gray-900">Old Town Pasadena</span> for the best experience—it's lively, walkable, and full of great restaurants, shops, and hotels.
              </p>
              <ul className="list-inside text-gray-700 mb-4">
              <li>
                  <a
                    href="https://www.marriott.com/en-us/hotels/laxot-courtyard-los-angeles-pasadena-old-town/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Courtyard by Marriott Pasadena Old Town
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.hilton.com/en/book/reservation/rooms/?ctyhocn=PASPHHF&arrivalDate=2025-10-31&departureDate=2025-11-02&room1NumAdults=2&inputModule=HOTEL_SEARCH&viewPackagesAndPromotionsRate=true&WT.mc_id=zLADA0US1HF2OLX3GGL4ADVSP5LF6_PASPHHF7_281530522_&adType=PD&gclid=CjwKCAjw3MXBBhAzEiwA0vLXQQRh9k5v6WTNYVWAzVDq9TeKYqbQzBT9Xl-SeP1A4Ta41OFhM6P_HuRoC89wQAvD_BwE&dsclid=70244261337247744&dclid=CN-4seKYvY0DFVvi_QUdsiAycw&hmGUID=5cf0be6d-3526-4f2b-8b62-a2580d077ef4"
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
          {/* RSVP CTA Section */}
          <div className="max-w-2xl mx-auto px-4 py-12 text-center">
            <h2 className={`${spectral.className} text-3xl font-semibold mb-4 text-gray-900`}>Ready to Celebrate?</h2>
            <p className={`${instrumentSans.className} text-gray-700 mb-8`}>
              We can't wait to party with you! Please let us know if you'll be joining us for our special day.
            </p>
            <a 
              href="/rsvp" 
              className={`${spectral.className} inline-block px-8 py-3 bg-yellow-300 border border-black text-black text-lg font-medium rounded-md hover:bg-yellow-200 transition-colors`}
            >
              RSVP Now
            </a>
          </div>
          {/* FAQ CTA Section */}
        </div>
      </div>
    </div>
  );
}