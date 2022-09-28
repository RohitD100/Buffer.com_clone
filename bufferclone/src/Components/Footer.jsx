import React from "react";
import { Box, Button, Grid, Heading, Text } from "@chakra-ui/react";
export const Footer = () => {
  return (
    <div
      style={{
        height: "auto",
        width: "100%",
        display: "flex",
      }}
    >
      <Box h="100%" w="40%">
        <Box marginTop={20} p="100px">
          <Heading marginBottom="50px">Buffer</Heading>
          <Grid templateColumns="repeat(6, 1fr)" gap={1}>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-twitter"></i>
            <i class="bi bi-tiktok"></i>
            <i class="bi bi-linkedin"></i>
            <i class="bi bi-pinterest"></i>
            <br />
            <br />
          </Grid>
          <Text>Download</Text>
          <br />
          <Box>
            <Button>
              <i class="bi bi-apple"></i> App store
            </Button>
            <Button marginLeft={5}>
              <i class="bi bi-google-play"></i> Google play
            </Button>
          </Box>
          <br />
          <Text>Copyright ©2022 Buffer | Privacy | Terms | Security</Text>
        </Box>
      </Box>
      <Box textAlign="left" p="100px" h="100%" w="60%" display="flex">
        <Box m={10}>
          <Heading p={1} fontSize="20px">
            Tool
          </Heading>
          <Text p={1}>Publishing</Text>
          <Text p={1}>Publishing</Text>
          <Text p={1}>Engagement</Text>
          <Text p={1}>Start page</Text>
          <Text p={1}>Extras</Text>
        </Box>
        <Box textAlign="left" m={10}>
          <Heading p={1} fontSize="20px">
            Resourses
          </Heading>
          <Text p={1}>Blog</Text>
          <Text p={1}>Content Library</Text>
          <Text p={1}>Browser Extension</Text>
          <Text p={1}>Free Image editor</Text>
        </Box>
        <Box textAlign="left" m={10}>
          <Heading p={1} fontSize="20px">
            Support{" "}
          </Heading>
          <Text p={1}>Help Center</Text>
          <Text p={1}>Status</Text>
          <Text p={1}>ChangeLog</Text>
          <Text p={1}>Product Roadmap</Text>
        </Box>
        <Box textAlign="left" m={10}>
          <Heading p={1} fontSize="20px">
            Company
          </Heading>
          <Text p={1}>About</Text>
          <Text p={1}>tranperency</Text>
          <Text p={1}>Carrier</Text>
          <Text p={1}>Accessibility</Text>
          <Text p={1}>Press</Text>
          <Text p={1}>Sitmap</Text>
        </Box>
      </Box>
    </div>
  );
};
