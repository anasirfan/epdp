import { useAppContext } from '../../../context/AppContext';
import { useMemo } from 'react';
import { raciData } from '../../../data/data';

export default function RolesTab() {
  const { t, selectedRole, language } = useAppContext();

  // Table headers
  const headers = useMemo(() => [
    language === 'cn' ? '活动' : 'Activity',
    t.role_pm,
    t.role_le,
    t.role_de,
    t.role_purchasing,
    t.role_production,
    t.role_qc,
    t.role_admin
  ], [t, language]);

  // Prepare rows from raciData
  const rows = useMemo(() =>
    raciData.map(item => ({
      activity: language === 'cn' ? item.activity_cn : item.activity_en,
      roles: [item.PM, item.LE, item.DE, item.PURCHASING, item.PRODUCTION, item.QC, item.ADMIN]
    })),
    [language]
  );

  // Get the column index for the selected role
  const getSelectedRoleIndex = () => {
    if (selectedRole === 'default') return -1;
    const roleMap = {
      'pm': 1,
      'le': 2,
      'de': 3,
      'purchasing': 4,
      'production': 5,
      'qc': 6,
      'admin': 7
    };
    return roleMap[selectedRole] || -1;
  };

  // Get the role description based on role ID
  const getRoleDescription = (roleId) => {
    const roleDescriptions = {
      'pm': t.role_pm_desc,
      'le': t.role_le_desc,
      'de': t.role_de_desc,
      'purchasing': t.role_purchasing_desc,
      'production': t.role_production_desc,
      'qc': t.role_qc_desc,
      'admin': t.role_admin_desc
    };
    return roleDescriptions[roleId] || '';
  };

  // Get the role name based on role ID
  const getRoleName = (roleId) => {
    const roleNames = {
      'pm': t.role_pm,
      'le': t.role_le,
      'de': t.role_de,
      'purchasing': t.role_purchasing,
      'production': t.role_production,
      'qc': t.role_qc,
      'admin': t.role_admin
    };
    return roleNames[roleId] || '';
  };

  const selectedRoleIndex = getSelectedRoleIndex();

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">RACI Matrix</h2>
      <p className="mb-6 text-gray-700">
        {language === 'cn' ? 'RACI 矩阵定义了 EPDP 流程中各角色的职责：' : 'The RACI matrix defines roles and responsibilities across the EPDP process:'}
        <br />
        <span className="font-medium">{t.responsible}</span> (R) - {language === 'cn' ? '执行工作' : 'Does the work'}
        <span className="mx-2">|</span>
        <span className="font-medium">{t.accountable}</span> (A) - {language === 'cn' ? '批准/当责' : 'Approves the work'}
        <span className="mx-2">|</span>
        <span className="font-medium">{t.consulted}</span> (C) - {language === 'cn' ? '提供意见' : 'Provides input'}
        <span className="mx-2">|</span>
        <span className="font-medium">{t.informed}</span> (I) - {language === 'cn' ? '被通知' : 'Kept updated'}
      </p>

      {/* Role cards section */}
      {selectedRole !== 'default' && (
        <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
          <h3 className="font-semibold text-lg mb-2">{getRoleName(selectedRole)}</h3>
          <p className="text-gray-700">{getRoleDescription(selectedRole)}</p>
        </div>
      )}

      {/* RACI table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              {headers.map((header, index) => (
                <th 
                  key={`header-${index}`}
                  className={`
                    px-4 py-2 text-left text-sm font-medium text-gray-700 border-b
                    ${index === selectedRoleIndex ? 'bg-green-100' : ''}
                  `}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr 
                key={`row-${rowIndex}`}
                className={`
                  border-b hover:bg-gray-50
                  ${row.roles.some((role, i) => i + 1 === selectedRoleIndex && role !== '') 
                    ? 'bg-green-50' 
                    : ''}
                `}
              >
                <td className="px-4 py-3 text-sm">{row.activity}</td>
                {row.roles.map((role, roleIndex) => (
                  <td 
                    key={`cell-${rowIndex}-${roleIndex}`}
                    className={`
                      px-4 py-3 text-sm text-center font-medium
                      ${roleIndex + 1 === selectedRoleIndex && role !== '' 
                        ? 'bg-green-200' 
                        : ''}
                      ${role === 'R' ? 'text-blue-600' : ''}
                      ${role === 'A' ? 'text-red-600' : ''}
                      ${role === 'C' ? 'text-yellow-600' : ''}
                      ${role === 'I' ? 'text-gray-600' : ''}
                    `}
                  >
                    {role}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
