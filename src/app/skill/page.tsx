"use client"
// import styles from './page.module.css'

import { Box, Container, Grid, Typography } from "@mui/material";

// original conponent
import { RadarChart } from "@/components/modules/RaderChart";


import { FrontendRadarOptions, FrontendRadarData } from "@/constants/radarChartData";
import { BackendRadarOptions, BackendRadarData } from "@/constants/radarChartData";
import { DevOpsRadarOptions, DevOpsRadarData } from "@/constants/radarChartData";
  

export default function SkillsPage() {
    return (
        <Container maxWidth="md">
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center">
                <Grid item xs={12}>
                    <Typography variant="h3" textAlign="center">
                        Skill Set
                    </Typography>
                    <Typography>
                        興味の赴くままに触ってきたので、理解度が浅いです。これからは全体的に理解度を深めていきます。
                    </Typography>
                    <Typography>
                        ＊サークル活動で使用した技術を含みます
                    </Typography>
                </Grid>
            </Grid>
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
    )
}
