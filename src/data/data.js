// Comprehensive data file for EPDP Next.js application
// Contains translations, phase data, and chart data
export  const translations = {
    en: {
        header_subtitle: 'Engineering & Product Development Procedure (EPDP) V2.0',
        live_process: 'Live Process',
        utils_title: 'Project Utilities & NAS Folder Generator',
        utils_proj_name_label: 'Project Name',
        utils_proj_name_placeholder: 'e.g., Universal Pendant System',
        utils_proj_code_label: 'Project Code',
        utils_proj_code_placeholder: 'e.g., P001',
        utils_generate_btn: 'Generate NAS Folder Path',
        utils_folder_type_label: 'Select Deliverable/Folder Type for this Phase',
        utils_proj_name_code_error: 'Please enter a valid Project Name and Project Code.',
        utils_folder_type_error: 'Please select a Deliverable/Folder Type.',
        search_placeholder: 'Search',
        lifecycle_title: 'The Product Development Lifecycle',
        lifecycle_phase: 'Phase',
        lifecycle_subtitle: 'An interactive guide to the Limi Lighting EPDP. Click any phase or decision gate to explore details. This process is mandatory for all new product development and significant updates.',
        inputs_section_title: 'Inputs for this Step/Phase',
        activities_section_title: 'Key Activities',
        outputs_section_title: 'Outputs & Deliverables',
        view_checklist: 'View DG Checklist',
        modal_close_btn: 'Close',
        go_back_btn: 'Go Back',
        role_select_label: 'Select Your Role to Highlight Responsibilities',
        role_default: 'Default Process View',
        role_pm: 'Product Manager (Umer)',
        role_le: 'Lead Engineer (Mark)',
        role_de: 'Design Engineer(s)',
        role_purchasing: 'Purchasing Lead',
        role_production: 'Production Lead',
        role_qc: 'QC Lead',
        role_admin: 'Admin Lead (Cherry/Karen)',
        role_pm_desc: 'Owns product vision, business case, market requirements, and is the final approver at all Decision Gates.',
        role_le_desc: 'Accountable for technical design, engineering execution, internal validation, and creation of the PPDP.',
        role_de_desc: 'Executes specific engineering tasks (CAD, prototyping, testing) under LE guidance.',
        role_purchasing_desc: 'Owns supplier sourcing, RFQs, sample POs, and external sample validation based on approved PPDP.',
        role_production_desc: 'Owns trial production, final assembly SOPs, and mass production readiness.',
        role_qc_desc: 'Owns quality standards, develops ITPs, conducts FAI, and manages QC for samples & production.',
        role_admin_desc: 'Ensures EPDVP process adherence, document control, meeting facilitation, and NAS audits.',
        phase_1_name: 'Concept & Feasibility',        phase_1_tag: 'Define Vision & Validate Idea',
        phase_2_name: 'Detailed Design & Low-Fi Proto', phase_2_tag: 'Develop & Test Concept',
        phase_3_name: 'Refined Design & Hi-Fi Proto',  phase_3_tag: 'Finalize & Prove Design (PPDP)',
        phase_4_name: 'Sourcing & External Samples',  phase_4_tag: 'Supplier Engagement (Purchasing)',
        phase_5_name: 'Trial Production & Validation', phase_5_tag: 'Prove Production Process',
        phase_6_name: 'Mass Production Launch',       phase_6_tag: 'Scale & Monitor',
        phase_7_name: 'Post-Launch & Improvement',  phase_7_tag: 'Learn & Iterate',
        tab_roles: 'RACI & Roles',
        tab_governance: 'Governance & Docs',
        tab_special: 'Special Cases',
        tab_faqs: 'FAQs',
        tab_glossary: 'Glossary & Links',
        tab_chart: 'Phase Effort',
        section_objective: "Objective",
        section_input: "Input",
        section_action_pm: "Action (Product Manager)",
        section_action_le: "Action (Lead Engineer)",
        section_action_eng_team: "Action (Engineering Team)",
        section_action_purchasing: "Action (Purchasing Lead)",
        section_action_production: "Action (Production Lead)",
        section_action_qc: "Action (QC Lead)",
        section_action_admin: "Action (Admin Lead)",
        section_output: "Output",
        responsible: "Responsible",
        accountable: "Accountable",
        consulted: "Consulted",
        informed: "Informed",
        select_phase_prompt: "Select a phase above to see details.",
        no_deliverables_for_path: "No specific deliverables for path generation in this phase."
    },
    cn: {
        header_subtitle: '工程与产品开发流程 (EPDP) V2.0',
        live_process: '流程已激活 (强制执行)',
        utils_title: '项目工具与NAS文件夹生成器',
        utils_proj_name_label: '项目名称',
        utils_proj_name_placeholder: '例如, 通用吊灯系统',
        utils_proj_code_label: '项目代码',
        utils_proj_code_placeholder: '例如, P001',
        utils_generate_btn: '生成NAS文件夹路径',
        utils_folder_type_label: '选择此阶段的交付成果/文件夹类型',
        utils_proj_name_code_error: '请输入有效的项目名称和项目代码。',
        utils_folder_type_error: '请选择一个交付成果/文件夹类型。',
        search_placeholder: '搜索',
        lifecycle_title: '产品开发生命周期',
        lifecycle_phase: '阶段',
        lifecycle_subtitle: 'Limi Lighting EPDP 交互指南。点击任何阶段或决策门以了解详情。此流程对所有新产品开发和重大更新具有强制性。',
        inputs_section_title: '此步骤/阶段的输入',
        activities_section_title: '关键活动',
        outputs_section_title: '输出与交付成果',
        view_checklist: '查看决策门清单',
        modal_close_btn: '关闭',
        go_back_btn: '返回',
        role_select_label: '选择您的角色以突出显示职责',
        role_default: '默认流程视图',
        role_pm: '产品经理 (Umer)',
        role_le: '首席工程师 (Mark)',
        role_de: '设计工程师',
        role_purchasing: '采购主管',
        role_production: '生产主管',
        role_qc: '品控主管',
        role_admin: '行政主管 (Cherry/Karen)',
        role_pm_desc: '负责产品愿景、商业论证、市场需求，并在所有决策门拥有最终批准权。',
        role_le_desc: '负责技术设计、工程执行、内部验证及PPDP的创建。',
        role_de_desc: '在首席工程师指导下执行具体的工程任务（CAD、原型、测试）。',
        role_purchasing_desc: '负责供应商开发、询价、样品采购订单及基于批准PPDP的外部样品验证。',
        role_production_desc: '负责试生产、最终装配SOP及量产准备。',
        role_qc_desc: '负责质量标准、制定ITP、执行FAI及样品和生产的品控管理。',
        role_admin_desc: '确保EPDP流程的遵守、文件管控、会议协调及NAS审计。',
        phase_1_name: '概念与可行性',        phase_1_tag: '定义愿景与验证想法',
        phase_2_name: '详细设计与低保真原型', phase_2_tag: '开发与测试概念',
        phase_3_name: '精细设计与高保真原型',  phase_3_tag: '定型与验证设计 (PPDP)',
        phase_4_name: '寻源与外部样品',  phase_4_tag: '供应商对接 (采购主导)',
        phase_5_name: '试生产与流程验证', phase_5_tag: '验证生产流程',
        phase_6_name: '量产启动',       phase_6_tag: '规模化与监控',
        phase_7_name: '上市后与持续改进',  phase_7_tag: '学习与迭代',
        tab_roles: 'RACI与角色职责',
        tab_governance: '治理与文档规范',
        tab_special: '特殊情况处理',
        tab_faqs: '常见问题解答',
        tab_glossary: '术语表与文档链接',
        tab_chart: '阶段投入分析',
        section_objective: "目标",
        section_input: "输入",
        section_action_pm: "行动 (产品经理)",
        section_action_le: "行动 (首席工程师)",
        section_action_eng_team: "行动 (工程团队)",
        section_action_purchasing: "行动 (采购主管)",
        section_action_production: "行动 (生产主管)",
        section_action_qc: "行动 (品控主管)",
        section_action_admin: "行动 (行政主管)",
        section_output: "输出",
        responsible: "负责 (R)",
        accountable: "批准/当责 (A)",
        consulted: "咨询 (C)",
        informed: "知会 (I)",
        select_phase_prompt: "请选择以上阶段以查看详情。",
        no_deliverables_for_path: "此阶段无特定交付成果可供路径生成。"
    }
};
export const fullTabContentData = {
    roles: {
        en: `<h3 class="text-xl font-bold mb-4" data-lang="tab_roles"></h3><p class="mb-6 text-gray-600">Click a role card to filter the RACI matrix and see their primary responsibilities within each phase. (R=Responsible, A=Accountable, C=Consulted, I=Informed)</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6" id="role-card-container">
            <div class="role-card border-2 p-4 rounded-lg" data-role="PM"><h4 class="font-bold text-teal-700" data-lang="role_pm"></h4><p class="text-sm text-gray-600" data-lang="role_pm_desc"></p></div>
            <div class="role-card border-2 p-4 rounded-lg" data-role="LE"><h4 class="font-bold text-teal-700" data-lang="role_le"></h4><p class="text-sm text-gray-600" data-lang="role_le_desc"></p></div>
            <div class="role-card border-2 p-4 rounded-lg" data-role="DE"><h4 class="font-bold text-teal-700" data-lang="role_de"></h4><p class="text-sm text-gray-600" data-lang="role_de_desc"></p></div>
            <div class="role-card border-2 p-4 rounded-lg" data-role="PURCHASING"><h4 class="font-bold text-teal-700" data-lang="role_purchasing"></h4><p class="text-sm text-gray-600" data-lang="role_purchasing_desc"></p></div>
            <div class="role-card border-2 p-4 rounded-lg" data-role="PRODUCTION"><h4 class="font-bold text-teal-700" data-lang="role_production"></h4><p class="text-sm text-gray-600" data-lang="role_production_desc"></p></div>
            <div class="role-card border-2 p-4 rounded-lg" data-role="QC"><h4 class="font-bold text-teal-700" data-lang="role_qc"></h4><p class="text-sm text-gray-600" data-lang="role_qc_desc"></p></div>
            <div class="role-card border-2 p-4 rounded-lg" data-role="ADMIN"><h4 class="font-bold text-teal-700" data-lang="role_admin"></h4><p class="text-sm text-gray-600" data-lang="role_admin_desc"></p></div>
        </div>
        <div class="overflow-x-auto"><table id="raci-table" class="min-w-full w-full bg-white border border-gray-200 text-sm"><thead><tr class="bg-gray-100"><th class="py-2 px-3 text-left font-semibold sticky left-0 z-20 bg-gray-100">Activity/Deliverable (EPDVP Ref)</th><th class="py-2 px-3 text-center font-semibold" data-lang="role_pm" title="${translations.en.role_pm_desc}"></th><th class="py-2 px-3 text-center font-semibold" data-lang="role_le" title="${translations.en.role_le_desc}"></th><th class="py-2 px-3 text-center font-semibold" data-lang="role_de" title="${translations.en.role_de_desc}"></th><th class="py-2 px-3 text-center font-semibold" data-lang="role_purchasing" title="${translations.en.role_purchasing_desc}"></th><th class="py-2 px-3 text-center font-semibold" data-lang="role_production" title="${translations.en.role_production_desc}"></th><th class="py-2 px-3 text-center font-semibold" data-lang="role_qc" title="${translations.en.role_qc_desc}"></th><th class="py-2 px-3 text-center font-semibold" data-lang="role_admin" title="${translations.en.role_admin_desc}"></th></tr></thead><tbody>
        </tbody></table></div>`,
        cn: `<h3 class="text-xl font-bold mb-4" data-lang="tab_roles"></h3><p class="mb-6 text-gray-600">点击角色卡片以筛选RACI矩阵并查看其在各阶段的主要职责。(R=负责, A=批准/当责, C=咨询, I=知会)</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6" id="role-card-container">
            <div class="role-card border-2 p-4 rounded-lg" data-role="PM"><h4 class="font-bold text-teal-700" data-lang="role_pm"></h4><p class="text-sm text-gray-600" data-lang="role_pm_desc"></p></div>
            <div class="role-card border-2 p-4 rounded-lg" data-role="LE"><h4 class="font-bold text-teal-700" data-lang="role_le"></h4><p class="text-sm text-gray-600" data-lang="role_le_desc"></p></div>
            <div class="role-card border-2 p-4 rounded-lg" data-role="DE"><h4 class="font-bold text-teal-700" data-lang="role_de"></h4><p class="text-sm text-gray-600" data-lang="role_de_desc"></p></div>
            <div class="role-card border-2 p-4 rounded-lg" data-role="PURCHASING"><h4 class="font-bold text-teal-700" data-lang="role_purchasing"></h4><p class="text-sm text-gray-600" data-lang="role_purchasing_desc"></p></div>
            <div class="role-card border-2 p-4 rounded-lg" data-role="PRODUCTION"><h4 class="font-bold text-teal-700" data-lang="role_production"></h4><p class="text-sm text-gray-600" data-lang="role_production_desc"></p></div>
            <div class="role-card border-2 p-4 rounded-lg" data-role="QC"><h4 class="font-bold text-teal-700" data-lang="role_qc"></h4><p class="text-sm text-gray-600" data-lang="role_qc_desc"></p></div>
            <div class="role-card border-2 p-4 rounded-lg" data-role="ADMIN"><h4 class="font-bold text-teal-700" data-lang="role_admin"></h4><p class="text-sm text-gray-600" data-lang="role_admin_desc"></p></div>
        </div>
        <div class="overflow-x-auto"><table id="raci-table" class="min-w-full w-full bg-white border border-gray-200 text-sm"><thead><tr class="bg-gray-100"><th class="py-2 px-3 text-left font-semibold sticky left-0 z-20 bg-gray-100">活动/交付成果 (EPDVP参考)</th><th class="py-2 px-3 text-center font-semibold" data-lang="role_pm" title="${translations.cn.role_pm_desc}"></th><th class="py-2 px-3 text-center font-semibold" data-lang="role_le" title="${translations.cn.role_le_desc}"></th><th class="py-2 px-3 text-center font-semibold" data-lang="role_de" title="${translations.cn.role_de_desc}"></th><th class="py-2 px-3 text-center font-semibold" data-lang="role_purchasing" title="${translations.cn.role_purchasing_desc}"></th><th class="py-2 px-3 text-center font-semibold" data-lang="role_production" title="${translations.cn.role_production_desc}"></th><th class="py-2 px-3 text-center font-semibold" data-lang="role_qc" title="${translations.cn.role_qc_desc}"></th><th class="py-2 px-3 text-center font-semibold" data-lang="role_admin" title="${translations.cn.role_admin_desc}"></th></tr></thead><tbody>
        </tbody></table></div>`
    },
    governance: {
        en: `<h3 class="text-xl font-bold mb-4" data-lang="tab_governance"></h3><p class="mb-6 text-gray-600">To ensure consistency, clarity, and traceability, all project documentation must adhere to the following governance standards. This rigid structure is essential for maintaining order and preventing file management chaos, which has been a significant issue in the past.</p><div class="space-y-6"><div><h4 class="sub-section-title">1. Mandatory NAS Folder Architecture</h4><p class="text-sm text-gray-600">All projects MUST use the standardized folder structure on the NAS server. This is not optional. The root for all development projects is <span class="nas-path">\\Limi_NAS\\Projects\\</span>. Folder names must be in English for universal accessibility.</p><p class="text-sm text-gray-600 mt-2">The structure for each project is: <span class="nas-path">[Project_Code]_[Project_Name_Unserscored]\\</span></p><p class="text-sm text-gray-600">Within this, phase folders are numbered and named (example for Phase 1):</p><ul class="list-disc list-inside text-sm mt-1 pl-4"><li><span class="nas-path">1_Concept_Feasibility\\</span></li><li class="ml-4"><span class="nas-path">01_Product_Brief_Clarifications\\</span></li><li class="ml-4"><span class="nas-path">02_Preliminary_Research_Ideation\\</span></li><li class="ml-4"><span class="nas-path">03_Conceptual_Designs\\</span></li><li class="ml-4"><span class="nas-path">04_Concept_Selection_Notes\\</span></li></ul><p class="text-sm text-gray-600 mt-1">This pattern continues for all phases. The "Project Utilities & NAS Folder Generator" tool above can assist in creating correct paths for deliverables. The Admin Lead (Cherry/Karen) is responsible for periodic audits of NAS structure adherence.</p></div><div><h4 class="sub-section-title">2. Strict File Naming Conventions</h4><p class="text-sm text-gray-600">Mandatory format: <span class="nas-path">[Project_Code]_[Document_Abbreviation]_[Version]_[YYYYMMDD].[ext]</span></p><p class="text-sm text-gray-600 mt-1">Examples:</p><ul class="list-disc list-inside text-sm mt-1 pl-4"><li>Product Brief Clarifications: <span class="nas-path">P001_PBC_V1.0_20250620.docx</span></li><li>Concept Selection Notes: <span class="nas-path">P001_CSN_V1.0_20250625.docx</span></li><li>Detailed CAD Model (Part): <span class="nas-path">P001_CAD_Housing_V1.1_20250710.sldprt</span></li><li>PPDP Package (Zip): <span class="nas-path">P001_PPDP_V1.0_20250815.zip</span></li></ul><p class="text-sm text-gray-600 mt-1">A full list of official Document Abbreviations will be maintained in the Glossary tab. Adherence is mandatory and will be audited.</p></div><div><h4 class="sub-section-title">3. Engineering Change Order (ECO) Process</h4><p class="text-sm text-gray-600">Any change to a design *after* its primary design phase's Decision Gate approval (especially after DG2 Design Freeze for core concept, or DG3 for PPDP components) MUST follow the formal ECO process. This is critical for change control and traceability.</p><p class="text-sm text-gray-600 mt-1">ECO Process Steps: Request Form Submission -> Technical & Commercial Impact Analysis (LE & PM) -> ECO Review Board (PM, LE, relevant stakeholders) Approval/Rejection -> Implementation & Documentation Update (if approved) -> Communication to all affected parties.</p><p class="text-sm text-gray-600 mt-1">The ECO Form Template is available in the Glossary & Links tab. ECOs are tracked and stored in <span class="nas-path">[Project_Code]_[Project_Name_Unserscored]\\ECOs\\</span>.</p></div><div><h4 class="sub-section-title">4. Version Control</h4><p class="text-sm text-gray-600">All key design documents (CAD files, 2D drawings, BOMs, specifications) must be version controlled. Major versions (V1.0, V2.0) signify approved releases after a Decision Gate. Minor versions (V1.1, V1.2) signify iterations within a phase or post-ECO updates. File names must reflect the correct version. Old versions should be archived in a subfolder named "_Archive" within the document's directory, not deleted.</p></div><div><h4 class="sub-section-title">5. Document Templates & Checklists</h4><p class="text-sm text-gray-600">Mandatory use of official Limi Lighting templates for all key EPDVP documents (PBFR, PPDP components, Test Reports, ECOs, etc.) and Decision Gate Checklists. Templates are linked in the Glossary & Links tab. Completed checklists must be signed and stored in the relevant Decision Gate folder in NAS.</p></div></div>`,
        cn: `<h3 class="text-xl font-bold mb-4" data-lang="tab_governance"></h3><p class="mb-6 text-gray-600">为确保一致性、清晰性和可追溯性，所有项目文档必须遵守以下治理标准。这种严格的结构对于维护秩序和防止过去严重的文件管理混乱至关重要。</p><div class="space-y-6"><div><h4 class="sub-section-title">1. 强制性NAS文件夹架构</h4><p class="text-sm text-gray-600">所有项目都必须使用NAS服务器上的标准化文件夹结构。这不是可选项。所有开发项目的根目录是 <span class="nas-path">\\Limi_NAS\\Projects\\</span>。为确保通用可访问性，文件夹名称必须使用英文。</p><p class="text-sm text-gray-600 mt-2">每个项目的结构是：<span class="nas-path">[项目代码]_[项目名称_下划线连接]\\</span></p><p class="text-sm text-gray-600">在此结构内，阶段文件夹按编号和名称组织（以阶段1为例）：</p><ul class="list-disc list-inside text-sm mt-1 pl-4"><li><span class="nas-path">1_Concept_Feasibility\\</span> (概念与可行性)</li><li class="ml-4"><span class="nas-path">01_Product_Brief_Clarifications\\</span> (产品简报澄清)</li><li class="ml-4"><span class="nas-path">02_Preliminary_Research_Ideation\\</span> (初步研究与构思)</li><li class="ml-4"><span class="nas-path">03_Conceptual_Designs\\</span> (概念设计)</li><li class="ml-4"><span class="nas-path">04_Concept_Selection_Notes\\</span> (概念选择纪要)</li></ul><p class="text-sm text-gray-600 mt-1">此模式适用于所有阶段。上方的“项目工具与NAS文件夹生成器”可协助创建正确的交付成果路径。行政主管（Cherry/Karen）负责定期审计NAS结构的合规性。</p></div><div><h4 class="sub-section-title">2. 严格的文件命名约定</h4><p class="text-sm text-gray-600">强制格式：<span class="nas-path">[项目代码]_[文档缩写]_[版本]_[YYYYMMDD].[后缀名]</span></p><p class="text-sm text-gray-600 mt-1">例如：</p><ul class="list-disc list-inside text-sm mt-1 pl-4"><li>产品简报澄清：<span class="nas-path">P001_PBC_V1.0_20250620.docx</span></li><li>概念选择纪要：<span class="nas-path">P001_CSN_V1.0_20250625.docx</span></li><li>详细CAD模型（零件）：<span class="nas-path">P001_CAD_Housing_V1.1_20250710.sldprt</span></li><li>PPDP包 (压缩文件)：<span class="nas-path">P001_PPDP_V1.0_20250815.zip</span></li></ul><p class="text-sm text-gray-600 mt-1">官方文档缩写的完整列表将在“术语表与文档链接”标签页中维护。必须遵守此约定，并将进行审计。</p></div><div><h4 class="sub-section-title">3. 工程变更单 (ECO) 流程</h4><p class="text-sm text-gray-600">在设计通过其主要设计阶段的决策门批准后（尤其是核心概念的DG2设计冻结后，或PPDP组件的DG3后），对设计的任何更改都必须遵循正式的ECO流程。这对于变更控制和可追溯性至关重要。</p><p class="text-sm text-gray-600 mt-1">ECO流程步骤：提交请求表 -> 技术与商业影响分析（首席工程师与产品经理）-> ECO评审委员会（产品经理、首席工程师、相关干系人）批准/拒绝 -> 实施与文档更新（若批准）-> 通知所有受影响方。</p><p class="text-sm text-gray-600 mt-1">ECO表格模板可在“术语表与文档链接”标签页中找到。ECO将被追踪并存储在 <span class="nas-path">[项目代码]_[项目名称_下划线连接]\\ECOs\\</span>。</p></div><div><h4 class="sub-section-title">4. 版本控制</h4><p class="text-sm text-gray-600">所有关键设计文档（CAD文件、2D图纸、BOM、规格书）必须进行版本控制。主版本（V1.0, V2.0）表示决策门批准后的发布版本。次版本（V1.1, V1.2）表示阶段内的迭代或ECO批准后的更新。文件名必须反映正确的版本。旧版本应在其文档目录下的名为“_Archive”的子文件夹中存档，不得删除。</p></div><div><h4 class="sub-section-title">5. 文档模板与清单</h4><p class="text-sm text-gray-600">所有关键EPDP文档（PBFR、PPDP组件、测试报告、ECO等）和决策门清单必须强制使用Limi Lighting官方模板。模板链接位于“术语表与文档链接”标签页。完成的清单必须签署并存储在NAS中相应的决策门文件夹内。</p></div></div>`
    }
};



