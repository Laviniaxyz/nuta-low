import React from 'react';
import { Components } from './styled';
import StoreIcon from '@mui/icons-material/Store';
import EngineeringIcon from '@mui/icons-material/Engineering';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SecurityIcon from '@mui/icons-material/Security';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import AssistWalkerIcon from '@mui/icons-material/AssistWalker';

const getIcon = (icon: string) => {
  switch (icon) {
    case 'commercial':
      return <StoreIcon fontSize={'large'} />;
    case 'work':
      return <EngineeringIcon fontSize={'large'} />;
    case 'migration':
      return <FlightTakeoffIcon fontSize={'large'} />;
    case 'ensurance':
      return <AssistWalkerIcon fontSize={'large'} />;
    case 'real-estate':
      return <ApartmentIcon fontSize={'large'} />;
    case 'gdpr':
      return <SecurityIcon fontSize={'large'} />;
    case 'money':
      return <AccountBalanceWalletIcon fontSize={'large'} />;
    case 'civil':
      return <EscalatorWarningIcon fontSize={'large'} />;
  }
};

const ServiceCard = ({ title, icon }: { title: string; icon: string }) => {
  return (
    <Components.ServicesCard>
      {getIcon(icon)}
      <Components.ServicesH2>{title}</Components.ServicesH2>
    </Components.ServicesCard>
  );
};

export default ServiceCard;
