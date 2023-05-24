import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./App.css";
import TodoList from "./Components/TodoList";

function App() {
  const theme = extendTheme({
    styles: {
      global: {
        body: {
          color: "white",
          height: "100vh",
          dispaly: "flex",
          alignItems: "start",
        },
      },
    },
  });

  return (
    <>
      <ChakraProvider theme={theme}>
        <TodoList />
      </ChakraProvider>
    </>
  );
}

export default App;
