import { Card, CardContent, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const QuickTips = () => {
  return (

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          position: "absolute",
          width: "100%",
          top: "25%",
        }}
      >
        <Card
          sx={{
            width: "60%",
            height: 190,
          }}
        >
          <CardContent>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ width: "30%", boxShadow: 3 }}>
                <CardContent>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur{" "}
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ width: "30%", boxShadow: 3 }}>
                <CardContent>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
                  </Typography>
                </CardContent>
              </Card>
            </Container>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: "30%",
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
