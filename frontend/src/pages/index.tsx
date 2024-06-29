import { AddIcon, PhoneIcon, WarningIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useState } from "react";
import { useGetUsersQuery } from "../stores/api/users";

export default function Index() {
  const { data, isLoading, isError } = useGetUsersQuery();
  const [count, setCount] = useState(0);
  return (
    <Stack p={2} height="100svh" bg="blue.50">
      <Text>{window.location.toString()}</Text>
      <HStack>
        <Button
          colorScheme="blue"
          size="lg"
          onClick={() => setCount((count) => count + 1)}
        >
          <AddIcon boxSize={6} />
        </Button>
        <Text>{count}</Text>
      </HStack>

      {isLoading && <Text>Loading...</Text>}
      {data?.map((user, idx) => (
        <Card key={idx}>
          <CardHeader>{user.firstname} {user.lastname}</CardHeader>
          <CardBody>
            <UnorderedList styleType="'- '">
              <ListItem>{user.email}</ListItem>
              <ListItem>{user.number}</ListItem>
            </UnorderedList>
          </CardBody>
        </Card>
      ))}
    </Stack>
  );
}
