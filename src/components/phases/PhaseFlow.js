import { useAppContext } from '../../context/AppContext';
import PhaseCard from './PhaseCard';
import DecisionGate from './DecisionGate';
import { useRef, useEffect } from 'react';

export default function PhaseFlow() {
  const { t, getAllPhases, currentPhase, setCurrentPhase } = useAppContext();
  const phases = getAllPhases();
  const scrollContainerRef = useRef(null);
  
  // Set up carousel scrolling behavior
  useEffect(() => {
    if (currentPhase && scrollContainerRef.current) {
      const activeCard = scrollContainerRef.current.querySelector('.phase-card.active');
      if (activeCard) {
        const container = scrollContainerRef.current;
        const scrollLeft = activeCard.offsetLeft - (container.clientWidth / 2) + (activeCard.clientWidth / 2);
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [currentPhase]);
  
  // Ensure Phase 1 is visible on initial load
  useEffect(() => {
    if (!currentPhase && phases.length > 0) {
      // Set Phase 1 as default if no phase is selected
      setCurrentPhase('phase-1');
    }
  }, [currentPhase, phases, setCurrentPhase]);
  
  return (
    <section id="process-flow" className="mb-12">
      <div className="text-center mb-8" data-aos="fade-up">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          {t.lifecycle_title}
        </h2>
        <p className="mt-2 max-w-3xl mx-auto text-lg text-gray-600">
          {t.lifecycle_subtitle}
        </p>
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex flex-row items-center justify-start space-x-4 overflow-x-auto pb-6 px-4 scroll-smooth"
        style={{ scrollbarWidth: 'thin', scrollbarColor: '#10B981 #F3F4F6' }}
      >
        {phases.map((phase, index) => (
          <div key={phase.id} className="flex flex-row items-center flex-shrink-0">
            <PhaseCard phase={phase} index={index} />
            {/* Only render 5 decision gates after phase 1-5 (i.e., index 0-4) */}
            {index < 5 && (
              <DecisionGate phaseId={phase.id} gateNumber={index + 1} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
