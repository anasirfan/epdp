import { useAppContext } from '../../context/AppContext';

export default function RoleSelector() {
  const { t, selectedRole, setSelectedRole } = useAppContext();
  
  const roles = [
    { id: 'default', label: t.role_default },
    { id: 'pm', label: t.role_pm },
    { id: 'le', label: t.role_le },
    { id: 'de', label: t.role_de },
    { id: 'purchasing', label: t.role_purchasing },
    { id: 'production', label: t.role_production },
    { id: 'qc', label: t.role_qc },
    { id: 'admin', label: t.role_admin }
  ];
  
  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };
  
  return (
    <div className="flex items-center space-x-2">
      <label 
        htmlFor="role-selector" 
        className="text-sm font-medium text-gray-700 sr-only"
      >
        {t.role_select_label}
      </label>
      <select
        id="role-selector"
        value={selectedRole}
        onChange={handleRoleChange}
        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md text-gray-700"
        aria-label={t.role_select_label}
      >
        {roles.map(role => (
          <option key={role.id} value={role.id}>
            {role.label}
          </option>
        ))}
      </select>
    </div>
  );
}
