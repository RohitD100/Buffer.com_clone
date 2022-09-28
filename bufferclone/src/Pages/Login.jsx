import {
  Box,
  Center,
  Heading,
  Image,
  Text,
  Input,
  Button,
  Flex,
  Spacer,
} from "@chakra-ui/react";
export const Login = () => {
  return (
    <div style={{ display: "flex" }}>
      <Box m={2} w="38%" h="auto" p="80px">
        <Center>
          <Image
            w="200px"
            src="https://i.pcmag.com/imagery/reviews/06hL6EJGwPcfiYd59BH01QQ-7.fit_scale.size_1028x578.v1569472574.jpg"
          ></Image>
        </Center>
        <Heading>Login</Heading>
        <Text m={6}> Email Address</Text>
        <Input placeholder="Basic usage" />
        <Text m={6}>Password</Text>
        <Input placeholder="Basic usage" />
        <Button colorScheme="teal" color="white" bg="blue" m={5}>
          Login
        </Button>
        <Flex>
          <Text fontSize="13px">Create an Account</Text>
          <Spacer />
          <Text fontSize="13px">Forgot Your Password</Text>
        </Flex>
        <Box m={5} marginTop="40px">
          <Text>
            We no longer support social sign on. Please click here to set your
            password and access your account.
          </Text>
          <Text marginTop="50px">
            Terms of Service • Privacy Policy • Security
          </Text>
        </Box>
      </Box>
      <Box w="70%" bg="yellow">
        <Image
          paddingTop="100px"
          src="https://login.buffer.com/img/sp-login-image.png"
        />
      </Box>
      <hr />
    </div>
  );
};
