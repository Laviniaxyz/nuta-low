import React from 'react';
import { Components } from './styled';

const FormInput = ({ label, ...otherPros }: { label: string }) => {
  return (
    <Components.Container>
      <Components.Input {...otherPros} />
      <Components.Label>{label}</Components.Label>
    </Components.Container>
  );
};

export default FormInput;
