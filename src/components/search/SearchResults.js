import { useAppContext } from '../../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function SearchResults() {
  const { searchQuery, searchResults, setCurrentPhase, setCurrentTab, closeSearchResults } = useAppContext();
  
  // If there's no search query or results, don't render anything
  if (!searchQuery || searchResults.length === 0) {
    return null;
  }
  
  // Handle click on a search result
  const handleResultClick = (result) => {
    // Navigate to the appropriate section based on result type
    if (result.type === 'phase') {
      setCurrentPhase(result.id);
    } else if (result.type === 'tab') {
      setCurrentTab(result.id);
    }
    
    // Close search results
    closeSearchResults();
  };
  
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="mb-8 bg-white rounded-lg shadow-md overflow-hidden"
      >
        <div className="bg-teal-50 px-4 py-3 border-b border-teal-100 flex justify-between items-center">
          <h2 className="text-lg font-medium text-teal-800">
            Search Results for "{searchQuery}"
          </h2>
          <button
            onClick={closeSearchResults}
            className="text-teal-600 hover:text-teal-800"
            aria-label="Close search results"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        <div className="p-4">
          <p className="text-gray-600 mb-4">
            Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
          </p>
          
          <div className="space-y-3">
            {searchResults.map((result, index) => (
              <motion.div
                key={`${result.type}-${result.id}-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className="p-3 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer"
                onClick={() => handleResultClick(result)}
              >
                <div className="flex items-start">
                  {/* Icon based on result type */}
                  <div className="mr-3 mt-0.5">
                    {result.type === 'phase' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm10-3a1 1 0 11-2 0 1 1 0 012 0zM8 10a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-9 1a1 1 0 100-2 1 1 0 000 2z" />
                      </svg>
                    ) : result.type === 'tab' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                        <path d="M3 8a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-900">{result.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{result.excerpt}</p>
                    <div className="mt-1 text-xs text-gray-500">
                      {result.type === 'phase' ? 'Phase' : result.type === 'tab' ? 'Reference Tab' : 'Content'}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
