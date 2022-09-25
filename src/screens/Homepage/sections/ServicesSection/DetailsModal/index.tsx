import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Components } from './styled';

const DetailsModal = ({
  open,
  toggleModal,
  title,
  details,
}: {
  open: boolean;
  toggleModal: () => void;
  title: string;
  details: string;
}) => {
  const bullets = details.split('\n');

  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={open}
      onClose={toggleModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}>
      <Fade in={open}>
        <Components.Box onClick={toggleModal}>
          <Typography id='transition-modal-title' variant='h6' component='h2'>
            {title}
          </Typography>
          <Typography id='transition-modal-description' sx={{ mt: 2 }}>
            {bullets.map((bullet, index) => {
              return <Components.Paragraph key={index}>{bullet}</Components.Paragraph>;
            })}
          </Typography>
        </Components.Box>
      </Fade>
    </Modal>
  );
};

export default DetailsModal;