// Phase effort chart data
export const phaseEffortData = {
    phases: [
        'phase_1_name',
        'phase_2_name', 
        'phase_3_name',
        'phase_4_name',
        'phase_5_name',
        'phase_6_name',
        'phase_7_name'
    ],
    datasets: {
        pm: [80, 40, 30, 20, 15, 30, 40],
        le: [30, 70, 80, 30, 40, 30, 20],
        de: [10, 60, 70, 20, 30, 20, 10],
        purchasing: [0, 10, 20, 80, 40, 30, 10],
        production: [0, 0, 10, 30, 80, 70, 30],
        qc: [0, 10, 30, 40, 70, 60, 40]
    },
    colors: {
        pm: { bg: 'rgba(255, 99, 132, 0.7)', border: 'rgba(255, 99, 132, 1)' },
        le: { bg: 'rgba(54, 162, 235, 0.7)', border: 'rgba(54, 162, 235, 1)' },
        de: { bg: 'rgba(255, 206, 86, 0.7)', border: 'rgba(255, 206, 86, 1)' },
        purchasing: { bg: 'rgba(75, 192, 192, 0.7)', border: 'rgba(75, 192, 192, 1)' },
        production: { bg: 'rgba(153, 102, 255, 0.7)', border: 'rgba(153, 102, 255, 1)' },
        qc: { bg: 'rgba(255, 159, 64, 0.7)', border: 'rgba(255, 159, 64, 1)' }
    }
};

export const raciData = [
    { activity_en: 'Product Brief Creation (1.1)', activity_cn: '产品简报创建 (1.1)', PM: 'A', LE: 'R', DE: 'C', PURCHASING: 'I', PRODUCTION: 'I', QC: 'I', ADMIN: 'I' }, { activity_en: 'Product Brief Clarification Doc (1.1)', activity_cn: '产品简报澄清文档 (1.1)', PM: 'R', LE: 'C', DE: 'I', PURCHASING: 'I', PRODUCTION: 'I', QC: 'I', ADMIN: 'R' }, { activity_en: 'Preliminary Research & Ideation (1.2)', activity_cn: '初步研究与构思 (1.2)', PM: 'C', LE: 'A', DE: 'R', PURCHASING: 'I', PRODUCTION: 'I', QC: 'I', ADMIN: 'I' }, { activity_en: 'Conceptual Designs (1.3)', activity_cn: '概念设计 (1.3)', PM: 'C', LE: 'A', DE: 'R', PURCHASING: 'I', PRODUCTION: 'I', QC: 'I', ADMIN: 'I' }, { activity_en: 'Concept Review & Selection (1.4)', activity_cn: '概念评审与选择 (1.4)', PM: 'A', LE: 'R', DE: 'C', PURCHASING: 'I', PRODUCTION: 'I', QC: 'I', ADMIN: 'C' }, { activity_en: 'DG1 Approval (Concept)', activity_cn: '决策门1批准 (概念)', PM: 'A', LE: 'R', DE: 'C', PURCHASING: 'I', PRODUCTION: 'I', QC: 'I', ADMIN: 'C' },
    { activity_en: 'Detailed 3D CAD (2.1)', activity_cn: '详细3D CAD (2.1)', PM: 'I', LE: 'A', DE: 'R', PURCHASING: 'I', PRODUCTION: 'I', QC: 'I', ADMIN: 'I' }, { activity_en: 'Initial 2D Drawings (2.1)', activity_cn: '初步2D图纸 (2.1)', PM: 'I', LE: 'A', DE: 'R', PURCHASING: 'I', PRODUCTION: 'I', QC: 'I', ADMIN: 'I' }, { activity_en: 'Preliminary BOM (2.1)', activity_cn: '初步BOM (2.1)', PM: 'I', LE: 'A', DE: 'R', PURCHASING: 'C', PRODUCTION: 'I', QC: 'I', ADMIN: 'I' }, { activity_en: 'Low-Fi Prototyping Plan (2.2)', activity_cn: '低保真原型计划 (2.2)', PM: 'C', LE: 'A', DE: 'R', PURCHASING: 'I', PRODUCTION: 'I', QC: 'I', ADMIN: 'I' }, { activity_en: 'Low-Fi Prototype Creation & Iteration (2.3)', activity_cn: '低保真原型制作与迭代 (2.3)', PM: 'C', LE: 'A', DE: 'R', PURCHASING: 'I', PRODUCTION: 'I', QC: 'C', ADMIN: 'I' }, { activity_en: 'Internal DFM/DFA Review (part of 2.3)', activity_cn: '内部DFM/DFA评审 (2.3一部分)', PM: 'C', LE: 'A', DE: 'R', PURCHASING: 'C', PRODUCTION: 'C', QC: 'C', ADMIN: 'I' }, { activity_en: 'Low-Fi Prototype Review (2.4)', activity_cn: '低保真原型评审 (2.4)', PM: 'A', LE: 'R', DE: 'C', PURCHASING: 'I', PRODUCTION: 'I', QC: 'I', ADMIN: 'C' }, { activity_en: 'DG2 Approval (Design Freeze)', activity_cn: '决策门2批准 (设计冻结)', PM: 'A', LE: 'R', DE: 'C', PURCHASING: 'I', PRODUCTION: 'I', QC: 'I', ADMIN: 'C' },
    { activity_en: 'Refine Design to V1.0 (CAD, 2D, BOM) (3.1)', activity_cn: '精细化设计至V1.0 (CAD, 2D, BOM) (3.1)', PM: 'C', LE: 'A', DE: 'R', PURCHASING: 'I', PRODUCTION: 'I', QC: 'C', ADMIN: 'I' }, { activity_en: 'Material Selection for Hi-Fi Proto (3.1)', activity_cn: '高保真原型材料选择 (3.1)', PM: 'C', LE: 'A', DE: 'R', PURCHASING: 'C', PRODUCTION: 'I', QC: 'I', ADMIN: 'I' }, { activity_en: 'Hi-Fi Prototyping Plan (3.2)', activity_cn: '高保真原型计划 (3.2)', PM: 'C', LE: 'A', DE: 'R', PURCHASING: 'I', PRODUCTION: 'I', QC: 'I', ADMIN: 'I' }, { activity_en: 'Hi-Fi Prototype Creation & Testing (3.3)', activity_cn: '高保真原型制作与测试 (3.3)', PM: 'C', LE: 'A', DE: 'R', PURCHASING: 'I', PRODUCTION: 'C', QC: 'R', ADMIN: 'I' }, { activity_en: 'DFM/DFA Review & Report (3.4)', activity_cn: 'DFM/DFA评审与报告 (3.4)', PM: 'C', LE: 'A', DE: 'R', PURCHASING: 'C', PRODUCTION: 'C', QC: 'C', ADMIN: 'I' }, { activity_en: 'Create Pre-Production Design Package (PPDP) (3.5)', activity_cn: '创建预生产设计包 (PPDP) (3.5)', PM: 'C', LE: 'A', DE: 'R', PURCHASING: 'I', PRODUCTION: 'C', QC: 'C', ADMIN: 'R' }, { activity_en: 'DG3 Approval (PPDP Handoff)', activity_cn: '决策门3批准 (PPDP交接)', PM: 'A', LE: 'R', DE: 'C', PURCHASING: 'C', PRODUCTION: 'C', QC: 'C', ADMIN: 'C' },
    { activity_en: 'PPDP Review by Purchasing (4.1)', activity_cn: '采购评审PPDP (4.1)', PM: 'I', LE: 'C', DE: 'I', PURCHASING: 'A', PRODUCTION: 'I', QC: 'I', ADMIN: 'I' }, { activity_en: 'Supplier Identification & Shortlisting (4.2)', activity_cn: '供应商识别与筛选 (4.2)', PM: 'I', LE: 'C', DE: 'I', PURCHASING: 'A', PRODUCTION: 'I', QC: 'I', ADMIN: 'I' }, { activity_en: 'RFQ Package Prep & Send (Samples) (4.3)', activity_cn: '准备并发送样品RFQ包 (4.3)', PM: 'I', LE: 'C', DE: 'I', PURCHASING: 'A', PRODUCTION: 'I', QC: 'I', ADMIN: 'I' }, { activity_en: 'Quotation Analysis & Supplier Selection (Samples) (4.4)', activity_cn: '报价分析与样品供应商选择 (4.4)', PM: 'A', LE: 'C', DE: 'I', PURCHASING: 'R', PRODUCTION: 'I', QC: 'C', ADMIN: 'I' }, { activity_en: 'Sample PO Placement & Financial Approval (4.5)', activity_cn: '样品PO下达与财务审批 (4.5)', PM: 'A', LE: 'I', DE: 'I', PURCHASING: 'R', PRODUCTION: 'I', QC: 'I', ADMIN: 'C' }, { activity_en: 'Sample Production Follow-Up (4.6)', activity_cn: '样品生产跟进 (4.6)', PM: 'I', LE: 'I', DE: 'I', PURCHASING: 'A', PRODUCTION: 'I', QC: 'I', ADMIN: 'I' }, { activity_en: 'Sample Reception & Initial Verification (4.7)', activity_cn: '样品接收与初步验证 (4.7)', PM: 'I', LE: 'C', DE: 'I', PURCHASING: 'R', PRODUCTION: 'I', QC: 'C', ADMIN: 'I' }, { activity_en: 'External Sample Evaluation & Testing (EPDVP 5.1-5.2)', activity_cn: '外部样品评估与测试 (EPDVP 5.1-5.2)', PM: 'C', LE: 'R', DE: 'C', PURCHASING: 'C', PRODUCTION: 'I', QC: 'A', ADMIN: 'I' }, { activity_en: 'Golden Sample Approval & Documentation (EPDVP 5.4)', activity_cn: '黄金样品批准与记录 (EPDVP 5.4)', PM: 'A', LE: 'R', DE: 'I', PURCHASING: 'C', PRODUCTION: 'C', QC: 'R', ADMIN: 'C' }, { activity_en: 'DG4 Approval (External Samples Validated)', activity_cn: '决策门4批准 (外部样品已验证)', PM: 'A', LE: 'R', DE: 'I', PURCHASING: 'C', PRODUCTION: 'I', QC: 'C', ADMIN: 'C' },
    { activity_en: 'Trial Production Planning (6.1)', activity_cn: '试生产计划 (6.1)', PM: 'C', LE: 'C', DE: 'I', PURCHASING: 'C', PRODUCTION: 'A', QC: 'C', ADMIN: 'I' }, { activity_en: 'Order Components for Trial Run (6.1)', activity_cn: '订购试生产组件 (6.1)', PM: 'C', LE: 'I', DE: 'I', PURCHASING: 'A', PRODUCTION: 'C', QC: 'I', ADMIN: 'I' }, { activity_en: 'Pre-Trial Briefing & Setup (6.2)', activity_cn: '试生产前会议与准备 (6.2)', PM: 'I', LE: 'C', DE: 'I', PURCHASING: 'I', PRODUCTION: 'A', QC: 'C', ADMIN: 'I' }, { activity_en: 'Execute Trial Production & Monitor (6.3)', activity_cn: '执行试生产与监控 (6.3)', PM: 'C', LE: 'C', DE: 'I', PURCHASING: 'I', PRODUCTION: 'A', QC: 'R', ADMIN: 'I' }, { activity_en: 'Post-Trial Review & Analysis (6.4)', activity_cn: '试生产后评审与分析 (6.4)', PM: 'A', LE: 'R', DE: 'I', PURCHASING: 'C', PRODUCTION: 'R', QC: 'R', ADMIN: 'C' }, { activity_en: 'Finalize Production Documentation (SOPs, QC etc.) (6.5)', activity_cn: '最终确定生产文档 (SOP, QC等) (6.5)', PM: 'I', LE: 'A', DE: 'C', PURCHASING: 'I', PRODUCTION: 'R', QC: 'A', ADMIN: 'C' }, { activity_en: 'Create Final Production Package (6.5)', activity_cn: '创建最终生产包 (6.5)', PM: 'I', LE: 'A', DE: 'R', PURCHASING: 'I', PRODUCTION: 'C', QC: 'C', ADMIN: 'R' }, { activity_en: 'DG5 Approval (Readiness for Mass Production)', activity_cn: '决策门5批准 (量产准备就绪)', PM: 'A', LE: 'R', DE: 'I', PURCHASING: 'C', PRODUCTION: 'R', QC: 'C', ADMIN: 'C' },
    { activity_en: 'FMPR Preparation (7.1)', activity_cn: '首次量产准备 (7.1)', PM: 'I', LE: 'C', DE: 'I', PURCHASING: 'C', PRODUCTION: 'A', QC: 'R', ADMIN: 'I' }, { activity_en: 'FMPR Execution & Monitoring (7.2)', activity_cn: '首次量产执行与监控 (7.2)', PM: 'C', LE: 'R', DE: 'I', PURCHASING: 'C', PRODUCTION: 'A', QC: 'R', ADMIN: 'I' }, { activity_en: 'Post-FMPR Review & Stabilization (7.3)', activity_cn: '首次量产后评审与流程稳定 (7.3)', PM: 'A', LE: 'R', DE: 'I', PURCHASING: 'C', PRODUCTION: 'R', QC: 'R', ADMIN: 'C' }, { activity_en: 'Ongoing Mass Production & Monitoring (7.4)', activity_cn: '持续量产与常规监控 (7.4)', PM: 'I', LE: 'I', DE: 'I', PURCHASING: 'C', PRODUCTION: 'A', QC: 'R', ADMIN: 'I' },
    { activity_en: 'Data Collection & Analysis (All Depts) (8.1)', activity_cn: '数据收集与分析 (各部门) (8.1)', PM: 'C', LE: 'R', DE: 'I', PURCHASING: 'R', PRODUCTION: 'R', QC: 'R', ADMIN: 'A' }, { activity_en: 'Periodic Post-Launch Review Meetings (8.2)', activity_cn: '定期上市后评审会议 (8.2)', PM: 'A', LE: 'R', DE: 'I', PURCHASING: 'C', PRODUCTION: 'C', QC: 'C', ADMIN: 'C' }, { activity_en: 'Implementing Improvements (Assigned Leads) (8.3)', activity_cn: '实施改进 (指定负责人) (8.3)', PM: 'A', LE: 'C', DE: 'C', PURCHASING: 'C', PRODUCTION: 'C', QC: 'C', ADMIN: 'R' }, { activity_en: 'Lessons Learned & Knowledge Base Update (8.4)', activity_cn: '经验教训与知识库更新 (8.4)', PM: 'R', LE: 'A', DE: 'C', PURCHASING: 'I', PRODUCTION: 'I', QC: 'I', ADMIN: 'C' }
]; 


