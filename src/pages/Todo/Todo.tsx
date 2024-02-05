import Page from "@components/Page";
import { Box, Card, CircularProgress, Container, IconButton, Stack } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EmptyContent from "@components/EmptyContent";
import TodoEditDialog from "./TodoEditDialog";
import { useDialog } from "@hooks/useDialog";
import useDispatch from "@hooks/useDispatch";
import { useEffect, useState } from "react";
import { listAllTodo } from '@src/store/todo/todoActions'
import useSelector from "@hooks/useSelector";
import { todoSelectors } from "@src/store/todo/todoSlice";
import TodoItem from "./ToDoItem";


export default function TodoPage() {
    const dispatch = useDispatch()
    const dlg = useDialog(false)
    const todos = useSelector(todoSelectors.selectAll)
    const [isLoading, setIsLoading] = useState(true)
    console.log(todos, "is todos")
    useEffect(() => {
        const init = async function () {
            await dispatch(listAllTodo(false))
            setIsLoading(false)
        }
        init()

    }, [])
    const handleAddTodo = () => {
        dlg.open()
    }
    return <Page title="ToDo" >
        <Container  >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <IconButton onClick={handleAddTodo}>
                    <AddCircleIcon color="primary" sx={{ width: 30, height: 30 }} />
                </IconButton>
            </Box>


            <Card sx={{
                mb: 3,
                minHeight: '100vh',
                px: 3,
            }}>
                {isLoading && <Box mt={20} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CircularProgress />
                </Box>}
                {todos.length === 0 && !isLoading && <EmptyContent title="没有数据" description="没有待办事项，点击右上方按钮添加" />}
                <Stack spacing={2}>
                    {todos.map(item => <TodoItem todo={item} />)}
                </Stack>

            </Card>

        </Container>
        <TodoEditDialog dlg={dlg} />
    </Page>
}