import { useState } from 'react';
import { useAppContext } from '../../context/AppContext';

export default function ProjectUtilities() {
  const { t } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [projectCode, setProjectCode] = useState('');
  const [selectedFolderType, setSelectedFolderType] = useState('');
  const [folderPath, setFolderPath] = useState('');
  const [error, setError] = useState('');
  
  // Mock folder types based on the original app
  const folderTypes = [
    { id: 'product_brief', name: 'Product Brief' },
    { id: 'concept_designs', name: 'Concept Designs' },
    { id: 'preliminary_research', name: 'Preliminary Research' },
    { id: 'lowfi_prototypes', name: 'Low-Fi Prototypes' },
    { id: 'hifi_prototypes', name: 'Hi-Fi Prototypes' },
    { id: 'ppdp', name: 'Pre-Production Design Package (PPDP)' },
    { id: 'supplier_samples', name: 'Supplier Samples' },
    { id: 'trial_production', name: 'Trial Production' },
    { id: 'mass_production', name: 'Mass Production' }
  ];
  
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  
  const generateFolderPath = () => {
    // Reset error state
    setError('');
    
    // Validate inputs
    if (!projectName.trim() || !projectCode.trim()) {
      setError(t.utils_proj_name_code_error);
      return;
    }
    
    if (!selectedFolderType) {
      setError(t.utils_folder_type_error);
      return;
    }
    
    // Generate folder path based on selected type
    let basePath = `\\\\NAS\\Projects\\${projectCode} - ${projectName}`;
    let specificPath = '';
    
    // Map folder types to specific paths
    switch (selectedFolderType) {
      case 'product_brief':
        specificPath = 'Phase 1 - Concept\\01_Product_Brief_Clarifications';
        break;
      case 'concept_designs':
        specificPath = 'Phase 1 - Concept\\03_Conceptual_Designs';
        break;
      case 'preliminary_research':
        specificPath = 'Phase 1 - Concept\\02_Preliminary_Research_Ideation';
        break;
      case 'lowfi_prototypes':
        specificPath = 'Phase 2 - Detailed Design & LowFi Proto\\03_LowFi_Prototypes_and_Iterations';
        break;
      case 'hifi_prototypes':
        specificPath = 'Phase 3 - Refined Design & HiFi Proto\\02_HiFi_Prototypes';
        break;
      case 'ppdp':
        specificPath = 'Phase 3 - Refined Design & HiFi Proto\\04_PPDP_Documentation';
        break;
      case 'supplier_samples':
        specificPath = 'Phase 4 - Sourcing & External Samples\\03_Supplier_Samples';
        break;
      case 'trial_production':
        specificPath = 'Phase 5 - Trial Production & Validation\\02_Trial_Production_Results';
        break;
      case 'mass_production':
        specificPath = 'Phase 6 - Mass Production Launch\\01_Production_Documentation';
        break;
      default:
        specificPath = '';
    }
    
    const fullPath = specificPath ? `${basePath}\\${specificPath}` : basePath;
    setFolderPath(fullPath);
  };
  
  return (
    <details className="util-accordion" open={isOpen}>
      <summary 
        className="font-bold text-lg cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          toggleAccordion();
        }}
      >
        {t.utils_title}
      </summary>
      
      {isOpen && (
        <div id="project-utils" className="util-accordion-content mt-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label 
                htmlFor="project-name" 
                className="block text-sm font-medium text-gray-700" 
                title="Enter the full name of the new project."
              >
                {t.utils_proj_name_label}
              </label>
              <input 
                type="text" 
                id="project-name" 
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder={t.utils_proj_name_placeholder}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" 
                title="Enter the full name of the new project."
              />
            </div>
            <div>
              <label 
                htmlFor="project-code" 
                className="block text-sm font-medium text-gray-700" 
                title="Enter the unique code for the new project."
              >
                {t.utils_proj_code_label}
              </label>
              <input 
                type="text" 
                id="project-code" 
                value={projectCode}
                onChange={(e) => setProjectCode(e.target.value)}
                placeholder={t.utils_proj_code_placeholder}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" 
                title="Enter the unique code for the new project."
              />
            </div>
          </div>
          
          <div className="mt-4">
            <label 
              htmlFor="folder-type-selector" 
              className="block text-sm font-medium text-gray-700"
            >
              {t.utils_folder_type_label}
            </label>
            <select 
              id="folder-type-selector" 
              value={selectedFolderType}
              onChange={(e) => setSelectedFolderType(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md"
            >
              <option value="">-- Select --</option>
              {folderTypes.map(type => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
          
          <div className="mt-4">
            <button 
              id="generate-folder-btn" 
              onClick={generateFolderPath}
              className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors" 
              title="Generate the official folder path based on naming conventions."
            >
              {t.utils_generate_btn}
            </button>
          </div>
          
          {error && (
            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}
          
          {folderPath && (
            <div id="folder-output" className="mt-4 p-3 bg-slate-100 rounded-md text-sm text-gray-800 font-mono break-all">
              {folderPath}
            </div>
          )}
        </div>
      )}
    </details>
  );
}