export const decisionGateChecklists = {
    en: {
        'DG1_Checklist': [ { summary: 'Is the "Product Brief Clarifications" document complete, reviewed by LE, and stored in NAS?', details: 'Importance: Confirms mutual understanding of requirements between PM and LE before design.' }, { summary: 'Are "Preliminary Research & Ideation" outputs stored and sufficient?', details: 'Importance: Ensures foundational research supports the conceptual direction.' }, { summary: 'Are 2-3 distinct "Conceptual Designs" documented and stored?', details: 'Importance: Demonstrates exploration of alternatives.' }, { summary: 'Is the "Concept Selection Notes" document complete, signed by PM, and stored, clearly justifying the chosen concept?', details: 'Importance: Formalizes the decision and rationale for proceeding with a specific design path.' }, { summary: 'Does the Lead Engineer confirm high-level technical feasibility of the selected concept?', details: 'Importance: Early check for major technical roadblocks.'}, { summary: 'Are initial thoughts on target cost and potential materials for the selected concept realistic?', details: 'Importance: Early alignment on commercial and manufacturing viability.'} ],
        'DG2_Checklist': [ { summary: 'Are Detailed CAD (V0.x), 2D Drawings (V0.x), and BOM (V0.x) complete and stored in NAS (01_Design_V0.x)?', details: 'Ensures the initial design is fully documented before major prototyping.'}, { summary: 'Is the Low-Fidelity Prototyping Plan documented and stored (02_LowFi_Proto_Plan.docx)?', details: 'Confirms a clear plan was in place for initial validation.'}, { summary: 'Have Low-Fidelity Prototype(s) been created and iterations documented (03_LowFi_Prototypes_and_Iterations/)?', details: 'Physical validation of basic form, fit, and function.'}, { summary: 'Does the retained baseline Lo-Fi Prototype accurately represent the core concept?', details: 'A physical benchmark for this stage.'}, { summary: 'Have critical DFM/DFA considerations been reviewed internally based on Lo-Fi prototypes?', details: 'Early check for manufacturability and assembly issues.'}, { summary: 'Is the "LowFi Proto Review Notes" document complete with PM approval/feedback and stored (04_LowFi_Proto_Review_Notes.docx)?', details: 'Formalizes the outcome of the review and the decision to proceed.'}, { summary: 'Are all core requirements from the PBFR still addressed by the current design direction?', details: 'Ensures the design remains aligned with the initial project goals.'} ],
        'DG3_Checklist': [ { summary: 'Is the "Design V1.0" (CAD, 2D, BOM) complete, reviewed, and stored in NAS (01_Design_V1.0)?', details: 'Confirms final design specifications are locked before PPDP creation.'}, { summary: 'Is the "High-Fidelity Prototyping Plan" documented and stored (02_HiFi_Proto_Plan.docx)?', details: 'Ensures a structured approach to creating near-production prototypes.'}, { summary: 'Have "High-Fidelity Prototype(s)" been created, tested, and all findings/iterations documented (03_HiFi_Prototypes_and_Testing/)?', details: 'Critical validation of function, assembly, and materials with production-intent designs.'}, { summary: 'Is the "DFM/DFA Review Report" complete with actionable recommendations and stored (04_DFM_DFA_Review.docx)?', details: 'Mandatory review to ensure the design is optimized for mass production.'}, { summary: 'Is the "Pre-Production Design Package (PPDP V1.0)" 100% complete as per the official PPDP checklist, version controlled, and stored (05_Pre-Production_Design_Package_V1.0/)?', details: 'This is the SACRED CONTRACT. Incompleteness here is a critical failure.'}, { summary: 'Do all functional test reports within the PPDP confirm that ALL requirements from the original Product Brief (PBFR) are met or exceeded?', details: 'No assumptions. Quantitative proof of performance against original targets is required.'}, { summary: 'Has the Lead Engineer formally signed off on the PPDP, confirming its accuracy and completeness?', details: 'Accountability for the engineering deliverables.'} ],
        'DG4_Checklist': [ { summary: 'Has Purchasing Lead confirmed receipt and initial verification of all ordered samples (05_Sample_Reception_Notes)?', details: 'Ensures all expected samples are physically present and initially checked.'}, { summary: 'Has a specific Inspection and Test Plan (ITP) for these external samples been developed by QC & Engineering, referencing the PPDP (Stored in Phase 5 folder as per EPDVP)?', details: 'A clear plan for evaluation is essential.'}, { summary: 'Have samples been meticulously inspected by Engineering & QC against drawings and ITP? (Individual Part Inspection Reports completed - EPDVP 5.2)', details: 'Dimensional, material, and finishing checks.'}, { summary: 'Has at least one complete product unit been assembled using the external samples by Engineering (with QC present)? (First Article Assembly Report completed - EPDVP 5.2)', details: 'Validates fitment and assembly process with actual production-intent parts.'}, { summary: 'Have all functional and aesthetic tests been conducted on the assembled unit(s) as per ITP? (Functional & Aesthetic Test Report completed - EPDVP 5.2)', details: 'Confirms the product works as intended and looks correct.'}, { summary: 'If any non-conformances found, has root cause analysis been done and CARs issued/design revisions logged? (EPDVP 5.3)', details: 'Properly addressing any sample failures.'}, { summary: 'Has the Product Manager (Umer) performed a final review and approval of the fully assembled, validated sample unit? (EPDVP 5.4)', details: 'PM buy-in on sample quality.'}, { summary: 'Have the Lead Engineer (Mark) and QC Lead formally signed off on the samples that meet all specifications, establishing them as "Golden Samples"? (EPDVP 5.4)', details: 'Formal establishment of the quality benchmark.'}, { summary: 'Is the "Golden Sample" set properly documented (photos, labels) and securely stored for reference? (EPDVP 5.4)', details: 'Critical for future quality comparisons.'} ],
        'DG5_Checklist': [ { summary: 'Trial production run completed successfully? (Y/N)', details: 'Confirms the small batch was produced.'}, { summary: 'Trial production units meet quality standards against Golden Samples? (Y/N)', details: 'Quality must be maintained.'}, { summary: 'Assembly times and defect rates within acceptable limits? (Y/N - specify limits)', details: 'Efficiency and quality metrics from trial run.'}, { summary: 'Final Assembly SOP / Guide complete and validated? (Y/N)', details: 'Instructions for mass production must be proven.'}, { summary: 'Final QC Checklists and Standards complete and validated? (Y/N)', details: 'Quality control measures for mass production must be finalized.'}, { summary: 'Final Packaging Instructions complete and validated? (Y/N)', details: 'Ensures product protection during shipping.'}, { summary: 'All necessary tooling, jigs, fixtures in place and proven? (Y/N)', details: 'Production aids must be ready and functional.'}, { summary: 'Purchasing confirms supplier readiness for mass production (components, quality, capacity)? (Y/N)', details: 'Supply chain must be ready for volume.'}, { summary: 'Production team trained on final SOPs? (Y/N/Scheduled)', details: 'Team must be ready to execute.'}, { summary: 'All departments (Engineering, Production, QC, Purchasing) formally sign off on readiness? (Y/N)', details: 'Cross-functional agreement on readiness for mass production.'} ]
    },
    cn: {
        'DG1_Checklist': [ { summary: '“产品简报澄清”文档是否完整，经首席工程师审阅，并已储存于NAS？', details: '重要性：确认产品经理与首席工程师在设计开始前对需求达成共识。' }, { summary: '“初步研究与构思”的输出是否已存储且足够？', details: '重要性：确保基础研究支持概念方向。' }, { summary: '2-3个不同的“概念设计”是否已记录并存储？', details: '重要性：展示对备选方案的探索。' }, { summary: '“概念选择纪要”文档是否完整，由产品经理签署并存储，清晰说明所选概念的理由？', details: '重要性：正式确定决策及选择特定设计路径的依据。' }, { summary: '首席工程师是否确认所选概念的高层级技术可行性？', details: '重要性：早期排查重大技术障碍。'}, { summary: '关于所选概念的目标成本和潜在材料的初步考虑是否现实？', details: '重要性：早期在商业和制造可行性上达成一致。'} ],
        'DG2_Checklist': [ { summary: '详细CAD (V0.x)、2D图纸 (V0.x) 和BOM (V0.x) 是否完整并存储在NAS (01_Design_V0.x)？', details: '确保在主要原型制作前，初始设计已完整记录。'}, { summary: '低保真原型计划是否已记录并存储 (02_LowFi_Proto_Plan.docx)？', details: '确认有清晰的初步验证计划。'}, { summary: '低保真原型是否已创建，并且迭代过程是否已记录 (03_LowFi_Prototypes_and_Iterations/)？', details: '对基本形状、配合和功能进行物理验证。'}, { summary: '保留的基准低保真原型是否准确代表了核心概念？', details: '此阶段的物理基准。'}, { summary: '是否已根据低保真原型对关键的DFM/DFA考虑因素进行了内部审查？', details: '早期检查可制造性和装配问题。'}, { summary: '“低保真原型评审纪要”文档是否包含产品经理的批准/反馈，并已完整存储 (04_LowFi_Proto_Review_Notes.docx)？', details: '正式记录评审结果和继续进行的决定。'}, { summary: '当前设计方向是否仍满足PBFR中的所有核心要求？', details: '确保设计与初始项目目标保持一致。'} ],
        'DG3_Checklist': [ { summary: '“设计V1.0”（CAD、2D、BOM）是否完整、已审核并存储在NAS（01_Design_V1.0）？', details: '确认在创建PPDP之前最终设计规格已锁定。'}, { summary: '“高保真原型计划”是否已记录并存储（02_HiFi_Proto_Plan.docx）？', details: '确保采用结构化方法创建接近生产的原型。'}, { summary: '“高保真原型”是否已创建、测试，并且所有发现/迭代都已记录（03_HiFi_Prototypes_and_Testing/）？', details: '对生产意图设计的功能、装配和材料进行关键验证。'}, { summary: '“DFM/DFA评审报告”是否包含可操作的建议并已完整存储（04_DFM_DFA_Review.docx）？', details: '强制性评审，以确保设计已为批量生产优化。'}, { summary: '“预生产设计包（PPDP V1.0）”是否根据官方PPDP清单100%完整，已进行版本控制并存储（05_Pre-Production_Design_Package_V1.0/）？', details: '这是神圣的合同。此处的不完整是严重失误。'}, { summary: 'PPDP内的所有功能测试报告是否确认满足或超过了原始产品简报（PBFR）中的所有要求？', details: '不带任何假设。需要针对原始目标的性能提供定量证明。'}, { summary: '首席工程师是否已正式签署PPDP，确认其准确性和完整性？', details: '对工程交付成果的责任担当。'} ],
        'DG4_Checklist': [ { summary: '采购主管是否已确认收到并初步核实所有订购的样品（05_Sample_Reception_Notes）？', details: '确保所有预期样品均已实际收到并经过初步检查。'}, { summary: '品控与工程部门是否已根据PPDP为这些外部样品制定了具体的检验与测试计划（ITP）（按EPDVP要求存储于阶段5文件夹）？', details: '清晰的评估计划至关重要。'}, { summary: '工程与品控部门是否已根据图纸和ITP对样品进行了仔细检查？（单个零件检验报告已完成 - EPDVP 5.2）', details: '尺寸、材料和表面处理检查。'}, { summary: '工程部门（品控在场）是否已使用外部样品组装了至少一个完整的产品单元？（首件组装报告已完成 - EPDVP 5.2）', details: '用实际的生产意图零件验证配合和装配过程。'}, { summary: '是否已根据ITP对组装好的单元进行了所有功能和外观测试？（功能与外观测试报告已完成 - EPDVP 5.2）', details: '确认产品按预期工作且外观正确。'}, { summary: '如发现任何不符合项，是否已进行根本原因分析并发出纠正措施请求（CARs）/记录设计修订？（EPDVP 5.3）', details: '妥善处理任何样品故障。'}, { summary: '产品经理（Umer）是否对完全组装并经验证的样品单元进行了最终审查和批准？（EPDVP 5.4）', details: '产品经理对样品质量的认可。'}, { summary: '首席工程师（Mark）和品控主管是否已正式签署符合所有规格的样品，将其确立为“黄金样品”？（EPDVP 5.4）', details: '正式确立质量基准。'}, { summary: '“黄金样品”套件是否已妥善记录（照片、标签）并安全存放以供参考？（EPDVP 5.4）', details: '对于未来的质量比较至关重要。'} ],
        'DG5_Checklist': [ { summary: '试生产运行是否成功完成？ (是/否)', details: '确认小批量已生产。'}, { summary: '试生产单元是否符合黄金样品的质量标准？ (是/否)', details: '必须保持质量。'}, { summary: '装配时间和缺陷率是否在可接受范围内？ (是/否 - 请注明限制)', details: '试运行的效率和质量指标。'}, { summary: '最终装配SOP/指南是否完整并经验证？ (是/否)', details: '量产说明必须得到证实。'}, { summary: '最终QC检验表和标准是否完整并经验证？ (是/否)', details: '量产的质量控制措施必须最终确定。'}, { summary: '最终包装说明是否完整并经验证？ (是/否)', details: '确保产品在运输过程中的保护。'}, { summary: '所有必要的工装、夹具、固定装置是否已到位并得到验证？ (是/否)', details: '生产辅助工具必须准备就绪且功能正常。'}, { summary: '采购部门是否确认供应商已为批量生产做好准备（组件、质量、产能）？ (是/否)', details: '供应链必须为大批量生产做好准备。'}, { summary: '生产团队是否已接受最终SOP培训？ (是/否/已安排)', details: '团队必须准备好执行。'}, { summary: '所有部门（工程、生产、品控、采购）是否正式签署确认准备就绪？ (是/否)', details: '跨部门对量产准备就绪达成一致。'} ]
    }
};
// Simplified phase data structure
export   const fullPhaseData = {
    'phase-1': {
        en: {
            title: translations.en.phase_1_name, 
            subtitle: translations.en.phase_1_tag,
            objective: 'To receive and understand the initial product brief, define scope, assess high-level feasibility, and develop preliminary design concepts, culminating in a documented business case.',
            sections: [
                { title_key: 'section_input', type: 'input', items: [ { summary: 'Product Idea / Market Need', details: 'Initial idea from Product Manager (Umer) or identified market opportunity. This is the spark for the project.', primaryRole: 'PM' } ] },
                { title_key: 'section_action_pm', type: 'action', items: [ { summary: 'Review Product Brief Thoroughly', details: 'Deeply understand product vision, target market, core functionalities, KPIs, aesthetic guidelines, target cost, known constraints. (EPDVP 1.1)', primaryRole: 'PM' }, { summary: 'Schedule Clarification Meeting (if needed)', details: 'Meet with relevant stakeholders (e.g., Lead Engineer) if any aspects of the brief are unclear. (EPDVP 1.1)', primaryRole: 'PM' }, { summary: 'Document Understanding', details: 'Create "Product Brief Clarifications" document. Store in NAS: <span class="nas-path">[Project Name]/Phase 1 - Concept/01_Product_Brief_Clarifications.docx</span> (EPDVP 1.1)', primaryRole: 'PM' } ] },
                { title_key: 'section_action_eng_team', type: 'action', items: [ { summary: 'Preliminary Research & Ideation (Led by LE)', details: 'Conduct research on similar products, technologies, manufacturing techniques. Brainstorm initial concepts. Consider use of existing Limi "Perpetual Parts." (EPDVP 1.2)', primaryRole: 'LE' }, { summary: 'Develop 2-3 Conceptual Designs', details: 'Create sketches, basic 3D models. For each concept, outline key features, potential materials, estimated complexity, pros/cons. (EPDVP 1.3)', primaryRole: 'DE' }, ] },
                { title_key: 'section_output', type: 'output', items: [ 'Documented understanding of product requirements: <span class="nas-path">[Project Name]/Phase 1 - Concept/01_Product_Brief_Clarifications.docx</span>', 'Research notes, initial sketches, mood boards, potential core technologies identified: <span class="nas-path">[Project Name]/Phase 1 - Concept/02_Preliminary_Research_Ideation/</span>', 'Conceptual design presentations/documents (2-3 concepts): <span class="nas-path">[Project Name]/Phase 1 - Concept/03_Conceptual_Designs/</span>' ] },
                { title_key: 'section_action_le', type: 'action', items: [ { summary: 'Present Conceptual Designs to PM', details: 'Lead Engineer (Mark) presents the 2-3 conceptual designs to Product Manager (Umer). (EPDVP 1.4)', primaryRole: 'LE' }, { summary: 'Discuss Feasibility & Alignment', details: 'Discuss technical feasibility, alignment with product vision, and potential challenges of each concept. (EPDVP 1.4)', primaryRole: 'LE' }, ] },
                { title_key: 'section_action_pm', type: 'action', items: [ { summary: 'Select Primary Concept for Development', details: 'Product Manager (Umer) selects one primary concept. (EPDVP 1.4)', primaryRole: 'PM'}, { summary: 'Provide Feedback for Refinement', details: 'Provide feedback for refinement or identify elements from other concepts to integrate. (EPDVP 1.4)', primaryRole: 'PM'}, ] },
                { title_key: 'section_output', type: 'output', items: [ 'Documented decision on selected concept and any required modifications: <span class="nas-path">[Project Name]/Phase 1 - Concept/04_Concept_Selection_Notes.docx</span>' ] }
            ],
            gate: { name: translations.en['phase_1_name'] + ' - ' + 'Decision Gate 1: Concept Approval', purpose: 'To formally review the selected concept, feasibility assessment, and documented understanding, and decide if the project has a strong enough basis to proceed to detailed engineering.', checklist_ref: 'DG1_Checklist' }
        },
        cn: {
            title: translations.cn.phase_1_name, 
            subtitle: translations.cn.phase_1_tag,
            objective: '接收并理解初始产品简报，定义范围，评估高层级可行性，并开发初步设计概念，最终形成有文档记录的商业案例。',
            sections: [
                { title_key: 'section_input', type: 'input', items: [ { summary: '产品想法/市场需求', details: '来自产品经理（Umer）的初步想法或已识别的市场机会。这是项目的起点。', primaryRole: 'PM' } ] },
                { title_key: 'section_action_pm', type: 'action', items: [ { summary: '彻底审阅产品简报', details: '深入理解产品愿景、目标市场、核心功能、关键绩效指标（KPIs）、美学指南、目标成本、已知约束条件。 (EPDVP 1.1)', primaryRole: 'PM' }, { summary: '安排澄清会议（如需要）', details: '如果简报中有任何不清晰之处，与相关人员（如首席工程师）开会澄清。 (EPDVP 1.1)', primaryRole: 'PM' }, { summary: '文档化需求理解', details: '创建“产品简报澄清”文档。存储于NAS：<span class="nas-path">[项目名称]/Phase 1 - Concept/01_Product_Brief_Clarifications.docx</span> (EPDVP 1.1)', primaryRole: 'PM' } ] },
                { title_key: 'section_action_eng_team', type: 'action', items: [ { summary: '初步研究与构思（首席工程师主导）', details: '对类似产品、技术、制造工艺进行研究。进行初步概念头脑风暴。考虑使用Limi现有“通用部件”。 (EPDVP 1.2)', primaryRole: 'LE' }, { summary: '开发2-3个概念设计', details: '创建草图、基础3D模型。为每个概念概述关键特性、潜在材料、预估复杂性、优缺点。 (EPDVP 1.3)', primaryRole: 'DE' }, ] },
                { title_key: 'section_output', type: 'output', items: [ '产品需求理解文档：<span class="nas-path">[项目名称]/Phase 1 - Concept/01_Product_Brief_Clarifications.docx</span>', '研究笔记、初步草图、情绪板、潜在核心技术识别：<span class="nas-path">[项目名称]/Phase 1 - Concept/02_Preliminary_Research_Ideation/</span>', '概念设计演示/文档（2-3个概念）：<span class="nas-path">[项目名称]/Phase 1 - Concept/03_Conceptual_Designs/</span>' ] },
                { title_key: 'section_action_le', type: 'action', items: [ { summary: '向产品经理呈报概念设计', details: '首席工程师（Mark）向产品经理（Umer）呈报2-3个概念设计。 (EPDVP 1.4)', primaryRole: 'LE' }, { summary: '讨论可行性与一致性', details: '讨论各概念的技术可行性、与产品愿景的符合度及潜在挑战。 (EPDVP 1.4)', primaryRole: 'LE' }, ] },
                { title_key: 'section_action_pm', type: 'action', items: [ { summary: '选择主要概念进行开发', details: '产品经理（Umer）选择一个主要概念。 (EPDVP 1.4)', primaryRole: 'PM'}, { summary: '提供优化反馈', details: '提供优化反馈，或指明需整合其他概念中的元素。 (EPDVP 1.4)', primaryRole: 'PM'}, ] },
                { title_key: 'section_output', type: 'output', items: [ '选定概念及任何必要修改的决策文档：<span class="nas-path">[项目名称]/Phase 1 - Concept/04_Concept_Selection_Notes.docx</span>' ] }
            ],
            gate: { name: translations.cn['phase_1_name'] + ' - ' + '决策门 1: 概念批准', purpose: '正式审查选定的概念、可行性评估和已记录的需求理解，决定项目是否有足够强的基础进入详细工程阶段。', checklist_ref: 'DG1_Checklist' }
        }
    },
    'phase-2': {
        en: {
            title: translations.en.phase_2_name, 
            subtitle: translations.en.phase_2_tag,
            objective: 'To translate the selected concept from Phase 1 into a detailed engineering design and create initial low-fidelity internal prototypes to validate basic form, fit, key assumptions, and manufacturability.',
            sections: [
                { title_key: 'section_input', type: 'input', items: [ { summary: 'Approved Concept Selection Notes (from DG1)', details: 'Documented decision on selected concept from Phase 1, including any required modifications or feedback. Stored in NAS: <span class="nas-path">[Project Name]/Phase 1 - Concept/04_Concept_Selection_Notes.docx</span>', primaryRole: 'LE' }, { summary: 'Product Brief Clarifications (from Phase 1)', details: 'The refined understanding of product requirements. Stored in NAS: <span class="nas-path">[Project Name]/Phase 1 - Concept/01_Product_Brief_Clarifications.docx</span>', primaryRole: 'LE' } ] },
                { title_key: 'section_action_eng_team', type: 'action', items: [ { summary: 'Develop Detailed 3D CAD Models (V0.1)', details: 'Create detailed 3D CAD models of the selected concept. (EPDVP 2.1)', primaryRole: 'DE' }, { summary: 'Create Initial 2D Drawings (V0.1)', details: 'Generate initial 2D drawings with critical dimensions. (EPDVP 2.1)', primaryRole: 'DE' }, { summary: 'Draft Preliminary Bill of Materials (BOM V0.1)', details: 'Identify major components and draft a preliminary BOM. (EPDVP 2.1)', primaryRole: 'DE' }, ] },
                { title_key: 'section_output', type: 'output', items: [ 'Detailed CAD files (V0.1), 2D drawings (V0.1), BOM (V0.1). Store in version-controlled subfolders in NAS: <span class="nas-path">[Project Name]/Phase 2 – Detailed Design & LowFi Proto/01_Design_V0.1/</span>' ] },
                { title_key: 'section_action_le', type: 'action', items: [ { summary: 'Identify Key Aspects for Low-Fi Validation', details: 'Identify key design aspects to validate with low-fidelity prototypes (e.g., overall size, critical component interfaces, basic mechanisms). (EPDVP 2.2)', primaryRole: 'LE' }, { summary: 'Determine Prototyping Methods', details: 'Determine the quickest and most cost-effective methods for creating these prototypes (e.g., FDM 3D printing, laser-cut acrylic, manual assembly of mock-ups). (EPDVP 2.2)', primaryRole: 'LE' }, ] },
                { title_key: 'section_output', type: 'output', items: [ 'Low-Fidelity Prototyping Plan. Store in NAS: <span class="nas-path">[Project Name]/Phase 2 – Detailed Design & LowFi Proto/02_LowFi_Proto_Plan.docx</span>' ] },
                { title_key: 'section_action_eng_team', type: 'action', items: [ { summary: 'Fabricate/Assemble Low-Fi Prototype(s)', details: 'Use in-house 3D printers, laser cutters, basic workshop tools. Focus on quick validation of form, fit, and fundamental concepts. Aesthetics and final materials are secondary at this stage. (EPDVP 2.3)', primaryRole: 'DE' }, { summary: 'Conduct Internal Engineering Reviews of Prototype(s)', details: 'Identify immediate design flaws, assembly issues, or incorrect assumptions. (EPDVP 2.3)', primaryRole: 'LE' }, { summary: 'Iterate on Design (CAD V0.2, V0.3 etc.)', details: 'Re-prototype as necessary for these initial checks. Each iteration must be documented. (EPDVP 2.3)', primaryRole: 'DE' }, ] },
                { title_key: 'section_action_le', type: 'action', items: [ { summary: 'Label & Retain Baseline Lo-Fi Prototype', details: 'The first complete physical mock-up/prototype demonstrating the core concept should be clearly labelled (e.g., "LoFi-Proto-A-[Date]-[Project]") and retained by engineering as a baseline reference for this phase. (EPDVP 2.3)', primaryRole: 'LE'} ] },
                { title_key: 'section_output', type: 'output', items: [ 'Physical low-fidelity prototype(s) (e.g., "Prototype V0.3 - [Date] - [Project Name]").', 'Photos/videos of prototypes.', 'Notes on findings, issues, and modifications made during iteration.', 'Updated CAD files (V0.x), 2D drawings (V0.x), BOM (V0.x).', 'All stored in NAS: <span class="nas-path">[Project Name]/Phase 2 – Detailed Design & LowFi Proto/03_LowFi_Prototypes_and_Iterations/</span> (with subfolders for each iteration).' ] },
                { title_key: 'section_action_le', type: 'action', items: [ { summary: 'Present Most Stable Low-Fi Prototype(s) to PM', details: 'Lead Engineer (Mark) presents the most stable low-fidelity prototype(s) and iteration findings to Product Manager (Umer). (EPDVP 2.4)', primaryRole: 'LE' }, { summary: 'Discuss Concept Realization & Challenges', details: 'Discuss how well the prototype(s) realize the initial concept. Highlight any significant deviations or challenges encountered. (EPDVP 2.4)', primaryRole: 'LE' }, ] },
                { title_key: 'section_action_pm', type: 'action', items: [ { summary: 'Approve Design Direction or Request Further Iterations', details: 'Product Manager (Umer) approves the design direction based on low-fidelity validation, provides feedback for higher-fidelity prototyping, or requests further low-fidelity iterations if core concept issues remain. (EPDVP 2.4)', primaryRole: 'PM'}, ] },
                { title_key: 'section_output', type: 'output', items: [ 'Documented feedback and approval to proceed. Store in NAS: <span class="nas-path">[Project Name]/Phase 2 – Detailed Design & LowFi Proto/04_LowFi_Proto_Review_Notes.docx</span>' ] }
            ],
            gate: { name: translations.en['phase_2_name'] + ' - ' + 'Decision Gate 2: Design Freeze & Low-Fi Validation Approval', purpose: 'To review the detailed design (V0.x), low-fidelity prototype(s), and validation results. A "Go" decision signifies approval of the core design concept ("Design Freeze") and readiness to proceed to high-fidelity prototyping.', checklist_ref: 'DG2_Checklist' }
        },
        cn: {
            title: translations.cn.phase_2_name, 
            subtitle: translations.cn.phase_2_tag,
            objective: '将阶段1选定的概念转化为详细的工程设计，并创建初步的低保真内部原型，以验证基本形状、配合、关键假设和可制造性。',
            sections: [
                { title_key: 'section_input', type: 'input', items: [ { summary: '已批准的概念选择纪要 (来自DG1)', details: '阶段1选定概念的决策文档，包括任何必要的修改或反馈。存储于NAS：<span class="nas-path">[项目名称]/Phase 1 - Concept/04_Concept_Selection_Notes.docx</span>', primaryRole: 'LE' }, { summary: '产品简报澄清文档 (来自阶段1)', details: '对产品需求的精确理解。存储于NAS：<span class="nas-path">[项目名称]/Phase 1 - Concept/01_Product_Brief_Clarifications.docx</span>', primaryRole: 'LE' } ] },
                { title_key: 'section_action_eng_team', type: 'action', items: [ { summary: '开发详细3D CAD模型 (V0.1)', details: '创建选定概念的详细3D CAD模型。 (EPDVP 2.1)', primaryRole: 'DE' }, { summary: '创建初步2D图纸 (V0.1)', details: '生成包含关键尺寸的初步2D图纸。 (EPDVP 2.1)', primaryRole: 'DE' }, { summary: '起草初步物料清单 (BOM V0.1)', details: '识别主要组件并起草初步BOM。 (EPDVP 2.1)', primaryRole: 'DE' }, ] },
                { title_key: 'section_output', type: 'output', items: [ '详细CAD文件 (V0.1), 2D图纸 (V0.1), BOM (V0.1)。存储于NAS版本控制的子文件夹中：<span class="nas-path">[项目名称]/Phase 2 – Detailed Design & LowFi Proto/01_Design_V0.1/</span>' ] },
                { title_key: 'section_action_le', type: 'action', items: [ { summary: '确定低保真验证的关键方面', details: '确定通过低保真原型验证的关键设计方面（例如，整体尺寸、关键部件接口、基本机制）。 (EPDVP 2.2)', primaryRole: 'LE' }, { summary: '确定原型制作方法', details: '确定创建这些原型的最快、最具成本效益的方法（例如，用于外壳的FDM 3D打印、用于扁平零件的激光切割亚克力板、手动组装模型）。 (EPDVP 2.2)', primaryRole: 'LE' }, ] },
                { title_key: 'section_output', type: 'output', items: [ '低保真原型计划。存储于NAS：<span class="nas-path">[项目名称]/Phase 2 – Detailed Design & LowFi Proto/02_LowFi_Proto_Plan.docx</span>' ] },
                { title_key: 'section_action_eng_team', type: 'action', items: [ { summary: '制作/组装低保真原型', details: '使用内部3D打印机、激光切割机、基本车间工具。专注于快速验证形状、配合和基本概念。此阶段美学和最终材料是次要的。 (EPDVP 2.3)', primaryRole: 'DE' }, { summary: '对原型进行内部工程评审', details: '识别直接的设计缺陷、装配问题或不正确的假设。 (EPDVP 2.3)', primaryRole: 'LE' }, { summary: '迭代设计 (CAD V0.2, V0.3 等)', details: '根据初步检查的需要重新制作原型。每次迭代都必须记录。 (EPDVP 2.3)', primaryRole: 'DE' }, ] },
                { title_key: 'section_action_le', type: 'action', items: [ { summary: '标记并保留基准低保真原型', details: '首个展示核心概念的完整物理模型/原型应清晰标记（例如，“LoFi-Proto-A-[日期]-[项目]”）并由工程部门保留作为此阶段的基准参考。 (EPDVP 2.3)', primaryRole: 'LE'} ] },
                { title_key: 'section_output', type: 'output', items: [ '物理低保真原型（例如，“Prototype V0.3 - [日期] - [项目名称]”）。', '原型的照片/视频。', '关于迭代期间的发现、问题和修改的说明。', '更新的CAD文件 (V0.x), 2D图纸 (V0.x), BOM (V0.x)。', '所有输出存储于NAS：<span class="nas-path">[项目名称]/Phase 2 – Detailed Design & LowFi Proto/03_LowFi_Prototypes_and_Iterations/</span> (每个迭代有子文件夹)。' ] },
                { title_key: 'section_action_le', type: 'action', items: [ { summary: '向产品经理呈报最稳定的低保真原型', details: '首席工程师（Mark）向产品经理（Umer）呈报最稳定的低保真原型及迭代发现。 (EPDVP 2.4)', primaryRole: 'LE' }, { summary: '讨论概念实现与挑战', details: '讨论原型实现初始概念的程度。强调遇到的任何重大偏差或挑战。 (EPDVP 2.4)', primaryRole: 'LE' }, ] },
                { title_key: 'section_action_pm', type: 'action', items: [ { summary: '批准设计方向或要求进一步迭代', details: '产品经理（Umer）基于低保真验证批准设计方向，为高保真原型提供反馈，或者如果核心概念问题仍然存在，则要求进一步的低保真迭代。 (EPDVP 2.4)', primaryRole: 'PM'}, ] },
                { title_key: 'section_output', type: 'output', items: [ '记录的反馈和继续进行的批准。存储于NAS：<span class="nas-path">[项目名称]/Phase 2 – Detailed Design & LowFi Proto/04_LowFi_Proto_Review_Notes.docx</span>' ] }
            ],
            gate: { name: translations.cn['phase_2_name'] + ' - ' + '决策门 2: 设计冻结与低保真验证批准', purpose: '审查详细设计 (V0.x)、低保真原型及验证结果。“通过”决定意味着核心设计概念获得批准（“设计冻结”）并准备进入高保真原型制作阶段。', checklist_ref: 'DG2_Checklist' }
        }
    },
    'phase-3': {
        en: {
            title: translations.en.phase_3_name, 
            subtitle: translations.en.phase_3_tag,
            objective: 'To develop a highly refined and functional internal prototype that closely resembles the intended final product, validating core functionalities, assembly processes, and material considerations using in-house advanced machinery, culminating in the Pre-Production Design Package (PPDP).',
            sections: [
                { title_key: 'section_input', type: 'input', items: [ { summary: 'Approved Low-Fi Proto Review Notes (from DG2)', details: 'Documented feedback and approval from Phase 2, confirming the "Design Freeze." Stored in NAS: <span class="nas-path">[Project Name]/Phase 2 – Detailed Design & LowFi Proto/04_LowFi_Proto_Review_Notes.docx</span>', primaryRole: 'LE' }, { summary: 'Latest Iterated CAD (V0.x), 2D Drawings (V0.x), BOM (V0.x)', details: 'The most up-to-date design files from the low-fidelity prototyping phase. Stored in NAS: <span class="nas-path">[Project Name]/Phase 2 – Detailed Design & LowFi Proto/03_LowFi_Prototypes_and_Iterations/</span>', primaryRole: 'LE' } ] },
                { title_key: 'section_action_eng_team', type: 'action', items: [ { summary: 'Incorporate Feedback into CAD Models (V1.0)', details: 'Incorporate feedback from the low-fidelity prototype review into the CAD models to create Version 1.0. (EPDVP 3.1)', primaryRole: 'DE' }, { summary: 'Develop Detailed Designs for All Components', details: 'Including internal structures, mounting points, and interfaces for electronics (if applicable). (EPDVP 3.1)', primaryRole: 'DE' }, { summary: 'Material Selection', details: 'Specify materials for each component that are either the final intended material or a close proxy achievable with in-house machinery (e.g., specific grades of aluminium for CNC, engineering-grade plastics for 3D printing). (EPDVP 3.1)', primaryRole: 'LE' }, { summary: 'Update 2D Drawings (V1.0)', details: 'Update with full dimensions, tolerances, material specifications, and finishing notes. (EPDVP 3.1)', primaryRole: 'DE' }, { summary: 'Update Bill of Materials (BOM V1.0)', details: 'Update with detailed component information and potential sources for standard/perpetual parts (for engineering reference, not yet for purchasing). (EPDVP 3.1)', primaryRole: 'DE' }, ] },
                { title_key: 'section_output', type: 'output', items: [ 'Highly detailed CAD files (V1.0), comprehensive 2D drawings (V1.0), detailed BOM (V1.0). Store in version-controlled subfolders in NAS: <span class="nas-path">[Project Name]/Phase 3 - Refined Design & HiFi Proto/01_Design_V1.0/</span>' ] },
                { title_key: 'section_action_le', type: 'action', items: [ { summary: 'Identify Components for In-House Hi-Fi Fabrication', details: 'Identify components suitable for fabrication using in-house CNC machines, laser cutters, advanced 3D printers (e.g., SLA/SLS if available), and workshop tools. (EPDVP 3.2)', primaryRole: 'LE' }, { summary: 'Identify External Rapid Prototyping Needs (Exception)', details: 'For any critical small components that cannot be adequately prototyped in-house to the required fidelity, and with PM (Umer) approval only, identify specialized rapid prototyping services. Control remains with Engineering. (EPDVP 3.2)', primaryRole: 'LE' }, { summary: 'Plan Fabrication & Assembly Sequence', details: 'Plan the sequence of fabrication and assembly for the high-fidelity prototype. (EPDVP 3.2)', primaryRole: 'LE' }, { summary: 'Define Specific Functional Tests', details: 'Define tests to be performed (e.g., mechanism actuation, electronic integration, structural integrity under basic loads). (EPDVP 3.2)', primaryRole: 'LE' }, ] },
                { title_key: 'section_output', type: 'output', items: [ 'High-Fidelity Prototyping Plan, including any approved external rapid prototyping needs. Store in NAS: <span class="nas-path">[Project Name]/Phase 3 - Refined Design & HiFi Proto/02_HiFi_Proto_Plan.docx</span>' ] },
                { title_key: 'section_action_eng_team', type: 'action', items: [ { summary: 'Fabricate Hi-Fi Components', details: 'Fabricate components using designated in-house machinery (CNC, laser cutter, 3D printers). (EPDVP 3.3)', primaryRole: 'DE' }, { summary: 'Assemble Hi-Fi Prototype(s)', details: 'Assemble the high-fidelity prototype(s). Focus: Achieving a prototype that is functionally and aesthetically as close as possible to the intended production unit using internal capabilities. (EPDVP 3.3)', primaryRole: 'DE' }, { summary: 'Document Assembly Process', details: 'Note any difficulties, required jigs/fixtures (can also be prototyped in-house), or potential improvements. (EPDVP 3.3)', primaryRole: 'DE' }, { summary: 'Conduct & Document Functional Tests', details: 'Record pass/fail results, observations, and any measurements. (EPDVP 3.3)', primaryRole: 'DE' }, { summary: 'Iterate on Components & Re-test (Small Iterations)', details: 'If initial high-fidelity prototypes reveal issues, iterate on specific components and re-test. Small iterations are expected. (EPDVP 3.3)', primaryRole: 'DE' }, ] },
                { title_key: 'section_output', type: 'output', items: [ 'Physical high-fidelity prototype(s) (e.g., "HiFi-Proto-V1.1 - [Date] - [Project Name]"). Clearly label and retain.', 'Photos/videos of prototypes, assembly steps, and functional tests.', 'Detailed Assembly Notes & Observations.', 'Functional Test Reports with results.', 'Any minor revisions to CAD files (V1.x), 2D drawings (V1.x), BOM (V1.x).', 'All stored in NAS: <span class="nas-path">[Project Name]/Phase 3 – Refined Design & HiFi Proto/03_HiFi_Prototypes_and_Testing/</span> (with subfolders for iterations).' ] },
                { title_key: 'section_action_eng_team', type: 'action', items: [ { summary: 'Conduct DFM/DFA Review', details: 'Critically review the high-fidelity prototype and its assembly process from a DFM/DFA perspective, considering mass production. Participants: LE (Mark), Key DEs, (Optional: engineer from a different project for fresh eyes). (EPDVP 3.4)', primaryRole: 'LE' }, { summary: 'Identify Complex/Costly Features & Difficult Assembly Steps', details: 'Identify features hard to manufacture at scale or assembly steps that are difficult, error-prone, or time-consuming. (EPDVP 3.4)', primaryRole: 'LE' }, { summary: 'Brainstorm Simplifications & Pre-empt Supplier Issues', details: 'Brainstorm design simplifications or modifications to improve manufacturability/assembly without compromising core function/aesthetics. Consider common supplier issues. (EPDVP 3.4)', primaryRole: 'LE' }, ] },
                { title_key: 'section_output', type: 'output', items: [ 'DFM/DFA Review Report with actionable recommendations. Store in NAS: <span class="nas-path">[Project Name]/Phase 3 - Refined Design & HiFi Proto/04_DFM_DFA_Review.docx</span>' ] },
                { title_key: 'section_action_eng_team', type: 'action', items: [ { summary: 'Implement Design Changes (Release Candidate)', details: 'Implement necessary design changes based on functional testing and DFM/DFA review. This creates the "Release Candidate" design. (EPDVP 3.5)', primaryRole: 'DE' }, { summary: 'Finalize All 2D Drawings (Full Specs)', details: 'Complete specifications, tolerances, material callouts, finishing requirements (e.g., painting, plating), and critical-to-quality (CTQ) features highlighted. (EPDVP 3.5)', primaryRole: 'DE' }, { summary: 'Finalize BOM ("Ready for Quotation" Version)', details: 'Include part numbers, descriptions, quantities, specified materials, and identified potential perpetual parts. (EPDVP 3.5)', primaryRole: 'DE' }, { summary: 'Compile Preliminary Assembly Guide', details: 'With key steps (visuals preferred). (EPDVP 3.5)', primaryRole: 'DE' }, { summary: 'Create "Known Issues & Considerations" Document (if applicable)', details: 'If any minor, acceptable trade-offs or specific supplier attention points were identified. (EPDVP 3.5)', primaryRole: 'LE' }, ] },
                { title_key: 'section_output', type: 'output', items: [ '<strong>Pre-Production Design Package (PPDP V1.0)</strong>. This package contains:', '<ul><li>Final 3D CAD Models (e.g., V1.F or V2.0)</li><li>Final, fully dimensioned 2D Drawings for all components and assemblies.</li><li>Final Bill of Materials ("Ready for Quotation").</li><li>Preliminary Assembly Guide.</li><li>DFM/DFA Review Report.</li><li>Functional Test Reports for the internal high-fidelity prototype.</li><li>"Known Issues & Considerations" document (if applicable).</li></ul>', 'This entire package is version controlled (e.g., PPDP V1.0) and stored in a clearly marked subfolder: <span class="nas-path">[Project Name]/Phase 3 - Refined Design & HiFi Proto/05_Pre-Production_Design_Package_V1.0/</span>' ] }
            ],
            gate: { name: translations.en['phase_3_name'] + ' - ' + 'Decision Gate 3: PPDP Handoff', purpose: 'To formally confirm that the design is mature, internally validated via high-fidelity prototypes, fully documented in the PPDP, and ready for Purchasing to engage external suppliers for sample production.', checklist_ref: 'DG3_Checklist' }
        },
        cn: {
            title: translations.cn.phase_3_name, 
            subtitle: translations.cn.phase_3_tag,
            objective: '开发一个高度精细且功能齐全的内部原型，使其尽可能接近最终产品的预期形态，使用内部先进设备验证核心功能、装配流程和材料考量，最终产出预生产设计包 (PPDP)。',
            sections: [
                { title_key: 'section_input', type: 'input', items: [ { summary: '已批准的低保真原型评审纪要 (来自DG2)', details: '阶段2的已记录反馈和批准，确认“设计冻结”。存储于NAS：<span class="nas-path">[项目名称]/Phase 2 – Detailed Design & LowFi Proto/04_LowFi_Proto_Review_Notes.docx</span>', primaryRole: 'LE' }, { summary: '最新迭代的CAD (V0.x), 2D图纸 (V0.x), BOM (V0.x)', details: '低保真原型阶段最新的设计文件。存储于NAS：<span class="nas-path">[项目名称]/Phase 2 – Detailed Design & LowFi Proto/03_LowFi_Prototypes_and_Iterations/</span>', primaryRole: 'LE' } ] },
                { title_key: 'section_action_eng_team', type: 'action', items: [ { summary: '将反馈整合到CAD模型 (V1.0)', details: '将低保真原型评审的反馈整合到CAD模型中，创建V1.0版本。 (EPDVP 3.1)', primaryRole: 'DE' }, { summary: '为所有组件开发详细设计', details: '包括内部结构、安装点和电子设备接口（如适用）。 (EPDVP 3.1)', primaryRole: 'DE' }, { summary: '材料选择', details: '为每个组件指定材料，这些材料要么是最终预期材料，要么是可通过内部设备实现的相近替代品（例如，用于CNC的特定等级铝材，用于3D打印的工程级塑料）。 (EPDVP 3.1)', primaryRole: 'LE' }, { summary: '更新2D图纸 (V1.0)', details: '更新完整的尺寸、公差、材料规格和表面处理说明。 (EPDVP 3.1)', primaryRole: 'DE' }, { summary: '更新物料清单 (BOM V1.0)', details: '更新详细的组件信息以及标准/通用部件的潜在来源（供工程参考，非采购）。 (EPDVP 3.1)', primaryRole: 'DE' }, ] },
                { title_key: 'section_output', type: 'output', items: [ '高度详细的CAD文件 (V1.0), 完整的2D图纸 (V1.0), 详细的BOM (V1.0)。存储于NAS版本控制的子文件夹中：<span class="nas-path">[项目名称]/Phase 3 - Refined Design & HiFi Proto/01_Design_V1.0/</span>' ] },
                { title_key: 'section_action_le', type: 'action', items: [ { summary: '确定适合内部高保真制作的组件', details: '确定适合使用内部CNC机床、激光切割机、高级3D打印机（如SLA/SLS，若有）和车间工具制作的组件。 (EPDVP 3.2)', primaryRole: 'LE' }, { summary: '确定外部快速原型需求（例外情况）', details: '对于任何无法在内部以所需保真度充分制作原型的关键小型组件，并且仅在产品经理（Umer）批准的情况下，确定专门的快速原型服务。控制权仍在工程部门。 (EPDVP 3.2)', primaryRole: 'LE' }, { summary: '规划制作与装配顺序', details: '规划高保真原型的制作和装配顺序。 (EPDVP 3.2)', primaryRole: 'LE' }, { summary: '定义具体功能测试', details: '定义要执行的测试（例如，机构驱动、电子集成、基本负载下的结构完整性）。 (EPDVP 3.2)', primaryRole: 'LE' }, ] },
                { title_key: 'section_output', type: 'output', items: [ '高保真原型计划，包括任何已批准的外部快速原型需求。存储于NAS：<span class="nas-path">[项目名称]/Phase 3 - Refined Design & HiFi Proto/02_HiFi_Proto_Plan.docx</span>' ] },
                { title_key: 'section_action_eng_team', type: 'action', items: [ { summary: '制作高保真组件', details: '使用指定的内部设备（CNC、激光切割机、3D打印机）制作组件。 (EPDVP 3.3)', primaryRole: 'DE' }, { summary: '组装高保真原型', details: '组装高保真原型。重点：利用内部能力实现功能上和美学上尽可能接近预期生产单位的原型。 (EPDVP 3.3)', primaryRole: 'DE' }, { summary: '记录装配过程', details: '记录任何困难、所需的夹具/固定装置（也可内部制作原型）或潜在的改进。 (EPDVP 3.3)', primaryRole: 'DE' }, { summary: '执行并记录功能测试', details: '记录通过/失败结果、观察结果和任何测量数据。 (EPDVP 3.3)', primaryRole: 'DE' }, { summary: '迭代组件并重新测试（小幅迭代）', details: '如果初步的高保真原型发现问题，则对特定组件进行迭代并重新测试。预期会有小幅迭代。 (EPDVP 3.3)', primaryRole: 'DE' }, ] },
                { title_key: 'section_output', type: 'output', items: [ '物理高保真原型（例如，“HiFi-Proto-V1.1 - [日期] - [项目名称]”）。清晰标记并保留。', '原型的照片/视频、装配步骤和功能测试。', '详细的装配说明和观察结果。', '包含结果的功能测试报告。', '对CAD文件 (V1.x)、2D图纸 (V1.x)、BOM (V1.x) 的任何微小修订。', '所有输出存储于NAS：<span class="nas-path">[项目名称]/Phase 3 – Refined Design & HiFi Proto/03_HiFi_Prototypes_and_Testing/</span> (每个迭代有子文件夹)。' ] },
                { title_key: 'section_action_eng_team', type: 'action', items: [ { summary: '进行DFM/DFA评审', details: '从DFM/DFA角度（考虑批量生产）严格评审高保真原型及其装配过程。参与者：首席工程师（Mark）、关键设计工程师，（可选：来自不同项目的工程师以提供新视角）。 (EPDVP 3.4)', primaryRole: 'LE' }, { summary: '识别复杂/昂贵特征及困难装配步骤', details: '识别难以规模化制造的特征或困难、易错、耗时的装配步骤。 (EPDVP 3.4)', primaryRole: 'LE' }, { summary: '头脑风暴简化方案并预判供应商问题', details: '在不影响核心功能/美学的前提下，为改进可制造性/装配性而进行设计简化或修改的头脑风暴。考虑常见的供应商问题。 (EPDVP 3.4)', primaryRole: 'LE' }, ] },
                { title_key: 'section_output', type: 'output', items: [ '包含可行动建议的DFM/DFA评审报告。存储于NAS：<span class="nas-path">[项目名称]/Phase 3 - Refined Design & HiFi Proto/04_DFM_DFA_Review.docx</span>' ] },
                { title_key: 'section_action_eng_team', type: 'action', items: [ { summary: '实施设计变更（发布候选版）', details: '根据功能测试和DFM/DFA评审结果实施必要的设计变更。这将创建“发布候选版”设计。 (EPDVP 3.5)', primaryRole: 'DE' }, { summary: '完成所有2D图纸（完整规格）', details: '包括完整的规格、公差、材料标示、表面处理要求（如喷漆、电镀）以及关键质量特性（CTQ）的强调。 (EPDVP 3.5)', primaryRole: 'DE' }, { summary: '完成BOM（“可报价”版本）', details: '包括零件编号、描述、数量、指定材料和已识别的潜在永久性部件。 (EPDVP 3.5)', primaryRole: 'DE' }, { summary: '编写初步装配指南', details: '包含关键步骤（首选图示）。 (EPDVP 3.5)', primaryRole: 'DE' }, { summary: '创建“已知问题与考量”文档（如适用）', details: '如果确定了任何微小的、可接受的权衡或特定的供应商注意点。 (EPDVP 3.5)', primaryRole: 'LE' }, ] },
                { title_key: 'section_output', type: 'output', items: [ '<strong>预生产设计包 (PPDP V1.0)</strong>。此包包含：', '<ul><li>最终3D CAD模型 (例如, V1.F 或 V2.0)</li><li>所有组件和装配体的最终、完整尺寸的2D图纸。</li><li>最终物料清单 (“可报价”版本)。</li><li>初步装配指南。</li><li>DFM/DFA评审报告。</li><li>内部高保真原型的功能测试报告。</li><li>“已知问题与考量”文档 (如适用)。</li></ul>', '整个包进行版本控制 (例如, PPDP V1.0) 并存储在清晰标记的子文件夹中：<span class="nas-path">[项目名称]/Phase 3 - Refined Design & HiFi Proto/05_Pre-Production_Design_Package_V1.0/</span>' ] }
            ],
            gate: { name: translations.cn['phase_3_name'] + ' - ' + '决策门 3: PPDP交接', purpose: '正式确认设计成熟，通过高保真原型内部验证，完整记录于PPDP，并准备好由采购部门对接外部供应商进行样品生产。', checklist_ref: 'DG3_Checklist' }
        }
    },
    'phase-4': {
        en: {
            title: translations.en.phase_4_name, 
            subtitle: translations.en.phase_4_tag,
            objective: 'For the Purchasing Department to source capable suppliers, obtain quotes, and manage the production of external samples based on the approved Pre-Production Design Package (PPDP), culminating in approved Golden Samples.',
            sections: [
                { title_key: 'section_input', type: 'input', items: [ { summary: 'Approved Pre-Production Design Package (PPDP V1.x from DG3)', details: 'The official, validated engineering package. Access provided via NAS. Notification via Trello/Direct Communication. (EPDVP 4.1 Prerequisite)', primaryRole: 'Purchasing' }, { summary: 'Official Handoff of PPDP from Engineering to Purchasing', details: 'Successful completion of DG3 is the prerequisite. (EPDVP 4.1 Prerequisite)', primaryRole: 'Admin' } ] },
                { title_key: 'section_action_purchasing', type: 'action', items: [ { summary: 'Thoroughly Review PPDP', details: 'Understand components, materials, specifications, tolerances, and quantities required for sample production. (EPDVP 4.1)', primaryRole: 'Purchasing' }, { summary: 'Review "Known Issues & Considerations" Document', details: 'Review any specific notes from Engineering. (EPDVP 4.1)', primaryRole: 'Purchasing' }, { summary: 'Clarify Ambiguities with Lead Engineer (Mark)', details: 'Address any questions *before* contacting suppliers. (EPDVP 4.1)', primaryRole: 'Purchasing' }, ] },
                { title_key: 'section_output', type: 'output', items: [ 'Purchasing team has a full understanding of the sample requirements.' ] },
                { title_key: 'section_action_purchasing', type: 'action', items: [ { summary: 'Identify & Shortlist Potential Suppliers', details: 'Based on PPDP (material specs, manufacturing processes, tolerances, quality expectations), identify and shortlist potential suppliers for each component. (EPDVP 4.2)', primaryRole: 'Purchasing' }, { summary: 'Prioritize Existing Approved Limi Suppliers', details: 'Prioritize those with demonstrated capability for similar parts. (EPDVP 4.2)', primaryRole: 'Purchasing' }, { summary: 'Vet New Suppliers (if needed)', details: 'For specialized processes not covered by current vendors, conduct preliminary vetting (basic capability check, reputation). (EPDVP 4.2)', primaryRole: 'Purchasing' }, { summary: 'Refer to Engineering Preferences/Supplier Grading', details: 'Consider any Engineering preferences or supplier grading information. (EPDVP 4.2)', primaryRole: 'Purchasing' }, ] },
                { title_key: 'section_output', type: 'output', items: [ 'Shortlist of 2-3 potential suppliers per key component/assembly. Store in NAS: <span class="nas-path">[Project Name]/Phase 4 – External Sampling/01_Supplier_Shortlist.xlsx</span>' ] },
                { title_key: 'section_action_purchasing', type: 'action', items: [ { summary: 'Prepare & Send RFQ Packages', details: 'To shortlisted suppliers. RFQ must include: Relevant 2D/3D models from PPDP, clear material/finishing specs, critical tolerances, required sample quantity (typically 3-5 units or as specified by Engineering/PM), requested lead time, clear statement for sample validation & quality adherence. (EPDVP 4.3)', primaryRole: 'Purchasing' }, { summary: 'Track RFQ Responses', details: 'Monitor supplier responses. (EPDVP 4.3)', primaryRole: 'Purchasing' }, ] },
                { title_key: 'section_output', type: 'output', items: [ 'Sent RFQs and supplier response tracking. Store RFQ packages and responses in NAS: <span class="nas-path">[Project Name]/Phase 4 - External Sampling/02_RFQs_and_Responses/</span>' ] },
                { title_key: 'section_action_purchasing', type: 'action', items: [ { summary: 'Analyse Quotations', details: 'Based on price, lead time, stated capabilities, understanding of requirements. (Input from LE if needed for technical capability assessment). (EPDVP 4.4)', primaryRole: 'Purchasing' }, { summary: 'CRITICAL: Validate Supplier Quotes', details: 'Against known market rates for materials/processes to avoid significant over/under-pricing. (EPDVP 4.4)', primaryRole: 'Purchasing' }, { summary: 'Clarify Discrepancies with Suppliers', details: 'Address any concerns. (EPDVP 4.4)', primaryRole: 'Purchasing' }, { summary: 'Select Most Suitable Supplier(s) for Samples', details: 'Consider splitting samples across 2 suppliers for critical new parts if risk is high and budget allows (with PM approval). (EPDVP 4.4)', primaryRole: 'Purchasing' }, { summary: 'Negotiate Final Terms for Sample Production', details: 'Finalize terms. (EPDVP 4.4)', primaryRole: 'Purchasing' }, ] },
                { title_key: 'section_output', type: 'output', items: [ 'Supplier Selection Report for Samples, including justification. Store in NAS: <span class="nas-path">[Project Name]/Phase 4 - External Sampling/03_Sample_Supplier_Selection.docx</span>' ] },
                { title_key: 'section_action_purchasing', type: 'action', items: [ { summary: 'Prepare Sample Purchase Orders (POs)', details: '(EPDVP 4.5)', primaryRole: 'Purchasing' }, { summary: 'Obtain Financial Approvals for Sample Expenditure', details: 'From Product Manager/Management as per company policy. (EPDVP 4.5)', primaryRole: 'Purchasing' }, { summary: 'Issue POs to Selected Suppliers', details: '(EPDVP 4.5)', primaryRole: 'Purchasing' }, ] },
                { title_key: 'section_output', type: 'output', items: [ 'Approved Sample POs. Store in NAS: <span class="nas-path">[Project Name]/Phase 4 - External Sampling/04_Sample_POs/</span>. Update Trello status to "Samples Ordered - [Supplier Name] - ETA [Date]".' ] },
                { title_key: 'section_action_purchasing', type: 'action', items: [ { summary: 'Maintain Regular Supplier Contact', details: 'Monitor sample production progress. (EPDVP 4.6)', primaryRole: 'Purchasing' }, { summary: 'Proactively Address Delays/Issues', details: 'Address any potential delays or issues raised by suppliers. (EPDVP 4.6)', primaryRole: 'Purchasing' }, { summary: 'Coordinate Logistics for Sample Delivery', details: '(EPDVP 4.6)', primaryRole: 'Purchasing' }, ] },
                { title_key: 'section_output', type: 'output', items: [ 'Regular status updates logged.' ] },
                { title_key: 'section_action_purchasing', type: 'action', items: [ { summary: 'Receive Delivered Samples', details: '(EPDVP 4.7)', primaryRole: 'Purchasing' }, { summary: 'Conduct Immediate Initial Verification', details: 'Correct quantity? Parts match PO? Visible shipping damage? Basic visual match to drawings (cursory check, not full QC). (EPDVP 4.7)', primaryRole: 'Purchasing' }, { summary: 'Document & Escalate Major Discrepancies/Damage', details: 'If major issues, immediately contact supplier and document. (EPDVP 4.7)', primaryRole: 'Purchasing' }, ] },
                { title_key: 'section_output', type: 'output', items: [ 'Sample Reception Note, documenting date received, quantity, initial observations. Store in NAS: <span class="nas-path">[Project Name]/Phase 4 – External Sampling/05_Sample_Reception_Notes/</span>. Notify Engineering and QC that samples have arrived. Update Trello.' ] }
            ],
            gate: { name: translations.en['phase_4_name'] + ' - ' + 'Decision Gate 4: External Sample Approval & Golden Sample Established', purpose: 'To thoroughly evaluate externally produced samples against the PPDP, establish "Golden Samples", and confirm readiness for a Trial Production run.', checklist_ref: 'DG4_Checklist' }
        },
        cn: {
            title: translations.cn.phase_4_name, 
            subtitle: translations.cn.phase_4_tag,
            objective: '由采购部门根据已批准的预生产设计包 (PPDP) 寻找合格供应商、获取报价，并管理外部样品的生产，最终产出经批准的黄金样品。',
            sections: [
                { title_key: 'section_input', type: 'input', items: [ { summary: '已批准的预生产设计包 (来自DG3的PPDP V1.x)', details: '官方的、经验证的工程包。通过NAS提供访问权限。通过Trello/直接沟通通知。 (EPDVP 4.1 前提条件)', primaryRole: 'Purchasing' }, { summary: '工程部门向采购部门正式移交PPDP', details: '成功完成DG3是前提条件。 (EPDVP 4.1 前提条件)', primaryRole: 'Admin' } ] },
                { title_key: 'section_action_purchasing', type: 'action', items: [ { summary: '彻底评审PPDP', details: '理解样品生产所需的组件、材料、规格、公差和数量。 (EPDVP 4.1)', primaryRole: 'Purchasing' }, { summary: '评审“已知问题与考量”文档', details: '评审工程部门提供的任何特定说明。 (EPDVP 4.1)', primaryRole: 'Purchasing' }, { summary: '与首席工程师 (Mark) 澄清模糊之处', details: '在联系供应商*之前*解决任何问题。 (EPDVP 4.1)', primaryRole: 'Purchasing' }, ] },
                { title_key: 'section_output', type: 'output', items: [ '采购团队完全理解样品需求。' ] },
                { title_key: 'section_action_purchasing', type: 'action', items: [ { summary: '识别并筛选潜在供应商', details: '根据PPDP（材料规格、所需制造工艺、公差、质量期望），为每个组件识别并筛选潜在供应商。 (EPDVP 4.2)', primaryRole: 'Purchasing' }, { summary: '优先考虑Limi现有已批准供应商', details: '优先选择在类似零件方面已证明能力的供应商。 (EPDVP 4.2)', primaryRole: 'Purchasing' }, { summary: '审查新供应商（如需要）', details: '对于当前供应商无法覆盖的专业工艺，进行初步审查（基本能力检查、声誉）。 (EPDVP 4.2)', primaryRole: 'Purchasing' }, { summary: '参考工程偏好/供应商评级', details: '考虑任何工程偏好或供应商评级信息。 (EPDVP 4.2)', primaryRole: 'Purchasing' }, ] },
                { title_key: 'section_output', type: 'output', items: [ '每个关键组件/装配体的2-3家潜在供应商短名单。存储于NAS：<span class="nas-path">[项目名称]/Phase 4 – External Sampling/01_Supplier_Shortlist.xlsx</span>' ] },
                { title_key: 'section_action_purchasing', type: 'action', items: [ { summary: '准备并发送RFQ包', details: '发送给入围供应商。RFQ必须包括：来自PPDP的相关2D/3D模型，清晰的材料/表面处理规格，关键公差，所需样品数量（通常3-5个，或由工程/PM指定），要求的交货期，明确声明用于样品验证且质量至上。 (EPDVP 4.3)', primaryRole: 'Purchasing' }, { summary: '追踪RFQ回复', details: '监控供应商回复情况。 (EPDVP 4.3)', primaryRole: 'Purchasing' }, ] },
                { title_key: 'section_output', type: 'output', items: [ '已发送的RFQ及供应商回复追踪。将RFQ包和回复存储于NAS：<span class="nas-path">[项目名称]/Phase 4 - External Sampling/02_RFQs_and_Responses/</span>' ] },
                { title_key: 'section_action_purchasing', type: 'action', items: [ { summary: '分析报价', details: '基于价格、交货期、声明的能力、对需求的理解。（如需技术能力评估，可咨询首席工程师）。 (EPDVP 4.4)', primaryRole: 'Purchasing' }, { summary: '关键：验证供应商报价', details: '对照已知的材料/工艺市场价格，避免严重的过高/过低报价。 (EPDVP 4.4)', primaryRole: 'Purchasing' }, { summary: '与供应商澄清差异', details: '解决任何疑虑。 (EPDVP 4.4)', primaryRole: 'Purchasing' }, { summary: '选择最合适的样品供应商', details: '如果风险高且预算允许（需PM批准），可考虑将关键新零件的样品分散给2家供应商。 (EPDVP 4.4)', primaryRole: 'Purchasing' }, { summary: '商定样品生产的最终条款', details: '敲定条款。 (EPDVP 4.4)', primaryRole: 'Purchasing' }, ] },
                { title_key: 'section_output', type: 'output', items: [ '样品供应商选择报告，包括理由。存储于NAS：<span class="nas-path">[项目名称]/Phase 4 - External Sampling/03_Sample_Supplier_Selection.docx</span>' ] },
                { title_key: 'section_action_purchasing', type: 'action', items: [ { summary: '准备样品采购订单 (POs)', details: '(EPDVP 4.5)', primaryRole: 'Purchasing' }, { summary: '获取样品支出财务批准', details: '根据公司政策，从产品经理/管理层获取。 (EPDVP 4.5)', primaryRole: 'Purchasing' }, { summary: '向选定供应商下达PO', details: '(EPDVP 4.5)', primaryRole: 'Purchasing' }, ] },
                { title_key: 'section_output', type: 'output', items: [ '已批准的样品POs。存储于NAS：<span class="nas-path">[项目名称]/Phase 4 - External Sampling/04_Sample_POs/</span>。更新Trello状态为“样品已订购 - [供应商名称] -预计到达日期 [日期]”。' ] },
                { title_key: 'section_action_purchasing', type: 'action', items: [ { summary: '保持与供应商定期联系', details: '监控样品生产进度。 (EPDVP 4.6)', primaryRole: 'Purchasing' }, { summary: '主动处理延误/问题', details: '处理供应商提出的任何潜在延误或问题。 (EPDVP 4.6)', primaryRole: 'Purchasing' }, { summary: '协调样品交付物流', details: '(EPDVP 4.6)', primaryRole: 'Purchasing' }, ] },
                { title_key: 'section_output', type: 'output', items: [ '定期状态更新已记录。' ] },
                { title_key: 'section_action_purchasing', type: 'action', items: [ { summary: '接收已交付样品', details: '(EPDVP 4.7)', primaryRole: 'Purchasing' }, { summary: '进行即时初步验证', details: '数量是否正确？零件是否与PO描述相符？有无明显运输损坏？与图纸基本外观是否匹配（初步检查，非全面QC）。 (EPDVP 4.7)', primaryRole: 'Purchasing' }, { summary: '记录并上报重大差异/损坏', details: '如遇重大问题，立即联系供应商并记录。 (EPDVP 4.7)', primaryRole: 'Purchasing' }, ] },
                { title_key: 'section_output', type: 'output', items: [ '样品接收记录，记录收到日期、数量、初步观察。存储于NAS：<span class="nas-path">[项目名称]/Phase 4 – External Sampling/05_Sample_Reception_Notes/</span>。通知工程和QC样品已到达。更新Trello。' ] }
            ],
            gate: { name: translations.cn['phase_4_name'] + ' - ' + '决策门 4: 外部样品批准与黄金样品确立', purpose: '全面评估外部生产的样品是否符合PPDP要求，确立“黄金样品”，并确认已为试生产运行做好准备。', checklist_ref: 'DG4_Checklist' }
        }
    },
    'phase-5': {
        en: {
            title: translations.en.phase_5_name, 
            subtitle: translations.en.phase_5_tag,
            objective: 'To conduct a small-batch trial production run using the approved Golden Samples and drafted documentation to validate the entire manufacturing and assembly process in a production-like environment, finalize all procedures, and confirm readiness for mass production.',
            sections: [
                { title_key: 'section_input', type: 'input', items: [ { summary: 'Approved & Documented Golden Samples (from DG4/Phase 4)', details: 'The benchmark for mass production quality. (EPDVP Sec 6 Prerequisite)', primaryRole: 'Production' }, { summary: 'Pre-Production Design Package (PPDP - latest approved version)', details: 'Contains final drawings, BOM, specs. (EPDVP Sec 6 Prerequisite)', primaryRole: 'Production' }, { summary: 'Draft Assembly Instructions, QC Checklists, Packaging Instructions', details: 'Developed based on internal prototyping and initial external sample assembly. (EPDVP Sec 6 Prerequisite)', primaryRole: 'Production' } ] },
                { title_key: 'section_action_production', type: 'action', items: [ { summary: 'Determine Trial Production Run Quantity', details: 'E.g., 10-50 units, or enough to validate process stability and gather sufficient data. Agree with Product Manager (Umer). (EPDVP 6.1)', primaryRole: 'Production' }, { summary: 'Order Components for Trial Run (Action: Purchasing)', details: 'Purchasing places orders for exact components needed, referencing Golden Sample specs. IMPORTANT: Use a new batch if possible, not leftover samples, to test supplier consistency. (EPDVP 6.1)', primaryRole: 'Purchasing' }, { summary: 'Schedule Trial Production Run', details: 'Allocate necessary workspace, tools, equipment, and trained assembly personnel. (EPDVP 6.1)', primaryRole: 'Production' }, { summary: 'Ensure Draft Documentation Distribution', details: 'Assembly, QC, Packaging docs distributed to relevant personnel. (EPDVP 6.1)', primaryRole: 'Production' }, { summary: 'Plan for Data Collection', details: 'E.g., assembly times per station, defect rates, issues encountered. (EPDVP 6.1)', primaryRole: 'Production' }, ] },
                { title_key: 'section_output', type: 'output', items: [ 'Trial Production Plan, including schedule, resource allocation, and component order status. Store in NAS: <span class="nas-path">[Project Name]/Phase 6 – Trial Production/01_Trial_Production_Plan.xlsx</span>. Update Trello.' ] },
                { title_key: 'section_action_production', type: 'action', items: [ { summary: 'Conduct Pre-Trial Run Briefing', details: 'With assembly team, Engineering, and QC. (EPDVP 6.2)', primaryRole: 'Production' }, { summary: 'Review Golden Sample (Working Set) & Draft Docs', details: 'Review draft assembly instructions and QC checkpoints. (EPDVP 6.2)', primaryRole: 'Production' }, { summary: 'Set Up Assembly Line/Workstations', details: 'As intended for mass production (scaled down if necessary, but representative). Ensure all necessary tools, jigs, fixtures (prototyped/verified by Engineering) are in place and calibrated. (EPDVP 6.2)', primaryRole: 'Production' }, ] },
                { title_key: 'section_output', type: 'output', items: [ 'Workstations prepared, team briefed.' ] },
                { title_key: 'section_action_production', type: 'action', items: [ { summary: 'Execute Trial Production Run', details: 'According to draft assembly instructions. Monitored by Production Lead, Engineering, & QC. (EPDVP 6.3)', primaryRole: 'Production' }, { summary: 'CRITICAL: Engineering & QC Presence', details: 'Especially during initial units, to observe, provide immediate clarification, identify unforeseen issues, validate instruction clarity, and verify QC checks. (EPDVP 6.3)', primaryRole: 'LE' }, { summary: 'Data Collection During Trial Run', details: 'Record assembly times for key steps/stations. Track any defects found, their nature, and where they occurred. Note difficulties faced by assemblers. Collect feedback from the assembly team. (EPDVP 6.3)', primaryRole: 'Production' }, ] },
                { title_key: 'section_output', type: 'output', items: [ 'Assembled trial production units.', 'Detailed logs of assembly times, defects, issues, and feedback. Store in NAS: <span class="nas-path">[Project Name]/Phase 6 - Trial Production/02_Trial_Production_Logs_and_Data/</span>' ] },
                { title_key: 'section_action_production', type: 'action', items: [ { summary: 'Inspect All Trial Units', details: 'Against Golden Samples and QC standards. Participants: Production Lead, LE, QC Lead, Purchasing Rep (if component issues), PM. (EPDVP 6.4)', primaryRole: 'Production' }, { summary: 'Review Collected Data', details: 'Assembly times, defect rates, issues, feedback. (EPDVP 6.4)', primaryRole: 'Production' }, { summary: 'Analyse Process & Documentation Effectiveness', details: 'Identify bottlenecks, inefficiencies, or areas for improvement. Confirm if product can be consistently produced to required quality. (EPDVP 6.4)', primaryRole: 'Production' }, ] },
                { title_key: 'section_output', type: 'output', items: [ 'Trial Production Review Report, detailing findings, analysis, and recommendations. Store in NAS: <span class="nas-path">[Project Name]/Phase 6 – Trial Production/03_Trial_Production_Review_Report.docx</span>' ] },
                { title_key: 'section_action_le', type: 'action', items: [ { summary: 'Finalize Assembly SOPs / Assembly Guide', details: 'Incorporate trial run learnings. Make instructions clearer, add visuals, optimize sequence. (EPDVP 6.5)', primaryRole: 'LE' }, { summary: 'Finalize QC Checklists & Standards', details: 'Refine QC checks based on defects/issues found. Ensure checks are practical and effective. (EPDVP 6.5)', primaryRole: 'QC' }, { summary: 'Finalize Packaging Instructions', details: 'Confirm methods, materials, labelling protect the product adequately. (EPDVP 6.5)', primaryRole: 'LE' }, { summary: 'Finalize Tooling/Fixture List', details: 'Document all approved tools, jigs, and fixtures required for mass production. (EPDVP 6.5)', primaryRole: 'LE' }, { summary: 'Update PPDP (if minor DFM/DFA changes)', details: 'If any minor, non-functional changes for manufacturability were made and approved during trial production, PPDP MUST be updated (e.g., to V1.1) and approved by PM. Changes affecting form, fit, or function require re-looping to earlier validation. (EPDVP 6.5)', primaryRole: 'LE' }, ] },
                { title_key: 'section_output', type: 'output', items: [ '<strong>Final Production Package</strong>. This includes:', '<ul><li>Final Assembly SOP / Guide.</li><li>Final QC Checklists and Standards.</li><li>Final Packaging Instructions.</li><li>Approved Tooling & Fixture List.</li><li>Updated PPDP (if any minor DFM/DFA changes were made and approved).</li></ul>', 'This entire package is stored in a clearly marked subfolder: <span class="nas-path">[Project Name]/Phase 6 – Trial Production/04_Final_Production_Package/</span>. Trello updated.' ] }
            ],
            gate: { name: translations.en['phase_5_name'] + ' - ' + 'Decision Gate 5: Mass Production Readiness Approval', purpose: 'To formally approve the product, its components, and all associated manufacturing, assembly, QC, and packaging processes for full-scale mass production, based on successful trial production.', checklist_ref: 'DG5_Checklist' }
        },
        cn: {
            title: translations.cn.phase_5_name, 
            subtitle: translations.cn.phase_5_tag,
            objective: '使用已批准的黄金样品和起草的文档进行小批量试生产，在类似生产的环境中验证整个制造和装配过程，最终确定所有程序，并确认已为批量生产做好准备。',
            sections: [
                { title_key: 'section_input', type: 'input', items: [ { summary: '已批准并记录的黄金样品 (来自DG4/阶段4)', details: '量产质量的基准。 (EPDVP Sec 6 前提条件)', primaryRole: 'Production' }, { summary: '预生产设计包 (PPDP - 最新批准版本)', details: '包含最终图纸、BOM、规格。 (EPDVP Sec 6 前提条件)', primaryRole: 'Production' }, { summary: '装配说明书、QC检验表、包装说明书草稿', details: '基于内部原型制作和初步外部样品组装制定。 (EPDVP Sec 6 前提条件)', primaryRole: 'Production' } ] },
                { title_key: 'section_action_production', type: 'action', items: [ { summary: '确定试生产运行数量', details: '例如10-50件，或足以验证过程稳定性并收集足够数据。与产品经理（Umer）商定。 (EPDVP 6.1)', primaryRole: 'Production' }, { summary: '订购试生产组件 (行动：采购)', details: '采购部门根据黄金样品规格下达所需确切组件的订单。重要提示：如可能，请使用新批次，而非剩余样品，以测试供应商一致性。 (EPDVP 6.1)', primaryRole: 'Purchasing' }, { summary: '安排试生产运行', details: '分配必要的工作空间、工具、设备和训练有素的装配人员。 (EPDVP 6.1)', primaryRole: 'Production' }, { summary: '确保分发草稿文件', details: '将装配、QC、包装文件分发给相关人员。 (EPDVP 6.1)', primaryRole: 'Production' }, { summary: '规划数据收集', details: '例如，每工位装配时间、缺陷率、遇到的问题。 (EPDVP 6.1)', primaryRole: 'Production' }, ] },
                { title_key: 'section_output', type: 'output', items: [ '试生产计划，包括日程、资源分配和组件订单状态。存储于NAS：<span class="nas-path">[项目名称]/Phase 6 – Trial Production/01_Trial_Production_Plan.xlsx</span>。更新Trello。' ] },
                { title_key: 'section_action_production', type: 'action', items: [ { summary: '进行试生产前会议', details: '与装配团队、工程和QC人员。 (EPDVP 6.2)', primaryRole: 'Production' }, { summary: '评审黄金样品（工作集）和草稿文件', details: '评审装配说明书草稿和QC检查点。 (EPDVP 6.2)', primaryRole: 'Production' }, { summary: '设置装配线/工作站', details: '按照量产预期设置（如有必要可缩小规模，但需具代表性）。确保所有必要的工具、夹具、固定装置（由工程部门制作原型/验证）均已到位并校准。 (EPDVP 6.2)', primaryRole: 'Production' }, ] },
                { title_key: 'section_output', type: 'output', items: [ '工作站准备就绪，团队已开会。' ] },
                { title_key: 'section_action_production', type: 'action', items: [ { summary: '执行试生产运行', details: '根据装配说明书草稿执行。由生产主管、工程和QC监控。 (EPDVP 6.3)', primaryRole: 'Production' }, { summary: '关键：工程与QC人员在场', details: '尤其是在初始单元生产期间，以便观察、提供即时澄清、识别未预见问题、验证说明清晰度并核实QC检查。 (EPDVP 6.3)', primaryRole: 'LE' }, { summary: '试生产期间数据收集', details: '记录关键步骤/工位的装配时间。追踪发现的任何缺陷、其性质及发生位置。记录装配工遇到的困难。收集装配团队的反馈。 (EPDVP 6.3)', primaryRole: 'Production' }, ] },
                { title_key: 'section_output', type: 'output', items: [ '已组装的试生产单元。', '装配时间、缺陷、问题和反馈的详细日志。存储于NAS：<span class="nas-path">[项目名称]/Phase 6 - Trial Production/02_Trial_Production_Logs_and_Data/</span>' ] },
                { title_key: 'section_action_production', type: 'action', items: [ { summary: '检查所有试生产单元', details: '对照黄金样品和QC标准。参与者：生产主管、首席工程师、品控主管、采购代表（如遇组件问题）、产品经理。 (EPDVP 6.4)', primaryRole: 'Production' }, { summary: '评审收集的数据', details: '装配时间、缺陷率、问题、反馈。 (EPDVP 6.4)', primaryRole: 'Production' }, { summary: '分析过程与文档有效性', details: '识别瓶颈、低效或需要改进的领域。确认产品是否能持续按要求质量生产。 (EPDVP 6.4)', primaryRole: 'Production' }, ] },
                { title_key: 'section_output', type: 'output', items: [ '试生产评审报告，详细说明发现、分析和建议。存储于NAS：<span class="nas-path">[项目名称]/Phase 6 – Trial Production/03_Trial_Production_Review_Report.docx</span>' ] },
                { title_key: 'section_action_le', type: 'action', items: [ { summary: '最终确定装配SOP/装配指南', details: '整合试运行经验。使说明更清晰，添加图示，优化顺序。 (EPDVP 6.5)', primaryRole: 'LE' }, { summary: '最终确定QC检验表与标准', details: '根据发现的缺陷/问题优化QC检查。确保检查实用有效。 (EPDVP 6.5)', primaryRole: 'QC' }, { summary: '最终确定包装说明', details: '确认包装方法、材料和标签正确并能充分保护产品。 (EPDVP 6.5)', primaryRole: 'LE' }, { summary: '最终确定工装/夹具清单', details: '记录所有批准的量产所需工具、夹具和固定装置。 (EPDVP 6.5)', primaryRole: 'LE' }, { summary: '更新PPDP（如遇轻微DFM/DFA变更）', details: '如果在试生产期间进行了任何轻微的、非功能性的可制造性变更并获得批准，则必须更新PPDP（例如至V1.1）并由PM批准。影响形状、配合或功能的变更需要重新回到早期验证阶段。 (EPDVP 6.5)', primaryRole: 'LE' }, ] },
                { title_key: 'section_output', type: 'output', items: [ '<strong>最终生产包</strong>。此包包含：', '<ul><li>最终装配SOP/指南。</li><li>最终QC检验表和标准。</li><li>最终包装说明。</li><li>批准的工装/夹具清单。</li><li>更新的PPDP（如果进行了任何轻微DFM/DFA变更并获批准）。</li></ul>', '整个包存储在清晰标记的子文件夹中：<span class="nas-path">[项目名称]/Phase 6 – Trial Production/04_Final_Production_Package/</span>。更新Trello。' ] }
            ],
            gate: { name: translations.cn['phase_5_name'] + ' - ' + '决策门 5: 量产准备就绪批准', purpose: '基于成功的试生产，正式批准产品、其组件以及所有相关的制造、装配、QC和包装流程，以进行全面批量生产。', checklist_ref: 'DG5_Checklist' }
        }
    },
    'phase-6': {
        en: {
            title: translations.en.phase_6_name, 
            subtitle: translations.en.phase_6_tag,
            objective: 'To successfully launch full-scale mass production, ensuring consistent quality and efficiency based on the validated processes and Golden Samples, and to establish mechanisms for ongoing monitoring.',
            sections: [
                { title_key: 'section_input', type: 'input', items: [ { summary: 'Successful DG5 Approval (Readiness for Mass Production)', details: 'Formal approval based on successful trial production. (EPDVP Sec 7 Prerequisite)', primaryRole: 'Production' }, { summary: 'Final Production Package (from Phase 5)', details: 'Includes final SOPs, QC Checklists, Packaging Instructions, Approved Tooling/Fixture List, Updated PPDP. (EPDVP Sec 7 Prerequisite)', primaryRole: 'Production' }, { summary: 'Purchasing Confirmed Component Availability for Initial Runs', details: 'Components for the first mass production runs secured. (EPDVP Sec 7 Prerequisite)', primaryRole: 'Purchasing' }, { summary: 'Production Schedule for First Mass Production Runs (FMPR)', details: 'Initial schedule established. (EPDVP Sec 7 Prerequisite)', primaryRole: 'Production' } ] },
                { title_key: 'section_action_production', type: 'action', items: [ { summary: 'Conduct Final Pre-Production Meeting', details: 'With Production Supervisors, QC, and key assembly staff. (EPDVP 7.1)', primaryRole: 'Production' }, { summary: 'Re-confirm Understanding of All SOPs, QC, Quality Standards', details: 'Using Golden Samples and Final Production Package. (EPDVP 7.1)', primaryRole: 'Production' }, { summary: 'Ensure Workstations Set Up Correctly', details: 'With calibrated tools, approved jigs/fixtures, and readily available components. (EPDVP 7.1)', primaryRole: 'Production' }, { summary: 'Verify Incoming Components for FMPR', details: 'Ensure components have passed incoming QC checks as per established procedures. (EPDVP 7.1)', primaryRole: 'QC' }, ] },
                { title_key: 'section_output', type: 'output', items: [ 'Production line ready for First Mass Production Run (FMPR).' ] },
                { title_key: 'section_action_production', type: 'action', items: [ { summary: 'Initiate the First Mass Production Run', details: 'Action by Production Team, with close supervision by Production Lead, QC, and Engineering. (EPDVP 7.2)', primaryRole: 'Production' }, { summary: 'Intensive QC Monitoring During FMPR', details: 'QC performs checks at a higher frequency (e.g., every Nth unit, random spot checks) to quickly identify deviations from Golden Sample or SOPs. (EPDVP 7.2)', primaryRole: 'QC' }, { summary: 'Engineering Support During FMPR', details: 'Lead Engineer (Mark) or designated engineer available (ideally on-site for very first run) to rapidly troubleshoot unexpected technical or assembly issues not caught in trial. (EPDVP 7.2)', primaryRole: 'LE' }, { summary: 'Production Lead Oversight', details: 'Continuously monitor workflow, assembly times, and initial defect rates. Immediately document issues; if critical, pause production to rectify. (EPDVP 7.2)', primaryRole: 'Production' }, ] },
                { title_key: 'section_output', type: 'output', items: [ 'Units from FMPR.', 'Detailed FMPR Report including yield rates, defect analysis, issues encountered, and any immediate corrective actions taken. Store in NAS: <span class="nas-path">[Project Name]/Phase 7 – Mass Production/01_FMPR_Report.docx</span>. Trello updated.' ] },
                { title_key: 'section_action_production', type: 'action', items: [ { summary: 'Review FMPR Report', details: 'Participants: Production Lead, QC Lead, Lead Engineer, Product Manager. (EPDVP 7.3)', primaryRole: 'Production' }, { summary: 'Analyse Issues or Deviations', details: '(EPDVP 7.3)', primaryRole: 'Production' }, { summary: 'Make Minor Adjustments (if necessary)', details: 'To SOPs, QC Checklists, or workstation setups to stabilize the process. (Significant changes require re-validation, potentially a mini-trial). (EPDVP 7.3)', primaryRole: 'Production' }, { summary: 'Confirm Process Stability & Capability', details: 'Confirm production process is stable and capable of consistently meeting quality standards at the required throughput. (EPDVP 7.3)', primaryRole: 'Production' }, ] },
                { title_key: 'section_action_pm', type: 'action', items: [ { summary: 'Approve Continuation of Mass Production', details: 'Product Manager & Production Lead decide to approve continuation. (EPDVP 7.3)', primaryRole: 'PM'}, { summary: 'Or Schedule Further Troubleshooting/Controlled Run', details: 'If significant issues persist, schedule further troubleshooting and potentially another controlled production run before full ramp-up. (EPDVP 7.3)', primaryRole: 'PM'} ] },
                { title_key: 'section_output', type: 'output', items: [ 'FMPR Review Minutes & Action Plan (if any). Decision to proceed with ongoing mass production. Store in NAS.' ] },
                { title_key: 'section_action_production', type: 'action', items: [ { summary: 'Continue Production per Finalized SOPs & Schedule', details: '(EPDVP 7.4)', primaryRole: 'Production' }, { summary: 'Routine QC Checks (IPQC & FQA)', details: 'QC performs routine in-process quality checks (IPQC) and final product quality assurance (FQA) as per established QC Plan. (EPDVP 7.4)', primaryRole: 'QC' }, { summary: 'Collect & Monitor Production Data', details: 'Yields, defect rates, downtime collected and monitored regularly (e.g., daily/weekly). (EPDVP 7.4)', primaryRole: 'Production' }, { summary: 'Regular Production Meetings', details: 'Regular (e.g., weekly) meetings to review performance, discuss emerging issues, and plan upcoming runs. (EPDVP 7.4)', primaryRole: 'Production' }, ] },
                { title_key: 'section_output', type: 'output', items: [ 'Ongoing production. Regular Production & QC Reports. Store in NAS: <span class="nas-path">[Project Name]/Phase 7 – Mass Production/02_Ongoing_Production_Reports/</span> and <span class="nas-path">.../03_Ongoing_QC_Reports/</span>. Trello boards for orders reflect actual production status.' ] }
            ],
            gate: null 
        },
        cn: {
            title: translations.cn.phase_6_name, 
            subtitle: translations.cn.phase_6_tag,
            objective: '基于已验证的流程和黄金样品，成功启动全面批量生产，确保一致的质量和效率，并建立持续监控机制。',
            sections: [
                { title_key: 'section_input', type: 'input', items: [ { summary: 'DG5批准（量产准备就绪）', details: '基于成功的试生产获得的正式批准。 (EPDVP Sec 7 前提条件)', primaryRole: 'Production' }, { summary: '最终生产包 (来自阶段5)', details: '包括最终SOP、QC检验表、包装说明、批准的工装/夹具清单、更新的PPDP。 (EPDVP Sec 7 前提条件)', primaryRole: 'Production' }, { summary: '采购部门确认初始批次组件可用性', details: '首次量产运行的组件已确保。 (EPDVP Sec 7 前提条件)', primaryRole: 'Purchasing' }, { summary: '首次量产运行 (FMPR) 的生产计划', details: '初步计划已制定。 (EPDVP Sec 7 前提条件)', primaryRole: 'Production' } ] },
                { title_key: 'section_action_production', type: 'action', items: [ { summary: '进行最终产前会议', details: '与生产主管、QC和关键装配人员。 (EPDVP 7.1)', primaryRole: 'Production' }, { summary: '再次确认对所有SOP、QC、质量标准的理解', details: '使用黄金样品和最终生产包。 (EPDVP 7.1)', primaryRole: 'Production' }, { summary: '确保工作站正确设置', details: '配备校准工具、批准的夹具/固定装置和易于获取的组件。 (EPDVP 7.1)', primaryRole: 'Production' }, { summary: '验证FMPR的来料组件', details: '确保组件已按既定程序通过来料QC检查。 (EPDVP 7.1)', primaryRole: 'QC' }, ] },
                { title_key: 'section_output', type: 'output', items: [ '生产线为首次量产运行 (FMPR) 准备就绪。' ] },
                { title_key: 'section_action_production', type: 'action', items: [ { summary: '启动首次量产运行', details: '由生产团队执行，生产主管、QC和工程部门密切监督。 (EPDVP 7.2)', primaryRole: 'Production' }, { summary: 'FMPR期间的强化QC监控', details: 'QC以更高频率进行检查（例如，每N个单位，各工位随机抽查），以快速识别与黄金样品或SOP的任何偏差。 (EPDVP 7.2)', primaryRole: 'QC' }, { summary: 'FMPR期间的工程支持', details: '首席工程师（Mark）或指定工程师应在场（理想情况是首次运行时在现场），以快速解决试生产中未发现的意外技术或装配问题。 (EPDVP 7.2)', primaryRole: 'LE' }, { summary: '生产主管监督', details: '持续监控工作流程、装配时间和初始缺陷率。立即记录问题；如遇关键问题，暂停生产以纠正。 (EPDVP 7.2)', primaryRole: 'Production' }, ] },
                { title_key: 'section_output', type: 'output', items: [ 'FMPR产出单元。', '详细的FMPR报告，包括良率、缺陷分析、遇到的问题以及任何立即采取的纠正措施。存储于NAS：<span class="nas-path">[项目名称]/Phase 7 – Mass Production/01_FMPR_Report.docx</span>。更新Trello。' ] },
                { title_key: 'section_action_production', type: 'action', items: [ { summary: '评审FMPR报告', details: '参与者：生产主管、品控主管、首席工程师、产品经理。 (EPDVP 7.3)', primaryRole: 'Production' }, { summary: '分析问题或偏差', details: '(EPDVP 7.3)', primaryRole: 'Production' }, { summary: '进行微小调整（如需要）', details: '对SOP、QC检验表或工作站设置进行调整以稳定流程。（重大变更需要重新验证，可能需要小型试运行）。 (EPDVP 7.3)', primaryRole: 'Production' }, { summary: '确认流程稳定性与能力', details: '确认生产流程稳定，并且能够持续满足所需产出下的质量标准。 (EPDVP 7.3)', primaryRole: 'Production' }, ] },
                { title_key: 'section_action_pm', type: 'action', items: [ { summary: '批准继续批量生产', details: '产品经理与生产主管决定批准继续进行。 (EPDVP 7.3)', primaryRole: 'PM'}, { summary: '或安排进一步故障排除/受控运行', details: '如果重大问题仍然存在，则在全面增产前安排进一步的故障排除和可能的另一次受控生产运行。 (EPDVP 7.3)', primaryRole: 'PM'} ] },
                { title_key: 'section_output', type: 'output', items: [ 'FMPR评审会议纪要与行动计划（如有）。决定继续进行持续的批量生产。存储于NAS。' ] },
                { title_key: 'section_action_production', type: 'action', items: [ { summary: '按最终确定的SOP和计划继续生产', details: '(EPDVP 7.4)', primaryRole: 'Production' }, { summary: '常规QC检查 (IPQC & FQA)', details: 'QC按照既定的QC计划执行常规的制程中质量检查（IPQC）和最终产品质量保证（FQA）。 (EPDVP 7.4)', primaryRole: 'QC' }, { summary: '收集并监控生产数据', details: '定期（例如，每日/每周）收集和监控良率、缺陷率、停机时间。 (EPDVP 7.4)', primaryRole: 'Production' }, { summary: '定期生产会议', details: '定期（例如，每周）举行生产会议，审查绩效，讨论新出现的问题，并规划即将进行的生产。 (EPDVP 7.4)', primaryRole: 'Production' }, ] },
                { title_key: 'section_output', type: 'output', items: [ '持续生产中。定期生产与QC报告。存储于NAS：<span class="nas-path">[项目名称]/Phase 7 – Mass Production/02_Ongoing_Production_Reports/</span> 和 <span class="nas-path">.../03_Ongoing_QC_Reports/</span>。订单的Trello看板反映实际生产状态。' ] }
            ],
            gate: null 
        }
    },
    'phase-7': {
        en: {
            title: translations.en.phase_7_name, 
            subtitle: translations.en.phase_7_tag,
            objective: 'To establish a feedback loop for continuous improvement of the product and production processes based on mass production data, market feedback, and new technological opportunities.',
            sections: [
                { title_key: 'section_input', type: 'input', items: [ { summary: 'Ongoing Mass Production Data', details: 'Yields, defect rates, rework rates, assembly times, supplier quality data. (EPDVP 8.1)', primaryRole: 'PM' }, { summary: 'Market Feedback', details: 'Customer feedback, returns, warranty claims (once product is in market). (EPDVP 8.1)', primaryRole: 'PM' }, { summary: 'QC Inspection Results', details: 'Ongoing QC data from production. (EPDVP 8.1)', primaryRole: 'QC' }, { summary: 'New Technological Opportunities', details: 'Information on new materials, processes, or components that could improve the product or reduce cost.', primaryRole: 'LE' } ] },
                { title_key: 'section_action_admin', type: 'action', items: [ { summary: 'Continuously Collect Data (All Department Leads)', details: 'Production yields, defect/rework rates, assembly times, supplier quality/delivery, customer feedback/returns/warranty, QC inspection results. (EPDVP 8.1)', primaryRole: 'Admin' }, ] },
                { title_key: 'section_output', type: 'output', items: [ 'Regular performance dashboards/reports.' ] },
                { title_key: 'section_action_pm', type: 'action', items: [ { summary: 'Schedule & Conduct Formal Post-Launch Review Meetings', details: 'E.g., quarterly or after first X,000 units shipped. Participants: PM, LE, Production Lead, QC Lead, Purchasing Lead, (Sales/Marketing reps when market feedback is reviewed). (EPDVP 8.2)', primaryRole: 'PM' }, { summary: 'Review All Collected Performance Data', details: '(EPDVP 8.2)', primaryRole: 'PM' }, { summary: 'Identify Trends & Areas for Improvement', details: 'In product design (future revisions), production processes, QC methods, or supplier performance. (EPDVP 8.2)', primaryRole: 'PM' }, { summary: 'Discuss Significant Customer Feedback/Field Issues', details: '(EPDVP 8.2)', primaryRole: 'PM' }, { summary: 'Brainstorm Opportunities', details: 'For cost reduction, quality enhancement, or efficiency gains. (EPDVP 8.2)', primaryRole: 'PM' }, ] },
                { title_key: 'section_output', type: 'output', items: [ 'Post-Launch Review Meeting Minutes with identified improvement opportunities and assigned action items. Store in NAS: <span class="nas-path">[Project Name]/Phase 8 – Continuous Improvement/01_Post_Launch_Reviews/</span>' ] },
                { title_key: 'section_action_admin', type: 'action', items: [ { summary: 'Implement Identified Improvement Opportunities (Assigned Leads)', details: 'If design change: new ECR initiated, potentially re-triggering relevant EPDVP parts. If process change: update SOPs, train staff, monitor impact. If supplier issue: Purchasing addresses with supplier. (EPDVP 8.3)', primaryRole: 'Admin' }, { summary: 'Track Implementation & Effectiveness', details: 'Track the implementation and effectiveness of improvements. (EPDVP 8.3)', primaryRole: 'Admin' }, ] },
                { title_key: 'section_output', type: 'output', items: [ 'Documented changes, updated SOPs, ECRs.' ] },
                { title_key: 'section_action_le', type: 'action', items: [ { summary: 'Consolidate Key Lessons Learned', details: 'Periodically (e.g., annually or per major project completion) consolidate key lessons learned from EPDVP execution. (EPDVP 8.4)', primaryRole: 'LE' }, { summary: 'Update Best Practice Guides & Training Materials', details: 'Update general best practice guides, checklists, or training materials for the Engineering department based on these learnings. (EPDVP 8.4)', primaryRole: 'LE' }, { summary: 'Share Relevant Insights with Other Teams', details: '(EPDVP 8.4)', primaryRole: 'LE' }, ] },
                { title_key: 'section_output', type: 'output', items: [ 'Updated knowledge base, lessons learned repository. Store in a central Engineering NAS folder.' ] }
            ],
            gate: null 
        },
        cn: {
            title: translations.cn.phase_7_name, 
            subtitle: translations.cn.phase_7_tag,
            objective: '基于量产数据、市场反馈和新的技术机会，为产品和生产流程的持续改进建立反馈循环。',
            sections: [
                { title_key: 'section_input', type: 'input', items: [ { summary: '持续的量产数据', details: '良率、缺陷率、返工率、装配时间、供应商质量数据。 (EPDVP 8.1)', primaryRole: 'PM' }, { summary: '市场反馈', details: '客户反馈、退货、保修索赔（产品上市后）。 (EPDVP 8.1)', primaryRole: 'PM' }, { summary: 'QC检验结果', details: '来自生产的持续QC数据。 (EPDVP 8.1)', primaryRole: 'QC' }, { summary: '新技术机会', details: '关于可能改进产品或降低成本的新材料、工艺或组件的信息。', primaryRole: 'LE' } ] },
                { title_key: 'section_action_admin', type: 'action', items: [ { summary: '持续收集数据（所有部门主管）', details: '生产良率、缺陷/返工率、装配时间、供应商质量/交付、客户反馈/退货/保修、QC检验结果。 (EPDVP 8.1)', primaryRole: 'Admin' }, ] },
                { title_key: 'section_output', type: 'output', items: [ '定期绩效仪表盘/报告。' ] },
                { title_key: 'section_action_pm', type: 'action', items: [ { summary: '安排并举行正式的上市后评审会议', details: '例如，每季度或首批X,000件产品发货后。参与者：产品经理、首席工程师、生产主管、品控主管、采购主管，（市场反馈评审时加入销售/市场代表）。 (EPDVP 8.2)', primaryRole: 'PM' }, { summary: '评审所有收集的绩效数据', details: '(EPDVP 8.2)', primaryRole: 'PM' }, { summary: '识别趋势与改进领域', details: '产品设计（未来修订）、生产流程、QC方法或供应商绩效方面。 (EPDVP 8.2)', primaryRole: 'PM' }, { summary: '讨论重要的客户反馈/现场问题', details: '(EPDVP 8.2)', primaryRole: 'PM' }, { summary: '头脑风暴机会点', details: '成本降低、质量提升或效率增益方面。 (EPDVP 8.2)', primaryRole: 'PM' }, ] },
                { title_key: 'section_output', type: 'output', items: [ '上市后评审会议纪要，包含已识别的改进机会和分配的行动项。存储于NAS：<span class="nas-path">[项目名称]/Phase 8 – Continuous Improvement/01_Post_Launch_Reviews/</span>' ] },
                { title_key: 'section_action_admin', type: 'action', items: [ { summary: '实施已识别的改进机会（指定负责人）', details: '如涉及设计变更：启动新的ECR，可能重新触发该特定变更的EPDVP相关部分。如涉及流程变更：更新相关SOP，培训员工，监控影响。如涉及供应商问题：由采购部门与供应商处理。 (EPDVP 8.3)', primaryRole: 'Admin' }, { summary: '追踪实施与成效', details: '追踪改进措施的实施及其有效性。 (EPDVP 8.3)', primaryRole: 'Admin' }, ] },
                { title_key: 'section_output', type: 'output', items: [ '已记录的变更、更新的SOP、ECRs。' ] },
                { title_key: 'section_action_le', type: 'action', items: [ { summary: '整合关键经验教训', details: '定期（例如，每年或每个主要项目完成后）整合从EPDVP执行中获得的关键经验教训。 (EPDVP 8.4)', primaryRole: 'LE' }, { summary: '更新最佳实践指南与培训材料', details: '根据这些经验教训，更新工程部门的通用最佳实践指南、清单或培训材料。 (EPDVP 8.4)', primaryRole: 'LE' }, { summary: '与其他团队分享相关见解', details: '(EPDVP 8.4)', primaryRole: 'LE' }, ] },
                { title_key: 'section_output', type: 'output', items: [ '更新的知识库、经验教训库。存储于中央工程NAS文件夹。' ] }
            ],
            gate: null 
        }
    },
}; 

