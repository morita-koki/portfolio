"use client"
// import styles from './page.module.css'

import { Box, Container, Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import Image  from "next/image"
// original conponent

export default function About() {
  return (
    <Container maxWidth="md">
        <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center" >
            <Grid item xs={12}>
                <Typography variant="h3" textAlign="center">
                    About Me
                </Typography>
                <Grid container>
                  <Grid item xs={12} md={4}>
                    <Image
                      src="/penguin.jpeg"
                      alt="jack's icon"
                      loading="lazy"
                      width={100}
                      height={100}
                    />
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Typography variant="caption">
                      大阪府出身の大学４年生。大学で電気工学、電子工学を学んでいて、大学院では情報学を専攻する予定。
                      学部２年生のときにアプリ開発団体jackに所属し、サークルの仲間と一緒にアプリ開発、WEBサイト制作、ハッカソンなどしています。
                      バックエンド、フロントエンドともに興味の赴くままに触れる。
                    </Typography>
                  </Grid>
                </Grid>
                <Box component="ul" sx={{listStyle: "none", paddingLeft: "20%"}}>
                  <li>GitHub: <Box component="a" href="https://github.com/morita-koki" target="_blank" sx={{textDecoration: "underline", color: "#0000EE"}}>https://github.com/morita-koki</Box></li>
                  <li>アプリ開発団体jack: <Box component="a" href="https://twitter.com/jackapp_tmy" target="_blank" sx={{textDecoration: "underline", color: "#0000EE"}}>https://twitter.com/jackapp_tmy</Box></li>
                </Box> 
            </Grid>
        </Grid>
    </Container>
  )
}
