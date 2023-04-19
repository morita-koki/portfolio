"use client"
// import styles from './page.module.css'

import { Box, Container, Grid, Typography } from "@mui/material";

// original conponent

import * as React from 'react';
import ProductCardWithModal from "@/components/modules/ProductCardWithModal";



const prop = {
    img: "/penguin.jpeg",
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
            justifyContent="space-between"
            alignItems="center"
            spacing={6} >
            <Grid item xs={8} md={4}>
                <ProductCardWithModal title="bbb" image="/penguin.jpeg" description="hello" />
            </Grid>
            <Grid item xs={8} md={4}>
                <ProductCardWithModal title="bbb" image="/penguin.jpeg" description="hello" />
            </Grid>
            <Grid item xs={8} md={4}>
                <ProductCardWithModal title="bbb" image="/penguin.jpeg" description="hello" />
            </Grid>
        </Grid>
    </Container>
  )
}
