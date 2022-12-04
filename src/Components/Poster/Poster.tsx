import { Navbar } from "../Navbar/Navbar";
import { Image, Button, Stack, Container } from "@chakra-ui/react";
import "./Poster.css";

export const Poster = (props: any) => {
  return (
    <div
      className="container-poster"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.path})`,
      }}
    >
      <Navbar />
      <Container maxW="4xl">
        <div className="container-item">
          <div className="container-img">
            <Image
              boxSize="220px"
              width={500}
              src={`https://image.tmdb.org/t/p/original/${props.poster_details}`}
              alt="Black Adam"
            />
          </div>
          <div className="item">
            <h4 style={{ color: "white" }}>{props.title}</h4>
            <h5 style={{ color: "white" }}>{props.release}</h5>
            <p style={{ color: "white" }}>{props.genres}</p>
            <p style={{ color: "white" }}>{`⭐ ${props.reating}`}</p>
            <p style={{ color: "white" }}>{props.description}</p>
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
