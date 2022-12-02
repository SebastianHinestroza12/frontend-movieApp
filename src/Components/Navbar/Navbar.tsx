import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import Logo from "../../Asset/Logo.svg";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineAudit } from "react-icons/ai";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            <img src={Logo} alt="Logo" width={40} />
          </Text>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Link to="/login">
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              variant="outline"
              leftIcon={<BsFillPersonFill />}
              fontWeight={600}
              bg={"tranparent.600"}
              _hover={{
                bg: "red.400",
              }}
            >
              Iniciar Sessión
            </Button>
          </Link>

          <Link to="/register">
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              leftIcon={<AiOutlineAudit />}
              variant="outline"
              bg={"tranparent.600"}
              _hover={{
                bg: "red.400",
              }}
            >
              Registrarse
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? (
              <MoonIcon color="blue" w={4} h={4} />
            ) : (
              <SunIcon color="yellow" w={4} h={4} />
            )}
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};
