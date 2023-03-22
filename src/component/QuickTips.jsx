import { Card, CardContent, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";


export const QuickTips = () => {
  const isSmallScreen = useMediaQuery("(max-width:1000px)");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: isSmallScreen ? "column" : "row",
        alignItems:'center',
        gap:'1rem'
      }}
    >
      <Card sx={{ 
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
      }}>
        <CardContent sx={{p:'1rem'}}>
          <Typography variant="h5">Quick Tips</Typography>
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Card sx={{ width: "30%", boxShadow: 3 }}>
              <CardContent>
                <Typography>
                  Lorem ipsum dolor sit amet
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ width: "30%", boxShadow: 3 }}>
              <CardContent>
                <Typography>
                  Lorem ipsum dolor sit {" "}
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ width: "30%", boxShadow: 3 }}>
              <CardContent>
                <Typography>
                  Lorem ipsum dolor sit amet{" "}
                </Typography>
              </CardContent>
            </Card>
          </Container>
        </CardContent>
      </Card>
      <Card
        sx={{
          width: isSmallScreen ? "100%" : "30%",
          // boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          boxShadow: "rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px",
        }}
      >
        <CardContent>
          <Typography variant="h5">Quick Notes</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
