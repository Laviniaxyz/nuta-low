import React, { useState } from 'react';
import { Components } from './styled';
import MailIcon from '@mui/icons-material/Mail';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import FormInput from './FormInput';
import Button from '@mui/material/Button';
import { COLORS } from '../../../../styled';
import DetailsModal from '../ServicesSection/DetailsModal';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const image = require('../../../../assets/BooksImage.jpg');

const ContactSection = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [showNameErr, setShowNameErr] = useState(false);
  const [showPhoneErr, setShowPhoneErr] = useState(false);
  const [showEmailErr, setShowEmailErr] = useState(false);

  const [nameErrMessage, setNameErr] = useState('');
  const [phoneErrMessage, setPhoneErr] = useState('');
  const [emailErrMessage, setEmailErr] = useState('');

  const [showSuccessSend, setShowSuccessSend] = useState(false);

  const onChangeName = (e: any) => {
    setShowNameErr(false);
    setNameErr('');
    setName(e.target.value);
  };

  const onChangeEmail = (e: any) => {
    setShowEmailErr(false);
    setEmailErr('');
    setEmail(e.target.value);
  };

  const onChangePhone = (e: any) => {
    setShowPhoneErr(false);
    setPhoneErr('');
    setPhoneNumber(e.target.value);
  };

  const checkForErrors = () => {
    if (!name.trim()) {
      setShowNameErr(true);
      setNameErr('Acest câmp este obligatoriu');
    } else if (name.trim().length < 4) {
      setShowNameErr(true);
      setNameErr('Vă rugăm introduceți un nume valid');
    }
    if (!phoneNumber.trim()) {
      setShowPhoneErr(true);
      setPhoneErr('Acest câmp este obligatoriu');
    } else if (phoneNumber.trim().length < 10) {
      setShowPhoneErr(true);
      setPhoneErr('Vă rugăm introduceți un număr valid');
    }
    if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setShowEmailErr(true);
      setEmailErr('Vă rugăm introduceți un email valid');
    }
  };

  const onSubmit = () => {
    checkForErrors();
  };

  return (
    <>
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
        {showSuccessSend ? (
          <Components.MessageWrapper>
            <Components.Message>Mesajul a fost trimis cu succes!</Components.Message>
            <MarkEmailReadOutlinedIcon
              font-size={'large'}
              style={{ color: COLORS.textColor }}
              color={COLORS.textColor}
            />
          </Components.MessageWrapper>
        ) : (
          <Components.ContactForm>
            <Box
              component='form'
              sx={{
                '& .MuiTextField-root': {
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  width: '100%',
                  alignItem: 'flex-start',
                  marginBottom: 2,
                },
              }}
              noValidate
              autoComplete='off'>
              <TextField
                error={showNameErr}
                id='standard-error-helper-text'
                label='Nume și prenume'
                defaultValue={name}
                helperText={nameErrMessage}
                variant='standard'
                onChange={onChangeName}
              />
              <TextField
                error={showPhoneErr}
                id='standard-error-helper-text'
                label='Telefon'
                defaultValue={phoneNumber}
                helperText={phoneErrMessage}
                variant='standard'
                onChange={onChangePhone}
              />
              <TextField
                error={showEmailErr}
                id='standard-error-helper-text'
                label='Adresă email'
                defaultValue={email}
                helperText={emailErrMessage}
                variant='standard'
                onChange={onChangeEmail}
              />
              <TextareaAutosize
                minRows={4}
                aria-label='maximum height'
                style={{
                  backgroundColor: COLORS.lightBrown,
                  width: '100%',
                  borderWidth: 0.5,
                  borderColor: COLORS.darkBrown,
                  fontFamily: 'Roboto',
                  fontSize: 16,
                }}
              />
            </Box>
            <div style={{ display: 'flex', width: '100%', marginTop: 16 }}>
              <Button
                variant='contained'
                size='medium'
                sx={{
                  'backgroundColor': COLORS.darkBrown,
                  'justify-content': 'center',
                  'flex': 1,
                  'padding': 2,
                  'align-items': 'start',
                  'font-weight': 'bold',
                  'font-family': 'Open Sans',
                  '&: hover': {
                    backgroundColor: COLORS.textColor,
                  },
                }}
                onClick={onSubmit}>
                Trimite
              </Button>
            </div>
          </Components.ContactForm>
        )}
      </Components.Container>
    </>
  );
};

export default ContactSection;
