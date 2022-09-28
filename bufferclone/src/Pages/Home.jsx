import { Box, Button, Image, Heading, Text, Center } from "@chakra-ui/react";
export const Home = () => {
  return (
    <div>
      <Box w="100%" h="500px" display="flex" gap={3}>
        <Box p="30px" w="50%">
          <Heading fontSize="45px">
            Grow your audience on <br /> social and beyond
          </Heading>

          <Text fontSize="22px" marginTop="50px">
            Buffer helps you build an audience organically. We’re a
            values-driven company that provides affordable, intuitive, marketing
            tools for ambitious people and teams.
          </Text>
          <br />
          <br />
          <Button color="white" bg="blue">
            Get started now
          </Button>
          <Button marginLeft="30px">
            <i class="bi bi-play-circle"></i> Watch Video
          </Button>
        </Box>
        <Box w="50%">
          <Image
            h="100%"
            w="85%"
            src="https://buffer.com/static/illustrations/all-channels-3.webp"
          />
        </Box>
      </Box>
      <Box marginTop="30px">
        <Heading>Be where your customers are</Heading>
        <Text fontSize="22px">
          People spend, on average, almost 2.5 hours on social media
          <br />
          every day. ​​Let them find your brand more easily through
          <br />
          these four simple steps:
        </Text>
      </Box>
      <Box>
        <Image src="https://buffer.com/static/misc/buffer-loop-v2.svg" />
      </Box>
      <Center>
        <Box marginTop="40px" w="70%" h="500px" display="flex" gap={3}>
          <Box p="30px" w="50%">
            <Text fontSize="22px" color="blue" marginTop="50px">
              <b> 1. ANALYZE</b>
            </Text>
            <br />
            <Heading fontSize="45px">
              Measure your social <br /> media performance in a <br /> few
              clicks
            </Heading>

            <Text fontSize="22px" marginTop="50px">
              See what’s working and deliver high engagement <br /> content.
            </Text>
            <br />
            <br />
            <Button color="white" bg="blue">
              Get started now
            </Button>
            <Button marginLeft="30px"> Learn More</Button>
          </Box>
          <Box w="50%">
            <Image
              h="100%"
              w="85%"
              marginTop="50px"
              src="https://buffer.com/static/illustrations/thumb-stop-content-2.webp"
            />
          </Box>
        </Box>
      </Center>
      {/* //dfgs */}
      <Center marginTop="50px">
        <Box marginTop="40px" w="70%" h="500px" display="flex" gap={3}>
          <Box w="50%">
            <Image
              h="100%"
              w="100%"
              marginTop="50px"
              src="https://buffer.com/static/illustrations/collaborate-more-efficiently@2x.webp"
            />
          </Box>
          <Box p="30px" w="50%">
            <Text fontSize="22px" color="blue" marginTop="50px">
              <b> 2. PLAN AND PUBLISH YOUR CONTENT</b>
            </Text>
            <br />
            <Heading fontSize="45px">
              Collaborate and plan your campaigns
            </Heading>

            <Text fontSize="22px" marginTop="50px">
              Schedule your posts in advance so you can focus on other things.
            </Text>
            <br />
            <br />
            <Button color="white" bg="blue">
              Get started now
            </Button>
            <Button marginLeft="30px"> Learn More</Button>
          </Box>
        </Box>
      </Center>
      {/* sadfasdf */}
      <Center>
        <Box marginTop="40px" w="70%" h="500px" display="flex" gap={3}>
          <Box p="30px" w="50%">
            <Text fontSize="22px" color="blue" marginTop="50px">
              <b>3. ENGAGE</b>
            </Text>
            <br />
            <Heading fontSize="45px">Respond to comments twice as fast</Heading>

            <Text fontSize="22px" marginTop="50px">
              Skip to important comments with the help of labels and hotkeys.
            </Text>
            <br />
            <br />
            <Button color="white" bg="blue">
              Get started now
            </Button>
            <Button marginLeft="30px"> Learn More</Button>
          </Box>
          <Box w="50%">
            <Image
              h="100%"
              w="85%"
              marginTop="50px"
              src="https://buffer.com/static/illustrations/hero-reply@2x-2.webp"
            />
          </Box>
        </Box>
      </Center>
      <br />
      <br />
      <br />
      <Box>
        <Text fontSize="22px" color="blue" marginTop="50px">
          <b>4. CELEBRATE</b>
        </Text>
        <br />
        <Heading fontSize="35px">
          Businesses all over the world trust <br /> Buffer to build their brand
        </Heading>
      </Box>
      <br />
      <br />
      <br />
      <Box
        w="100%"
        h="auto"
        display="grid"
        gridTemplateColumns="repeat(4,1fr)"
        gap={10}
      >
        <Box>
          <Text fontSize="30px" color="blue">
            <b>10 years</b>
          </Text>
          <Text fontSize="20px">in business</Text>
        </Box>
        <Box>
          <Text fontSize="30px" color="blue">
            <b>140,000</b>
          </Text>
          <Text fontSize="20px">users</Text>
        </Box>
        <Box>
          <Text fontSize="30px" color="blue">
            <b>100k+</b>
          </Text>
          <Text fontSize="20px">monthly blog readers</Text>
        </Box>
        <Box>
          <Text fontSize="30px" color="blue">
            <b>100k+</b>
          </Text>
          <Text fontSize="20px">monthly blog readers</Text>
        </Box>
      </Box>

      <Center marginTop="50px">
        <Box marginTop="40px" w="70%" h="500px" display="flex" gap={3}>
          <Box w="60%">
            <Image
              h="60%"
              w="100%"
              marginTop="50px"
              src="https://static.buffer.com/cdn-cgi/image/w=640,quality=90,format=auto/marketing/static/team/buffer-team-map-2022@2x.jpg"
            />
          </Box>
          <Box p="30px" w="50%">
            <Heading fontSize="45px">And we are here to help</Heading>

            <Text fontSize="22px" marginTop="50px">
              Our customer advocates are standing by 24/7 to support you via
              email and social media. We also have a comprehensive, regularly
              updated help center for those who prefer to find help themselves.
            </Text>
            <br />
            <br />

            <Button marginLeft="30px">Visit Our Help Centre</Button>
          </Box>
        </Box>
      </Center>
      <Box p="150px" color="white" bg="blue">
        <Center>
          <Heading>
            140,000+ people like you use <br /> Buffer to build their brand on
            <br />
            social media every month
          </Heading>
        </Center>
        <br />
        <br />
        <Button p="30px" colorScheme="orange" bg="tomato">
          Get Started Now
        </Button>
      </Box>
    </div>
  );
};
