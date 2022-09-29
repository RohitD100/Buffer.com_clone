import { NavLink, Link } from "react-router-dom";
import {
  Flex,
  Box,
  Image,
  ButtonGroup,
  Button,
  Menu,
  MenuButton,
  MenuList,
  Text,
  Heading,
} from "@chakra-ui/react";
export function Navbar() {
  return (
    <div>
      <Fljex minWidth="max-content" alignItems="center" gap="1">
        <Box marginLeft="50px" p="2">
          <Link to="/">
            <Image
              w="150px"
              src="https://i.pcmag.com/imagery/reviews/06hL6EJGwPcfiYd59BH01QQ-7.fit_scale.size_1028x578.v1569472574.jpg"
            />
          </Link>
        </Box>

        <Box marginLeft="50px">
          <ButtonGroup gap="8">
            <Link>
              <Menu>
                <MenuButton
                  fontSize="20px"
                  color="black"
                  colorScheme="none"
                  as={Button}
                >
                  Tools <i class="bi bi-caret-down-fill"></i>
                </MenuButton>
                <Link>
                  <MenuList>
                    <div style={{ padding: "20px" }}>
                      <Heading fontSize="18px">
                        {" "}
                        <i class="bi bi-send"></i> Publishing
                      </Heading>
                      <br />
                      <Text>
                        Plan collaborate and publish <br /> Thumb stopping
                        context
                      </Text>
                      <br />
                      <Heading fontSize="18px">
                        {" "}
                        <i class="bi bi-graph-up-arrow"></i> Analytics
                      </Heading>
                      <br />
                      <Text>
                        Analyze social media <br /> performance and create
                        reports
                      </Text>
                      <br />
                      <Heading fontSize="18px">
                        {" "}
                        <i class="bi bi-chat-left-dots"></i> Engagement
                      </Heading>
                      <br />
                      <Text>
                        Quickly navigate your comments <br /> and engage with
                        your audiance
                      </Text>
                      <br />
                      <Heading fontSize="18px">
                        {" "}
                        <i class="bi bi-pencil-square"></i> Start Page
                      </Heading>
                      <br />
                      <Text>
                        Build a customizes landing page <br />
                        in minutes
                      </Text>
                      <br />
                    </div>
                  </MenuList>
                </Link>
              </Menu>
            </Link>
            <Link>
              <Menu>
                <MenuButton
                  fontSize="20px"
                  color="black"
                  colorScheme="none"
                  as={Button}
                >
                  Channel <i class="bi bi-caret-down-fill"></i>
                </MenuButton>
                <Link>
                  <MenuList>
                    <div style={{ padding: "20px" }}>
                      <Heading fontSize="18px">
                        <i class="bi bi-facebook"></i> Facebook
                      </Heading>
                      <br />
                      <br />
                      <Heading fontSize="18px">
                        <i class="bi bi-briefcase"></i> Google Business profile
                      </Heading>
                      <br />
                      <br />
                      <Heading fontSize="18px">
                        <i class="bi bi-instagram"></i> Instagram
                      </Heading>
                      <br />
                      <br />
                      <Heading fontSize="18px">
                        <i class="bi bi-linkedin"></i> Linkdin
                      </Heading>
                      <br />
                      <br />
                      <Heading fontSize="18px">
                        <i class="bi bi-pinterest"></i> Pintrest
                      </Heading>
                      <br />
                      <br />
                      <Heading fontSize="18px">
                        <i class="bi bi-bag-check-fill"></i> Shopify
                      </Heading>
                      <br />
                      <br />
                      <Heading fontSize="18px">
                        <i class="bi bi-tiktok"></i> Tiktok
                      </Heading>
                      <br />
                      <br />
                      <Heading fontSize="18px">
                        <i class="bi bi-twitter"></i> Twitter
                      </Heading>
                      <br />
                      <br />
                    </div>
                  </MenuList>
                </Link>
              </Menu>
            </Link>
            <Link>
              <Button fontSize="20px" color="black" colorScheme="none">
                Pricing
              </Button>
            </Link>
            <Link>
              <Button fontSize="20px" color="black" colorScheme="none">
                Blog
              </Button>
            </Link>
            <Link>
              <Button fontSize="20px" color="black" colorScheme="none">
                About
              </Button>
            </Link>
            <Link>
              <Button fontSize="20px" color="black" colorScheme="none">
                Customers
              </Button>
            </Link>
            <Link to="/login">
              <Button color="blue" colorScheme="none" fontSize="20px">
                Log in
              </Button>
            </Link>
            <Button fontSize="20px" colorScheme="blue" bg="blue">
              Get started now
            </Button>
          </ButtonGroup>
        </Box>
      </Flex>
    </div>
  );
}
