import { Box, Stack, Typography } from "@mui/material";
import { varFade } from "../../component/animate/variants";
import { m } from "framer-motion";
import MotionViewport from "../../component/animate/MotionViewport";

export const Awards = () => {
  const isiPhone = /iPhone/i.test(navigator.userAgent);

  return (
    <Stack
      id="Certif"
      component={MotionViewport}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      spacing={8}
    >
      <Stack textAlign={"center"} spacing={3}>
        <m.div variants={varFade().inDown}>
          <Typography sx={{ fontSize: "25px", letterSpacing: "10px", textAlign: "center" }}>
            Trainings and Workshops
          </Typography>
        </m.div>
        <m.div variants={varFade().inUp}>
          <Typography sx={{ fontSize: "30px" }}>1.  MEARN Stack Web Development.</Typography>
          <Typography sx={{ fontSize: "20px" }}>(Undergone six month course in Luminar Technolab,Kochi,Kerala,India)</Typography>
          <Typography sx={{ fontSize: "30px" }}>2.  Seminar on Distributed,Concurrent and Independent Access to Encrypted Cloud Databases.</Typography>
          <Typography sx={{ fontSize: "30px" }}>3.  Industrial Training in Deline Technology .Kinfra,Calicut,Kerala,India.</Typography>
          <Typography sx={{ fontSize: "30px" }}>4.  Participated in Ethical Hacking Workshop.</Typography>
        </m.div>
      </Stack>
      {isiPhone ? (
        <Box>
          <img style={{ width: "100%", height: "100%" }} src="/assets/images/certificate.png" alt="gear-orange" />
        </Box>
      ) : (
        <Box sx={{ width: "100%", maxWidth: "1200px", height: "100%" }}>
          <video
           src="/assets/images/certificate.png"
            autoPlay
            loop
            playsInline
            muted
            preload="none"
            width={"100%"}
            height={"100%"}
          />
        </Box>
      )}
    </Stack>
  );
};
