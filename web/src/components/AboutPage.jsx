import { useState } from 'react';
import Modal from './Modal';

const AboutPage = ({ onNavigate }) => {
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="text-white py-16 md:py-32 bg-cover bg-center"
        style={{
          backgroundImage: "url('./assets/Event-01.jpg')",
        }}
      >
        <div className="bg-primary/75">
          <div className="container mx-auto px-4 max-w-6xl py-16 md:py-32">
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              United Muslim Ummah
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-95 max-w-3xl mb-4">
              Uniting Muslim Communities for Global Peace and Prosperity
            </p>
            <p className="text-lg opacity-90 max-w-3xl">
              A global organization dedicated to fostering unity, dialogue, and collaborative solutions to international challenges.
            </p>
          </div>
        </div>
      </div>

      {/* Organization Overview */}
      <div className="py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-8">
                Who We Are
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                United Muslim Ummah (UMU) is an international organization representing the interests and values of the global Muslim community. With presence in 63+ countries, we are working for the interest 2+ billion Muslims of the world.
              </p>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Founded on principles of Islamic unity, interfaith cooperation, and social responsibility, UMU works to address pressing global challenges including poverty, conflict, healthcare access, and educational inequity.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our organization brings together distinguished scholars, political leaders, business professionals, youth advocates, and civil society experts to develop and implement sustainable solutions for the betterment of humanity.
              </p>
            </div>

            {/* Key Statistics */}
            <div className="bg-[#A18623] bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-8 text-center">Our Reach & Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
                  <div className="text-4xl font-black mb-2">63+</div>
                  <div className="text-sm font-semibold opacity-95">Member Countries</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
                  <div className="text-4xl font-black mb-2">2+ B</div>
                  <div className="text-sm font-semibold opacity-95">Muslims Represented</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
                  <div className="text-4xl font-black mb-2">50+</div>
                  <div className="text-sm font-semibold opacity-95">Active Programs</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
                  <div className="text-4xl font-black mb-2">500+</div>
                  <div className="text-sm font-semibold opacity-95">Implementation Centers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download Our Journey PDF */}
      <div className="py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-black text-primary mb-8">
            You Can Read More About United Muslim Ummah
          </h2>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
            For a detailed overview of our history, achievements, and future plans, download our comprehensive outlining the journey of United Muslim Ummah.
          </p>
          <a
            href="/documents/our-journey.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
            </svg>
            Download PDF
          </a>
        </div>
      </div>

      {/* Membership */}
      <div className="py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-center text-primary mb-16">
            Who Can Be Member of UMU?
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-center text-gray-700 text-lg mb-12 leading-relaxed">
              Those people who believe in the one Allah & the Prophet Muhammad (PBUH) is the last Prophet of Allah and held with a view of establish the unity of Ummah 
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Genaler Members */}
              <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-all border-t-4 border-gold">
                <div className="text-4xl mb-4">👤</div>
                <h3 className="text-xl font-bold text-primary mb-4">General Member</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Those who are Muslim and believe in one God, held with a view to establish the United Muslim Ummah Foundation and willing to contribute by any means towards social development will be considered as general member by recognition of founder. Founder and his representative will get priority to be elected as member of the Executive Board.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold">✓</span>
                    <span className="text-sm text-gray-700">Application fee: Tk. 500/-</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold">✓</span>
                    <span className="text-sm text-gray-700">Application approved by founder and president</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold">✓</span>
                    <span className="text-sm text-gray-700">Priority election rights for founder and representatives</span>
                  </li>
                </ul>
              </div>

              {/* Life Member */}
              <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-all border-t-4 border-gold">
                <div className="text-4xl mb-4">👑</div>
                <h3 className="text-xl font-bold text-primary mb-4">Life Member</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  After motivated to know the objectives and programs of the United Muslim Ummah Foundation, those who will donate Tk. 100,000/- or more will be treated as a life member.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold">✓</span>
                    <span className="text-sm text-gray-700">Minimum donation: Tk. 100,000/-</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold">✓</span>
                    <span className="text-sm text-gray-700">Lifetime membership status</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold">✓</span>
                    <span className="text-sm text-gray-700">Treated as new committee of foundation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-sky-light rounded-xl p-8 mt-8 text-center">
              <h3 className="text-xl font-bold text-primary mb-4">Membership Benefits</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl mb-2">🤝</div>
                  <h4 className="font-bold text-primary mb-2">Networking</h4>
                  <p className="text-sm text-gray-600">Connect with global Muslim leaders and organizations</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">📚</div>
                  <h4 className="font-bold text-primary mb-2">Resources</h4>
                  <p className="text-sm text-gray-600">Access to research, publications, and educational materials</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🎯</div>
                  <h4 className="font-bold text-primary mb-2">Participation</h4>
                  <p className="text-sm text-gray-600">Take part in programs, conferences, and decision-making</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-20 bg-sky-light border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-center text-primary mb-16">
            Mission & Vision
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
           

            {/* Vision Card */}
            <div className="bg-white rounded-2xl shadow-lg p-10 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-dark" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                To work with world humanity to stop interethnic and interrelations conflicts and work against terrorism, war, aggression, violation, Mass produce weapons. To work for to establish a new world order without, drags, war, alcohol, homosexuality, destruction of the institute of family, mass hunger. To organize world peace march to stop above cause and work for to establish a new world peace organization.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-xl">→</span>
                  <span className="text-gray-700">Peaceful coexistence among all nations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-xl">→</span>
                  <span className="text-gray-700">Scientific and cultural excellence</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-xl">→</span>
                  <span className="text-gray-700">Inclusive and equitable global society</span>
                </li>
              </ul>
            </div>

             {/* Mission Card */}
            <div className="bg-white rounded-2xl shadow-lg p-10 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-dark" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                To free and salvage the world humanity form all evil, to be united all the Muslims and Non-Muslim. Our main objective is to establish unity, solidarity and brotherhood among the muslims of the world. Our task is to keep peace and tranquillity to protect spiritual values and the unity, to establish peace, happiness and prosperity all over the Muslim and Non- Muslim territories of the world. Taking proper measures for realization of women's rights indicated in Islam. To Improving of public opinion against terrorism, war, aggression, violation, Mass produce weapons also against homosexuality, to save universal family system in the world.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-xl">→</span>
                  <span className="text-gray-700">Foster global Muslim unity and cooperation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-xl">→</span>
                  <span className="text-gray-700">Strengthen voice in international affairs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-xl">→</span>
                  <span className="text-gray-700">Address global challenges collaboratively</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-center text-primary mb-16">
            Core Values & Principles
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Unity",
                description: "We champion collective action and solidarity among Muslim communities while respecting theological diversity within Islamic tradition.",
                icon: "🤝"
              },
              {
                title: "Justice",
                description: "Fairness, equality, and protection of human dignity are fundamental to all our endeavors and advocacy.",
                icon: "⚖️"
              },
              {
                title: "Excellence",
                description: "We maintain the highest standards in research, implementation, and evaluation of all our programs and initiatives.",
                icon: "⭐"
              },
              {
                title: "Integrity",
                description: "Transparency, ethical conduct, and accountability in all operations define our organizational culture.",
                icon: "✨"
              },
              {
                title: "Compassion",
                description: "Empathy and humanitarian concern for the vulnerable guide our approach to social development and crisis response.",
                icon: "❤️"
              },
              {
                title: "Inclusivity",
                description: "We welcome diverse voices and perspectives, fostering meaningful participation from all demographic groups.",
                icon: "🌍"
              },
              {
                title: "Brotherhood",
                description: "Fostering strong bonds of brotherhood among Muslims worldwide, promoting mutual support and cooperation.",
                icon: "👥"
              },
              {
                title: "Peace",
                description: "Advocating for peace, harmony, and conflict resolution to create a peaceful world for all humanity.",
                icon: "🕊️"
              }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-all text-center border-t-4 border-gold"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Journey */}
      <div className="py-20 bg-sky-light border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-center text-primary mb-16">
            Our Journey
          </h2>

          <div className="max-w-4xl mx-auto">
            {[
              {
                year: "1990",
                title: "Inception",
                description: "United Muslim Ummah founded on principles of Islamic unity and cooperation among Muslim-majority nations."
              },
              {
                year: "2000s",
                title: "Institutional Development",
                description: "Established governance structures, councils, and regional offices to coordinate activities across continents."
              },
              {
                year: "2010s",
                title: "Program Expansion",
                description: "Launched major initiatives in education, healthcare, economic development, and humanitarian assistance."
              },
              {
                year: "2015",
                title: "International Recognition",
                description: "Gained observer status at international forums and established partnerships with major global organizations."
              },
              {
                year: "2020",
                title: "Digital Integration",
                description: "Implemented digital platforms for member engagement and launched virtual collaboration networks."
              },
              {
                year: "2024+",
                title: "Global Leadership",
                description: "Continues expanding impact through innovative programs addressing contemporary global challenges."
              }
            ].map((milestone, index) => (
              <div key={index} className="flex gap-8 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center text-white font-bold text-base">
                    {index + 1}
                  </div>
                  {index !== 5 && <div className="w-1 h-24 bg-gold mt-4"></div>}
                </div>
                <div className="bg-white rounded-lg p-8 shadow-md flex-1">
                  <div className="text-gold font-bold text-sm uppercase tracking-widest mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{milestone.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Flag */}
      <div className="py-20 border-b border-gray-200">
          * <div className="container mx-auto px-4 max-w-6xl">

          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="mb-8">
                <img
                  src="/assets/umu-flag.png"
                  alt="United Muslim Ummah Flag"
                  className="w-full max-w-sm mx-auto rounded-lg shadow-md"
                  onError={(e) => e.target.src = '/assets/gallery-093.jpg'}
                />
              </div>

              <div className="text-left max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                  United Muslim Ummah has its own Flag
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  The organization has its own flag on a white cloth. At the top center of the flag in Arabic "La-ilaha illallah Muhammadur rasulullah (PBUH)" and in the light of Sharia, the downward vertical light is illuminating the world. The flag is a symbol of world peace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Focus Areas */}
      {/* <div className="py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-center text-primary mb-16">
            Strategic Focus Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Education & Human Capital",
                description: "Quality education and skills development for Muslim youth and communities",
                icon: "📚"
              },
              {
                title: "Healthcare & Wellness",
                description: "Accessible healthcare services and public health programs across member nations",
                icon: "⚕️"
              },
              {
                title: "Economic Empowerment",
                description: "Sustainable development and economic cooperation among Muslim nations",
                icon: "💼"
              },
              {
                title: "Conflict Resolution",
                description: "Peaceful resolution of disputes and mediation in regional conflicts",
                icon: "🕊️"
              },
              {
                title: "Interfaith Dialogue",
                description: "Building understanding and cooperation between different faith communities",
                icon: "🕌"
              },
              {
                title: "Innovation & Technology",
                description: "Harnessing technology for community development and knowledge sharing",
                icon: "💻"
              },
              {
                title: "Environmental Stewardship",
                description: "Promoting sustainable practices and climate action",
                icon: "🌱"
              },
              {
                title: "Youth & Women Empowerment",
                description: "Leadership development and gender equality initiatives",
                icon: "🚀"
              }
            ].map((area, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:-translate-y-1 border-l-4 border-gold"
              >
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-3">{area.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Programs & Initiatives */}
      <div className="py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-center text-primary mb-16">
            Programs & Initiatives
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Annual Qur'an & Nasheeds Competition",
                items: ["6-month preparation period", "Dedicated working committee", "Participant selection & invitations", "Venue arrangement", "Hospitality & awards", "Publication & media coverage"],
                icon: "📖"
              },
              {
                title: "International Peace Conference",
                items: ["Annual event (since 2024)", "20-member organizing committee", "1-year preparation & promotion", "VIP guest selection", "Hotels & facilities", "Digital platforms & publicity"],
                icon: "🕊️"
              },
              {
                title: "Annual Peace Ambassadors Program",
                items: ["Selection of 10 peace ambassadors", "Commission-based evaluation", "1-year preparation cycle", "Public applications accepted", "Awards & honors ceremony", "Media publication"],
                icon: "🌟"
              },
              {
                title: "International Visitors Program",
                items: ["Invitation of renowned figures", "6-month preparation period", "Transportation & accommodation", "3-day hosting events", "Media coverage & publicity", "Cultural exchange programs"],
                icon: "🌍"
              },
              {
                title: "Young Network Programs",
                items: ["Family libraries establishment", "College & university committees", "Monthly discussion forums", "Seminars & round-table conferences", "Publication & outreach", "Leadership development workshops"],
                icon: "👥"
              },
              {
                title: "Women Network Programs",
                items: ["Family-based learning systems", "Educational publications", "Round-table discussions", "Seminars & community engagement", "Women empowerment initiatives", "Skills development programs"],
                icon: "👩‍🤝‍👩"
              },
              {
                title: "Scholars Programs",
                items: ["Discussion forums & seminars", "District & sub-district missions", "Religious guidance & counsel", "Islamic knowledge dissemination", "Interfaith dialogue initiatives", "Educational material publication"],
                icon: "📚"
              },
              {
                title: "Education & Research",
                items: ["Village-based Qur'an learning centers", "Qur'an Research Center establishment", "International Islamic Research Institute", "Academic publications on Muslim unity", "Comparative religious studies", "Development of educational resources"],
                icon: "🔬"
              },
              {
                title: "Diplomatic Engagement",
                items: ["Annual diplomats reception", "New ambassador welcome events", "Departing ambassador honor events", "Cultural gift exchanges", "Hospitality programs", "International relations building"],
                icon: "🤝"
              },
              {
                title: "Public Awareness Campaigns",
                items: ["Nationwide grassroots outreach", "Distribution of 1 million scarves", "Distribution of 1 million Qur'ans", "10,000 organizational crests", "Publication materials (posters, leaflets, banners)", "Educational campaigns"],
                icon: "📢"
              },
              {
                title: "Digital Presence",
                items: ["YouTube channel management", "Social media page administration", "Online interviews & webinars", "Website & internet platforms", "Digital content creation", "Online community engagement"],
                icon: "💻"
              },
              {
                title: "Headquarters Establishment",
                items: ["Land acquisition & development", "Project planning & design", "National & international fundraising", "Construction & infrastructure", "Office facilities development", "Operational setup"],
                icon: "🏢"
              }
            ].map((program, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition-all border-t-4 border-gold"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{program.icon}</span>
                  <h3 className="text-lg font-bold text-primary">{program.title}</h3>
                </div>
                <ul className="space-y-2">
                  {program.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-gold font-bold">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Advisor Board */}
      <div className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-center text-primary mb-16">
            Advisor
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-center text-gray-700 text-lg mb-12 leading-relaxed">
              The Advisor Board provides strategic guidance and oversight to ensure the organization's long-term success and alignment with its mission.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "Mufti Shaykh Nafigulla Ashirov ",
                  title: "Chairman(Russia)",
              
                  color: "from-blue-500 to-blue-600",
                  image: "/assets/Nafigulla.jpg"
                },
                {
                  name: "Shaykh Sayed Kamaluddin Zafree",
                  title: "Co-Chairman (Bangladesh)",
                  color: "from-purple-500 to-purple-600",
                  image: "assets/Shaykh Sayed Kamaluddin Zafree.jpeg"
                }
              ].map((member, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedMember(member)}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all min-h-96 flex flex-col cursor-pointer"
                >
                  <img src={member.image} alt={member.name} className="w-48 h-48 object-cover rounded-full mx-auto mt-6 mb-4 shadow-lg" />
                  <div className="p-6 flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-1">{member.name}</h3>
                    <p className="text-gold font-bold mb-3">{member.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Executive Board */}
      <div className="py-20 bg-sky-light border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-center text-primary mb-16">
            Executive Body
          </h2>

          <div className="max-w-6xl mx-auto">
            <p className="text-center text-gray-700 text-lg mb-12 leading-relaxed">
              The Executive Board comprises distinguished leaders and professionals committed to advancing the organization's mission across all domains.
            </p>

            {/* President Section */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="text-center mb-8">
                <img
                  src="/assets/amin vai 3.jpeg"
                  alt="Madzhumder Muhammad Amin"
                  className="w-80 h-80 object-cover rounded-lg mx-auto mb-4 shadow-lg border-4 border-white"
                  onError={(e) => e.target.src = 'https://via.placeholder.com/160x160?text=Image+Not+Found'}
                />
                <h3 className="text-3xl font-bold text-primary mb-3">Madzhumder Muhammad Amin</h3>
                <p className="text-gray-600 font-medium text-lg">Founder President and Idea Maker of UMU</p>
                <div className="text-gray-600 text-sm">
                  <p>Honorable Member: World Council of Religious Leaders.</p>
                  <p>Chairman: World Peace Mission (2015–2020).</p>
                  <p>President: Federation of Migrants of Russia 2006-2016.</p>
                  <p>Chief Editor, Journal Migrants (Russia) from 2007.</p>
                  <p>Chief Editor, Journal Children Hope (Russia) from 2007.</p>
                  <p>Chairman (2007–2014), International Festival for Migrants of Russia.</p>
                  <p>Ex-President, International Islamic Represention Organization (IIRO) (1994-2006).</p>
                  <p>Member, Interethnic and Interfaith Commission of Russia under the President of Russia (2000-2011).</p>
                  <p>Chief Advisor (1994–1999), Friendship Committee with India, Bangladesh, Nepal, Maldives,Pakistan, Russian State Duma.</p>
                </div>
              </div>
            </div>

            {/* Vice President Section */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
                {[
                  { name: "Khan Tipu Sultan", title: "Senior Vice-President of UMU", image: "assets/khan Tipu sultan.png" },
                  { name: "Hafez Maulana Muhibullahil Baki Nodovi", title: "Senior Vice-President of UMU", additional: "Pesh Imam, Central Baitul Mokarram Mosque", image: "assets/MOHAMMAD-MUHIBULLAHIL-BAQEE.jpg" },
                  { name: "Musa Al Hafiz", title: "Senior Vice-President of UMU",additional: "Islamic Scholar, Researcher & Public Speaker", image: "assets/Musa al hafiz.jpg" },
                  { name: "Mufti Kazi Ibrahim", title: "Vice-President of UMU", additional: "Islamic Scholar, Researcher & Public Speaker",image: "assets/Mufti Kazi Ibrahim.jpeg" },
                  { name: "Prof. Dr. Rakibul Haque", title: "Vice-President of UMU", additional: "Chairman, Department of MIS, University of Dhaka", image: "assets/Rakibul islam.jpeg" },
                  { name: "Professor Dr. Kamrul Hasan", title: "Vice-President of UMU", additional: "Department of Tourism and Hospitality Management, University of Dhaka", image: "assets/kamrul hassan.jpeg" },
                  { name: "Professor Dr. Ariful Islam", title: "Vice-President of UMU",additional: "Assistant Professor,Department of MIS, University of Dhaka", image: "assets/Arif .jpeg" },
                  { name: "Dr.Muhammad Nurul Huda",title: "Vice-President of UMU",additional: "(Senior Scientist)Centre for Advanced Research in Sciences (CARS)", image: "assets/Dr.Muhammad Nurul Huda.jpg" },
                   { name: "Dr. Md. Mizanur Rahman",title: "Vice-President of UMU",additional: "Executive Director,Centre for strategic and peace studies (csps)", image: "assets/Dr. Md. Mizanur Rahman.png" },
                  { name: "Addtional Vice-President 1", title: "Vice-President of UMU", image: "assets/MEN in muslim.webp" },
                  { name: "Addtional Vice-President 2", title: "Vice-President of UMU", image: "assets/MEN in muslim.webp" },
                  { name: "Addtional Vice-President 3", title: "Vice-President of UMU", image: "assets/MEN in muslim.webp" }
                ].map((member, idx) => (
                  <div key={idx} className="text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-md border-2 border-gray-200"
                      onError={(e) => e.target.src = 'https://via.placeholder.com/128x128?text=Image+Not+Found'}
                    />
                    <h4 className="text-xl font-bold text-primary mb-2">{member.name}</h4>
                    {member.title && <p className="text-green-600 font-semibold text-base mb-2">{member.title}</p>}
                    {member.additional && <p className="text-gray-500 text-sm mb-2">{member.additional}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* Secretary General Section */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="max-w-md mx-auto">
                <div className="text-center">
                  <img
                    src="/assets/Mufti osman goni.jpeg"
                    alt="Mufti Mohammad Osman Goni"
                    className="w-40 h-40 object-cover rounded-full mx-auto mb-6 shadow-lg border-4 border-white"
                    onError={(e) => e.target.src = 'https://via.placeholder.com/160x160?text=Image+Not+Found'}
                  />
                  <h4 className="text-2xl font-bold text-primary mb-3">Mufti Shaikh Muhammad Usman Gonee</h4>
                  <p className="text-green-600 font-semibold text-lg">Secretary General of United Muslim Ummah</p>
                  <div className="text-gray-600 text-sm">
                  <p>Founder-President: Shaikh Sadi (Rh.) Foundation Bangladesh</p>
                  <p>Chairman: Islamic Scholars Forum Bangladesh</p>
                  <p>Chairman: Qasemul Ulum & Faizul Ulum Girls Madrasah & Orphans Home, Dhaka</p>
                  <p>Chairman: Nasirul Ulum Boys Madrasah & Orphans Home, Dhaka</p>
                  <p>President: National Mufti Society Bangladesh</p>
                  <p>Vice-President: National Writers Society (Jatiyo Lekhok Porishod)</p>
                  <p>Vice-President: Bangladesh Islamic Intellectual Movement</p>
                  <p>Vice-Chairman: Bangladesh Islamic Journalist Association</p>
                  <p>Director: Ahsania Hajj & Umrah Training Institute</p>
                  <p>Religious Facilitator: World Vision Bangladesh</p>
                  <p>Life Member & Executive Committee Member: Hatia Dip Somiti, Dhaka</p>
                  <p>Senior Joint-Secretary: Bangladesh National Imam Association</p>
                  <p>Joint-Secretary: National Tafsir Foundation Bangladesh</p>
                  <p>Head Trainer: Nurani Muallim Training, Jamia Islamia, Dhaka</p>
                  <p>Instructor: Arabic Language Club, Sheikh Rasel Cantonment Public School & College</p>
                  <p>Expert Member: Ushar Management Committee, Islamic Foundation</p>
                  <p>Member: Islamic Economy & Banking Research, Islamic Foundation</p>
                  <p>Member: Book Review Committee, Islamic Foundation Bangladesh</p>
                  <p>Advisor: Muslim Unity Society Bangladesh</p>
                  <p>Advisor: Career Bangladesh</p>
                  <p>Speaker & Presenter: BTV, BTV World, Radio Bangladesh & Satellite TV Channels</p>
                </div>
                </div>
              </div>
            </div>

            {/* Assistant Secretary General Section */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: "Shahadat Yousuf", title: "Assistant Secretary General",additional: "Chairman, Al Hikma Academic and Somikoron Hosel",  image: "/assets/shahadat Yousuf.jpg" },
                  { name: "Atiq Muzahid ", title: "Assistant Secretary General", additional: "Chairman, Al Hikma Academic and Somikoron Hosel", image: "assets/gallery-0304.jpg"},
                  { name: "Mostofa Mohiuddin", title: "Assistant Secretary General", image: "assets/gallery-0301.jpg" },
                  { name: "Assistant Secretary 3", title: "Assistant Secretary General", image: "assets/MEN in muslim.webp" }
                ].map((member, idx) => (
                  <div key={idx} className="text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-md border-2 border-gray-200"
                      onError={(e) => e.target.src = 'https://via.placeholder.com/128x128?text=Image+Not+Found'}
                    />
                    <h4 className="text-xl font-bold text-primary">{member.name}</h4>
                    {member.title && <p className="text-green-600 font-semibold text-base mb-2">{member.title}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* Members Section */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: "Arafat Hasnain", title: "Director of Finance", image: "assets/Arafat Hasnin.jpeg" },
                  { name: "Md Shoriful Islam", title: "Executive Member", image: "assets/gallery-0270.jpg" },
                  { name: "Executive Member 1", title: "Executive Member", image: "assets/MEN in muslim.webp" },
                  { name: "Executive Member 2", title: "Executive Member", image: "assets/MEN in muslim.webp" }
                ].map((member, idx) => (
                  <div key={idx} className="text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-md border-2 border-gray-200"
                      onError={(e) => e.target.src = 'https://via.placeholder.com/128x128?text=Image+Not+Found'}
                    />
                    <h4 className="text-xl font-bold text-primary">{member.name}</h4>
                    {member.title && <p className="text-green-600 font-semibold text-base mb-2">{member.title}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Committees */}
      <div className="py-40 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-center text-primary mb-16">
            Sub-Committees
          </h2>

          <div className="space-y-16">
            {[
              {
                name: "Ulama Committee",
                description: "Leading religious scholars and committee guidance",
                president: "Mufti Shaikh Muhammad Osman Goni",
                presidentImage: "assets/Mufti osman goni.jpeg",
                presidentTitle: "Chairman",
                vicePresident: "Mufti Maulana Muhammad Muhiuddin",
                vicePresidentImage: "assets/ulama comitee 1.jpeg",
                vicePresidentTitle: "Vice Chairman",
                secondVicePresident: "Maulana Muhammad Abdur Rakib Khan",
                secondVicePresidentImage: "assets/ulama comitee 2.jpeg",
                secondVicePresidentTitle: "Vice Chairman",
                generalSecretary: "Hafez Maulana Mufti Muhammad Afzal Hussain",
                generalSecretaryImage: "assets/ulama comitee 3.jpeg",
                generalSecretaryTitle: "General Secretary",
                jointSecretary: "Hafez Maulana Mufti Muhammad Akhtar Hussain",
                jointSecretaryImage: "assets/ulama comitee 4 .jpeg",
                jointSecretaryTitle: "Joint Secretary",
                organizationalSecretary: "Maulana Hakim Muhammad Azharul Islam Numani",
                organizationalSecretaryImage: "assets/ulama comitee 5.jpeg",
                organizationalSecretaryTitle: "Organizational Secretary",
                assistantOrganizationalSecretary: "Maulana BM Muhammad Amir Hussain Jihadi",
                assistantOrganizationalSecretaryImage: "assets/ulama comitee 6.jpeg",
                assistantOrganizationalSecretaryTitle: "Assistant Organizational Secretary",
                members: [
                  { name: "Maulana Muhammad Abu Bakar Chakari", title: "Member", image: "assets/ulama comitee 7.jpeg" },
                  { name: "Hafez Maulana Muhammad Shahidul Islam", title: "Member", image: "assets/ulama comitee 8.jpeg" },
                  { name: "Maulana Muhammad Jawhar Iqbal Khan", title: "Member", image: "assets/ulama comitee 9.jpeg" },
                  { name: "Mufti Muhammad Said Hasan Shamsabadi", title: "Member", image: "assets/ulama comitee 10.jpeg" }
                ]
              },
              {
                name: "Education and Research Committee",
                description: "Leading education initiatives and research coordination",
                president: "Professor Dr. Kamrul Hasan",
                presidentImage: "assets/kamrul hassan.jpeg",
                presidentTitle: "Chairman",
                vicePresident: "Vice Chairman",
                vicePresidentImage: "assets/MEN in muslim.webp",
                vicePresidentTitle: "Vice Chairman",
                members: [
                  { name: "Dr. Aisha Rahman", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Professor Jamal Al-Karim", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Dr. Fatima Al-Zahra", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Dr. Ahmed Al-Masri", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Professor Layla Al-Hussein", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Dr. Omar Al-Sabah", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Dr. Sara Al-Fayed", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Professor Khalid Al-Rashid", title: "Member", image: "assets/MEN in muslim.webp" }
                ]
              },
              {
                name: "Human Rights Committee",
                description: "Advocating for human rights and committee leadership",
                president: "Sayed Ahmed Kayes",
                presidentImage: "assets/shoid ahamed.jpeg",
                vicePresident: "Vice Chairman",
                vicePresidentImage: "assets/MEN in muslim.webp",
                presidentTitle: "Chairman",
                vicePresidentTitle: "Vice Chairman",
                vicePresidentImage: "assets/MEN in muslim.webp",
                members: [
                  { name: "Dr. Amira Al-Jaber", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Mr. Hassan Al-Mahmoud", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Dr. Leila Al-Saud", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Mr. Tariq Al-Farsi", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Dr. Yasmin Al-Qatari", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Mr. Saad Al-Emirati", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Dr. Fatima Al-Bahraini", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Mr. Khalid Al-Omani", title: "Member", image: "assets/MEN in muslim.webp" }
                ]
              },
              {
                name: "Relief and Rehabilitation Committee",
                description: "Coordinating relief efforts and rehabilitation programs",
                president: "Jahim Uddin Badol",
                presidentImage: "assets/Johim Uddin badol.jpeg",
                presidentTitle: "Chairman",
                vicePresident: "Vice Chairman",
                vicePresidentImage: "assets/MEN in muslim.webp",    
                vicePresidentTitle: "Vice Chairman",
                members: [
                  { name: "Dr. Samira Al-Iraqi", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Mr. Ahmed Al-Syrian", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Dr. Hana Al-Lebanese", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Mr. Omar Al-Palestinian", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Dr. Layla Al-Afghani", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Mr. Jamal Al-Yemeni", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Dr. Amina Al-Somali", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Mr. Hassan Al-Sudanese", title: "Member", image: "assets/MEN in muslim.webp" }
                ]
              },
              {
                name: "International Committee",
                description: "Overseeing international relations and committee affairs",
                president: "Abu Sayem",
                presidentImage: "assets/Abu Sayem.png",
                presidentTitle: "Chairman",
                vicePresident: "Vice Chairman",
                vicePresidentImage: "assets/MEN in muslim.webp",
                vicePresidentTitle: "Vice Chairman",
                members: [
                  { name: "Dr. Karim Al-Moroccan", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Mr. Leila Al-Tunisian", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Dr. Ahmed Al-Algerian", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Mr. Fatima Al-Libyan", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Dr. Omar Al-Mauritanian", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Mr. Sara Al-Chadian", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Dr. Jamal Al-Nigerian", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Mr. Hana Al-Malian", title: "Member", image: "assets/MEN in muslim.webp" }
                ]
              },
              {
                name: "Halal, Finance, and Banking Committee",
                description: "Overseeing halal finance and banking operations and compliance",
                president: "Syed Sakhawatul Islam Ph.D",
                presidentImage: "assets/MEN in muslim.webp",
                vicePresident: "Vice Chairman",

                vicePresident: "Vice Chairman",
                vicePresidentImage: "assets/MEN in muslim.webp",
                presidentTitle: "Chairman",
                vicePresidentTitle: "Vice Chairman",
                members: [
                  { name: "Dr. Aisha Al-Kuwaiti", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Mr. Hassan Al-Qatari", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Dr. Fatima Al-Emirati", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Mr. Omar Al-Bahraini", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Dr. Layla Al-Omani", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Mr. Jamal Al-Saudi", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Dr. Sara Al-Jordanian", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Mr. Khalid Al-Lebanese", title: "Member", image: "assets/MEN in muslim.webp" }
                ]
              },
              {
                name: "Law and Sharia Committee",
                description: "Managing legal and sharia affairs",
                president: "Md.Abu Sufian (Shohagh)",
                presidentImage: "assets/Md.-Abu-Sufian.webp",
                presidentTitle: "Chairman",
                vicePresidentTitle: "Vice Chairman",
                vicePresidentImage: "assets/MEN in muslim.webp",
                members: [
                  { name: "Imam Hasan", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Mufti Omar", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Sheikh Ali", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Qadi Fatima", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Mufti Zain", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Sheikh Yusuf", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Imam Khalid", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Qadi Aisha", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Mufti Ibrahim", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Sheikh Omar", title: "Member", image: "assets/MEN in muslim.webp" }
                ]
              },
              {
                name: "Press and Publication Committee",
                description: "Managing press and publication activities",
                president: "Ahmed Moustafa ",
                presidentImage: "assets/Ahamed Mustofa.jpeg",
                presidentPosition: "Chief Editor, UMU Newsletter",
                viceChairmen: [
                  { name: "Md. Nizamuddin", image: "assets/mdnizamuddin.jpeg", title: "Vice Chairman" },
                  { name: "Nachir Mahamud", image: "assets/nichir mahamud.png", title: "Vice Chairman" },
                  { name: "Vice Chairman 3", image: "assets/MEN in muslim.webp", title: "Vice Chairman" },
                  { name: "Vice Chairman 4", image: "assets/MEN in muslim.webp", title: "Vice Chairman" },
                  { name: "Vice Chairman 5", image: "assets/MEN in muslim.webp", title: "Vice Chairman" }
                ],
                members: [
                  { name: "Journalist Ali", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Editor Omar", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Reporter Fatima", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Publisher Zain", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Media Yusuf", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Press Khalid", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Publication Aisha", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "News Ibrahim", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Broadcast Omar", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Content Hasan", title: "Member", image: "assets/MEN in muslim.webp" }
                ]
              },
              {
                name: "IT Committee",
                description: "Managing IT and technology affairs",
                president: "Miraz",
                presidentImage: "assets/MEN in muslim.webp",
                presidentTitle: "Chairman",
                 presidentImage: "assets/MEN in muslim.webp",
                viceChairmen: [
                  { name: "Atiqur Rahman Rasel", image: "assets/Atiq.png", title: "Vice Chairman" },
                  { name: "Md Assadulla Al Galib", image: "assets/Galib.png", title: "Vice Chairman" },
                  { name: "Md Asif Chowdhury", image: "assets/ASIF.jpg", title: "Vice Chairman" },
                  { name: "Asiqur Rahaman", image: "assets/Asiqur rahaman.png", title: "Vice Chairman" },
                  { name: "Vice Chairman 5", image: "assets/MEN in muslim.webp", title: "Vice Chairman" }
                ],
                members: [
                  { name: "Developer Ali", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Programmer Omar", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Tech Support Fatima", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "System Admin Zain", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Network Yusuf", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Security Khalid", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Data Aisha", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Cloud Ibrahim", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "AI Omar", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Software Hasan", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Asik", title: "Member", image: "assets/MEN in muslim.webp" }
                ]
              },
              {
                name: "Young Network Committee",
                description: "Managing youth programs and network development",
                president: "S. M. Maruf Hasan Nirob",
                presidentImage: "assets/nirob.jpeg",
                presidentTitle: "President",
                secretaryGeneral: "Abu Naser Shifat ",
                secretaryGeneralImage: "assets/shifat.jpeg",
                secretaryGeneralTitle: "Secretary General",
                vicePresident: "Saidul Hasan",
                vicePresidentImage: "assets/saidul hasan.jpeg",
                vicePresidentTitle: "Vice President",
                secondVicePresident: "Asiqur Rahaman",
                secondVicePresidentImage: "assets/Asiqur rahaman.png",
                secondVicePresidentTitle: "Vice President",
                thirdVicePresident: "Hamidur Raham",
                thirdVicePresidentImage: "assets/gallery-0307.jpg",
                thirdVicePresidentTitle: "Vice President",
                fourthVicePresident: "Ismail Hossain",
                fourthVicePresidentImage: "assets/gallery-0309.jpg",
                fourthVicePresidentTitle: "Vice President",
                itHead: "Md AbduLlah",
                itHeadImage: "assets/abdullah.png",
                itHeadTitle: "Vice-president",
                assistantHead: "Jamal Uddin",
                assistantHeadImage: "assets/gallery-0303.jpg",
                assistantHeadTitle: "Vice-president",
                advisors: [
                  { name: "Professor Dr. Kamrul Hasan", image: "assets/kamrul hassan.jpeg", title: "Advisor" },
                  { name: "Professor Dr. Ariful Islam", image: "assets/Arif .jpeg", title: "Advisor" },
                  { name: "Shahadat Yousuf", image: "assets/shahadat Yousuf.jpg", title: "Advisor" }
                ],
                
                members: [
                  { name: "Ahmed Al-Young", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Fatima Al-Active", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Omar Al-Energetic", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Layla Al-Innovative", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Jamal Al-Dynamic", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Sara Al-Motivated", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Khalid Al-Progressive", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Hana Al-Engaged", title: "Member", image: "assets/MEN in muslim.webp" },
                  { name: "Ibrahim", title: "Member", image: "assets/gallery-0306.jpg" }
                ]
              },
              {
                name: "Women Network Committee",
                president: "Khadijatul Kubra Tamima",
                presidentImage: "assets/vc umu.jpeg ",
                presidentPosition: "Lecturer Arabic, Borhan Uddin Kamil Madrasa, Borhan Uddin, Bhola.",
                vicePresident: "Aminiah Asquarata",
                vicePresidentImage: "assets/kadijatul.jpeg",
                description: "Leading Islamic Women’s Empowerment and Networking Activities over the world",
                presidentTitle: "President",
                vicePresidentTitle: "Vice President",
                secretary: "Alhaz umme habiba",
                secretaryImage: "assets/umme habiba.jpeg",
                secretaryPosition: "Founder, Nure Madina Model Madrasa, Manda, Dhaka.",
                secretaryTitle: "Secretary",
                members: [
                  { name: "Aisha Poli", title: "Member", image: "assets/gallery-0314.jpg" },
                  { name: "Nina Hossain", title: "Member", image: "assets/gallery-0340.jpg" },
                  { name: "Rita Ahmed", title: "Member", image: "assets/gallery-0341.jpg" },
                  { name: "Sita Begum", title: "Member", image: "assets/gallery-0342.jpg" },
                  { name: "Gita Chowdhury", title: "Member", image: "assets/gallery-0343.jpg" },
                  { name: "Pita Karim", title: "Member", image: "assets/gallery-0344.jpg" },
                  { name: "Mita Akter", title: "Member", image: "assets/gallery-0345.jpg" },
                  { name: "Fatima Rahman", title: "Member", image: "assets/gallery-0312.jpg" },
                  { name: "Ayesha Khan", title: "Member", image: "assets/gallery-0313.jpg" },
                  { name: "Zainab Hossain", title: "Member", image: "assets/gallery-0314.jpg" },
                  { name: "Maryam Ahmed", title: "Member", image: "assets/gallery-0315.jpg" },
                  { name: "Khadija Islam", title: "Member", image: "assets/gallery-0316.jpg" },
                  { name: "Safiya Chowdhury", title: "Member", image: "assets/gallery-0317.jpg" },
                  { name: "Rabia Karim", title: "Member", image: "assets/gallery-0318.jpg" },
                  { name: "Asma Begum", title: "Member", image: "assets/gallery-0319.jpg" },
                  { name: "Halima Akter", title: "Member", image: "assets/gallery-0320.jpg" },
                  { name: "Sumaiya Rahman", title: "Member", image: "assets/gallery-0321.jpg" },
                  { name: "Fatema Malik", title: "Member", image: "assets/gallery-0273.jpg" },
                  { name: "Nargish Akter", title: "Member", image: "assets/gallery-0274.jpg" },
                  { name: "Afroz Sultan", title: "Member", image: "assets/gallery-0275.jpg" },
                  { name: "Hana Al-Advocate", title: "Member", image: "assets/gallery-0276.jpg" },
                  { name: "Nadia Al-Pioneer", title: "Member", image: "assets/gallery-0277.jpg" },
                  { name: "Amira Al-Visionary", title: "Member", image: "assets/gallery-0278.jpg" },
                  { name: "Leila Al-Champion", title: "Member", image: "assets/gallery-0279.jpg" },
                  { name: "Yasmin Al-Innovator", title: "Member", image: "assets/gallery-0280.jpg" },
                  { name: "Zara Al-Empower", title: "Member", image: "assets/gallery-0281.jpg" },
                  { name: "Maya Al-Leader", title: "Member", image: "assets/gallery-0282.jpg" },
                  { name: "Sofia Al-Inspire", title: "Member", image: "assets/gallery-0283.jpg" },
                  { name: "Rima Al-Strength", title: "Member", image: "assets/gallery-0284.jpg" },
                  { name: "Samira Al-Hope", title: "Member", image: "assets/gallery-0285.jpg" },
                  { name: "Tahmina Al-Grace", title: "Member", image: "assets/gallery-0286.jpg" },
                  { name: "Lubna Al-Courage", title: "Member", image: "assets/gallery-0287.jpg" },
                  { name: "Farzana Al-Unity", title: "Member", image: "assets/gallery-0288.jpg" },
                  { name: "Nusrat Al-Wisdom", title: "Member", image: "assets/gallery-0289.jpg" },
                  { name: "Sharmin Al-Light", title: "Member", image: "assets/gallery-0290.jpg" },
                  { name: "Maliha Al-Peace", title: "Member", image: "assets/gallery-0291.jpg" },
                  { name: "Israt Al-Dignity", title: "Member", image: "assets/gallery-0292.jpg" },
                  { name: "Sadia Al-Progress", title: "Member", image: "assets/gallery-0293.jpg" },
                  { name: "Anika Al-Trust", title: "Member", image: "assets/gallery-0294.jpg" },
                  { name: "Fariha Al-Future", title: "Member", image: "assets/gallery-0295.jpg" },
                
                  { name: "Nusrat Jahan", title: "Member", image: "assets/gallery-0322.jpg" },
                  { name: "Farzana Islam", title: "Member", image: "assets/gallery-0323.jpg" },
                  { name: "Shabnam Hossain", title: "Member", image: "assets/gallery-0324.jpg" },
                  { name: "Tasnim Ahmed", title: "Member", image: "assets/gallery-0325.jpg" },
                  { name: "Rina Begum", title: "Member", image: "assets/gallery-0326.jpg" },
                  { name: "Laila Chowdhury", title: "Member", image: "assets/gallery-0327.jpg" },
                  { name: "Yasmin Karim", title: "Member", image: "assets/gallery-0328.jpg" },
                  { name: "Nadia Akter", title: "Member", image: "assets/gallery-0329.jpg" },
                  { name: "Sofia Rahman", title: "Member", image: "assets/gallery-0330.jpg" },
                  { name: "Zara Islam", title: "Member", image: "assets/gallery-0331.jpg" },
                  { name: "Amira Hossain", title: "Member", image: "assets/gallery-0332.jpg" },
                  { name: "Leila Ahmed", title: "Member", image: "assets/gallery-0333.jpg" },
                  { name: "Hana Begum", title: "Member", image: "assets/gallery-0334.jpg" },
                  { name: "Sara Chowdhury", title: "Member", image: "assets/gallery-0335.jpg" },
                  { name: "Mira Karim", title: "Member", image: "assets/gallery-0336.jpg" },
                  { name: "Lina Akter", title: "Member", image: "assets/gallery-0337.jpg" },
                  { name: "Tina Rahman", title: "Member", image: "assets/gallery-0338.jpg" },
                  { name: "Dina Islam", title: "Member", image: "assets/gallery-0339.jpg" },
                  { name: "Ayesha Rahman", title: "Member", image: "assets/gallery-0350.jpg" },
                  { name: "Nusrat Jahan", title: "Member", image: "assets/gallery-0351.jpg" },
                  { name: "Farzana Akter", title: "Member", image: "assets/gallery-0352.jpg" },
                  { name: "Sadia Islam", title: "Member", image: "assets/gallery-0353.jpg" },
                  { name: "Maliha Chowdhury", title: "Member", image: "assets/gallery-0354.jpg" },
                  { name: "Tahmina Begum", title: "Member", image: "assets/gallery-0355.jpg" },
                  { name: "Rumana Karim", title: "Member", image: "assets/gallery-0356.jpg" },
                  { name: "Sharmin Sultana", title: "Member", image: "assets/gallery-0357.jpg" },
                  { name: "Israt Jahan", title: "Member", image: "assets/gallery-0358.jpg" },
                  { name: "Lubna Yasmin", title: "Member", image: "assets/gallery-0359.jpg" },
                  { name: "Sanjida Haque", title: "Member", image: "assets/gallery-0360.jpg" },
                  { name: "Nabila Hossain", title: "Member", image: "assets/gallery-0361.jpg" },
                  { name: "Fariha Noor", title: "Member", image: "assets/gallery-0362.jpg" },
                  { name: "Mst. Roksana Khatun", title: "Member", image: "assets/gallery-0363.jpg" },
                  { name: "Jannatul Ferdous", title: "Member", image: "assets/gallery-0364.jpg" },
                  { name: "Afia Tasnim", title: "Member", image: "assets/gallery-0365.jpg" },
                  { name: "Sultana Parvin", title: "Member", image: "assets/gallery-0366.jpg" },
                  { name: "Nargis Akhter", title: "Member", image: "assets/gallery-0367.jpg" },

                  { name: "Rashida Akter", title: "Member", image: "assets/gallery-0381.jpg" },
                  { name: "Khadija Begum", title: "Member", image: "assets/gallery-0384.jpg" },
                  { name: "Halima Banu", title: "Member", image: "assets/gallery-0386.jpg" },

                  { name: "Samia Rahim", title: "Member", image: "assets/gallery-0401.jpg" },
                  { name: "Tasnia Mahmud", title: "Member", image: "assets/gallery-0402.jpg" },
                  { name: "Iffat Ara", title: "Member", image: "assets/gallery-0405.jpg" }
                                        
                ]
              }
            ].map((committee, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-12 hover:shadow-2xl transition-all duration-300 border-t-4 border-gold"
              >
                <h3 className="text-3xl font-black text-primary mb-3 text-center">{committee.name}</h3>
                { (committee.name === "Press and Publication Committee" || committee.name === "IT Committee") && (
                  <div className="text-center mb-12 bg-gradient-to-r from-primary/5 to-gold/5 rounded-xl p-8">
                    <p className="text-gray-700 leading-relaxed text-xl font-medium">{committee.description}</p>
                  </div>
                )}
                { (committee.name === "Press and Publication Committee" || committee.name === "IT Committee") && (
                  <div className="text-center mb-8">
                    <img
                      src={committee.presidentImage}
                      alt={committee.president}
                      className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-lg border-4 border-white"
                      onError={(e) => e.target.src = 'https://via.placeholder.com/128x128?text=Image+Not+Found'}
                    />
                    <h4 className="text-lg font-bold text-gold mb-2">{committee.presidentTitle || "President"}</h4>
                    <p className="text-gray-800 font-bold text-sm">{committee.president}</p>
                    {committee.presidentPosition && <p className="text-gray-600 text-xs">{committee.presidentPosition}</p>}
                  </div>
                )}
                {(committee.name === "Press and Publication Committee" || committee.name === "IT Committee") && committee.viceChairmen && (
                  <div className={`grid ${committee.name === "IT Committee" ? "grid-cols-5" : "grid-cols-5"} gap-4 mb-6`}>
                    {committee.viceChairmen.map((vice, idx) => (
                      <div key={idx} className="text-center">
                        <img
                          src={vice.image}
                          alt={vice.name}
                          className="w-20 h-20 object-cover rounded-full mx-auto mb-2 shadow-lg border-4 border-white"
                          onError={(e) => e.target.src = 'https://via.placeholder.com/80x80?text=Image+Not+Found'}
                        />
                        <h5 className="text-sm font-bold text-primary">{vice.title}</h5>
                        <p className="text-gray-800 font-bold text-xs">{vice.name}</p>
                      </div>
                    ))}
                  </div>
                )}
                {committee.name !== "Press and Publication Committee" && committee.name !== "IT Committee" && (
                  <div className="text-center mb-12 bg-gradient-to-r from-primary/5 to-gold/5 rounded-xl p-8">
                    <p className="text-gray-700 leading-relaxed text-xl font-medium">{committee.description}</p>
                  </div>
                )}
                {committee.name === "Ulama Committee" && (
                  <>
                    {/* 1st row: Chairman */}
                    <div className="grid grid-cols-1 gap-6 mb-6">
                      <div className="text-center">
                        <img
                          src={committee.presidentImage}
                          alt={committee.president}
                          className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-lg border-4 border-white"
                          onError={(e) => e.target.src = 'https://via.placeholder.com/128x128?text=Image+Not+Found'}
                        />
                        <h4 className="text-lg font-bold text-primary mb-2">{committee.presidentTitle}</h4>
                        <p className="text-gray-800 font-bold text-sm">{committee.president}</p>
                      </div>
                    </div>
                    {/* 2nd row: 4 people */}
                    <div className="grid grid-cols-4 gap-6 mb-6">
                      <div className="text-center">
                        <img
                          src={committee.vicePresidentImage}
                          alt={committee.vicePresident}
                          className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-lg border-4 border-white"
                          onError={(e) => e.target.src = 'https://via.placeholder.com/128x128?text=Image+Not+Found'}
                        />
                        <h4 className="text-lg font-bold text-gold mb-2">{committee.vicePresidentTitle}</h4>
                        <p className="text-gray-800 font-bold text-sm">{committee.vicePresident}</p>
                      </div>
                      <div className="text-center">
                        <img
                          src={committee.secondVicePresidentImage}
                          alt={committee.secondVicePresident}
                          className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-lg border-4 border-white"
                          onError={(e) => e.target.src = 'https://via.placeholder.com/128x128?text=Image+Not+Found'}
                        />
                        <h4 className="text-lg font-bold text-gold mb-2">{committee.secondVicePresidentTitle}</h4>
                        <p className="text-gray-800 font-bold text-sm">{committee.secondVicePresident}</p>
                      </div>
                      <div className="text-center">
                        <img
                          src={committee.generalSecretaryImage}
                          alt={committee.generalSecretary}
                          className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-lg border-4 border-white"
                          onError={(e) => e.target.src = 'https://via.placeholder.com/128x128?text=Image+Not+Found'}
                        />
                        <h4 className="text-lg font-bold text-gold mb-2">{committee.generalSecretaryTitle}</h4>
                        <p className="text-gray-800 font-bold text-sm">{committee.generalSecretary}</p>
                      </div>
                      <div className="text-center">
                        <img
                          src={committee.jointSecretaryImage}
                          alt={committee.jointSecretary}
                          className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-lg border-4 border-white"
                          onError={(e) => e.target.src = 'https://via.placeholder.com/128x128?text=Image+Not+Found'}
                        />
                        <h4 className="text-lg font-bold text-gold mb-2">{committee.jointSecretaryTitle}</h4>
                        <p className="text-gray-800 font-bold text-sm">{committee.jointSecretary}</p>
                      </div>
                    </div>
                    {/* 3rd row: rest */}
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div className="text-center">
                        <img
                          src={committee.organizationalSecretaryImage}
                          alt={committee.organizationalSecretary}
                          className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-lg border-4 border-white"
                          onError={(e) => e.target.src = 'https://via.placeholder.com/128x128?text=Image+Not+Found'}
                        />
                        <h4 className="text-lg font-bold text-gold mb-2">{committee.organizationalSecretaryTitle}</h4>
                        <p className="text-gray-800 font-bold text-sm">{committee.organizationalSecretary}</p>
                      </div>
                      <div className="text-center">
                        <img
                          src={committee.assistantOrganizationalSecretaryImage}
                          alt={committee.assistantOrganizationalSecretary}
                          className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-lg border-4 border-white"
                          onError={(e) => e.target.src = 'https://via.placeholder.com/128x128?text=Image+Not+Found'}
                        />
                        <h4 className="text-lg font-bold text-gold mb-2">{committee.assistantOrganizationalSecretaryTitle}</h4>
                        <p className="text-gray-800 font-bold text-sm">{committee.assistantOrganizationalSecretary}</p>
                      </div>
                    </div>
                  </>
                )}
                <div className={`grid ${committee.name === "Young Network Committee" ? "grid-cols-1 md:grid-cols-3 lg:grid-cols-5" : committee.name === "Women Network Committee" ? "md:grid-cols-3" : committee.name === "IT Committee" ? "md:grid-cols-5" : "md:grid-cols-2"} gap-6 mb-6`}>
                  {committee.name === "Young Network Committee" && (
                    <>
                      {/* Advisors - 1st row */}
                      <div className="md:col-span-3 lg:col-span-5 mb-8">
                        <h4 className="text-2xl font-bold text-primary mb-4 text-center">Advisors</h4>
                        <div className="grid grid-cols-3 gap-4 justify-center">
                          {committee.advisors.map((adv, idx) => (
                            <div key={idx} className="bg-gradient-to-br from-gold/20 to-primary/20 rounded-2xl p-6 shadow-xl border-2 border-gold/30 text-center">
                              <img
                                src={adv.image}
                                alt={adv.name}
                                className="w-24 h-24 object-cover rounded-full mx-auto mb-4 shadow-lg border-4 border-white"
                                onError={(e) => e.target.src = 'https://via.placeholder.com/96x96?text=Image+Not+Found'}
                              />
                              <h5 className="text-lg font-bold text-gold mb-2">{adv.title}</h5>
                              <p className="text-gray-800 font-bold text-sm">{adv.name}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                  {committee.name !== "Press and Publication Committee" && committee.name !== "IT Committee" && committee.name !== "Women Network Committee" && committee.name !== "Ulama Committee" && (
                    <>
                      {/* President/Chairman - shown for all committees except Press, IT, Women Network, and Ulama */}
                      <div className="text-center">
                        <img
                          src={committee.presidentImage}
                          alt={committee.president}
                          className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-lg border-4 border-white"
                          onError={(e) => e.target.src = 'https://via.placeholder.com/128x128?text=Image+Not+Found'}
                        />
                        <h4 className="text-lg font-bold text-primary mb-2">{committee.presidentTitle || "President"}</h4>
                        <p className="text-gray-800 font-bold text-sm">{committee.president}</p>
                        {committee.presidentPosition && <p className="text-gray-600 text-sm">{committee.presidentPosition}</p>}
                      </div>
                    </>
                  )}
                  {committee.name === "Women Network Committee" && (
                    <>
                      {/* President, Secretary, and Vice President for Women */}
                      <div className="text-center">
                        <img
                          src={committee.presidentImage}
                          alt={committee.president}
                          className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-lg border-4 border-white"
                          onError={(e) => e.target.src = 'https://via.placeholder.com/128x128?text=Image+Not+Found'}
                        />
                        <h4 className="text-lg font-bold text-primary mb-2">{committee.presidentTitle || "President"}</h4>
                        <p className="text-gray-800 font-bold text-sm">{committee.president}</p>
                        {committee.presidentPosition && <p className="text-gray-600 text-sm">{committee.presidentPosition}</p>}
                      </div>
                      <div className="col-span-1"></div>
                      <div className="text-center">
                        <img
                          src={committee.secretaryImage}
                          alt={committee.secretary}
                          className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-lg border-4 border-white"
                          onError={(e) => e.target.src = 'https://via.placeholder.com/128x128?text=Image+Not+Found'}
                        />
                        <h4 className="text-lg font-bold text-primary mb-2">{committee.secretaryTitle}</h4>
                        <p className="text-gray-800 font-bold text-sm">{committee.secretary}</p>
                        {committee.secretaryPosition && <p className="text-gray-600 text-sm">{committee.secretaryPosition}</p>}
                      </div>
                      <div className="col-span-1"></div>
                      <div className="text-center">
                        <img
                          src={committee.vicePresidentImage}
                          alt={committee.vicePresident}
                          className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-lg border-4 border-white"
                          onError={(e) => e.target.src = 'https://via.placeholder.com/128x128?text=Image+Not+Found'}
                        />
                        <h4 className="text-lg font-bold text-primary mb-2">{committee.vicePresidentTitle}</h4>
                        <p className="text-gray-800 font-bold text-sm">{committee.vicePresident}</p>
                      </div>
                      <div className="col-span-1"></div>
                    </>
                  )}
                  {committee.name !== "Women Network Committee" && committee.name !== "Press and Publication Committee" && committee.name !== "IT Committee" && committee.name !== "Ulama Committee" && (
                    <>
                      {/* Vice President - shown for all committees except Women, Press, IT, and Ulama */}
                      <div className="text-center">
                        <img
                          src={committee.vicePresidentImage}
                          alt={committee.vicePresident}
                          className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-lg border-4 border-white"
                          onError={(e) => e.target.src = 'https://via.placeholder.com/128x128?text=Image+Not+Found'}
                        />
                        <h4 className="text-lg font-bold text-gold mb-2">{committee.vicePresidentTitle || "Vice President"}</h4>
                        <p className="text-gray-800 font-bold text-sm">{committee.vicePresident}</p>
                      </div>
                    </>
                  )}

                  {committee.name === "Young Network Committee" && (
                    <>
                      {/* Additional Young Network Leaders */}
                      <div className="text-center">
                        <img
                          src={committee.secondVicePresidentImage}
                          alt={committee.secondVicePresident}
                          className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-lg border-4 border-white"
                          onError={(e) => e.target.src = 'https://via.placeholder.com/128x128?text=Image+Not+Found'}
                        />
                        <h4 className="text-lg font-bold text-primary mb-2">{committee.secondVicePresidentTitle}</h4>
                        <p className="text-gray-800 font-bold text-sm">{committee.secondVicePresident}</p>
                      </div>
                      <div className="text-center">
                        <img
                          src={committee.thirdVicePresidentImage}
                          alt={committee.thirdVicePresident}
                          className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-lg border-4 border-white"
                          onError={(e) => e.target.src = 'https://via.placeholder.com/128x128?text=Image+Not+Found'}
                        />
                        <h4 className="text-lg font-bold text-primary mb-2">{committee.thirdVicePresidentTitle}</h4>
                        <p className="text-gray-800 font-bold text-sm">{committee.thirdVicePresident}</p>
                      </div>
                      <div className="text-center">
                        <img
                          src={committee.fourthVicePresidentImage}
                          alt={committee.fourthVicePresident}
                          className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-lg border-4 border-white"
                          onError={(e) => e.target.src = 'https://via.placeholder.com/128x128?text=Image+Not+Found'}
                        />
                        <h4 className="text-lg font-bold text-primary mb-2">{committee.fourthVicePresidentTitle}</h4>
                        <p className="text-gray-800 font-bold text-sm">{committee.fourthVicePresident}</p>
                      </div>
                      <div className="text-center">
                        <img
                          src={committee.secretaryGeneralImage}
                          alt={committee.secretaryGeneral}
                          className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-lg border-4 border-white"
                          onError={(e) => e.target.src = 'https://via.placeholder.com/128x128?text=Image+Not+Found'}
                        />
                        <h4 className="text-lg font-bold text-primary mb-2">{committee.secretaryGeneralTitle}</h4>
                        <p className="text-gray-800 font-bold text-sm">{committee.secretaryGeneral}</p>
                      </div>
                      <div className="text-center">
                        <img
                          src={committee.itHeadImage}
                          alt={committee.itHead}
                          className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-lg border-4 border-white"
                          onError={(e) => e.target.src = 'https://via.placeholder.com/128x128?text=Image+Not+Found'}
                        />
                        <h4 className="text-lg font-bold text-primary mb-2">{committee.itHeadTitle}</h4>
                        <p className="text-gray-800 font-bold text-sm">{committee.itHead}</p>
                      </div>
                      <div className="text-center">
                        <img
                          src={committee.assistantHeadImage}
                          alt={committee.assistantHead}
                          className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-lg border-4 border-white"
                          onError={(e) => e.target.src = 'https://via.placeholder.com/128x128?text=Image+Not+Found'}
                        />
                        <h4 className="text-lg font-bold text-primary mb-2">{committee.assistantHeadTitle}</h4>
                        <p className="text-gray-800 font-bold text-sm">{committee.assistantHead}</p>
                      </div>
                    </>
                  )}
                </div>
                <div className="border-t border-gray-200 pt-12">
                  <h4 className="text-2xl font-bold text-primary mb-8 text-center">Committee Members</h4>
                  <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {committee.members.map((member, idx) => (
                      <div key={idx} className="text-center bg-gray-50 rounded-lg p-6 hover:bg-primary/5 transition-all">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-24 h-24 object-cover rounded-full mx-auto mb-4 shadow-md border-2 border-white"
                          onError={(e) => e.target.src = 'https://via.placeholder.com/96x96?text=Image+Not+Found'}
                        />
                        <h5 className="text-sm font-bold text-gold mb-1">{member.title}</h5>
                        <p className="text-gray-800 font-semibold text-sm">{member.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Structure */}
      <div className="py-20 bg-sky-light border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-center text-primary mb-16">
            Governance Structure
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Organizational Framework
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-primary mb-4">Primary Bodies</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3 items-start">
                      <span className="text-gold font-bold">●</span>
                      <span className="text-gray-700"><strong>General Assembly</strong> - Supreme policy-making authority</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-gold font-bold">●</span>
                      <span className="text-gray-700"><strong>Supreme Leader</strong> - Chief representative and ceremonial head</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-gold font-bold">●</span>
                      <span className="text-gray-700"><strong>Secretary General</strong> - Chief executive officer</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-gold font-bold">●</span>
                      <span className="text-gray-700"><strong>Security Council</strong> - Crisis management body</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-4">Specialized Councils</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3 items-start">
                      <span className="text-gold font-bold">●</span>
                      <span className="text-gray-700">Scholars & Religious Affairs</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-gold font-bold">●</span>
                      <span className="text-gray-700">Human Rights & Justice</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-gold font-bold">●</span>
                      <span className="text-gray-700">Humanitarian Response</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-gold font-bold">●</span>
                      <span className="text-gray-700">Youth & Civil Society</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-gold font-bold">●</span>
                      <span className="text-gray-700">Women & Social Development</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Leadership Team */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-8 text-center">
                Senior Leadership
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Dr. Muhammad Abdullah",
                    title: "Supreme Leader",
                    role: "Chief Representative",
                    description: "Islamic scholar and international peace advocate with 25+ years of diplomatic experience.",
                    expertise: "Islamic Jurisprudence, International Relations"
                  },
                  {
                    name: "Prof. Dr. Ahmad Hassan",
                    title: "Secretary General",
                    role: "Chief Executive Officer",
                    description: "Development expert coordinating global initiatives and strategic partnerships.",
                    expertise: "Sustainable Development, Organization Management"
                  },
                  {
                    name: "Sheikh Salman Al-Udah",
                    title: "Chair, Religious Affairs Council",
                    role: "Chief Advisor",
                    description: "Distinguished Islamic scholar guiding theological and policy matters.",
                    expertise: "Islamic Law, Quranic Studies"
                  },
                  {
                    name: "Dr. Fatima Al-Afriqi",
                    title: "Chair, Women & Social Council",
                    role: "Gender Equality Advocate",
                    description: "Social development specialist championing women's rights and empowerment.",
                    expertise: "Gender Studies, Social Development"
                  },
                  {
                    name: "Dr. Yusuf Al-Qaradawi",
                    title: "Chair, Human Rights Council",
                    role: "Justice Advocate",
                    description: "International law expert focused on human rights advocacy and justice.",
                    expertise: "International Law, Human Rights"
                  },
                  {
                    name: "Tariq Ramadan",
                    title: "Chair, Youth Council",
                    role: "Youth Engagement Lead",
                    description: "Thought leader engaged in mentoring next generation of Muslim leaders.",
                    expertise: "Youth Development, Education"
                  }
                ].map((leader, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedLeader(leader)}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all cursor-pointer hover:-translate-y-1 border-t-4 border-gold"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                        {leader.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-primary text-sm">{leader.title}</h4>
                        <p className="text-xs text-gray-600">{leader.role}</p>
                      </div>
                    </div>
                    <h3 className="font-bold text-primary mb-2">{leader.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{leader.description}</p>
                    <div className="pt-3 border-t border-gray-200 text-gold font-bold text-xs">
                      Learn more →
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-sky-light border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-center text-primary mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "What is United Muslim Ummah's primary mandate?",
                a: "UMU serves as a unified platform for Muslim communities to address global challenges collaboratively, promote development, and strengthen the voice of Muslim nations in international affairs."
              },
              {
                q: "How does UMU differ from other international organizations?",
                a: "UMU operates on Islamic principles, emphasizes Muslim community representation, and focuses on equitable solutions to global problems based on shared Islamic values and international law."
              },
              {
                q: "What are the membership criteria?",
                a: "Membership is open to Muslim-majority nations and communities committed to UMU's principles of unity, justice, and peaceful cooperation. Regional and organizational memberships are also available."
              },
              {
                q: "How are decisions made in UMU?",
                a: "The General Assembly comprises representatives from member nations and organizations. Major decisions require consensus or super-majority voting, ensuring broad participation and democratic governance."
              },
              {
                q: "How can individuals or organizations partner with UMU?",
                a: "We welcome partnerships with civil society organizations, academic institutions, and private sector entities that align with our values. Contact our partnership office for collaboration opportunities."
              },
              {
                q: "What is UMU's approach to interfaith engagement?",
                a: "UMU actively promotes respectful dialogue and cooperation with other faith communities, believing that unity within Islam strengthens our ability to contribute to global peace and development."
              }
            ].map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-lg shadow-sm p-6 cursor-pointer group hover:shadow-md transition-shadow"
              >
                <summary className="font-bold text-primary text-lg flex items-center justify-between">
                  {faq.q}
                  <span className="group-open:rotate-180 transition-transform text-gold">▼</span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed text-lg">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 ">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-[#B28926] bg-gradient-to-r from-primary to-primary-dark rounded-2xl text-white p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6">Join Our Mission</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Become part of a global movement advancing Muslim unity, interfaith cooperation, and sustainable solutions to international challenges.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-gold text-primary-dark px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
              >
                Get Involved
              </button>
              <button
                onClick={() => onNavigate('events')}
                className="border-2 border-gold text-gold px-8 py-3 rounded-lg font-bold text-lg hover:bg-gold hover:text-primary transition-all"
              >
                Upcoming Events
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Leader Detail Modal */}
      {selectedLeader && (
        <Modal isOpen={selectedLeader !== null} onClose={() => setSelectedLeader(null)}>
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-28 h-28 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center text-white font-bold text-4xl flex-shrink-0">
                {selectedLeader.name.charAt(0)}
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-primary mb-2">{selectedLeader.name}</h2>
                <p className="text-xl text-gold font-bold mb-1">{selectedLeader.title}</p>
                <p className="text-gray-600 font-semibold mb-2">{selectedLeader.role}</p>
                <p className="text-sm text-gray-500">
                  <strong>Expertise:</strong> {selectedLeader.expertise}
                </p>
              </div>
            </div>

            <div className="bg-sky-light rounded-xl p-6 mb-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                {selectedLeader.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="font-bold text-primary mb-3">Professional Background</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 25+ years international experience</li>
                  <li>• Active in 50+ countries</li>
                  <li>• Speaker at major global forums</li>
                  <li>• Published scholar and thought leader</li>
                </ul>
              </div>

              <div className="bg-emerald-50 rounded-xl p-6">
                <h4 className="font-bold text-primary mb-3">Current Responsibilities</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Policy formulation and governance</li>
                  <li>• International relations and diplomacy</li>
                  <li>• Strategic program oversight</li>
                  <li>• Community representation</li>
                </ul>
              </div>
            </div>

            <div className="bg-gold/10 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-primary mb-3">Vision & Contribution</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Committed to advancing Muslim unity, fostering international cooperation, and ensuring that Islamic principles of justice and compassion guide global development initiatives that benefit all humanity.
              </p>
            </div>

            <div className="flex gap-4 justify-end">
              <button
                onClick={() => setSelectedLeader(null)}
                className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg font-bold hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedLeader(null);
                  onNavigate('contact');
                }}
                className="px-6 py-2 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Member Detail Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => setSelectedMember(null)}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedMember(null)} />
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto relative z-10" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 bg-white/90 w-10 h-10 rounded-full flex items-center justify-center hover:bg-white transition-colors text-primary font-bold text-xl shadow-md z-20"
            >
              &times;
            </button>
            <div className="flex items-start gap-6 mb-8">
              <img src={selectedMember.image} alt={selectedMember.name} className="w-28 h-28 object-cover rounded-full flex-shrink-0" />
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-primary mb-2">{selectedMember.name}</h2>
                <p className="text-xl text-gold font-bold mb-1">{selectedMember.title}</p>
              </div>
            </div>

            <div className="bg-sky-light rounded-xl p-6 mb-6">
              <p className="text-gray-700 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: selectedMember.description }}></p>
            </div>

            <div className="flex gap-4 justify-end">
              <button
                onClick={() => setSelectedMember(null)}
                className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg font-bold hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedMember(null);
                  onNavigate('contact');
                }}
                className="px-6 py-2 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutPage;
