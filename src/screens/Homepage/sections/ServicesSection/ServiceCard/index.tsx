import React from 'react';
import { Components } from './styled';
import StoreIcon from '@mui/icons-material/Store';
import EngineeringIcon from '@mui/icons-material/Engineering';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SecurityIcon from '@mui/icons-material/Security';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import { COLORS } from '../../../../../styled';
import { IconType } from '../index';

const getIcon = (icon: IconType) => {
  switch (icon) {
    case 'commercial':
      return <StoreIcon fontSize={'large'} style={{ color: COLORS.white }} />;
    case 'work':
      return <EngineeringIcon fontSize={'large'} style={{ color: COLORS.white }} />;
    case 'migration':
      return <FlightTakeoffIcon fontSize={'large'} style={{ color: COLORS.white }} />;
    case 'ensurance':
      return <CarCrashIcon fontSize={'large'} style={{ color: COLORS.white }} />;
    case 'real-estate':
      return <ApartmentIcon fontSize={'large'} style={{ color: COLORS.white }} />;
    case 'gdpr':
      return <SecurityIcon fontSize={'large'} style={{ color: COLORS.white }} />;
    case 'money':
      return <AccountBalanceWalletIcon fontSize={'large'} style={{ color: COLORS.white }} />;
    case 'civil':
      return <EscalatorWarningIcon fontSize={'large'} style={{ color: COLORS.white }} />;
  }
};

const ServiceCard = ({
  title,
  icon,
  blackBg,
  tabletBg,
  mobileBg,
  onClick,
}: {
  title: string;
  icon: IconType;
  blackBg?: boolean;
  tabletBg?: boolean;
  mobileBg?: boolean;
  onClick: (icon: IconType) => void;
}) => {
  return (
    <Components.ServicesCard blackBg={blackBg} tabletBg={tabletBg} mobileBg={mobileBg} onClick={() => onClick(icon)}>
      {getIcon(icon)}
      <Components.ServicesH2>{title}</Components.ServicesH2>
    </Components.ServicesCard>
  );
};

export default ServiceCard;
