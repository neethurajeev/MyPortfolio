import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { varFade } from "../../component/animate/variants";
import { m, useMotionValue, transform } from "framer-motion";
import MotionViewport from "../../component/animate/MotionViewport";

type ProjectProbs = {
  name: string;
  img: string;
  desc: string;
  lang: { lan: string }[];
  link: string;
  button: string;
}[];

const ProjectsData: ProjectProbs = [
  {
    name: "Bull and Bearz Consultancy",
    lang: [{ lan: "#ReactTs" },{ lan: "#NextJs" }, { lan: "#MongoDB" }, { lan: "#NodeJs" }],
    link: "https://www.bullandbearz.com/",
    button: "Live",
  },
 
    {
    name: "BankApp",
    img: "bank.jpg",
    desc: "It allow you to access your banking accounts and conduct financial transactions using a mobile device, anytime and from anywhere.",
    lang: [{ lan: "#ReactJs" }, { lan: "#Redux" }, { lan: "#Axios" }],
    link: "https://github.com/neethurajeev/BankApp.git",
    button: "Live",
  },
];

export const Projects = () => {
  return (
    <Stack id="Proj" component={MotionViewport}>
      <Stack textAlign="center" spacing={2} mb={5}>
        <m.div variants={varFade().inDown}>
          <Typography sx={{ fontSize: "25px", letterSpacing: "10px" }}>Best of my work</Typography>
        </m.div>
        <m.div variants={varFade().inUp}>
          <Typography sx={{ fontSize: "50px" }}>Projects</Typography>
        </m.div>
      </Stack>

      <Grid container spacing={2} justifyContent={"center"} alignItems={"center"} sx={{ mb: 5 }}>
        {ProjectsData.map((el, ind) => (
          <Grid key={ind} item lg={4} display={"flex"} alignItems={"center"} justifyContent={"center"} mb={5}>
            <m.div variants={varFade().inUp} whileHover={{ scale: 1.02 }}>
              <Paper
                sx={{
                  maxWidth: "350px",
                  width: "100%",
                  height: "500px",
                  overflow: "hidden",
                }}
              >
                <Stack justifyContent={"space-between"} height={"100%"}>
                  {/* image for the project */}
                  <Stack gap={3}>
                    <Box
                      sx={{
                        width: "100%",
                        height: "200px",
                        background: "#FFF",
                        borderRadius: "16px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        width={"100%"}
                        height={"100%"}
                        style={{ objectFit: "cover" }}
                        src={`/assets/images/projects/${el.img}`}
                        alt=""
                      />
                    </Box>
                    <Stack spacing={2}>
                      <Typography variant="h1" sx={{ fontSize: "20px" }}>
                        {el.name}
                      </Typography>
                      <Typography sx={{ fontSize: "15px" }}>{el.desc}</Typography>
                    </Stack>
                  </Stack>

                  <Stack spacing={2}>
                    <Stack direction={"column"} spacing={2}>
                      <Stack direction={"row"} spacing={1}>
                        {el.lang &&
                          el.lang.map((lang, ind) => (
                            <Typography key={ind} color={ind === 0 ? "#22d8dc" : ind === 1 ? "#38ef7d" : "#fc6767"}>
                              {lang.lan}
                            </Typography>
                          ))}
                      </Stack>
                      <Button
                        onClick={() => window.open(el.link, "_blank")}
                        disabled={el.button === "Live" ? false : true}
                        variant="contained"
                        sx={{ color: "text.primary" }}
                      >
                        {el.button}
                      </Button>
                    </Stack>
                  </Stack>
                </Stack>
              </Paper>
            </m.div>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
