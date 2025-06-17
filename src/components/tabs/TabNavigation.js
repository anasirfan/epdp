import { useAppContext } from '../../context/AppContext';

export default function TabNavigation() {
  const { t, currentTab, setCurrentTab } = useAppContext();
  
  const tabs = [
    { id: 'tab-roles', label: t.tab_roles },
    { id: 'tab-governance', label: t.tab_governance },
    { id: 'tab-special', label: t.tab_special },
    { id: 'tab-faqs', label: t.tab_faqs },
    { id: 'tab-glossary', label: t.tab_glossary },
    { id: 'tab-chart', label: t.tab_chart }
  ];
  
  return (
    <nav className="-mb-px flex space-x-6 overflow-x-auto" aria-label="Tabs">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => setCurrentTab(tab.id)}
          className={`
            tab-button whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm
            ${currentTab === tab.id 
              ? 'border-teal-500 text-teal-700' 
              : 'border-transparent hover:border-gray-300 hover:text-gray-700'}
          `}
          aria-current={currentTab === tab.id ? 'page' : undefined}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
