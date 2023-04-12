"use client"
// import styles from './page.module.css'

import { Container, Grid, Typography } from "@mui/material";

// original conponent

import * as React from 'react';
import ProductCardWithModal from "@/components/modules/ProductCardWithModal";


const prop = {
    img: "",
    title: "this is title",
    description: "this is description"
}

export default function ProductsPage() {
  return (
    <Container maxWidth="md">
        <Typography variant="h3" textAlign="center" marginY={3}>
            Products
        </Typography>
        <Typography textAlign="center">
            一生懸命作った忘れられない思い出たちを紹介します。
        </Typography>
        <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center" >
            <ProductCardWithModal props={prop}/>
        </Grid>
    </Container>
  )
}
