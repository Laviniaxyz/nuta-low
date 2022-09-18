import React, { useState } from 'react';
import { Components } from './styled';
import MailIcon from '@mui/icons-material/Mail';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import FormInput from './FormInput';
import Button from '@mui/material/Button';
import { COLORS } from '../../../../styled';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const image = require('../../../../assets/BooksImage.jpg');

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const onChangeName = (e: Event) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e: Event) => {
    setEmail(e.target.value);
  };

  const onChangePhone = (e: Event) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <Components.Container>
      <Components.ContactMessage>
        <Components.BackgroundImage src={image} />
        <Components.TextWrapper>
          <PhoneInTalkIcon />
          <Components.PhoneText>+40722697542</Components.PhoneText>
        </Components.TextWrapper>
        <Components.TextWrapper>
          <MailIcon />
          <Components.EmailText>alexandru.nuta@gmail.com</Components.EmailText>
        </Components.TextWrapper>
      </Components.ContactMessage>
      <Components.ContactForm>
        <Components.Form>
          <FormInput
            name='name'
            type='text'
            label='Name'
            required
            value={name}
            onChange={(e: Event) => onChangeName(e)}
          />
          <FormInput
            name='email'
            type='email'
            label='Email'
            required
            value={email}
            onChange={(e: Event) => onChangeEmail(e)}
          />
          <FormInput
            name='phone'
            type='text'
            label='Telefon'
            value={phoneNumber}
            onChange={(e: Event) => onChangePhone(e)}
          />
          <Components.Label>Detalii</Components.Label>
          <Components.TextArea />
          <div className='buttons'>
            <Button
              variant='contained'
              size='medium'
              sx={{
                'backgroundColor': COLORS.buttonColor,
                'justify-content': 'center',
                'padding': 2,
                'align-items': 'center',
                'font-weight': 'bold',
                'font-family': 'Open Sans',
                '&: hover': {
                  backgroundColor: COLORS.textColor,
                },
              }}>
              Trimite
            </Button>
          </div>
        </Components.Form>
      </Components.ContactForm>
    </Components.Container>
  );
};

export default ContactSection;
