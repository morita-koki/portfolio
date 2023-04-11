"use client"
// import styles from './page.module.css'

import { Box, Container, Grid, Typography } from "@mui/material";

// original conponent

export default function ProductsPage() {
  return (
    <Container maxWidth="md">
        <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center" >
            <Grid item xs={12}>
                <Typography variant="h3" textAlign="center" marginY={3}>
                    Products
                </Typography>
                <Typography textAlign="center">
                    一生懸命作った忘れられない思い出たちを紹介します。
                </Typography>
            </Grid>
        </Grid>
    </Container>
  )
}
