import { useState } from "react";
import { Button, HStack, Stack, Text } from "@chakra-ui/react";
import { useGetUsersQuery } from "./stores/api/users";

function App() {
  const { data, isLoading, isError } = useGetUsersQuery();
  const [count, setCount] = useState(0);

  return (
    <>
      <Stack height="100vh" bg="blue.100">
        <HStack>
          <Button onClick={() => setCount((count) => count + 1)}> + </Button>
          <Text>{count}</Text>
        </HStack>

        {(isLoading || isError) && <Text>Loading...</Text>}
        {data?.map((user) => (
          <Text key={user._id}>{user._id}</Text>
        ))}
      </Stack>
    </>
  );
}

export default App;
