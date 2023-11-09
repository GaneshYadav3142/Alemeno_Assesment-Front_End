import React from "react";
import { ReactNode } from "react";

import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLocationArrow,
} from "react-icons/fa";

import {
  Box,
  Flex,
  Text,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  // VisuallyHidden,
  // useColorModeValue,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: "#53D2FB",
        color: "#fff",
      }}
    >
      {/* <VisuallyHidden>{label}</VisuallyHidden> */}
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"600"} fontSize={"lg"} mb={2} color={"#FEFEFE"}>
      {children}
    </Text>
  );
};

export default function Footer() {
    const navigate=useNavigate()
  return (
    <Box
      className="container"
      mt={"125px"}
      bg={"#0E0A20"}
      color={"#686868"}
      p={"70px"}
    >
      <Flex
        className="sub-container1"
        justifyContent={"space-between"}
        padding={"0 0 45px 0"}
        direction={{ base: "column", md: "row" }}
      >
        <Text
          fontSize="7xl"
          as="b"
          className="heading-text"
          textAlign="start"
          color={"white"}
        >
          Grow <span style={{ color: "#5E8AF9" }}>Your Learning</span>
          ,
          <br />
          Take Your Step with Us!
        </Text>
        <Flex justifyContent="center" alignItems="center">
          <Box
            className="get-started-btn"
            as="button"
            backgroundColor="#52DFFD"
            borderRadius={"20px"}
            w={"220px"}
            h={"60px"}
            color={"black"}
            fontSize="1.5rem"
            onClick={navigate("/signup")}
          >
            Register Now
          </Box>
        </Flex>
      </Flex>
      <Box
        borderBottom="2px"
        borderBottomColor="#3E3D46"
        height="2px"
        width="100%"
        my={4}
      />
      <Box mt={"50px"} className="sub-container2">
        <Container as={Stack} maxW={"6xl"} p={"10px 0 10px 0"}>
          <SimpleGrid
            templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
            spacing={8}
          >
            <Stack spacing={8}>
              <Box>
                <Link>
                  <img src="https://www.shutterstock.com/image-vector/lms-learning-management-system-badge-260nw-563168038.jpg" alt="" style={{ width: "180px" }} />
                </Link>
              </Box>
              <Text textAlign={"start"}>
                No matter how you learn or
                <br />
                what your need, we can help you find the right
              </Text>
              <Stack direction={"row"} spacing={8}>
                <SocialButton label={"Instagram"} href={"#"}>
                  <FaInstagram />
                </SocialButton>
                <SocialButton label={"Facebook"} href={"#"}>
                  <FaFacebookF />
                </SocialButton>
                <SocialButton label={"Twitter"} href={"#"}>
                  <FaTwitter />
                </SocialButton>
              </Stack>
            </Stack>
            <Stack align={"flex-start"} spacing={8}>
              <ListHeader>Quick Menu</ListHeader>
              <Link href={"#"}>Use Cases</Link>
              <Link href={"#"}>Product</Link>
              <Link href={"#"}>Company</Link>
            </Stack>
            <Stack align={"flex-start"} mt={"70px"} spacing={8}>
              <Link href={"#"}>Support</Link>
              <Link href={"#"}>FAQ's</Link>
            </Stack>
            <Stack align={"flex-start"} spacing={8}>
              <Flex>
                <Box margin={"auto"}>
                  <FaLocationArrow />
                </Box>
                <Link
                  ml={5}
                  href="https://www.google.com/maps/search/+8502+Preston+Rd.+Inglewood,++Maine+98380,+USA/@33.842997,-118.2480467,7.28z?entry=ttu"
                  target="_blank"
                >
                  8502 Preston Rd. Inglewood,
                  <br /> Maine 98380, USA
                </Link>
              </Flex>
              <Flex>
                <Box>
                  <EmailIcon />
                </Box>
                <Link ml={5}>info@Learning.co</Link>
              </Flex>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
      <Text textAlign={"end"} fontSize={"sm"} mt={"40px"}>
        @ Copyright 2023. All rights reserved.
      </Text>
    </Box>
  );
}