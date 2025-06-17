import { useAppContext } from '../../context/AppContext';
import PhaseSection from './PhaseSection';
import { motion } from 'framer-motion';

export default function PhaseDetails() {
  const { getCurrentPhaseData, currentPhase, t } = useAppContext();
  const phaseData = getCurrentPhaseData();
  
  if (!phaseData) {
    return (
      <section id="detail-view" className="bg-white p-6 rounded-lg shadow-lg min-h-[300px] flex items-center justify-center">
        <p className="text-gray-500 italic">{t.select_phase_prompt}</p>
      </section>
    );
  }
  
  return (
    <motion.section
      id="detail-view"
      className="bg-white p-6 rounded-lg shadow-lg min-h-[300px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{phaseData.title}</h2>
        <p className="text-gray-600 mt-1">{phaseData.subtitle}</p>
      </div>
      
      <div className="mb-6 p-4 bg-gray-50 rounded-md border-l-4 border-teal-500">
        <h3 className="font-semibold text-gray-800">{t.section_objective}</h3>
        <p className="mt-2 text-gray-700">{phaseData.objective}</p>
      </div>
      
      {phaseData.sections && phaseData.sections.map((section, index) => (
        <PhaseSection 
          key={`${currentPhase}-section-${index}`}
          section={section}
          index={index}
        />
      ))}
      
      {phaseData.gate && (
        <div className="mt-8 p-4 bg-yellow-50 rounded-md border-l-4 border-yellow-400">
          <h3 className="font-semibold text-gray-800">{phaseData.gate.name}</h3>
          <p className="mt-2 text-gray-700">{phaseData.gate.purpose}</p>
          <div className="mt-4">
            <button 
              className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors"
              onClick={() => {
                // In a real implementation, you would fetch and display the checklist
                alert(`Checklist for ${phaseData.gate.checklist_ref} would be displayed here`);
              }}
            >
              {t.view_checklist}
            </button>
          </div>
        </div>
      )}
    </motion.section>
  );
}
