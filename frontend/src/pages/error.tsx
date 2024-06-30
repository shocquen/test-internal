import { Center, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";

const errorImageUrl =
  "https://cdn.dribbble.com/users/1138875/screenshots/4669703/404_animation.gif";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <VStack height="100svh" justify="center">
      <Image
        src={errorImageUrl}
        alt="404 error animation"
        maxH={{ base: "md", md: "sm" }}
      />
      <Heading>Ooops!</Heading>
      <Text>Sorry, an unexpected error has occurred.</Text>
      <Text>
        <i>{error.statusText || error.message}</i>
      </Text>
    </VStack>
  );
}
