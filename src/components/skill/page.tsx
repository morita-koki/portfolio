"use client"
// import styles from './page.module.css'

import { Box, Container, Grid, Typography } from "@mui/material";

// original conponent
import { RadarChart } from "@/components/modules/RaderChart";


import { FrontendRadarOptions, FrontendRadarData } from "@/constants/radarChartData";
import { BackendRadarOptions, BackendRadarData } from "@/constants/radarChartData";
import { DevOpsRadarOptions, DevOpsRadarData } from "@/constants/radarChartData";

import type { SectionProps } from "@/constants/SectionPropType";
export const Skills: React.FC<SectionProps> = (props: any) => {
    return (
        <Box {...props}>
            <Container maxWidth="md">
                <Typography variant="h3" textAlign="center" marginY={3}>
                    My Skill Set
                </Typography>
                <Typography marginBottom={2}>
                    長年の修行(笑)の末、身につけたスキルをグラフにまとめました。
                    浅くではありますがバックエンドからフロントエンドまで幅広い技術を勉強してきました。
                    コーディングからデプロイまで一人でできるのが強みですが、興味の赴くままに触ってきたので、全体的な理解度の浅さに日々悩んでます。
                    これからは各々の技術の理解につとめていくつもりです。最近はIoTにも興味があります。
                </Typography>
                <Typography marginBottom={2}>
                    ＊サークル活動で使用した技術を含みます
                </Typography>

                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center">
                    <Grid container item xs={8} md={4} alignItems="center">
                        <RadarChart data={BackendRadarData} options={BackendRadarOptions} />
                    </Grid>
                    <Grid container item xs={8} md={4} alignItems="center">
                        <RadarChart data={FrontendRadarData} options={FrontendRadarOptions} />
                    </Grid>
                    <Grid container item xs={8} md={4} alignItems="center" >
                        <RadarChart data={DevOpsRadarData} options={DevOpsRadarOptions} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
