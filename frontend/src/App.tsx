import { AddIcon, PhoneIcon, WarningIcon } from "@chakra-ui/icons";
import { Button, HStack, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useGetUsersQuery } from "./stores/api/users";

function App() {
  const { data, isLoading, isError } = useGetUsersQuery();
  const [count, setCount] = useState(0);
  return (
    <>
      <Stack p={2} height="100vh" bg="blue.50">
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

        {(isLoading || isError) && <Text>Loading...</Text>}
        {data?.map((user) => <Text key={user._id}>{user._id}</Text>)}
      </Stack>
    </>
  );
}

export default App;
