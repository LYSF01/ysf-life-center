
import React, { useState } from 'react';
import { SalonProvider, useSalon } from './store/SalonContext';
import { Layout } from './components/Layout';
import { ManagerDashboard } from './views/ManagerDashboard';
import { StaffTerminal } from './views/StaffTerminal';
import { CustomerPortal } from './views/CustomerPortal';
import { Inventory } from './views/Inventory';
import { AIAdvice } from './views/AIAdvice';
import { CustomerCRM } from './views/CustomerCRM';
import { Appointments } from './views/Appointments';
import { LoginView } from './views/LoginView';

const ContentSwitcher: React.FC<{ tab: string }> = ({ tab }) => {
  switch (tab) {
    case 'dashboard': return <ManagerDashboard />;
    case 'sales': return <StaffTerminal />;
    case 'customer-portal': return <CustomerPortal />;
    case 'inventory': return <Inventory />;
    case 'ai-advice': return <AIAdvice />;
    case 'customers': return <CustomerCRM />;
    case 'appointments': return <Appointments />;
    default: return <ManagerDashboard />;
  }
};

const AppContent: React.FC = () => {
  const { isAuthenticated } = useSalon();
  const [currentTab, setCurrentTab] = useState('dashboard');
  
  if (!isAuthenticated) return <LoginView />;

  return (
    <Layout currentTab={currentTab} setTab={setCurrentTab}>
      <div className="max-w-[1600px] mx-auto">
        <ContentSwitcher tab={currentTab} />
      </div>
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <SalonProvider>
      <AppContent />
    </SalonProvider>
  );
};

export default App;
