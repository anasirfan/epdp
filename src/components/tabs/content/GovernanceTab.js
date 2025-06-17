import { useAppContext } from '../../../context/AppContext';
import { motion } from 'framer-motion';

export default function GovernanceTab() {
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
  
  // Governance structure data
  const governanceStructure = [
    {
      level: language === 'en' ? 'Executive Steering Committee' : '执行指导委员会',
      members: language === 'en' ? 'CEO, CTO, COO, VP of Engineering, VP of Product' : '首席执行官，首席技术官，首席运营官，工程副总裁，产品副总裁',
      responsibilities: language === 'en' 
        ? 'Strategic direction, resource allocation, major project approvals, portfolio management' 
        : '战略方向，资源分配，重大项目批准，产品组合管理',
      frequency: language === 'en' ? 'Quarterly' : '季度'
    },
    {
      level: language === 'en' ? 'Product Development Board' : '产品开发委员会',
      members: language === 'en' ? 'VP of Engineering, VP of Product, Engineering Directors, Product Directors' : '工程副总裁，产品副总裁，工程总监，产品总监',
      responsibilities: language === 'en' 
        ? 'Project prioritization, cross-functional coordination, resource conflicts resolution, decision gate reviews' 
        : '项目优先级排序，跨职能协调，资源冲突解决，决策门审查',
      frequency: language === 'en' ? 'Monthly' : '每月'
    },
    {
      level: language === 'en' ? 'Project Review Team' : '项目审查团队',
      members: language === 'en' ? 'Engineering Manager, Product Manager, Lead Engineer, QC Manager, Production Manager' : '工程经理，产品经理，首席工程师，质控经理，生产经理',
      responsibilities: language === 'en' 
        ? 'Project status reviews, technical issue resolution, decision gate preparation, risk management' 
        : '项目状态审查，技术问题解决，决策门准备，风险管理',
      frequency: language === 'en' ? 'Bi-weekly' : '两周一次'
    },
    {
      level: language === 'en' ? 'Project Team' : '项目团队',
      members: language === 'en' ? 'Product Manager, Lead Engineer, Design Engineers, QC Engineers, Production Engineers' : '产品经理，首席工程师，设计工程师，质控工程师，生产工程师',
      responsibilities: language === 'en' 
        ? 'Day-to-day execution, technical implementation, testing, documentation, issue tracking' 
        : '日常执行，技术实施，测试，文档编制，问题跟踪',
      frequency: language === 'en' ? 'Weekly' : '每周'
    }
  ];
  
  // Escalation process data
  const escalationProcess = [
    {
      step: '1',
      title: language === 'en' ? 'Project Team Resolution' : '项目团队解决',
      description: language === 'en'
        ? 'Attempt to resolve issues within the project team through collaborative problem-solving. Document the issue and proposed solutions.'
        : '尝试通过协作解决问题在项目团队内解决问题。记录问题和提议的解决方案。'
    },
    {
      step: '2',
      title: language === 'en' ? 'Project Review Team Escalation' : '项目审查团队升级',
      description: language === 'en'
        ? 'If unresolved at the project team level, escalate to the Project Review Team. Present the issue, attempted solutions, and impact assessment.'
        : '如果在项目团队级别未解决，升级到项目审查团队。提交问题、尝试的解决方案和影响评估。'
    },
    {
      step: '3',
      title: language === 'en' ? 'Product Development Board Escalation' : '产品开发委员会升级',
      description: language === 'en'
        ? 'For significant issues affecting timeline, budget, or product quality, escalate to the Product Development Board with formal documentation and recommendations.'
        : '对于影响时间表、预算或产品质量的重大问题，通过正式文档和建议升级到产品开发委员会。'
    },
    {
      step: '4',
      title: language === 'en' ? 'Executive Steering Committee Escalation' : '执行指导委员会升级',
      description: language === 'en'
        ? 'Only for critical issues with major business impact that cannot be resolved at lower levels. Requires comprehensive analysis and recommendation package.'
        : '仅适用于无法在较低级别解决的具有重大业务影响的关键问题。需要全面分析和建议包。'
    }
  ];
  
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        {language === 'en' ? 'Governance Structure' : '治理结构'}
      </h2>
      <p className="mb-6 text-gray-700">
        {language === 'en' 
          ? 'The EPDP governance framework ensures proper oversight, decision-making, and accountability throughout the product development lifecycle.'
          : 'EPDP治理框架确保在整个产品开发生命周期中进行适当的监督、决策和问责。'}
      </p>
      
      {/* Governance Structure */}
      <motion.div 
        className="mb-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200">
          {language === 'en' ? 'Governance Levels' : '治理级别'}
        </h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {language === 'en' ? 'Level' : '级别'}
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {language === 'en' ? 'Members' : '成员'}
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {language === 'en' ? 'Responsibilities' : '职责'}
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {language === 'en' ? 'Frequency' : '频率'}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {governanceStructure.map((level, index) => (
                <motion.tr key={index} variants={item}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {level.level}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {level.members}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {level.responsibilities}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {level.frequency}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
      
      {/* Escalation Process */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
      >
        <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200">
          {language === 'en' ? 'Escalation Process' : '升级流程'}
        </h3>
        
        <div className="space-y-4">
          {escalationProcess.map((step, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="flex"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold">
                {step.step}
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900">{step.title}</h4>
                <p className="mt-1 text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Document Control */}
      <motion.div 
        className="mt-8 p-4 bg-gray-50 rounded-md"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <h3 className="text-lg font-semibold mb-2">
          {language === 'en' ? 'Document Control' : '文档控制'}
        </h3>
        <motion.p variants={item} className="text-gray-700">
          {language === 'en' 
            ? 'All EPDP documentation is subject to version control and must be stored in the designated document management system. Changes to baseline documents require appropriate approvals according to the Document Control Procedure.'
            : '所有EPDP文档都受版本控制，必须存储在指定的文档管理系统中。对基准文档的更改需要根据文档控制程序获得适当的批准。'}
        </motion.p>
      </motion.div>
    </div>
  );
}
