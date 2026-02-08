import { useEffect, useState } from 'react';

const newsData = [
  {"id": 1,
    "title": "Palestine Webinar Series Launched to Discuss Background of the Palestine Conflict",
    "date": "",
    "author": "United Muslim Ummah",
    "summary": "A Palestine Webinar Series has been launched with the aim of raising awareness and providing historical and contemporary insights into the Palestine conflict",
    "content": "A Palestine Webinar Series has been launched with the aim of raising awareness and providing historical and contemporary insights into the Palestine conflict. The first episode of the series, titled 'Background of the Palestine Conflict & Palestine Today,' will be held live on Friday, 18th June at 7:30 PM via Facebook Live.\n\nThe keynote speaker of the session is Nurul Huda Habib, a scholar of Arabic and Islamic Studies. He holds a BA and MA in Arabic from Rajshahi University, and an MA in Islamic Studies (Islam in Europe) from the University of Sarajevo, Bosnia, where he is also serving as a Research Fellow. His academic background and research experience are expected to add depth and clarity to the discussion.\n\nThe webinar will be hosted by Munayem Bin Mujib, who will moderate the session and facilitate interaction with the audience. The program aims to present an academic, historical, and ethical understanding of the Palestine issue, highlighting both its roots and current realities.\n\nThe event will be streamed live on www.facebook.com/UMUYN, allowing viewers from around the world to participate. Organizers hope the webinar series will contribute to informed dialogue and greater global awareness regarding Palestine.",
    "image": "/assets/news-01.jpg",
    "featured": true,
    "enabled": true,
    "category": "education",
    "views": 1800,
    "likes": 450
  },
  {
    "id": 2,
    "title": "Webinar on the Role of Youth in Responding to the Challenges of the Ummah to Be Held",
    "date": "",
    "author": "United Muslim Ummah Youth Network",
    "summary": "A webinar titled 'The Role of Youth in Responding to the Challenges of the Ummah' is set to be held with the objective of inspiring young Muslims",
    "content": "A webinar titled 'The Role of Youth in Responding to the Challenges of the Ummah' is set to be held with the objective of inspiring young Muslims to understand their responsibilities toward the Muslim Ummah in the contemporary world.\n\nThe webinar will take place on Friday, 26 June at 8:00 PM and will be streamed live on Facebook.\n\nThe keynote speaker of the session is Janab Ataul Islam Abu, Assistant Professor, Department of MIS, University of Dhaka. In his talk, he is expected to shed light on the intellectual, moral, and practical roles of youth in facing the current challenges confronting the Ummah.\n\nThe program is being organized by United Muslim Ummah Youth Network (UMUYN) as part of its ongoing efforts to engage and empower Muslim youth through knowledge-based discussions and awareness programs.\n\nThe live broadcast will be available on https://www.facebook.com/UMUYN/. Organizers have invited students, youth, and concerned members of the community to join the session and benefit from the discussion.",
    "image": "/assets/news-02.jpg",
    "featured": true,
    "enabled": true,
    "category": "youth",
    "views": 1600,
    "likes": 380
  },
  {
    "id": 3,
    "title": "As the President of International Islamic Representation Organization (IIRO) Madzhumder Muhammad Amin Honoured by the civil society from His Motherland",
    "date": "",
    "author": "Minister of Religion Nurul Islam",
    "summary": "In 1996, under the initiative of then Minister of Religion Nurul Islam, Madzhumder Muhammad Amin was honored in his birthplace for his election as President of the International Relief Organization.",
    "content": "In a momentous occasion in 1996, the United Muslim Ummah, spearheaded by then Minister of Religion Nurul Islam, bestowed an honor upon Madzhumder Muhammad Amin in his own motherland. This tribute recognized his distinguished election as the President of the International Islamic Representation Organization (IIRO), underscoring his pivotal role in advancing humanitarian aid and fostering global solidarity among Muslim communities worldwide. The event celebrated his lifelong dedication to relief efforts, inspiring generations to contribute to the betterment of the Ummah.",
    "image": "/assets/gallery-025.jpg",
    "featured": false,
    "enabled": true,
    "category": "training",
    "views": 3450,
    "likes": 892
  },
  {
    "id": 4,
    "title": "Cultural Programs in Russia",
    "date": "",
    "author": "Culture Team",
    "summary": "Read how our initiatives have transformed communities",
    "content": "Meet the individuals whose lives have been positively impacted by our programs. From students who became entrepreneurs to families who found stability, these stories inspire us to do more.",
    "image": "/assets/news-04.jpg",
    "featured": false,
    "enabled": true,
    "category": "stories",
    "views": 1890,
    "likes": 523
  },
  {
    "id": 5,
    "title": "World Conscience in the Cries on Gaza",
    "date": "",
    "author": "United Muslim Ummah",
    "summary": "The ongoing violence in Gaza is severely affecting children and civilians, shaking global conscience",
    "content": "The ongoing violence and military operations in Gaza Strip are increasing the suffering of ordinary people day by day. Especially the pain and cries of children are shaking the world conscience. Terrified faces amidst the ruins, the cries of injured children, and the pain of losing family—these scenes are today a reflection of a horrific humanitarian crisis.\n\nIn various photos that have been circulating recently, it can be seen that countless children are being injured due to shelling and attacks, some are losing parents, some are losing homes. School-going children don't have books and notebooks in their hands today, they have fear and uncertainty. Due to lack of safe shelter, many families are forced to spend days under the open sky.\n\nInternational human rights organizations are repeatedly warning that international humanitarian laws are being violated in this conflict and children's protection is under extreme threat. The crisis of food, water, medical care and shelter is becoming more acute day by day. Hospitals are facing shortage of necessary medicines and medical equipment.\n\nHuman rights activists are calling on world leaders and international community to immediately stop the violence and ensure humanitarian assistance. At the same time, demands have been raised to strengthen initiatives for ceasefire and peaceful solutions.\n\nMay the tears in the eyes of innocent children and the suffering of helpless people not remain confined to pictures only—this is a difficult question for world humanity. Only the establishment of peace and justice can show the way to liberation from this humanitarian disaster.",
    "image": "/assets/gallery-066.jpg",
    "featured": true,
    "enabled": true,
    "category": "humanitarian",
    "views": 2500,
    "likes": 890
  }
];

