import Iconify from "@components/Iconify";
import MenuPopover from "@components/MenuPopover";
import useDispatch from "@hooks/useDispatch";
import { Box, Checkbox, Grid, IconButton, MenuItem, Paper, Typography, styled } from "@mui/material";

import { doneTodo, deleteTodo } from "@src/store/todo/todoActions";
import { TodoT } from "@src/typing/todo";
import { fDate } from "@utils/formatTime";
import { useState } from "react";


const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: 800,
    color: theme.palette.text.primary,
}));
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
    // return <StyledPaper sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', bgcolor: 'background.neutral', height: '60px' }}>
    return <Paper sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', bgcolor: 'background.neutral', height: '70px' }}>
        {/* <Box>
            <Checkbox checked={false} onChange={handleChange} />
        </Box> */}

        <Grid container>
            <Grid item xs={10} display={'flex'} alignItems={'center'}>
                <Checkbox checked={false} sx={{ mr: 2 }} onChange={handleChange} />
                <Typography variant="subtitle2">{todo.title}</Typography>
            </Grid>
            <Grid item xs={2} display={'flex'} justifyContent={'end'} >
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
            <Grid pl={7} item xs={6} sm={8} display={'flex'} alignItems={'center'} zeroMinWidth>
                <Typography variant="body2" sx={{ color: 'text.secondary', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}  >
                    {todo.description}
                </Typography>
            </Grid>
            <Grid xs={6} sm={4} display={'flex'} justifyContent={'end'} >
                <Typography variant="caption" sx={{ color: 'text.disabled', mr: 2, }}>
                    {fDate(todo.due as string)}
                </Typography>
            </Grid>
        </Grid>
    </Paper >
}