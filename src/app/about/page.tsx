"use client"

import { Box, Container, Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import Image  from "next/image"
// original conponent

export default function About() {
  return (
    <Container maxWidth="md">
        <Typography variant="h3" textAlign="center" marginY={3}>
            About Me
        </Typography>
        <Grid
            container
            // direction="row"
            justifyContent="center"
            alignItems="center" >

            <Grid container justifyContent="center" alignItems="center" item xs={12} md={5} marginBottom={2}>
              <Grid container alignItems="center" item xs={6} md={5}>
                <Image
                  src="/penguin.jpeg"
                  alt="koki's icon"
                  loading="lazy"
                  width={100}
                  height={100}
                  style={{ margin: "auto" }}
                />
              </Grid>
              <Grid item xs={8} md={5}>
                <Typography textAlign="center" component="p" variant="caption">大阪出身</Typography>
                <Typography textAlign="center" component="p" variant="caption">2001年5月17日生</Typography>
                <Typography textAlign="center" component="p" variant="caption">名古屋大学所属</Typography>
              </Grid>
            </Grid>

            <Grid item xs={10} md={10} marginBottom={2}>
              <Typography variant="subtitle1">
                大阪出身の大学４年生。大学で電気工学、電子工学を学んでいて、大学院では情報学を専攻する予定。
                学部２年生のときにアプリ開発団体jackに出会いアプリ開発の楽しさに魅入られる。
                サークルの仲間と一緒にアプリ開発、WEBサイト制作、ハッカソンなど
                バックエンド、フロントエンドともに興味の赴くままに触れる。
              </Typography>
            </Grid>

            {/* <Grid container alignItems="center" item xs={12} md={6}>
              <Image
                src="/jack-icon.jpg"
                alt="jack's icon"
                loading="lazy"
                width={100}
                height={100}
                style={{ margin: "auto" }}
              />
            </Grid> */}

            <Grid item xs={8} md={4}>
              <Typography component="p" variant="subtitle2">
                - GitHub: <Box component="a" href="https://github.com/morita-koki" target="_blank" sx={{textDecoration: "none", color: "#039be5"}}>https://github.com/morita-koki</Box>
              </Typography>
              <Typography component="p" variant="subtitle2">
                - jack: <Box component="a" href="https://twitter.com/jackapp_tmy" target="_blank" sx={{textDecoration: "none", color: "#039be5"}}>https://twitter.com/jackapp_tmy</Box>
              </Typography>
            </Grid>

        </Grid>
    </Container>
  )
}
