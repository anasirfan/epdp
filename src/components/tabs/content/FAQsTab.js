import { useState } from 'react';
import { useAppContext } from '../../../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQsTab() {
  const { t, language } = useAppContext();
  const [openFaqId, setOpenFaqId] = useState(null);
  
  // Mock FAQ data - in a real app, this would come from the context or an API
  const faqs = [
    {
      id: 'faq1',
      question: language === 'en' ? 'What is EPDP?' : '什么是EPDP？',
      answer: language === 'en' 
        ? 'EPDP (Engineering & Product Development Procedure) is a structured framework that guides the entire product development lifecycle from concept to mass production. It ensures consistent quality, reduces risks, and improves time-to-market.'
        : 'EPDP（工程与产品开发程序）是一个结构化框架，指导从概念到批量生产的整个产品开发生命周期。它确保一致的质量，降低风险，并改善上市时间。'
    },
    {
      id: 'faq2',
      question: language === 'en' ? 'How do I know which phase I should be in?' : '我如何知道我应该处于哪个阶段？',
      answer: language === 'en'
        ? 'The phase depends on your product\'s maturity level. If you\'re still exploring ideas, you\'re in Phase 1. If you have a concept and are developing detailed designs, you\'re in Phase 2. Refer to the decision gates between phases to determine if you\'re ready to move to the next phase.'
        : '阶段取决于您产品的成熟度。如果您仍在探索想法，则处于第1阶段。如果您有概念并正在开发详细设计，则处于第2阶段。参考各阶段之间的决策门，以确定您是否准备好进入下一阶段。'
    },
    {
      id: 'faq3',
      question: language === 'en' ? 'Can I skip phases?' : '我可以跳过阶段吗？',
      answer: language === 'en'
        ? 'It\'s not recommended to skip phases as each builds upon the previous one. However, for very simple projects or modifications to existing products, some phases might be abbreviated. Consult with your project manager to determine the appropriate approach.'
        : '不建议跳过阶段，因为每个阶段都是建立在前一个阶段的基础上。但是，对于非常简单的项目或对现有产品的修改，某些阶段可能会被缩短。请咨询您的项目经理，以确定适当的方法。'
    },
    {
      id: 'faq4',
      question: language === 'en' ? 'What happens if a decision gate is not passed?' : '如果未通过决策门会怎样？',
      answer: language === 'en'
        ? 'If a decision gate is not passed, the project typically returns to the previous phase to address the identified issues. The team must resolve these issues before attempting to pass the decision gate again. This ensures quality and reduces risks in later phases.'
        : '如果未通过决策门，项目通常会返回到上一阶段以解决已识别的问题。团队必须解决这些问题，然后才能再次尝试通过决策门。这确保了质量并降低了后期阶段的风险。'
    },
    {
      id: 'faq5',
      question: language === 'en' ? 'Who is responsible for maintaining the EPDP documentation?' : '谁负责维护EPDP文档？',
      answer: language === 'en'
        ? 'The Product Manager (PM) is primarily responsible for ensuring EPDP documentation is complete and up-to-date. However, each role contributes specific documentation as outlined in the RACI matrix. The Admin team provides support for document management and archiving.'
        : '产品经理（PM）主要负责确保EPDP文档完整且最新。但是，如RACI矩阵中所述，每个角色都会提供特定的文档。行政团队提供文档管理和归档支持。'
    },
    {
      id: 'faq6',
      question: language === 'en' ? 'How do I handle urgent projects with tight deadlines?' : '如何处理有紧急期限的项目？',
      answer: language === 'en'
        ? 'For urgent projects, you can use the "Fast Track" approach described in the Special Cases tab. This involves parallel activities and combined decision gates, but still requires meeting critical quality criteria. Document any deviations from the standard process and get appropriate approvals.'
        : '对于紧急项目，您可以使用"快速通道"方法，如特殊情况选项卡中所述。这涉及并行活动和合并决策门，但仍需满足关键质量标准。记录与标准流程的任何偏差，并获得适当的批准。'
    }
  ];
  
  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };
  
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{t.tab_faqs}</h2>
      <p className="mb-6 text-gray-700">
        {language === 'en' 
          ? 'Find answers to commonly asked questions about the EPDP process below.'
          : '在下方找到有关EPDP流程的常见问题解答。'}
      </p>
      
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div 
            key={faq.id}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              className={`w-full text-left px-4 py-3 flex justify-between items-center focus:outline-none ${
                openFaqId === faq.id ? 'bg-teal-50' : 'hover:bg-gray-50'
              }`}
              onClick={() => toggleFaq(faq.id)}
            >
              <span className="font-medium">{faq.question}</span>
              <svg
                className={`w-5 h-5 transition-transform ${
                  openFaqId === faq.id ? 'transform rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            
            <AnimatePresence>
              {openFaqId === faq.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-4 py-3 bg-white border-t border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
