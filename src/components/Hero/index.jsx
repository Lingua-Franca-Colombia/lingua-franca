import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import "@fontsource/quicksand"

import { Link } from "react-router-dom";

export default function WithBackgroundImage() {
  function handleClick() {
    const element = document.getElementById("features");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={
        "url(https://images.unsplash.com/photo-1546430498-05c7b929830e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        fontFamily={"Quicksand"}
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            ¡Comunícate con el mundo! Aprende idiomas o crea tu sitio web con
            Lingua Franca.
          </Text>
          <Stack direction={"row"}>
            <Button
              bg={"brand.200"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "green.500" }}
              onClick={handleClick}
            >
              Sobre Nosotros
            </Button>
            <Button
              as={Link}
              to="https://wa.link/v2fhzb"
              target="_blank"
              bg={"whiteAlpha.300"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "whiteAlpha.500", textDecoration: "none" }}
            >
              Escríbenos
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
