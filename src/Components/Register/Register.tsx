import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useAppDispatch } from "../../Redux/Store/hook";
import { useForm, SubmitHandler } from "react-hook-form";
import { postUser } from "../../Redux/Slice/movie";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./Register.css";

type FormValues = {
  name: string;
  surname: string;
  email: string;
  password: string;
  repitePassword: string;
};

const schema = yup
  .object({
    name: yup.string().trim().required(),
    surname: yup.string().trim().required(),
    email: yup.string().email("Debe ser formato email").required(),
    password: yup.string().trim().required().min(6),
    repitePassword: yup
      .string()
      .trim()
      .required()
      .oneOf([yup.ref("password")], "Las contraseñas deben coincidir"),
  })
  .required();

export const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const toast = useToast();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    dispatch(postUser(data));
    toast({
      position: "top",
      title: "Cuenta Creada.",
      description: "Hemos creado su cuenta para usted.",
      status: "success",
      duration: 4000,
      isClosable: false,
    });
    navigate("/login");
  };

  return (
    <div className="container-register">
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Registrarse
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              para disfrutar de todas nuestras características geniales ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl isRequired>
                    <FormLabel>Nombre</FormLabel>
                    <Input
                      {...register("name", {
                        required: true,
                        pattern: /^[A-Za-z]+$/i,
                      })}
                      type="text"
                    />
                    <p>{errors.name?.message}</p>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="surname" isRequired>
                    <FormLabel>Apellido</FormLabel>
                    <Input
                      {...register("surname", {
                        required: true,
                        maxLength: 20,
                      })}
                      type="text"
                    />
                    <p>{errors.surname?.message}</p>
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  {...register("email", { required: true })}
                  type="email"
                />
                <p>{errors.email?.message}</p>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Contraseña</FormLabel>
                <InputGroup>
                  <Input
                    {...register("password", {
                      required: true,
                      maxLength: 30,
                      minLength: 6,
                    })}
                    type={showPassword ? "text" : "password"}
                  />
                  <p>{errors.password?.message}</p>
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel> Repite contraseña</FormLabel>
                <InputGroup>
                  <Input
                    {...register("repitePassword", {
                      required: true,
                      maxLength: 23,
                      minLength: 6,
                    })}
                    type={showPassword ? "text" : "password"}
                  />
                  <p>{errors.repitePassword?.message}</p>
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  onClick={handleSubmit(onSubmit)}
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Registrarme
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Ya tiene una cuenta?{" "}
                  <Link to="/login" color={"blue.400"}>
                    {" "}
                    Iniciar sessión
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
};
