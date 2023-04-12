import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Modal,
  Backdrop,
  Fade,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)({
  maxWidth: 345,
  transition: 'transform 0.2s',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

const StyledCardMedia = styled(CardMedia)({
  height: 0,
  paddingTop: '56.25%', // 16:9
});

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledPaper = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  border: '2px solid #000',
  boxShadow: theme.shadows[5],
  padding: theme.spacing(2, 4, 3),
}));

function ProductCard(props: any) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <StyledCard onClick={handleOpen}>
        <StyledCardMedia image={props.image} title={props.title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </StyledCard>
      <StyledModal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <StyledPaper>
            <Typography variant="h4">{props.title}</Typography>
            <Typography variant="body1">{props.description}</Typography>
            <img src={props.image} alt={props.title} />
          </StyledPaper>
        </Fade>
      </StyledModal>
    </div>
  );
}

export default ProductCard;
