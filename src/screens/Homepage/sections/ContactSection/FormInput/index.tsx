import React from 'react';
import { Components } from './styled';

const FormInput = ({ label, placeholder, err, ...otherPros }: { label: string; placeholder: string; err: string }) => {
  return (
    <Components.Container>
      <Components.Label>{label}</Components.Label>
      <Components.Input {...otherPros} placeholder={placeholder} />
      <Components.Error>{err}</Components.Error>
    </Components.Container>
  );
};

export default FormInput;
