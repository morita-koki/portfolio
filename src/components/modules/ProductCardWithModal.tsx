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
  Grid,
} from '@mui/material';
import Image from 'next/legacy/image';


/* ProductCard Component */
type ProductCardProps = {
  handleOpen: () => void;
} & ProductCardWithModalProps

const ProductCard: React.FC<ProductCardProps> = (props) => {
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
  
  
  return (
    <Box id="product-card">
      <StyledCard onClick={props.handleOpen}>
        <StyledCardMedia>
          <Image
            src={props.image}
            alt={props.title}
            layout="fill"
            objectFit='cover'
          />
        </StyledCardMedia>
        <CardContent></CardContent> {/* 空でよい */}
      </StyledCard>
      <Typography gutterBottom textAlign="center" variant="h5" component="h2" marginTop={1}>
        {props.title}
      </Typography>
    </Box>
  )
}



/* ProductModalItem Component */
type ProductModalItemProps = {
  handleClose: () => void;
} & ProductCardWithModalProps

const ProductModalItem: React.FC<ProductModalItemProps> = (props) => {
  
  const StyledBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "90vw",
    height: "90vh",
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

  return (
    <StyledBox id="product-modal-item">
      <Grid 
        container 
        justifyContent="space-around" 
        alignItems="center" 
        // spacing={2} 
        sx={{ height: "100%" }} >
        <Grid item xs={10} md={4} sx={{ height: "90%", marginY: "auto" }}>
          <TitleWithBorder>{props.title}</TitleWithBorder>
          <Typography variant="body1">{props.application_description}</Typography>
          <TitleWithBorder>使用技術など</TitleWithBorder>
          <Typography variant="body1">{props.skills_description}</Typography>
        </Grid>
        <Grid item xs={10} md={7} sx={{ position: "relative", height: "90%", marginY: "auto" }}>
          <Image 
            src={props.image} 
            alt={props.title} 
            layout='fill' 
            objectFit='cover' />
        </Grid>
      </Grid>
    </StyledBox>
  )
}



/* ProductCardWithModal Component */
export type ProductCardWithModalProps = {
  title: string;
  image: string;
  application_description: string;
  skills_description: string;
}

const ProductCardWithModal: React.FC<ProductCardWithModalProps> = (props) => { 

  const StyledModal = styled(Modal)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));


  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ProductCard {...props} handleOpen={handleOpen} />

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
        <ProductModalItem {...props} handleClose={handleClose}/>
      </StyledModal>
    </div>
  );
}

export default ProductCardWithModal;
