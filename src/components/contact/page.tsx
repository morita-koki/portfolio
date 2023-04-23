"use client";
import { Box, Container, Typography } from "@mui/material";
// original conponent
import type { SectionProps } from "@/constants/SectionPropType";



export const Contact: React.FC<SectionProps> = (props: any) => {
  return (
    <Box {...props}>
      <Container maxWidth="md">
        <Typography variant="h3" textAlign="center" marginY={3}>
          Contact Form
        </Typography>

        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSccVRgPW84Q5eXOpy0p-RUsrojQmC_FlFUosIXuk0oYVt1ESg/viewform?embedded=true"
          width="100%"
          height="1000"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}>読み込んでいます…</iframe>

      </Container>
    </Box>
  )
}
