import { useAppContext } from '../../context/AppContext';
import { motion } from 'framer-motion';

export default function PhaseCard({ phase, index }) {
  const { currentPhase, setCurrentPhase } = useAppContext();
  const isActive = currentPhase === phase.id;
  
  const handleClick = () => {
    setCurrentPhase(phase.id);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`
        phase-card p-4 rounded-lg shadow-sm w-full md:w-40 
        ${isActive ? 'active border-teal-500' : 'hover:shadow-md'}
      `}
      onClick={handleClick}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="text-center">
        <div className="text-sm font-semibold text-teal-600">
          {`Phase ${index + 1}`}
        </div>
        <h3 className="text-base font-bold mt-1">
          {phase.title}
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          {phase.subtitle}
        </p>
      </div>
    </motion.div>
  );
}
