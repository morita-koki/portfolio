"use client"
// import styles from './page.module.css'

import { Box, Container, Grid, Typography } from "@mui/material";

// original conponent

import * as React from 'react';
import ProductCardWithModal from "@/components/modules/ProductCardWithModal";
import type {ProductCardWithModalProps} from "@/components/modules/ProductCardWithModal"



const productContents: Array<ProductCardWithModalProps> = [
    { 
        image: "/penguin.jpeg",
        title: "this is title",
        application_description: "this is description",
        skills_description: "this is skill description",
    },
    {
        image: "/penguin.jpeg",
        title: "this is title",
        application_description: "this is description",
        skills_description: "this is skill description",
    },
    {
        image: "/penguin.jpeg",
        title: "this is title",
        application_description: "this is description",
        skills_description: "this is skill description",
    },
    {
        image: "/penguin.jpeg",
        title: "this is title",
        application_description: "this is description",
        skills_description: "this is skill description",
    }
]

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
                <ProductCardWithModal {...productContents[0]}/>
            </Grid>
            <Grid item xs={8} md={4}>
                <ProductCardWithModal {...productContents[1]}/>
            </Grid>
            <Grid item xs={8} md={4}>
                <ProductCardWithModal {...productContents[2]}/>
            </Grid>
        </Grid>
    </Container>
  )
}
