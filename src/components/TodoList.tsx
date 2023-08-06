import {Todo} from "../types/todo";
import FC from "react";
import {Card, Checkbox, Stack, Typography} from "@mui/material";

type Props = {
    todos: Todo[]
    onUpdate: (todo: Todo) => void
}

const TodoList: FC<Props> = ({ todos, onUpdate }) => {
    const handleCompletedCheckbox = (todo: Todo) => {
        onUpdate({
            ...todo,
            completed: !todo.completed,
        })
    }

    return (
        <Stack spacing={2}>
            <Typography varient="h2">todo list</Typography>
            <Stack spacing={2}>
                {todos.map((todo) => (
                    <Card key={todo.id} sx={{ p: 2}}>
                        <Stack direction="row" alignItems="center">
                            <Checkbox
                                checked={todo.completed}
                                onChanged={() => handleCompletedCheckbox(todo)}
                            />
                            <Typography varient="body1">{todo.text}</Typography>
                        </Stack>
                    </Card>
                ))}
            </Stack>
        </Stack>
    )
}

export default TodoList