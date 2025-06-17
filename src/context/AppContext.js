import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, getAllPhases, getPhaseData } from '../data/data';

// Create the context
const AppContext = createContext();

// Custom hook for using the context
export const useAppContext = () => useContext(AppContext);

// Provider component
export const AppProvider = ({ children }) => {
  // State variables
  const [language, setLanguage] = useState('en');
  const [currentPhase, setCurrentPhase] = useState(null);
  const [currentTab, setCurrentTab] = useState('tab-roles');
  const [selectedRole, setSelectedRole] = useState('default');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Effect to initialize the app
  useEffect(() => {
    // Set default phase if none is selected
    if (!currentPhase) {
      const phases = getAllPhases(language);
      if (phases.length > 0) {
        setCurrentPhase(phases[0].id);
      }
    }
  }, [currentPhase, language]);

  // Function to toggle language
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'cn' : 'en');
  };

  // Function to open modal with specific content
  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  // Function to perform search
  const performSearch = (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    // Implement search logic here
    // This is a simplified version - in a real app, you'd search through all content
    const results = [];
    const allPhases = getAllPhases(language);
    
    allPhases.forEach(phase => {
      const phaseData = getPhaseData(phase.id, language);
      if (phaseData) {
        if (
          phaseData.title.toLowerCase().includes(query.toLowerCase()) ||
          phaseData.subtitle.toLowerCase().includes(query.toLowerCase()) ||
          phaseData.objective.toLowerCase().includes(query.toLowerCase())
        ) {
          results.push({
            type: 'phase',
            id: phase.id,
            title: phaseData.title,
            subtitle: phaseData.subtitle
          });
        }
        
        // Search through sections
        phaseData.sections?.forEach(section => {
          section.items?.forEach(item => {
            if (
              (typeof item === 'string' && item.toLowerCase().includes(query.toLowerCase())) ||
              (item.summary && item.summary.toLowerCase().includes(query.toLowerCase())) ||
              (item.details && item.details.toLowerCase().includes(query.toLowerCase()))
            ) {
              results.push({
                type: 'section-item',
                phaseId: phase.id,
                phaseTitle: phaseData.title,
                sectionType: section.type,
                item: item
              });
            }
          });
        });
      }
    });
    
    setSearchResults(results);
  };

  // Function to close search results
  const closeSearchResults = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  // Context value
  const contextValue = {
    // State
    language,
    currentPhase,
    currentTab,
    selectedRole,
    isModalOpen,
    modalContent,
    searchQuery,
    searchResults,
    
    // Translations
    t: translations[language],
    
    // Actions
    setLanguage,
    toggleLanguage,
    setCurrentPhase,
    setCurrentTab,
    setSelectedRole,
    openModal,
    closeModal,
    setSearchQuery,
    performSearch,
    closeSearchResults,
    
    // Data access helpers
    getCurrentPhaseData: () => currentPhase ? getPhaseData(currentPhase, language) : null,
    getAllPhases: () => getAllPhases(language)
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
