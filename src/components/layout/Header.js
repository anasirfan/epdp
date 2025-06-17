import { useState, useEffect, useRef } from 'react';
import { useAppContext } from '../../context/AppContext';
import RoleSelector from '../ui/RoleSelector';
import LanguageToggle from '../ui/LanguageToggle';
import SearchBar from '../ui/SearchBar';

export default function Header() {
  const { t, performSearch, searchQuery, setSearchQuery } = useAppContext();
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Use ref for debounce timeout
  const searchTimeoutRef = useRef(null);
  
  // Handle search input changes with debounce
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    // Clear any existing timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }
    
    // Debounce search to avoid excessive searches while typing
    searchTimeoutRef.current = setTimeout(() => {
      performSearch(query);
      searchTimeoutRef.current = null;
    }, 300);
  };
  
  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header 
      className={`bg-gradient-to-r from-teal-600 to-teal-400 text-white shadow-sm sticky top-0 z-40 transition-shadow ${
        isScrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">Limi Lighting</h1>
          <p className="text-sm text-slate-100">{t.header_subtitle}</p>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Role Selector */}
          <RoleSelector />
          
          {/* Live Process Indicator */}
          <div className="flex items-center space-x-2" title="This process is live and mandatory.">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-white">{t.live_process}</span>
          </div>
          
          {/* Language Toggle */}
          <LanguageToggle />
          
          {/* Search Bar */}
          <div className="hidden md:block w-64">
            <SearchBar 
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder={t.search_placeholder}
            />
          </div>
          
          {/* Mobile search button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => {
              // Toggle mobile search visibility
              alert('Mobile search not implemented yet');
            }}
            aria-label="Search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
