import { FiBarChart2, FiCalendar, FiFileText, FiImage, FiSettings, FiX } from 'react-icons/fi';

export default function DashboardNav({ activeTab, setActiveTab, setShowMobileNav }) {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: FiBarChart2 },
    { id: 'about', label: 'About Page', icon: FiFileText },
    { id: 'events', label: 'Events', icon: FiCalendar },
    { id: 'gallery', label: 'Gallery', icon: FiImage },
    { id: 'news', label: 'News', icon: FiFileText },
    { id: 'settings', label: 'Settings', icon: FiSettings },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 bg-primary text-white py-8 sticky top-0 h-screen overflow-y-auto">
        <div className="px-6 mb-8">
          <h2 className="text-2xl font-black mb-2">Admin</h2>
          <p className="text-gold text-sm">Website Management</p>
        </div>

        <nav className="space-y-2 px-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeTab === item.id
                    ? 'bg-gold text-primary-dark font-bold'
                    : 'text-white hover:bg-primary-dark'
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      <aside className="md:hidden fixed left-0 top-0 w-64 h-screen bg-primary text-white z-40 transform transition-transform">
        <div className="px-6 py-8">
          <button
            onClick={() => setShowMobileNav(false)}
            className="float-right text-white"
          >
            <FiX size={24} />
          </button>
          <h2 className="text-2xl font-black mb-2">Admin</h2>
          <p className="text-gold text-sm">Website Management</p>
        </div>

        <nav className="space-y-2 px-4 mt-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setShowMobileNav(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeTab === item.id
                    ? 'bg-gold text-primary-dark font-bold'
                    : 'text-white hover:bg-primary-dark'
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
