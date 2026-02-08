import { useEffect, useState } from 'react';

const eventsData = [
{
  "id": 4,
  "title": "Bangladesh Halal Expo - 2026",
  "date": "2026-05-07",
  "time": "7-9 May 2026",
  "location": "China Bangladesh Friendship Conference Center",
  "description": "Principal Organizer & Host: United Muslim Ummah Foundation. Venue: Bangladesh China Friendship Conference Center. Date: 7–8–9th of May 2026. Meeting Point of the Global Halal Economy - The largest international trade fair for halal products and services.",
  "content": "Principal Organizer & Host: United Muslim Ummah Foundation<br/>Venue: Bangladesh China Friendship Conference Center<br/>Date: 7–8–9th of May 2026.<br/>In Collaboration With: Ministry of Commerce, BSTI, Ministry of Religious Affairs, FBCCI, BGMEA, and other organizations.<br/><br/><strong>About: Meeting Point of the Global Halal Economy.</strong><br/>Halal Expo is the largest international trade fair that takes the pulse of the global halal economy and directs the sector, organized together with the world's most influential halal organization and Company.<br/><br/><strong>Halal Expo: Record Participation, Global Impact.</strong><br/>Held last year at the Bangladesh Halal Expo 2026 hosted approximately 300 exhibitors from nearly 40 countries and over 50,000 to 100,000 visitors from nearly countries, once again demonstrating the diversity and growth potential of the halal economy. The event celebrated the 1st international halal exhibition, Halal Summit and achieved great success with record participation and high trade volume. 500 international buyers and over 5000 international delegations made significant collaborations and trade connections during the fair.<br/><br/><strong>Innovative Areas and Fashion Vision</strong><br/>Halal Expo 2026 was not only the stage of trade; but also innovation, aesthetics and lifestyle. Prominent areas within the event: These areas provided the opportunity to showcase the latest products and technologies in the sector. In addition, the Modest Fashion Show and the Award Ceremony, which featured designers, attracted great interest from visitors.<br/><br/><strong>Strengthening Economic Ties with Business Forums</strong><br/>Forums and meetings that strengthen international cooperation were one of the most important building blocks of the event. Featured titles: Go Expo. Meeting These forums provided strong dialogue environments that deepened economic relations between the participating countries.<br/><br/><strong>Mission of Halal Expo 2026.</strong><br/>Halal Expo has a global vision that aims to make Bangladeshis is a one of the central country in the world in the $10 billion halal market. It brings together Bangladeshi brands and production power in many sectors such as food, pharmaceuticals, cosmetics, textiles, tourism and finance with the halal consumer base of over 2 billion worldwide.<br/><br/><strong>Halal Expo: Bigger, More Inclusive</strong><br/>Our meeting will be held at the Dhaka China Bangladesh friendship Center on 7,8,9th of May 2026. Halal Expo will continue to be a pioneering organization that directs the global halal sector, strengthens collaborations, and offers innovative solutions and sustainable trade opportunities. This year, the event will also feature special thematic sections such as NOV (Natural, Organic, Vegan Area), Private Label (Private Label Products Area) and SEFPEX (Aquaculture and Equipment Area). These areas will highlight sectorial diversity and innovation in many areas, from natural living trends to private label production and the seafood sector.<br/><br/><strong>Exhibition:</strong><br/>We are delighted to announce that the Halal Expo 2026- Dhaka ( OIC Halal Expo) simultaneously with Halal Summit under the Auspices of the Presidency of the Bangladesh, in collaboration with the Standards and Metrology Institute for Islamic Countries (SMIIC), and in coordination with the Islamic Centre for the Development of Trade (ICDT), alongside other relevant institutions of the Organization of Islamic Cooperation (OIC), is set to take place from May 28 to 30 2026. The prestigious event will be hosted at the China Bangladesh friendship Center in Dhaka, Bangladesh.<br/><br/><strong>Halal Exhibition 2026 Statistics:</strong><br/>1. Visitor countries 50+<br/>2. Exhibition Area 15000+<br/>3. Visitors 100,000+<br/>4. Exhibitors 300+<br/>5. B2B meetings 1000+<br/>6. Exhibitors countries 30+<br/>7. Hosted Buyers 500 +<br/><br/><strong>Halal Expo Visitor Profile</strong><br/>1. DISTRIBUTORS ORGANIZATIONS<br/>2. PUBLIC INSTITUTIONS AND<br/>3. BUYERS<br/>4. RETAIL AND CHAIN SUPERMARKETS HORECA REPRESANTATIVES<br/>5. IMPORT-EXPORT COMPANIES<br/>6. INVESTORS AND HOSTED BUYERS<br/>7. DIPLOMATIC MISSIONS<br/>8. WHOLESALERS<br/>9. TOURISM OPERATORS AND AGENCIES<br/>10. OTHER WHY SHOULD YOU EXHIBITION?<br/><br/>• Meet Decision-Makers in the Hosted Buyer Program.<br/>• Connect with key decision-makers in the Hosted Buyer program.<br/>• The World's Largest Halal Showcase Engage with the global Halal industry's most extensive platform.<br/>• Gather with All Sectors of the Halal Industry<br/>• Forge connections across diverse segments of the Halal market.<br/>• Discover New Distributors Find potential new distributors for your products and services.<br/>• Connect with Top-Level Corporate Representatives Engage with high-ranking representatives from prominent organizations.<br/>• Leverage the Highest Media Attention to Your Advantage Capitalize on the significant media interest surrounding the event.<br/><br/><strong>EXHIBITOR PROFILE:</strong><br/>Food& Beverage Manufacturers Food Processing & Packaging Horeca Organic Products Traditional Cuisine Cosmetics & Personal Care Pharmaceutical Products Don't Miss the Public Sectors Halal Certification Bodies Non-Governmental Organizations Education Textile & Modest Fashion Authentic Products Traditional Clothing.<br/><br/>Don't Miss the Public Sectors Halal Certification Bodies Non-Governmental Organizations Education Textile & Modest Fashion Authentic Products Traditional Clothing Opportunity to Expand Globally and Grow in New Markets.<br/><br/><strong>B2B program.</strong><br/>B2B program is realized every year within the scope of OIC Halal Expo. In the program, which was realized with the support of the Ministry of Trade of Commerce of Bangladesh, hosted buyers from abroad hold bilateral meetings with representatives of companies that opened a stand at the Halal Expo. It will take place on 7,8,9th of May 2026. at the China Bangladesh friendship Center in Dhaka. It is planned to bring nearly 500 hosted buyers from different sectors suitable for the participant profile from abroad to the Halal Expo 2026. Meetings will be organized in accordance with the appointment schedule to be determined in advance. Don't miss the opportunity to have commercial meetings with our special B2B delegations by participating in the Halal Expo fair!<br/><br/><strong>Why this Halal Expo in Bangladesh?</strong><br/>Dhaka has long served as a bridge between civilizations, maintaining its unique cultural and economic significance throughout history. As the global demand for halal products and services continues to rise, Dhaka stands out as the most strategic meeting point for this vast and growing market.<br/><br/><strong>Strategic Location</strong><br/>Situated at the crossroads of Europe and Asia, Bangladesh serves as the gateway to trade across three continents. This unparalleled geographical advantage makes Halal Expo a truly international trade platform, attracting participants from all corners of the world.<br/><br/><strong>Center of the Muslim Consumer Market</strong><br/>With a global Muslim population approaching 2 billion, Bangladeshi lies at the heart of this vast consumer network, maintaining strong economic and cultural ties with regions where demand for halal products is the highest. Halal Expo in Dhaka provides the perfect platform for companies looking to connect with this extensive consumer base.<br/><br/><strong>Modern Infrastructure and International Standards</strong><br/>Dhaka boasts world-class facilities and organizational infrastructure, providing a comfortable, secure, and professional experience for both visitors and exhibitors at the Halal Expo. The modern exhibition centers ensure a seamless and impactful trade fair experience.<br/><br/><strong>Cultural Richness and Hospitality</strong><br/>Beyond being a business hub, Dhaka offers participants an unforgettable cultural experience. With its rich Ottoman heritage, delicious cuisine, and warm hospitality, the city transforms Halal Expo into more than just a trade fair, making it a truly memorable destination for all attendees.<br/><br/><strong>Meet with Decision Makers in the Hosted Buyer Program!</strong><br/>At Halal Expo 2026, you will have the opportunity to meet category managers of local and international market chains and establish direct business connections! More than 1,000 purchasing professionals, primarily from the Middle East, Central and Western Europe, the Balkans and Africa, will be at the fair for one-on-one meetings. On this strategic platform, you can directly reach decision makers in your target audience, grow your exports and increase your marketing power.<br/><br/><strong>The World's Largest Halal Showcase!</strong><br/>Halal Expo 2026 offers an excellent opportunity for you to gain a larger share of the $6 trillion global halal economy. By taking part in this giant platform, you can showcase your products and production capacity to international buyers and position your brand on a global scale. Come Together with All Halal Sectors Halal Expo 2026, which covers many sectors such as food, tourism, finance, textile, pharmaceuticals and cosmetics, offers a unique synergy environment for companies that want to open up to the whole world. You can get the opportunity to develop new collaborations by meeting with industry leaders, entrepreneurs and investors under the same roof.<br/><br/><strong>Get New Dealers and Business Partners</strong><br/>Halal Expo attracts great attention from high-profile professional participants and investors. You are in the right place to discover new products, expand your dealer portfolio and meet your potential business partners. You can expand your sales network with effective and fast business connections and easily open up to new markets.<br/><br/><strong>Meet High-Level Institution Representatives</strong><br/>You will be given the opportunity to meet with leading representatives of the public and private sectors at conferences, panels and seminars to be held during the fair. You can visit the stands of ministries, municipalities and international institutions and obtain direct information about the policies and supports that concern your sector.<br/><br/><strong>Take Part in the Future of Halal Trade!</strong><br/>Halal Expo 2026 is not just a fair; it is also the place where the heart of the global halal vision beats. Take your place in this unique platform where trade, innovation and ethical values come together.<br/><br/><strong>PARTICIPANT PROFILE</strong><br/>Halal Expo 2026 brings together international and local brands, innovative initiatives and corporate leaders operating in the most dynamic and growing areas of the halal sector. Our participants consist of distinguished organizations that integrate the halal lifestyle approach based on quality, trust and sustainability into their business models.<br/><br/>Food and Drink<br/>Meat and meat products<br/>Milk and dairy products<br/>Ready-made food, snacks<br/>Beverages (halal certified)<br/>Organic and functional foods<br/><br/>Cosmetics and Personal Care Products<br/>Makeup, skin care, hair products<br/>Vegan and organic products<br/>Cleaning and hygiene products<br/><br/>Medicines and Health Products<br/>Food supplements<br/>Herbal treatment products<br/>Medical equipment and manufacturers<br/><br/>Finance and Public Institutions<br/>Participation banks<br/>Insurance and financial service providers<br/>Digital halal finance technologies<br/>Halal certification bodies<br/>Consultancy firms<br/>E-commerce and marketing platforms<br/><br/>Turizm<br/>Family-friendly hotels<br/>Halal resorts<br/>Travel agencies and consulting firms<br/><br/>Textiles and Fashion<br/>Modest clothing brands<br/>Ethical textile companies<br/>Accessory and shoe manufacturers<br/><br/>\"Don't Miss the Opportunity to Open Up to the World and Grow in New halal Markets\"<br/><br/>How to make gallery 2026<br/>If you want to discover the latest trends in the halal sector, meet innovative products and establish strong business connections, Halal Expo 2026 will be the most important meeting of the year for you. You will feel the pulse of the halal life world at this international event to be held in Bangladesh.<br/><br/><strong>What Awaits You During Your Visit?</strong><br/>• Opportunity to meet Halal Certified Food and Beverage Brands one-on-one and examine their products on-site<br/>• Discover conservative travel alternatives by getting information about Islamic hotels, villas and tourism companies<br/>• Evaluate investment and cooperation opportunities by seeing Islamic finance institutions on-site<br/>• Establish direct contact with leading companies in the conservative textile sector<br/>• Obtain up-to-date information by attending panels, seminars and events in the food, tourism, finance and textile sectors<br/>• Expand your business network by connecting with leading local and foreign companies<br/>• Open doors to new destinations by getting detailed information from tour companies<br/>• See business establishment opportunities by meeting franchising brands<br/>• Opportunity to make comprehensive comparisons by getting offers from many companies<br/>• Detailed information about Halal living products and services<br/>• Directly obtain materials such as catalogues, brochures and contracts for your future projects<br/><br/>You will find more than just a trade show at International Halal Expo 2026!<br/>A good trade show will not only provide a full trade show hall, but will also provide all the tools attendees need to develop their industry knowledge and meet with businesses large and small face to face. Halal Expo 2026 will give you the opportunity to connect with the industry's most important players, create new business opportunities and strengthen your position in the global market.<br/><br/><strong>VISITOR PROFILE</strong><br/>- BUYERS<br/>- MANUFACTURERS<br/>- IMPORTERS<br/>- EXPORTERS<br/>- WHOLESALERS<br/>- RETAILERS<br/>- ENTREPRENEURS<br/>- INVESTORS<br/>- UNIVERSITIES<br/>- PUBLIC<br/>- COOKS<br/>- ME<br/><br/><strong>Stand Services</strong><br/>A as a key service provider at the high quality exhibition decoration, manufacturing and installation stages, Expo is the official stand company of Halal Expo 2026.<br/>Expo prepares the approved project with qualified manufacturing staff and prepares it ready for use with professional installation teams by designing stand projects specific to your demands with its expert architects at the fairs you participate in.<br/>In order for you to live your exhibition experience at the highest possible level, all Asel Expo, which has realized the details and applications by considering them, also provides services to you in terms of extra materials, equipment and technological solutions.<br/>Our exhibitors who want to receive offers and services related to special stand works at our fair can contact Expo representative.<br/><br/><strong>TOURISM SERVICES:</strong> The Official Tourism Services Partner of the Halal Expo 2026 is World Expo Travel.<br/>World Expo Travel makes unique choices for the fair participants with its office networks in Istanbul, Frankfurt, America and produces solutions that result in satisfaction with its professional team specialized in its field. Serving abroad in the European Union and the Middle East countries, World Expo Travel has succeeded in globalizing its brand awareness. World Expo Travel continues its path by always prioritizing customer requests without compromising in terms of quality, trust and satisfaction.<br/>It analyzes the needs of companies very well during event periods and tries to respond to the unique criteria of each company with different combinations. World Expo Travel allows its customers to book budget hotels all over the world, not only during the exhibition period, but also at any time with the possibility of online hotel booking. Our companies which want to get service can contact the World Expo Travel representative.",
  "image": "/assets/halal_expo.png",
  "featured": false,
  "enabled": true,
  "status": "upcoming",
  "priority": "high",
  "capacity": 150,
  "registered": 98,
  "category": "networking",
  "pdf": "/documents/halal-expo-2026.pdf"
  },
  {
    "id": 5,
    "title": "Islamic History & Culture Olympiad 2026",
    "date": "2026-06-10",
    "time": "10:00 AM",
    "location": "Dhaka Convention Center",
    "description": "Annual Islamic conference bringing together scholars and leaders",
    "content": "Join us for our annual Islamic conference where we discuss contemporary issues facing Muslim communities worldwide. Expert speakers will share insights on education, technology, and social welfare.",
    "image": "/assets/event-01.jpg",
    "featured": true,
    "enabled": true,
    "status": "upcoming",
    "priority": "high",
    "capacity": 500,
    "registered": 234,
    "category": "conference"
  }
];


