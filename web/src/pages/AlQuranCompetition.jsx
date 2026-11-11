import { useEffect, useRef, useState } from 'react';
import {
  FaBookOpen,
  FaCalendarCheck,
  FaChevronDown,
  FaExternalLinkAlt,
  FaFacebook,
  FaFlagCheckered,
  FaGift,
  FaGraduationCap,
  FaHandHoldingHeart,
  FaPhoneAlt,
  FaTrophy,
  FaUserEdit,
  FaUsers,
  FaWhatsapp,
} from 'react-icons/fa';
import { MdEmail, MdUpdate } from 'react-icons/md';

const COMPETITION = {
  formUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSezexlr1UdR_bdyI2VDAbNzZ7nnbiYYqc2XK9abRdVQO8vDtg/viewform',
  regEnd: new Date('2026-11-30T23:59:59+06:00'),
  competitionStart: new Date('2026-12-01T00:00:00+06:00'),
  competitionEnd: new Date('2027-01-31T23:59:59+06:00'),
  poster: '/assets/al-quran-competition-2026.jpg',
  contact: {
    phone: '+8801312143812',
    email: 'umu.dhakauniversity@gmail.com',
    fbPage: 'https://www.facebook.com/umudhakauniversity',
    fbGroup: 'https://www.facebook.com/groups/umudhakauniversity',
  },
};

const BN_DIGITS = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
const toBn = (value) => String(value).replace(/\d/g, (d) => BN_DIGITS[d]);
const pad2 = (n) => String(n).padStart(2, '0');

// regOpen -> regClosed (gap until Dec 1) -> running -> ended
function getPhase(now) {
  if (now <= COMPETITION.regEnd) return 'regOpen';
  if (now < COMPETITION.competitionStart) return 'regClosed';
  if (now <= COMPETITION.competitionEnd) return 'running';
  return 'ended';
}

const PHASE_INFO = {
  regOpen: {
    badge: 'নিবন্ধন চলছে',
    badgeClass: 'bg-green-100 text-green-800',
    countdownLabel: 'নিবন্ধন শেষ হতে বাকি',
    target: COMPETITION.regEnd,
  },
  regClosed: {
    badge: 'নিবন্ধন বন্ধ',
    badgeClass: 'bg-gray-100 text-gray-700',
    countdownLabel: 'প্রতিযোগিতা শুরু হতে বাকি',
    target: COMPETITION.competitionStart,
  },
  running: {
    badge: 'প্রতিযোগিতা চলছে',
    badgeClass: 'bg-green-100 text-green-800',
    countdownLabel: 'প্রতিযোগিতা শেষ হতে বাকি',
    target: COMPETITION.competitionEnd,
  },
  ended: {
    badge: 'প্রতিযোগিতা সমাপ্ত',
    badgeClass: 'bg-gray-100 text-gray-700',
    countdownLabel: null,
    target: null,
  },
};

function diffParts(target, now) {
  let total = Math.max(0, Math.floor((target - now) / 1000));
  const days = Math.floor(total / 86400);
  total %= 86400;
  const hours = Math.floor(total / 3600);
  total %= 3600;
  return { days, hours, minutes: Math.floor(total / 60), seconds: total % 60 };
}

function useNow() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(
    () => typeof IntersectionObserver === 'undefined',
  );

  useEffect(() => {
    if (visible || !ref.current) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  );
}

