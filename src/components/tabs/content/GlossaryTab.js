import { useState } from 'react';
import { useAppContext } from '../../../context/AppContext';

export default function GlossaryTab() {
  const { language } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock glossary data - in a real app, this would come from the context or an API
  const glossaryItems = [
    {
      term: 'EPDP',
      definition: {
        en: 'Engineering & Product Development Procedure - A structured framework for product development from concept to mass production.',
        zh: '工程与产品开发程序 - 从概念到批量生产的产品开发结构化框架。'
      }
    },
    {
      term: 'DG',
      definition: {
        en: 'Decision Gate - A formal checkpoint between phases where specific criteria must be met before proceeding to the next phase.',
        zh: '决策门 - 各阶段之间的正式检查点，必须满足特定标准才能进入下一阶段。'
      }
    },
    {
      term: 'PM',
      definition: {
        en: 'Product Manager - Responsible for overall product strategy, requirements, and business case.',
        zh: '产品经理 - 负责整体产品战略、需求和商业案例。'
      }
    },
    {
      term: 'LE',
      definition: {
        en: 'Lead Engineer - Responsible for technical leadership, architecture decisions, and engineering team coordination.',
        zh: '首席工程师 - 负责技术领导、架构决策和工程团队协调。'
      }
    },
    {
      term: 'DE',
      definition: {
        en: 'Design Engineer - Responsible for detailed product design, specifications, and technical documentation.',
        zh: '设计工程师 - 负责详细产品设计、规格和技术文档。'
      }
    },
    {
      term: 'PPDP',
      definition: {
        en: 'Pre-Production Design Package - Comprehensive documentation set required for manufacturing preparation.',
        zh: '预生产设计包 - 制造准备所需的综合文档集。'
      }
    },
    {
      term: 'QC',
      definition: {
        en: 'Quality Control - Responsible for ensuring product quality through inspections and testing.',
        zh: '质量控制 - 负责通过检查和测试确保产品质量。'
      }
    },
    {
      term: 'RACI',
      definition: {
        en: 'Responsible, Accountable, Consulted, Informed - A matrix defining role involvement in activities.',
        zh: '负责、问责、咨询、知情 - 定义角色在活动中参与程度的矩阵。'
      }
    },
    {
      term: 'DVT',
      definition: {
        en: 'Design Validation Testing - Testing to confirm that product designs meet requirements.',
        zh: '设计验证测试 - 确认产品设计满足要求的测试。'
      }
    },
    {
      term: 'PVT',
      definition: {
        en: 'Production Validation Testing - Testing to confirm that production processes can consistently produce quality products.',
        zh: '生产验证测试 - 确认生产流程能够持续生产优质产品的测试。'
      }
    },
    {
      term: 'ECO',
      definition: {
        en: 'Engineering Change Order - Formal process for implementing and tracking design changes.',
        zh: '工程变更单 - 实施和跟踪设计变更的正式流程。'
      }
    },
    {
      term: 'BOM',
      definition: {
        en: 'Bill of Materials - Comprehensive list of parts, components, and materials required to build a product.',
        zh: '物料清单 - 构建产品所需的零件、组件和材料的综合清单。'
      }
    }
  ];
  
  // Filter glossary items based on search term
  const filteredItems = glossaryItems.filter(item => 
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.definition[language === 'en' ? 'en' : 'zh'].toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        {language === 'en' ? 'Glossary of Terms' : '术语表'}
      </h2>
      <p className="mb-6 text-gray-700">
        {language === 'en' 
          ? 'Common terms and definitions used throughout the EPDP process.'
          : 'EPDP流程中使用的常见术语和定义。'}
      </p>
      
      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={language === 'en' ? 'Search terms...' : '搜索术语...'}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
        />
      </div>
      
      <div className="space-y-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div 
              key={`glossary-${index}`}
              className="bg-white p-4 border border-gray-200 rounded-md hover:shadow-sm transition-shadow"
            >
              <h3 className="font-bold text-teal-700">{item.term}</h3>
              <p className="mt-1 text-gray-700">
                {language === 'en' ? item.definition.en : item.definition.zh}
              </p>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            {language === 'en' 
              ? 'No matching terms found. Try a different search.' 
              : '未找到匹配的术语。尝试不同的搜索。'}
          </div>
        )}
      </div>
    </div>
  );
}
