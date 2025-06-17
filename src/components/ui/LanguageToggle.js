import { useAppContext } from '../../context/AppContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useAppContext();
  
  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium text-white">EN</span>
      <label 
        htmlFor="language-toggle" 
        className="relative inline-block w-[80px] h-[34px] cursor-pointer" 
        title="Switch between English and Chinese"
      >
        <input 
          type="checkbox" 
          id="language-toggle" 
          className="opacity-0 w-0 h-0"
          checked={language === 'cn'}
          onChange={toggleLanguage}
        />
        <span className={`
          absolute top-0 left-0 right-0 bottom-0 
          ${language === 'cn' ? 'bg-teal-500' : 'bg-gray-300'} 
          rounded-full transition-colors duration-200 ease-in-out
          before:absolute before:content-[''] before:h-[26px] before:w-[26px] 
          before:left-[4px] before:bottom-[4px] before:bg-white before:rounded-full
          before:transition-transform before:duration-200 before:ease-in-out
          ${language === 'cn' ? 'before:transform before:translate-x-[46px]' : ''}
        `}></span>
      </label>
      <span className="text-sm font-medium text-white">CN</span>
    </div>
  );
}
