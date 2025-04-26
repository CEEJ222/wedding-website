import Image from 'next/image';

export default function DressCode() {
  return (
    <div className="min-h-screen pt-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-light text-center mb-8 text-black">Dress Code</h1>
        
        <div className="bg-gray-50 rounded-lg shadow-sm p-8 border border-gray-200">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-light mb-8 text-center text-gray-900">Cocktail Attire</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-3 text-gray-900">For Women</h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  Cocktail dresses, elegant jumpsuits, or a dressy skirt and top combination. 
                  Think sophisticated and polished—perfect for an evening celebration.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3 text-gray-900">For Men</h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  A suit and tie or a sport coat with dress pants. A blazer with chinos could 
                  also work for a more relaxed yet still polished look.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3 text-gray-900">Colors & Style</h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  We're envisioning a palette inspired by the venue—rich earth tones, 
                  deep burgundies, and warm neutrals. Feel free to incorporate these colors 
                  or choose what makes you feel most confident and celebratory.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3 text-gray-900">Footwear</h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  Choose shoes that you can comfortably dance in! The venue has both indoor 
                  and outdoor spaces, so consider that when selecting your footwear.
                </p>
              </div>
              
              <div className="pt-4">
                <p className="text-gray-700 italic text-base leading-relaxed">
                  Remember, the most important thing is that you feel comfortable and confident. 
                  If you have any questions about the dress code, please don't hesitate to reach out!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 