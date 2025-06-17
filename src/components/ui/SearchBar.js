import { useRef, useEffect } from 'react';

export default function SearchBar({ value, onChange, placeholder }) {
  const inputRef = useRef(null);
  
  // Focus the search input when pressing '/' key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '/' && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  return (
    <div className="relative">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="px-3 py-2 border rounded-md text-sm focus:ring-teal-500 focus:border-teal-500 w-full text-gray-700"
        aria-label={placeholder}
      />
      {!value && (
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs">
          Press /
        </div>
      )}
    </div>
  );
}
