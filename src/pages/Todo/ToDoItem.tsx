import Iconify from "@components/Iconify";
import MenuPopover from "@components/MenuPopover";
import useDispatch from "@hooks/useDispatch";
import { Checkbox, Grid, IconButton, MenuItem, Paper, Typography } from "@mui/material";
import { doneTodo, deleteTodo } from "@src/store/todo/todoActions";
import { TodoT } from "@src/typing/todo";
import { fDate } from "@utils/formatTime";
import { useState } from "react";


interface ITodoItemProps {
    todo: TodoT
    onEdit?: (todo: TodoT) => void
}
export default function TodoItem(props: ITodoItemProps) {
    const { todo, onEdit } = props
    const dispatch = useDispatch()
    const [open, setOpen] = useState<HTMLElement | null>(null);

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        setOpen(event.currentTarget);
    };
    const handleClose = () => {
        setOpen(null);
    };
    const handleEdit = () => {
        onEdit?.(todo)
        handleClose()
    }

    const handleDelete = async () => {
        if (todo.id) {
            await dispatch(deleteTodo(todo.id))
        }
        handleClose()
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked && todo.id) {
            dispatch(doneTodo(todo.id))
        }
    };
    const ICON = {
        mr: 2,
        width: 20,
        height: 20,
    };
    return <Paper sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', bgcolor: 'background.neutral', height: '60px' }}>
        <Checkbox checked={false} sx={{ mr: 2 }} onChange={handleChange} />
        <Grid container>
            <Grid xs={10} display={'flex'} alignItems={'center'}>
                <Typography variant="subtitle2">{todo.title}</Typography>
            </Grid>
            <Grid xs={2} display={'flex'} justifyContent={'end'} >
                <IconButton onClick={handleOpen}  >
                    <Iconify icon={'eva:more-vertical-fill'} width={16} height={16} />
                </IconButton>
                <MenuPopover open={Boolean(open)}
                    anchorEl={open}
                    onClose={handleClose}
                    sx={{
                        mt: -1,
                        width: 120,
                        '& .MuiMenuItem-root': { px: 1, typography: 'body2', borderRadius: 0.75 },
                    }}>
                    <MenuItem onClick={handleEdit}  >
                        <Iconify icon={'eva:edit-fill'} sx={{ ...ICON }} />
                        Edit
                    </MenuItem>
                    <MenuItem onClick={handleDelete} sx={{ color: 'error.main', height: '20px' }}>
                        <Iconify icon={'eva:trash-2-outline'} sx={{ ...ICON }} />
                        Delete
                    </MenuItem>
                </MenuPopover>
            </Grid>
            <Grid xs={6} sm={10} display={'flex'} alignItems={'center'}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {todo.description}
                </Typography>
            </Grid>
            <Grid xs={6} sm={2} display={'flex'} justifyContent={'end'} >
                <Typography variant="caption" sx={{ color: 'text.disabled', mr: 2, }}>
                    {fDate(todo.due as string)}
                </Typography>
            </Grid>
        </Grid>
        {/* <Checkbox />
            <Typography variant="subtitle2">{todo.title}</Typography> */}
        {/* <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                {fDate(todo.due)}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {todo.description}
            </Typography>
            <IconButton onClick={handleOpen}>
                <Iconify icon={'eva:more-vertical-fill'} width={10} height={10} />
            </IconButton>
            <MenuPopover open={Boolean(open)} anchorEl={open}
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                arrow="right-top"
                sx={{
                    mt: -1,
                    width: 160,
                    '& .MuiMenuItem-root': { px: 1, typography: 'body2', borderRadius: 0.75 },
                }}>
                <MenuItem>
                    <Iconify icon={'eva:edit-fill'} sx={{ ...ICON }} />
                    Edit
                </MenuItem>
                <MenuItem sx={{ color: 'error.main' }}>
                    <Iconify icon={'eva:trash-2-outline'} sx={{ ...ICON }} />
                    Delete
                </MenuItem>


            </MenuPopover> */}
        {/* </Stack> */}
    </Paper >
}