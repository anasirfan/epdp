import { useAppContext } from '../../context/AppContext';
import RolesTab from './content/RolesTab';
import GovernanceTab from './content/GovernanceTab';
import SpecialCasesTab from './content/SpecialCasesTab';
import FAQsTab from './content/FAQsTab';
import GlossaryTab from './content/GlossaryTab';
import ChartTab from './content/ChartTab';
import { motion, AnimatePresence } from 'framer-motion';

export default function TabContent() {
  const { currentTab } = useAppContext();
  
  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };
  
  // Render the appropriate tab content based on currentTab
  const renderTabContent = () => {
    switch (currentTab) {
      case 'tab-roles':
        return <RolesTab />;
      case 'tab-governance':
        return <GovernanceTab />;
      case 'tab-special':
        return <SpecialCasesTab />;
      case 'tab-faqs':
        return <FAQsTab />;
      case 'tab-glossary':
        return <GlossaryTab />;
      case 'tab-chart':
        return <ChartTab />;
      default:
        return <div>Tab content not found</div>;
    }
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg min-h-[300px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTab}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.3 }}
        >
          {renderTabContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