function RegisterButton({ size = 'md', variant = 'gold', className = '' }) {
  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variants = {
    gold: {
      background: '#E6C77A',
      color: '#0B4F2B',
      border: '1px solid #E6C77A',
      hoverBackground: '#FFFFFF',
      hoverColor: '#0B4F2B',
      hoverBorder: '#FFFFFF',
    },
    green: {
      background: '#0B4F2B',
      color: '#FFFFFF',
      border: '1px solid #0B4F2B',
      hoverBackground: '#0E5A37',
      hoverColor: '#FFFFFF',
      hoverBorder: '#0E5A37',
    },
  };

  const palette = variants[variant] ?? variants.gold;

  return (
    <a
      href={COMPETITION.formUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl ${sizes[size]} ${className}`}
      style={{
        backgroundColor: palette.background,
        color: palette.color,
        border: palette.border,
        boxShadow: '0 10px 25px rgba(11, 79, 43, 0.18)',
        display: 'inline-flex',
        textDecoration: 'none',
        lineHeight: 1.2,
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = palette.hoverBackground;
        e.currentTarget.style.color = palette.hoverColor;
        e.currentTarget.style.borderColor = palette.hoverBorder;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = palette.background;
        e.currentTarget.style.color = palette.color;
        e.currentTarget.style.borderColor = palette.border.replace('1px solid ', '');
      }}
    >
      নিবন্ধন করুন
      <FaExternalLinkAlt className="text-[0.75em] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

function StatusBadge({ phase, className = '' }) {
  const info = PHASE_INFO[phase];
  const live = phase === 'regOpen' || phase === 'running';
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs md:text-sm font-semibold ${info.badgeClass} ${className}`}
    >
      <span className="relative flex h-2 w-2">
        {live && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-60" />
        )}
        <span className="relative inline-flex h-2 w-2 rounded-full bg-current" />
      </span>
      {info.badge}
    </span>
  );
}

