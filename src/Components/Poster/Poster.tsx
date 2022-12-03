import { useEffect } from "react";
import { Navbar } from "../Navbar/Navbar";
import { useAppDispatch, useAppSelector } from "../../Redux/Store/hook";
import { getAllMovies } from "../../Redux/Slice/movie";
import { Image, Button, Stack, Container } from "@chakra-ui/react";
import "./Poster.css";

export const Poster = () => {
  const dispatch: any = useAppDispatch();
  const alMovie = useAppSelector((state) => state.movies.movies);
  const onePoster = alMovie[0];
  console.log(onePoster);
  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  const path = `url(https://image.tmdb.org/t/p/original/${onePoster?.poster_path})`;
  return (
    <div
      className="container-poster"
      style={{
        backgroundImage: path,
      }}
    >
      <Navbar />
      <Container maxW="4xl">
        <div className="container-item">
          <div className="container-img">
            <Image
              boxSize="220px"
              width={500}
              src={`https://image.tmdb.org/t/p/original/${onePoster?.poster_details}`}
              alt="Black Adam"
            />
          </div>
          <div className="item">
            <h4 style={{ color: "white" }}>{onePoster?.title}</h4>
            <h5 style={{ color: "white" }}>{onePoster?.release}</h5>
            <p style={{ color: "white" }}>
              {onePoster?.genres?.map((data: string) =>
                data.toString().split("-")
              )}
            </p>
            <p style={{ color: "white" }}>{`⭐ ${onePoster?.rating}`}</p>
            <p style={{ color: "white" }}>{onePoster?.description}</p>
            <div>
              <Stack direction="row" spacing={4} align="center">
                <Button colorScheme="gray" variant="solid" size="lg">
                  Ver Trailer
                </Button>
                <Button colorScheme="red" variant="solid" size="lg">
                  Ver Ahora
                </Button>
              </Stack>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
