import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Modal,
  Backdrop,
  Box,
} from '@mui/material';
import Image from 'next/image';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  transition: 'transform 0.2s',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.1)',
  },
  position: "relative"
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 0,
  paddingTop: '56.25%', // 16:9
}));

const StyledModal = styled(Modal)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));


const ProductCard = (props: any) => {
  return (
    <Box id="product-card">
      <StyledCard onClick={props.handleOpen}>
        <StyledCardMedia>
          <Image
            src={props.image}
            alt={props.title}
            fill
          />
        </StyledCardMedia>
        <CardContent></CardContent> {/* 空でよい */}
      </StyledCard>
      <Typography gutterBottom variant="h5" component="h2">
        {props.title}
      </Typography>
    </Box>
  )
}

const StyledBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80vw",
  backgroundColor: theme.palette.background.paper,
  border: '2px solid #000',
  boxShadow: theme.shadows[24],
  padding: theme.spacing(4),
}));


const TitleWithBorder = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "&:before, &:after": {
      content: "''",
      height: "1px",
      flexGrow: "1",
      backgroundColor: "#666",
  },
  "&:before": { 
      marginRight: "1rem",
  },
  "&:after": {
      marginLeft: "1rem",
  },
}))

const ProductModalItem = (props: any) => {
    return (
      <StyledBox id="product-modal-item">
        <TitleWithBorder>{props.title}</TitleWithBorder>
        <Typography variant="body1">{props.description}</Typography>
        <TitleWithBorder>使用技術など</TitleWithBorder>
        <Typography variant="body1">{props.description}</Typography>
        <Image src={props.image} alt={props.title} width={600} height={400} />
      </StyledBox>
    )
}
function ProductCardWithModal(props: any) { // HACK: anyはよくないね
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ProductCard 
        image={props.image} 
        title={props.title} 
        handleOpen={handleOpen}/>

      <StyledModal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <ProductModalItem 
          title={props.title}
          image={props.image}
          description={props.description}/>
      </StyledModal>
    </div>
  );
}

export default ProductCardWithModal;