function Countdown({ now, phase, tone = 'light' }) {
  const info = PHASE_INFO[phase];
  const dark = tone === 'dark';

  if (!info.target) {
    return (
      <p className={dark ? 'text-white/90' : 'text-text-muted'}>
        আলহামদুলিল্লাহ, প্রতিযোগিতা সমাপ্ত হয়েছে।
      </p>
    );
  }

  const parts = diffParts(info.target, now);
  const items = [
    ['দিন', parts.days],
    ['ঘণ্টা', parts.hours],
    ['মিনিট', parts.minutes],
    ['সেকেন্ড', parts.seconds],
  ];

  return (
    <div>
      <p
        className={`text-sm font-semibold mb-3 ${dark ? 'text-gold-light' : 'text-text-muted'}`}
      >
        {info.countdownLabel}
      </p>
      <div className="grid grid-cols-4 gap-2 md:gap-3">
        {items.map(([label, value]) => (
          <div
            key={label}
            className={`rounded-xl py-3 text-center ${
              dark
                ? 'bg-white/10 ring-1 ring-white/20 text-white'
                : 'bg-primary text-white shadow-md'
            }`}
          >
            <span className="block text-2xl md:text-3xl font-extrabold tabular-nums leading-none">
              {toBn(pad2(value))}
            </span>
            <span
              className={`block text-xs mt-1.5 ${dark ? 'text-white/70' : 'text-white/80'}`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const TIMELINE = [
  {
    key: 'reg',
    icon: FaUserEdit,
    title: 'নিবন্ধন',
    date: 'শেষ তারিখ: ৩০ নভেম্বর, ২০২৬',
    activeIn: ['regOpen'],
    doneIn: ['regClosed', 'running', 'ended'],
  },
  {
    key: 'run',
    icon: FaBookOpen,
    title: 'প্রতিযোগিতা (অর্থ পাঠ)',
    date: '০১ ডিসেম্বর, ২০২৬ – ৩১ জানুয়ারি, ২০২৭',
    activeIn: ['regClosed', 'running'],
    doneIn: ['ended'],
  },
  {
    key: 'quiz',
    icon: FaFlagCheckered,
    title: 'অনলাইন কুইজ ও পুরস্কার',
    date: 'প্রতিযোগিতা শেষে',
    activeIn: ['ended'],
    doneIn: [],
  },
];

function Timeline({ phase }) {
  return (
    <ol className="relative space-y-5">
      <span
        aria-hidden
        className="absolute left-5 top-5 bottom-5 w-0.5 bg-gray-200"
      />
      {TIMELINE.map((step) => {
        const StepIcon = step.icon;
        const active = step.activeIn.includes(phase);
        const done = step.doneIn.includes(phase);
        return (
          <li key={step.key} className="relative flex gap-4 items-start">
            <span
              className={`relative z-10 shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                active
                  ? 'bg-gold-light text-primary-dark ring-4 ring-gold-light/40'
                  : done
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-400 border-2 border-gray-200'
              }`}
            >
              <StepIcon />
            </span>
            <div className="pt-1">
              <p className="font-bold text-primary-dark flex items-center gap-2 flex-wrap">
                {step.title}
                {active && (
                  <span className="text-[11px] font-semibold bg-gold-light/40 text-primary-dark px-2 py-0.5 rounded-full">
                    চলমান
                  </span>
                )}
              </p>
              <p className="text-sm text-text-muted mt-0.5">{step.date}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

const HIGHLIGHTS = [
  {
    icon: FaBookOpen,
    title: 'যেকোনো ভাষার অনুবাদ',
    text: 'বাংলা বা অন্য যেকোনো ভাষার অনুবাদ পড়া যাবে, শুরু থেকে ধারাবাহিকভাবে।',
  },
  {
    icon: MdUpdate,
    title: 'সাপ্তাহিক আপডেট',
    text: 'প্রতি ৭ দিন পরপর গুগল ফর্মে কোন পর্যন্ত পড়লেন তা জানাবেন।',
  },
  {
    icon: FaUsers,
    title: 'সকলেই বিজয়ী',
    text: 'নির্ধারিত দুই মাসে সম্পূর্ণ অর্থ পাঠ করলেই আপনি বিজয়ী।',
  },
  {
    icon: FaGift,
    title: 'মূল্যবান উপহার',
    text: 'সকল বিজয়ীর জন্য বই, আর কুইজে সেরা ২০ জনের জন্য বিশেষ পুরস্কার।',
  },
];

const RULES = [
  {
    title: 'ফর্ম পূরণ করে নিবন্ধন',
    body: 'আগ্রহী প্রতিযোগীকে নিবন্ধন ফর্ম পূরণের মাধ্যমে নিবন্ধন করতে হবে।',
  },
  {
    title: 'নিবন্ধন আইডি ও কর্মপরিকল্পনা',
    body: 'নিবন্ধনের আবেদনের পর নিবন্ধনকারীর নম্বরে ‘প্রতিযোগিতার নিবন্ধন আইডি’ মেসেজ করে জানানোর চেষ্টা করা হবে এবং তার ইমেইল আইডিতে বিস্তারিত কার্যকরী পরিকল্পনা সরবরাহ করা হবে।',
  },
  {
    title: 'শুধু অনুবাদ, শুরু থেকে ধারাবাহিকভাবে',
    body: 'অর্থ পড়ার ক্ষেত্রে বাংলা/অন্য যে কোন ভাষার অনুবাদ পড়া যেতে পারে। এই প্রতিযোগিতায় শুধু অনুবাদ পড়তে হবে। প্রতিযোগীকে অবশ্যই কুরআনের শুরু থেকে পড়া শুরু করতে হবে এবং কোন সূরা বা সূরার অংশ বাকি না রেখে ধারাবাহিকভাবে পড়ে যেতে হবে।',
  },
  {
    title: 'সাপ্তাহিক আপডেট ও গ্রুপ',
    body: [
      "০১ ডিসেম্বর, ২০২৬ থেকে প্রতিযোগিতার পড়া শুরু হবে। প্রতি ৭ দিন পরপর কুরআনের শুরু থেকে কোন পর্যন্ত পড়া হয়েছে তা গুগল ফর্মের মাধ্যমে জানাতে হবে। আপডেট জানানোর গুগল ফর্ম সময়মত সরবরাহ করা হবে, ইন শা' আল্লাহ।",
      'আপডেট পাওয়ার পর সবার আইডি ও পঠিত মোট আয়াত সংখ্যা উল্লেখ করে একটি পিডিএফ ফাইল তৈরি করে প্রতিযোগীদের Telegram গ্রুপে আপলোড করা হবে। সবাই নিজ ও অন্যের পাঠের অবস্থান জানতে পারবেন; নাম উল্লেখ না থাকায় সবাই একে অপরের কাছে ‘অপরিচিত’ থাকবেন।',
      'নিবন্ধনের পর Telegram ও WhatsApp গ্রুপের লিংক পাওয়া যাবে, নিজ সুবিধামত একটিতে যুক্ত হবেন। ভাই ও বোনদের একই Telegram গ্রুপ থাকবে, তবে সবার নম্বর হাইড থাকবে এবং নিজেদের মধ্যে যোগাযোগ করা যাবে না। WhatsApp এ ভাই ও বোনদের আলাদা গ্রুপ থাকবে। Telegram/WhatsApp একাউন্ট থাকা বাধ্যতামূলক নয়।',
      'এটা যেহেতু কুরআন কেন্দ্রিক আয়োজন, আর পর্দা করা কুরআনেরই নির্দেশনা (২৪:৩১); তাই আমরা প্রত্যাশা করি, সম্মানিত প্রতিযোগীরা নিবন্ধনে সরবরাহকৃত সামাজিক মাধ্যমগুলোর প্রোফাইল পিকচারে পর্দার বরখেলাপ হয় এমন ছবি দিবেন না।',
    ],
  },
  {
    title: 'বিজয়ী নির্ধারণ',
    body: [
      'নির্ধারিত দুই মাস সময়ের মধ্যে সম্পূর্ণ কুরআনের অর্থ একবার পাঠকারী সকল প্রতিযোগীই বিজয়ী বলে বিবেচিত হবেন।',
      'সময় নিয়ে ধীরে ধীরে বুঝে পড়ার চেষ্টা করুন। এক আপডেট থেকে পরবর্তী আপডেট দেয়ার সময় পর্যন্ত ০৭ পারার বেশি পড়া গৃহীত হবে না।',
    ],
  },
];

const ORGANIZERS = [
  {
    tier: 'organizer',
    name: 'United Muslim Ummah',
    sub: 'Dhaka University',
    logo: '/assets/partners/umu.jpg',
    initials: 'UMU',
  },
  {
    tier: 'organizer',
    name: 'QARI',
    sub: 'Quranic & Arabic Research Institute',
    logo: '/assets/partners/qari.png',
    initials: 'QARI',
  },
  {
    tier: 'partner',
    name: 'Al Quran Reflection Center',
    sub: '',
    logo: '/assets/partners/al-quran-reflection-center.png',
    initials: 'AQRC',
    logoScale: 'scale-[1.55]',
  },
  {
    tier: 'media',
    name: 'Innova Studio',
    sub: '',
    logo: '/assets/partners/innova-studio.png',
    initials: 'IS',
    logoScale: 'scale-[1.9]',
  },
];

const TIER_LABEL = {
  organizer: 'আয়োজক',
  partner: 'সহযোগিতায়',
  media: 'মিডিয়া পার্টনার',
};

function PartnerLogo({ org, className = '' }) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`overflow-hidden rounded-xl bg-white flex items-center justify-center ${className}`}
    >
      {failed ? (
        <span className="w-full h-full bg-primary text-gold-light font-extrabold flex items-center justify-center tracking-wide">
          {org.initials}
        </span>
      ) : (
        <div className={`h-full w-full ${org.logoScale ?? ''}`}>
          <img
            src={org.logo}
            alt={`${org.name} logo`}
            loading="lazy"
            onError={() => setFailed(true)}
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      )}
    </div>
  );
}

function OrganizerCard({ org, size }) {
  const large = size === 'lg';
  return (
    <div
      className={`group h-full bg-white rounded-2xl border border-gray-100 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gold-light ${
        large
          ? 'p-6 md:p-8 shadow-md border-t-4 border-t-gold-light'
          : 'p-5 md:p-6 shadow-sm'
      }`}
    >
      <span className="inline-block text-xs font-semibold text-gold bg-gold-light/20 px-3 py-1 rounded-full mb-4">
        {TIER_LABEL[org.tier]}
      </span>
      <PartnerLogo
        org={org}
        className={large ? 'h-28 w-40 mx-auto' : 'h-24 w-48 mx-auto'}
      />
      <p
        className={`font-extrabold text-primary-dark mt-4 ${large ? 'text-lg md:text-xl' : 'text-base'}`}
      >
        {org.name}
      </p>
      {org.sub && <p className="text-sm text-text-muted mt-1">{org.sub}</p>}
    </div>
  );
}

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center mb-8 md:mb-10">
      {eyebrow && (
        <p className="text-gold font-semibold text-sm mb-1">{eyebrow}</p>
      )}
      <h2 className="text-2xl md:text-3xl font-extrabold text-primary-dark">
        {title}
      </h2>
      <span className="block w-14 h-1 bg-gold-light rounded-full mx-auto mt-3" />
      {subtitle && (
        <p className="text-text-muted mt-3 max-w-xl mx-auto text-sm md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function RuleItem({ index, rule, open, onToggle, isLast }) {
  const paragraphs = Array.isArray(rule.body) ? rule.body : [rule.body];
  return (
    <li className="relative pl-14">
      {!isLast && (
        <span
          aria-hidden
          className="absolute left-5 top-12 bottom-[-1rem] w-0.5 bg-gray-200"
        />
      )}
      <span
        className={`absolute left-0 top-2 w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
          open ? 'bg-primary text-white' : 'bg-gold-light/40 text-primary-dark'
        }`}
      >
        {toBn(index + 1)}
      </span>
      <div
        className={`rounded-2xl border bg-white transition-all ${
          open ? 'border-gold-light shadow-md' : 'border-gray-100 shadow-sm hover:border-gold-light/70'
        }`}
      >
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
        >
          <span className="font-bold text-primary-dark">{rule.title}</span>
          <FaChevronDown
            className={`shrink-0 text-gold transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          />
        </button>
        <div
          className={`grid transition-all duration-300 ease-out ${
            open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-5 pb-5 space-y-3 text-gray-700 leading-relaxed text-[15px]">
              {paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

function RulesAccordion() {
  const [openSet, setOpenSet] = useState(() => new Set([0]));
  const allOpen = openSet.size === RULES.length;

  const toggle = (i) =>
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <>
      <div className="flex justify-end mb-4">
        <button
          type="button"
          onClick={() =>
            setOpenSet(allOpen ? new Set() : new Set(RULES.map((_, i) => i)))
          }
          className="text-sm font-semibold text-primary hover:text-gold transition-colors"
        >
          {allOpen ? 'সব বন্ধ করুন' : 'সব খুলুন'}
        </button>
      </div>
      <ol className="space-y-4">
        {RULES.map((rule, i) => (
          <RuleItem
            key={rule.title}
            index={i}
            rule={rule}
            open={openSet.has(i)}
            onToggle={() => toggle(i)}
            isLast={i === RULES.length - 1}
          />
        ))}
      </ol>
    </>
  );
}

export default function AlQuranCompetition() {
  const now = useNow();
  const phase = getPhase(now);

  const scrollToRules = () =>
    document
      .getElementById('competition-rules')
      ?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div lang="bn" className="font-bangla bg-sky-light text-text-primary">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-dark text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-gold-light/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-24 w-96 h-96 rounded-full bg-white/10 blur-3xl"
        />
        <div className="relative container mx-auto px-4 max-w-6xl pt-12 pb-24 md:pt-16 md:pb-32">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <p className="text-sm md:text-base mb-4" style={{ color: '#E6C77A' }}>
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </p>
              <StatusBadge phase={phase} className="mb-5" />
              <h1 className="font-extrabold leading-tight">
                <span
                  className="inline-block text-3xl md:text-5xl px-4 py-1 rounded-lg shadow-lg -rotate-1"
                  style={{ backgroundColor: '#B91C1C', color: '#FFFFFF' }}
                >
                  আল কুরআন
                </span>
                <span
                  className="block text-4xl md:text-6xl mt-4 drop-shadow"
                  style={{ color: '#E6C77A' }}
                >
                  অর্থ পাঠ প্রতিযোগিতা
                </span>
                <span
                  className="inline-block mt-4 text-xl md:text-2xl rounded-full px-5 py-0.5"
                  style={{
                    border: '2px solid rgba(230, 199, 122, 0.7)',
                    color: '#E6C77A',
                  }}
                >
                  ২০২৬
                </span>
              </h1>
              <p
                className="mt-6 leading-relaxed md:text-lg max-w-xl mx-auto lg:mx-0"
                style={{ color: '#f6f6f6' }}
              >
                Quranic and Arabic Research Institute (QARI) এবং United Muslim
                Ummah (Dhaka University) এর উদ্যোগে আয়োজিত হতে যাচ্ছে, ইন শা'
                আল্লাহ।
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center lg:justify-start">
                <RegisterButton size="lg" />
                <button
                  type="button"
                  onClick={scrollToRules}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold transition-all shadow-md"
                  style={{
                    border: '2px solid rgba(230, 199, 122, 0.9)',
                    color: '#F8F1D6',
                    backgroundColor: 'transparent',
                    boxShadow: '0 10px 25px rgba(11, 79, 43, 0.18)',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#F8F1D6';
                    e.currentTarget.style.color = '#0B4F2B';
                    e.currentTarget.style.borderColor = '#F8F1D6';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#F8F1D6';
                    e.currentTarget.style.borderColor = 'rgba(230, 199, 122, 0.9)';
                  }}
                >
                  নিয়মাবলী দেখুন
                  <FaChevronDown className="text-sm" />
                </button>
              </div>
              <p className="mt-4 text-sm text-white/70">
                নিবন্ধনের শেষ তারিখ: ৩০ নভেম্বর, ২০২৬ · ন্যূনতম ফি ১০০ টাকা
              </p>
            </div>
            <div className="lg:col-span-5">
              <a
                href={COMPETITION.poster}
                target="_blank"
                rel="noopener noreferrer"
                className="block max-w-xs md:max-w-sm mx-auto rotate-2 hover:rotate-0 hover:scale-[1.02] transition-transform duration-500"
              >
                <img
                  src={COMPETITION.poster}
                  alt="আল কুরআন অর্থ পাঠ প্রতিযোগিতা ২০২৬ পোস্টার"
                  className="w-full rounded-2xl shadow-2xl ring-4 ring-gold-light/50"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown + Timeline */}
      <section className="relative z-10 -mt-16 md:-mt-20 pb-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-6">
            <Reveal className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 flex flex-col justify-center">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold text-primary-dark">
                  সময় গণনা
                </h2>
                <StatusBadge phase={phase} />
              </div>
              <Countdown now={now} phase={phase} />
              <RegisterButton variant="green" size="md" className="mt-6 w-full" />
            </Reveal>
            <Reveal
              delay={100}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8"
            >
              <h2 className="text-lg font-bold text-primary-dark mb-5 flex items-center gap-2">
                <FaCalendarCheck className="text-gold" /> গুরুত্বপূর্ণ তারিখ
              </h2>
              <Timeline phase={phase} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <Reveal>
            <SectionHeading eyebrow="সংক্ষেপে" title="এক নজরে প্রতিযোগিতা" />
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {HIGHLIGHTS.map((item, i) => {
              const ItemIcon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 80}>
                  <div className="group h-full bg-sky-light rounded-2xl p-5 border border-transparent hover:border-gold-light hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="w-11 h-11 rounded-xl bg-gold-light/40 text-primary-dark flex items-center justify-center mb-4 transition-colors group-hover:bg-primary group-hover:text-white">
                      <ItemIcon className="text-lg" />
                    </div>
                    <h3 className="font-bold text-primary-dark mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Eligibility + Fee */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <Reveal>
            <SectionHeading eyebrow="অংশগ্রহণ" title="যোগ্যতা ও নিবন্ধন ফি" />
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            <Reveal className="h-full">
              <div className="h-full bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center">
                    <FaGraduationCap className="text-lg" />
                  </span>
                  <h3 className="text-lg font-bold text-primary-dark">
                    কারা অংশ নিতে পারবেন?
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  বর্তমান এবং প্রাক্তন <strong>সকল ধর্মের</strong>{' '}
                  শিক্ষক-শিক্ষার্থী, যারা এই প্রতিষ্ঠানগুলোর সাথে যুক্ত:
                </p>
                <div className="flex flex-wrap gap-2">
                  {['ঢাকা বিশ্ববিদ্যালয়', 'বুয়েট', 'ঢাকা মেডিকেল কলেজ'].map(
                    (name) => (
                      <span
                        key={name}
                        className="bg-sky text-primary-dark text-sm font-semibold px-3 py-1.5 rounded-full"
                      >
                        {name}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </Reveal>
            <Reveal delay={100} className="h-full">
              <div className="h-full bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-gray-100 border-t-4 border-t-gold-light hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-11 h-11 rounded-xl bg-gold-light text-primary-dark flex items-center justify-center">
                    <FaHandHoldingHeart className="text-lg" />
                  </span>
                  <h3 className="text-lg font-bold text-primary-dark">
                    নিবন্ধন ফি
                  </h3>
                </div>
                <p className="flex items-baseline gap-2 mb-3">
                  <span className="text-sm text-text-muted">ন্যূনতম</span>
                  <span className="text-4xl font-extrabold text-primary">
                    ১০০ ৳
                  </span>
                </p>
                <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                  অমুসলিম ও অস্বচ্ছলদের জন্য ফি ছাড়াই
                </span>
                <p className="text-sm text-gray-600 leading-relaxed">
                  কেউ ১০০ টাকার বেশি দিলে সেটাও প্রশংসনীয়। অতিরিক্ত অংশ ফান্ডে
                  জমা হবে, যা কুরআন সংশ্লিষ্ট কাজে ব্যয় করা হবে ইন শা' আল্লাহ।
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Rules */}
      <section id="competition-rules" className="py-12 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <Reveal>
            <SectionHeading
              eyebrow="জেনে নিন"
              title="প্রতিযোগিতার নিয়মাবলী"
              subtitle="যেকোনো নিয়মে ক্লিক করে বিস্তারিত দেখুন"
            />
          </Reveal>
          <Reveal>
            <RulesAccordion />
          </Reveal>
          <p className="text-xs md:text-sm text-text-muted mt-6 text-center">
            * কর্তৃপক্ষ প্রয়োজন মনে করলে প্রতিযোগিতা সংশ্লিষ্ট নিয়ম পরিবর্তন
            করতে পারেন।
          </p>
        </div>
      </section>

      {/* Mid CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-dark to-primary px-6 py-8 md:px-10 md:py-10 shadow-xl">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 w-48 h-48 rounded-full bg-gold-light/20 blur-2xl"
              />
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                    নিয়ম তো জানলেন, এবার শুরু করুন!
                  </h2>
                  <p className="text-white/80 mt-2">
                    ন্যূনতম ফি ১০০ টাকা · অমুসলিম ও অস্বচ্ছলদের জন্য ফ্রি
                  </p>
                </div>
                <RegisterButton size="lg" className="shrink-0" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Prizes */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Reveal>
            <SectionHeading eyebrow="উপহার" title="পুরস্কারসমূহ" />
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: FaGift,
                title: 'সকল বিজয়ীর জন্য',
                highlight: '৩০০ টাকার বই',
                text: 'কুরআনের অর্থ পাঠ সম্পন্নকারী প্রতিযোগিতার সকল বিজয়ীর জন্য পুরস্কার হিসেবে থাকবে ৩০০ টাকা সমমূল্যের বই।',
              },
              {
                icon: FaTrophy,
                title: 'অনলাইন কুইজ',
                highlight: 'সেরা ২০ জন',
                text: 'বিজয়ীদের জন্য প্রতিযোগিতা শেষে অনলাইন কুইজের আয়োজন করা হবে, সেরা ২০ জনের জন্য থাকবে আকর্ষণীয় পুরস্কার।',
              },
            ].map((prize, i) => {
              const PrizeIcon = prize.icon;
              return (
                <Reveal key={prize.title} delay={i * 100} className="h-full">
                  <div className="group h-full rounded-2xl p-6 md:p-7 bg-gradient-to-br from-gold-light/25 to-white border-2 border-gold-light/70 hover:border-gold hover:shadow-lg transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-12 h-12 rounded-full bg-gold-light text-primary-dark flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                        <PrizeIcon />
                      </span>
                      <div>
                        <p className="text-sm text-text-muted">{prize.title}</p>
                        <p className="text-xl font-extrabold text-primary-dark">
                          {prize.highlight}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-[15px]">
                      {prize.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* Organizers & Partners */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Reveal>
            <SectionHeading
              eyebrow="আয়োজক ও সহযোগী"
              title="যাদের উদ্যোগে এই আয়োজন"
            />
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            {ORGANIZERS.filter((o) => o.tier === 'organizer').map((org, i) => (
              <Reveal key={org.name} delay={i * 100} className="h-full">
                <OrganizerCard org={org} size="lg" />
              </Reveal>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mt-5 md:max-w-2xl md:mx-auto">
            {ORGANIZERS.filter((o) => o.tier !== 'organizer').map((org, i) => (
              <Reveal key={org.name} delay={i * 100} className="h-full">
                <OrganizerCard org={org} size="md" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <Reveal>
            <SectionHeading
              eyebrow="প্রশ্ন আছে?"
              title="সার্বিক যোগাযোগ"
              subtitle="প্রতিযোগিতার যেকোনো বিষয়ে আমাদের সাথে যোগাযোগ করুন"
            />
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href={`tel:${COMPETITION.contact.phone}`}
                className="group bg-sky-light rounded-2xl p-5 border border-gray-100 hover:bg-white hover:shadow-md hover:border-gold-light transition-all"
              >
                <span className="w-11 h-11 mx-auto rounded-full bg-primary text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <FaPhoneAlt />
                </span>
                <p className="text-xs text-text-muted">
                  Telegram, WhatsApp, কল বা SMS
                </p>
                <p className="font-bold text-primary-dark mt-1">
                  {COMPETITION.contact.phone}
                </p>
              </a>
              <a
                href={`mailto:${COMPETITION.contact.email}`}
                className="group bg-sky-light rounded-2xl p-5 border border-gray-100 hover:bg-white hover:shadow-md hover:border-gold-light transition-all"
              >
                <span className="w-11 h-11 mx-auto rounded-full bg-primary text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <MdEmail className="text-lg" />
                </span>
                <p className="text-xs text-text-muted">ইমেইল</p>
                <p className="font-bold text-primary-dark mt-1 break-all text-sm">
                  {COMPETITION.contact.email}
                </p>
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <a
                href={COMPETITION.contact.fbPage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1877F2] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <FaFacebook /> ফেসবুক পেইজ
              </a>
              <a
                href={COMPETITION.contact.fbGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-[#1877F2] text-[#1877F2] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#1877F2] hover:text-white transition-colors"
              >
                <FaFacebook /> ফেসবুক গ্রুপ
              </a>
              <a
                href={`https://wa.me/${COMPETITION.contact.phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-dark py-14 md:py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-24 w-[36rem] h-72 rounded-full bg-gold-light/15 blur-3xl"
        />
        <div className="relative container mx-auto px-4 max-w-2xl text-center text-white">
          <Reveal>
            <h2 className="text-2xl md:text-4xl font-extrabold leading-snug">
              আল্লাহর কালাম বুঝে পড়ার যাত্রায়{' '}
              <span className="text-gold-light">শামিল হোন</span>
            </h2>
            <p className="text-white/80 mt-3 mb-8">
              সময় নিয়ে ধীরে ধীরে বুঝে পড়ুন। নির্ধারিত সময়ে সম্পূর্ণ পাঠই আপনার
              বিজয়।
            </p>
            <div className="max-w-md mx-auto mb-8">
              <Countdown now={now} phase={phase} tone="dark" />
            </div>
            <RegisterButton size="lg" />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
