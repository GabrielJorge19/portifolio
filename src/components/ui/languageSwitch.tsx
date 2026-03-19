// import * as Switch from '@radix-ui/react-switch';
import { useLanguages } from '@/context/translationsContext';
import { Languages } from 'lucide-react'; // Você tem lucide-react instalado!

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguages();

  return (
    <div className="flex items-center gap-2 p-1 rounded-full border border-gray-200 dark:border-gray-700">
      <button
        onClick={() => setLanguage('pt')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
          language === 'pt' 
            ? 'bg-blue-500 text-white' 
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
        }`}
      >
        PT
      </button>
      
      <Languages size={18} className="text-gray-400" />
      
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
          language === 'en' 
            ? 'bg-blue-500 text-white' 
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
        }`}
      >
        EN
      </button>
    </div>
  );
}