// Helper functions
export function getPhaseData(phaseId, language = 'en') {
    if (!fullPhaseData[phaseId]) {
        return null;
    }
    return fullPhaseData[phaseId][language];
}

export function getAllPhases(language = 'en') {
    return Object.keys(fullPhaseData).map(phaseId => {
        const phase = fullPhaseData[phaseId][language];
        return {
            id: phaseId,
            title: phase.title,
            subtitle: phase.subtitle
        };
    });
}

export function getTranslation(key, language = 'en') {
    return translations[language][key] || key;
}

export function getPhaseEffortChartData(language = 'en') {
    const phaseLabels = phaseEffortData.phases.map(phaseKey => 
        translations[language][phaseKey]
    );
    
    return {
        labels: phaseLabels,
        datasets: [
            {
                label: translations[language].role_pm,
                data: phaseEffortData.datasets.pm,
                backgroundColor: phaseEffortData.colors.pm.bg,
                borderColor: phaseEffortData.colors.pm.border,
                borderWidth: 1
            },
            {
                label: translations[language].role_le,
                data: phaseEffortData.datasets.le,
                backgroundColor: phaseEffortData.colors.le.bg,
                borderColor: phaseEffortData.colors.le.border,
                borderWidth: 1
            },
            {
                label: translations[language].role_de,
                data: phaseEffortData.datasets.de,
                backgroundColor: phaseEffortData.colors.de.bg,
                borderColor: phaseEffortData.colors.de.border,
                borderWidth: 1
            },
            {
                label: translations[language].role_purchasing,
                data: phaseEffortData.datasets.purchasing,
                backgroundColor: phaseEffortData.colors.purchasing.bg,
                borderColor: phaseEffortData.colors.purchasing.border,
                borderWidth: 1
            },
            {
                label: translations[language].role_production,
                data: phaseEffortData.datasets.production,
                backgroundColor: phaseEffortData.colors.production.bg,
                borderColor: phaseEffortData.colors.production.border,
                borderWidth: 1
            },
            {
                label: translations[language].role_qc,
                data: phaseEffortData.datasets.qc,
                backgroundColor: phaseEffortData.colors.qc.bg,
                borderColor: phaseEffortData.colors.qc.border,
                borderWidth: 1
            }
        ]
    };
}
