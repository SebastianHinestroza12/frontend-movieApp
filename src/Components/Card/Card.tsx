import { ICard } from "../../Interfaces";
import {
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  SimpleGrid,
  CardHeader,
  CardFooter,
} from "@chakra-ui/react";
import "./Card.css";
export const CardMovie: React.FC<ICard> = ({
  title,
  release,
  poster_details,
  rating,
}) => {
  return (
    <div className="card-container">
      <div className="card">
        <SimpleGrid
          spacing={2}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        >
          <Card variant="filled">
            <CardHeader>
              <Heading size="sm">{title}</Heading>
            </CardHeader>
            <CardBody>
              <Image
                src={`https://image.tmdb.org/t/p/original/${poster_details}`}
                alt={title}
                boxSize="270px"
                objectFit="cover"
              />
            </CardBody>
            <CardFooter>
              <div className="text-order">
                <Text>{release}</Text>
                <Text>{`⭐ ${rating}`}</Text>
              </div>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </div>
    </div>
  );
};
