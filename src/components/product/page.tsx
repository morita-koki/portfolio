"use client"

import * as React from 'react';
import { Box, Container, Grid, Typography } from "@mui/material";

// original conponent

import ProductCardWithModal from "@/components/modules/ProductCardWithModal";
import { productContents } from "@/constants/productContents"
import type { SectionProps } from '@/constants/SectionPropType';

export const Products: React.FC<SectionProps> = (props: any) => {
    return (
        <Box {...props}>
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
                        <ProductCardWithModal {...productContents[0]} />
                    </Grid>
                    <Grid item xs={8} md={4}>
                        <ProductCardWithModal {...productContents[1]} />
                    </Grid>
                    <Grid item xs={8} md={4}>
                        <ProductCardWithModal {...productContents[2]} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
