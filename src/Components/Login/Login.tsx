import { Link, useNavigate } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../Redux/Store/hook";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { loginUser } from "../../Redux/Slice/movie";
import { getAllUser } from "../../Redux/Slice/user";
import { useEffect } from "react";
import bcrypt from "bcryptjs";

type FormValues = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().email("Debe ser formato email").required(),
    password: yup.string().trim().required().min(6),
  })
  .required();

const comparePassword = async (
  password: any,
  dbPasswordId: any
): Promise<boolean> => {
  return await bcrypt.compare(password, dbPasswordId);
};

export const Login = () => {
  const navigate = useNavigate();
  const dispatch: any = useAppDispatch();

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const user = useAppSelector((state) => state.users.users);
  const toast = useToast();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // for (let i: number = 0; i < user.length; i++) {
    //   if (user[i].email === data.email) {
    //     if (comparePassword(user[i].password, data.password)) {

    //     }
    //   }
    // }
    dispatch(loginUser(data));
    toast({
      position: "top",
      title: `Bienvenido ${data.email}`,
      status: "success",
      duration: 5000,
      isClosable: false,
    });
    navigate("/");
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Iniciar sesi??n en su cuenta</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            {/* to enjoy all of our cool <Link color={"blue.400"}>features</Link> ?????? */}
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input {...register("email", { required: true })} type="email" />
              <p>{errors.email?.message}</p>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Contrase??a</FormLabel>
              <Input
                {...register("password", {
                  required: true,
                  maxLength: 30,
                  minLength: 6,
                })}
                type="password"
              />
              <p>{errors.password?.message}</p>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Link to="/forgotPassword" color={"blue.400"}>
                  Olvido su contrase??a?
                </Link>
              </Stack>
              <Button
                onClick={handleSubmit(onSubmit)}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Ingresar
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
