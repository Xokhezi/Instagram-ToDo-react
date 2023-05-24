import {
  Heading,
  Input,
  List,
  ListIcon,
  ListItem,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { MdCheckCircle, MdCircle } from "react-icons/md";
import { useState } from "react";
interface Todo {
  id: number;
  task: string;
  finished: boolean;
}
const TodoList = () => {
  const originalData: Todo[] = [
    { id: 1, task: "Follow code with Tom", finished: false },
    {
      id: 2,
      task: "Play enough videogames",
      finished: false,
    },
    { id: 3, task: "Go to buy milk!", finished: true },
    {
      id: 4,
      task: "Code something today",
      finished: true,
    },
    { id: 5, task: "Go to gym", finished: true },
  ];

  const [todos, setTodos] = useState(originalData);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  const handleTodoClick = (todoId: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, finished: !todo.finished } : todo
    );
    setTodos(updatedTodos);
  };
  const handleSearch = () => {
    if (input === "") {
      setTodos(originalData);
    } else {
      const filteredTodos = originalData.filter((todo) =>
        todo.task.includes(input)
      );
      setTodos(filteredTodos);
    }
  };
  const handleFilter = () => {
    if (filter === "all") {
      setTodos(originalData);
    } else {
      const filterValue = filter === "true";
      const filteredTodos = originalData.filter(
        (todo) => todo.finished === filterValue
      );
      setTodos(filteredTodos);
    }
  };
  return (
    <>
      <Heading p={3}>My Todos</Heading>
      <Input
        border={"grey 1px solid"}
        mb={5}
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={() => handleSearch()}
      ></Input>
      <RadioGroup onChange={setFilter} onClick={handleFilter} value={filter}>
        <Stack direction="row">
          <Radio value="all">All</Radio>
          <Radio value="false">Not yet</Radio>
          <Radio value="true">Completed</Radio>
        </Stack>
      </RadioGroup>
      <List
        w={"50vh"}
        bg={"blackAlpha.100"}
        borderRadius={15}
        p={2}
        fontSize={20}
      >
        {todos.map((todo) => (
          <ListItem
            textAlign={"left"}
            p={2}
            key={todo.id}
            onClick={() => handleTodoClick(todo.id)}
          >
            <ListIcon
              border={"grey 1px solid"}
              borderRadius={100}
              as={todo.finished ? MdCheckCircle : MdCircle}
              color={todo.finished ? "green.500" : "white"}
              style={{
                cursor: "pointer",
              }}
            />

            {todo.task}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default TodoList;
