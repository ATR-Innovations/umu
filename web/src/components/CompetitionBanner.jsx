import { Link } from 'react-router-dom';
import { FaBookOpen } from 'react-icons/fa';

export default function CompetitionBanner() {
  return (
    <section className="bg-gradient-to-r from-primary-dark via-primary to-primary-dark text-white py-6 border-y-2 border-gold-light/50 font-bangla">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-center md:text-left">
          <span className="hidden sm:flex w-12 h-12 shrink-0 rounded-full bg-gold-light text-primary-dark items-center justify-center text-xl">
            <FaBookOpen />
          </span>
          <div>
            <h2 className="text-lg md:text-xl font-extrabold">
              আল কুরআন অর্থ পাঠ প্রতিযোগিতা{' '}
              <span className="text-gold-light">২০২৬</span>
            </h2>
            <p className="text-white/80 text-sm mt-1">
              নিবন্ধন চলছে · শেষ তারিখ ৩০ নভেম্বর, ২০২৬ · সকল বিজয়ীর জন্য বই উপহার
            </p>
          </div>
        </div>
        <Link
          //to="/al-quran-competition"
          to="/"
          className="shrink-0 bg-gold-light text-primary-dark px-6 py-3 rounded-full font-bold text-sm hover:bg-white transition-all shadow-md hover:-translate-y-0.5"
        >
          বিস্তারিত ও নিবন্ধন
        </Link>
      </div>
    </section>
  );
}
