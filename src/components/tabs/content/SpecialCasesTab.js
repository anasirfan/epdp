import { useAppContext } from '../../../context/AppContext';
import { motion } from 'framer-motion';

export default function SpecialCasesTab() {
  const { language } = useAppContext();
  
  // Animation variants
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
  
  // Special case data
  const specialCases = [
    {
      id: 'fast-track',
      title: language === 'en' ? 'Fast Track Projects' : '快速通道项目',
      description: language === 'en'
        ? 'For urgent market opportunities or critical customer needs requiring accelerated development.'
        : '针对需要加速开发的紧急市场机会或关键客户需求。',
      modifications: [
        language === 'en' ? 'Combined decision gates (DG1+DG2, DG3+DG4)' : '合并决策门（DG1+DG2，DG3+DG4）',
        language === 'en' ? 'Parallel activities across phases' : '跨阶段的并行活动',
        language === 'en' ? 'Focused scope with minimal feature set' : '专注于最小功能集的范围',
        language === 'en' ? 'Dedicated cross-functional team' : '专门的跨职能团队'
      ],
      requirements: [
        language === 'en' ? 'Executive sponsor approval' : '执行赞助人批准',
        language === 'en' ? 'Documented risk assessment' : '记录的风险评估',
        language === 'en' ? 'Critical quality criteria must still be met' : '仍必须满足关键质量标准',
        language === 'en' ? 'Post-launch review mandatory' : '强制进行上市后审查'
      ]
    },
    {
      id: 'variant',
      title: language === 'en' ? 'Product Variants' : '产品变体',
      description: language === 'en'
        ? 'For modifications to existing products with minimal changes to core design or architecture.'
        : '针对对核心设计或架构进行最小更改的现有产品的修改。',
      modifications: [
        language === 'en' ? 'Start at Phase 2 or 3' : '从第2或第3阶段开始',
        language === 'en' ? 'Simplified concept phase' : '简化的概念阶段',
        language === 'en' ? 'Focus on delta validation only' : '仅关注差异验证',
        language === 'en' ? 'Leverage existing documentation' : '利用现有文档'
      ],
      requirements: [
        language === 'en' ? 'Baseline product must be fully documented' : '基准产品必须完全记录',
        language === 'en' ? 'Change impact analysis required' : '需要变更影响分析',
        language === 'en' ? 'Regression testing plan' : '回归测试计划',
        language === 'en' ? 'Clear documentation of differences' : '明确记录差异'
      ]
    },
    {
      id: 'research',
      title: language === 'en' ? 'Research & Exploration Projects' : '研究与探索项目',
      description: language === 'en'
        ? 'For new technology exploration or innovation projects with high uncertainty and learning objectives.'
        : '针对具有高度不确定性和学习目标的新技术探索或创新项目。',
      modifications: [
        language === 'en' ? 'Iterative approach with multiple cycles' : '具有多个周期的迭代方法',
        language === 'en' ? 'Focus on Phases 1-3 only' : '仅关注第1-3阶段',
        language === 'en' ? 'Learning objectives replace production KPIs' : '学习目标取代生产KPI',
        language === 'en' ? 'Flexible timeline and scope' : '灵活的时间表和范围'
      ],
      requirements: [
        language === 'en' ? 'Clear learning objectives defined' : '明确定义的学习目标',
        language === 'en' ? 'Regular knowledge sharing sessions' : '定期知识共享会议',
        language === 'en' ? 'Comprehensive documentation of findings' : '全面记录发现',
        language === 'en' ? 'Technology transfer plan if successful' : '如果成功，技术转移计划'
      ]
    },
    {
      id: 'compliance',
      title: language === 'en' ? 'Compliance-Driven Projects' : '合规驱动项目',
      description: language === 'en'
        ? 'For projects primarily driven by regulatory changes, safety updates, or compliance requirements.'
        : '针对主要由法规变更、安全更新或合规要求驱动的项目。',
      modifications: [
        language === 'en' ? 'Enhanced documentation requirements' : '增强的文档要求',
        language === 'en' ? 'Additional verification and validation' : '额外的验证和确认',
        language === 'en' ? 'Regulatory/compliance experts involved' : '涉及监管/合规专家',
        language === 'en' ? 'Formal approval gates with legal review' : '具有法律审查的正式批准门'
      ],
      requirements: [
        language === 'en' ? 'Compliance requirements clearly documented' : '明确记录的合规要求',
        language === 'en' ? 'Traceability matrix mandatory' : '强制使用可追溯性矩阵',
        language === 'en' ? 'Third-party certification if required' : '如果需要，第三方认证',
        language === 'en' ? 'Formal compliance sign-off' : '正式合规签字'
      ]
    }
  ];
  
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        {language === 'en' ? 'Special Cases & Adaptations' : '特殊情况和适应'}
      </h2>
      <p className="mb-6 text-gray-700">
        {language === 'en' 
          ? 'While the standard EPDP process applies to most projects, certain situations require adaptations. These special cases maintain the core principles while adjusting specific requirements to fit unique project needs.'
          : '虽然标准EPDP流程适用于大多数项目，但某些情况需要调整。这些特殊情况保持核心原则，同时调整特定要求以适应独特的项目需求。'}
      </p>
      
      <motion.div 
        className="space-y-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {specialCases.map((specialCase) => (
          <motion.div 
            key={specialCase.id}
            variants={item}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
          >
            <div className="bg-teal-50 px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-teal-800">{specialCase.title}</h3>
              <p className="mt-1 text-gray-600">{specialCase.description}</p>
            </div>
            
            <div className="px-6 py-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    {language === 'en' ? 'Process Modifications' : '流程修改'}
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {specialCase.modifications.map((mod, index) => (
                      <li key={index}>{mod}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    {language === 'en' ? 'Requirements' : '要求'}
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {specialCase.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                {language === 'en'
                  ? 'Approval required: Document any deviations from standard process.'
                  : '需要批准：记录与标准流程的任何偏差。'}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-md">
        <h3 className="font-medium text-yellow-800">
          {language === 'en' ? 'Important Note' : '重要提示'}
        </h3>
        <p className="mt-1 text-gray-700">
          {language === 'en'
            ? 'All special case adaptations must be approved by the appropriate governance level. Documentation of process modifications and their justification is mandatory for audit purposes.'
            : '所有特殊情况适应必须由适当的治理级别批准。必须记录流程修改及其理由，以供审计之用。'}
        </p>
      </div>
    </div>
  );
}
