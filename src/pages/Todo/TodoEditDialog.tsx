import FormProvider from "@components/hooks-form/FormProvider";
import RHFTextField from "@components/hooks-form/RHFTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { DialogStates } from "@hooks/useDialog";
import { Box, Button, Dialog, DialogActions, DialogTitle, Stack, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import * as Yup from 'yup'
import dayjs, { Dayjs } from 'dayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import useDispatch from "@hooks/useDispatch";

import { LoadingButton } from "@mui/lab";
import { addTodo, updateTodo } from "@src/store/todo/todoActions";
import { TodoT } from "@src/typing/todo";
import { useEffect, useMemo } from "react";


interface ITodoEditDlgProps {
    dlg: DialogStates
    todo?: TodoT

}

interface ITodoDialogProps {
    title: string
    due?: string | Dayjs
    description?: string

}

export default function TodoEditDialog(props: ITodoEditDlgProps) {
    const { dlg, todo, } = props
    const dispatch = useDispatch()
    const dlgFormSchema = Yup.object().shape({
        title: Yup.string().required('请输入标题'),
        due: Yup.mixed()
    })
    const defaultValues = useMemo(() => ({ title: todo?.title || '', due: todo?.due ? dayjs(todo?.due) : undefined, description: todo?.description }), [todo])
    const methods = useForm({
        resolver: yupResolver(dlgFormSchema),
        defaultValues,

    })

    const { control, reset, formState: { isSubmitting }, } = methods
    useEffect(() => { reset(defaultValues) }, [defaultValues])
    const onFormSubmit = async (values: ITodoDialogProps) => {
        if (todo) {
            const todoPayload = { ...values, id: todo.id }
            await dispatch(updateTodo(todoPayload))
        } else {
            await dispatch(addTodo(values))
        }

        reset()
        dlg.close()
    }

    const handleCancel = () => {
        reset()
        dlg.close()
    }

    return <Dialog open={dlg.visible} maxWidth='xs' fullWidth>
        <DialogTitle>
            <Typography variant="h6">
                {todo ? '编辑 Todo' : '添加 Todo'}
            </Typography>
        </DialogTitle>

        <Box py={3} px={3}>
            <FormProvider methods={methods} onSubmit={methods.handleSubmit(onFormSubmit)}>
                <Stack spacing={3}>
                    <RHFTextField name='title' size="small" label="标题" />
                    <RHFTextField name='description' multiline rows={4} size="small" label="描述" />
                    <Controller
                        name="due"
                        control={control}
                        render={({ field }) => (
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateTimePicker
                                    {...field}
                                    ampm={false}
                                    label="截止日期"
                                />
                            </LocalizationProvider>

                        )}
                    />

                </Stack>
                <DialogActions>
                    <Button variant="outlined" color="inherit" onClick={handleCancel}  >
                        取消
                    </Button>

                    <LoadingButton
                        type="submit"
                        variant="contained"
                        loading={isSubmitting}
                        loadingIndicator="Loading..."
                    >
                        确定
                    </LoadingButton>
                </DialogActions>

            </FormProvider>
        </Box>


    </Dialog>
}