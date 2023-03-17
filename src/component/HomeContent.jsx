import { Card, List, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Favourites } from "./Favourites";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <List sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </List>
      )}
    </div>
  );
}


export const HomeContent = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
    sx={{
      width: "95%",
      position: "absolute",
      top: "54%",
      height: "44%",
    }}
    >

    <Card
       sx={
        {height:'100%'}
       }
      >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          >
          <Tab variant label="Favourites" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Favourites />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Card>
    </Box>
  );
};