export default function LatestEventSection({ onOpenModal = () => {} }) {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadLatestEvent = async () => {
    try {
      const allEvents = eventsData;
      const enabledEvents = allEvents.filter(e => e.enabled === true && e.priority === "high");
      // console.log(enabledEvents);
      
      if (enabledEvents.length > 0) {
        setEvent(enabledEvents[0]); // Get first enabled event
      }
    } catch (err) {
      console.error('Error loading latest event:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLatestEvent();
    
    // Poll for changes every 2 seconds
    const interval = setInterval(loadLatestEvent, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleViewAllEvents = () => {
    window.location.href = '/events';
  };

  if (loading || !event) {
    return (
      <section className="container mx-auto px-4 py-24 max-w-6xl">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading latest event...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-24 max-w-6xl">
      {/* Header */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-3xl font-black text-primary">Latest Event</h2>
          <p className="text-gray-500 mt-1">Join our next big gathering</p>
        </div>

        <button
          onClick={handleViewAllEvents}
          className="text-primary font-bold hover:text-gold transition-colors text-sm"
        >
          View All Events →
        </button>
      </div>

      {/* Event Card */}
      <div className="bg-primary rounded-3xl text-white overflow-hidden shadow-2xl flex flex-col md:flex-row">
        {/* Image */}
        <div className="md:w-1/2 h-64 md:h-auto relative">
          <img
            src={event.image}
            onError={(e) =>
              (e.target.src = 'https://placehold.co/800x500?text=' + encodeURIComponent(event.title))
            }
            className="w-full h-full object-cover"
            alt={event.title}
          />
          <div className="absolute top-4 left-4 bg-gold text-primary-dark font-bold px-3 py-1 rounded shadow-md text-sm">
            {event.status?.toUpperCase() || 'UPCOMING'}
          </div>
        </div>

        {/* Content */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-left">
          <div className="flex items-center gap-3 text-gold/80 font-bold text-sm mb-3">
            <span>📅 {new Date(event.date).toLocaleDateString()}</span>
            <span>📍 {event.location}</span>
          </div>
          <h3 className="text-3xl font-bold mb-4">{event.title}</h3>
          <p className="text-gray-200 mb-8 leading-relaxed">
            {event.description || event.summary}
          </p>
          <div>
            <button
              onClick={() => onOpenModal('event', event)}
              className="bg-[#B28926] text-primary px-8 py-3 rounded-lg font-bold hover:bg-gold hover:text-primary-dark transition-all"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
