import { useAppContext } from '../../context/AppContext';
import { motion } from 'framer-motion';
import { getPhaseData, decisionGateChecklists } from '../../data/data';

import React, { useState } from 'react';

function Accordion({ items }) {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleIndex = (idx) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="divide-y divide-gray-200">
      {items.map((item, idx) => (
        <div key={idx}>
          <button
            type="button"
            className="w-full text-left py-3 px-2 focus:outline-none flex items-center justify-between group"
            onClick={() => toggleIndex(idx)}
            aria-expanded={openIndexes.includes(idx)}
          >
            <span className="font-medium text-gray-900 group-hover:text-teal-600 transition-colors">
              {item.summary}
            </span>
            <svg
              className={`ml-2 h-4 w-4 transform transition-transform ${openIndexes.includes(idx) ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndexes.includes(idx) && (
            <div className="px-4 pb-3 text-gray-700 text-sm animate-fade-in">
              {item.details}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function DecisionGate({ phaseId, gateNumber }) {
  const { openModal, t, language } = useAppContext();
  
  // Get the decision gate data based on phase ID
  const handleGateClick = () => {
    const phaseData = getPhaseData(phaseId, language);
    
    if (!phaseData || !phaseData.gate) {
      return; // No gate data for this phase
    }
    
    const { gate } = phaseData;
    const checklistRef = gate.checklist_ref;
    const checklistItems = (decisionGateChecklists && decisionGateChecklists[language] && decisionGateChecklists[language][checklistRef]) || [];
    
    const modalContent = (
      <div>
        <h3 className="text-xl font-bold mb-4">
          {gate.name}
        </h3>
        <p className="mb-4">
          {gate.purpose}
        </p>
        <div className="border-t pt-4 mt-4">
          {checklistItems.length > 0 ? (
            <Accordion items={checklistItems} />
          ) : (
            <p className="text-gray-500">
              {language === 'en' ? 'No checklist items available.' : '没有可用的检查清单项目。'}
            </p>
          )}
        </div>
      </div>
    );
    openModal(modalContent);
  };
  
  return (
    <div className="flex items-center justify-center mx-2 my-4 md:my-0">
      <motion.div
        className="gate pm-gate flex items-center justify-center cursor-pointer"
        onClick={handleGateClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="gate-text font-semibold">DG{gateNumber}</span>
      </motion.div>
    </div>
  );
}