function NewsCarouselSection({ onOpenModal = () => {} }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadNews = async () => {
    try {
      const allNews = newsData; // Using local data instead of API call
      const enabledNews = allNews.filter(n => n.enabled === true);
      setArticles(enabledNews.slice(0, 4)); // Show first 4
    } catch (err) {
      console.error('Error loading news:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNews();
    
    // Poll for changes every 2 seconds
    const interval = setInterval(loadNews, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleViewAllNews = () => {
    window.location.href = '/news';
  };

  if (loading) {
    return (
      <section className="py-24">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading news...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-primary">
            News & Updates
          </h2>
          <button
            onClick={handleViewAllNews}
            className="text-primary font-bold hover:text-gold transition-colors text-sm"
          >
            Read All News →
          </button>
        </div>

        {/* Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {articles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No news articles available yet.</p>
            </div>
          ) : (
            <div id="news-carousel" className="flex gap-6 overflow-x-auto snap-x pb-4">
              {articles.map((item) => (
                <div
                  key={item.id}
                  className="flex-none w-72 sm:w-80 bg-white rounded-xl shadow-md overflow-hidden snap-center cursor-pointer hover:-translate-y-1 transition-transform border border-gray-100 flex flex-col"
                  onClick={() => onOpenModal('news', item)}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image}
                      onError={(e) =>
                        (e.target.src =
                          'https://placehold.co/800x500?text=' + encodeURIComponent(item.title))
                      }
                      className="w-full h-full object-cover"
                      alt={item.title}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-gold font-bold text-xs uppercase mb-2">
                      {new Date(item.date).toLocaleDateString()}
                    </span>
                    <h4 className="font-bold text-primary text-lg mb-2 leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm line-clamp-2">
                      {item.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default NewsCarouselSection;
