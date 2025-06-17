import { useAppContext } from '../../context/AppContext';
import { motion } from 'framer-motion';

export default function PhaseSection({ section, index }) {
  const { t, selectedRole } = useAppContext();
  
  // Get section title from translations
  const sectionTitle = t[section.title_key] || section.title_key;
  
  // Check if this section should be highlighted based on selected role
  const isRoleHighlighted = (item) => {
    return selectedRole !== 'default' && item.primaryRole === selectedRole.toUpperCase();
  };
  
  // Animation variants for staggered children
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <motion.div 
      className="mb-8"
      initial="hidden"
      animate="show"
      variants={container}
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200">
        {sectionTitle}
      </h3>
      
      {section.type === 'input' || section.type === 'action' ? (
        <div className="space-y-4">
          {section.items.map((item, itemIndex) => (
            <motion.div 
              key={`item-${itemIndex}`}
              className={`p-3 rounded-md ${
                isRoleHighlighted(item) 
                  ? 'bg-green-50 border-l-4 border-green-500' 
                  : 'bg-gray-50'
              }`}
              variants={item}
            >
              <h4 className="font-medium text-gray-900">{item.summary}</h4>
              {item.details && (
                <p 
                  className="mt-1 text-sm text-gray-700"
                  dangerouslySetInnerHTML={{ __html: item.details }}
                />
              )}
              {item.primaryRole && (
                <div className="mt-2 text-xs inline-block px-2 py-1 bg-gray-200 rounded text-gray-700">
                  {item.primaryRole}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      ) : section.type === 'output' ? (
        <ul className="list-disc pl-5 space-y-2">
          {section.items.map((item, itemIndex) => (
            <motion.li 
              key={`output-${itemIndex}`}
              className="text-gray-700"
              variants={item}
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </ul>
      ) : null}
    </motion.div>
  );
}
