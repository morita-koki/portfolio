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
        title: "お家Bar",
        application_description: "サークルの仲間と一緒に制作したWebアプリケーションです。\
                                カクテルを作ってみたいという人向けに、カクテル作りの敷居を下げるために作成しました。\
                                今持っているお酒を登録すると、登録されているお酒をもとに、おすすめのカクテルを教えてくれます。\
                                登録しやすくするためにカメラでバーコードを読み取って登録することもできます。\
                                お家Bar制作でフロントエンド実装を経験しました。",
        skills_description: "Ruby on Rails, React, TypeScript, ...",
    },
    {
        image: "/penguin.jpeg",
        title: "Portfolio",
        application_description: "今みているこのWebページです。サークル内でポートフォリオ作成ハッカソンを使用という話があり、\
                                そのハッカソンでこのポートフォリオサイトを制作しました。データベース等は用いないので、\
                                HTML/CSS, JavaScriptでもいいかなと悩みましたが、せっかくReactを学習してきたので、React(Next), TypeScriptで制作しました",
        skills_description: "React(Next), TypeScript, ChartJS, ...",
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
