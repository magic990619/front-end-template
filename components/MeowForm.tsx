import { FC, useEffect, useState } from "react";
import {
    Card,
    InputLabel,
    Input,
    FormControl,
    Button,
    CircularProgress, 
    Snackbar,
    Alert
} from "@mui/material";
import { useWaitForTransaction } from "wagmi";

// Hooks
import { useSayMeow } from "../hooks";

export const MeowForm: FC = () => {
    const [message, setMessage] = useState('');
    const [inProgress, setInProgress] = useState(false);
    const { data, write } = useSayMeow(message);
    const [snackOpen, setSnackOpen] = useState(false);
    const { isLoading, isSuccess, isError, error } = useWaitForTransaction({
        hash: data?.hash
    });

    useEffect(() => {
        if (isLoading) {
            setInProgress(true);
        } else {
            setInProgress(false);
        }
    }, [isLoading])

    useEffect(() => {
        if (isSuccess) {
            setMessage('');
            setInProgress(false);
            setSnackOpen(true);
        }
    }, [isSuccess])

    useEffect(() => {
        if (isError) {
            setInProgress(false);
            setSnackOpen(true);
        }
    }, [isError])

    const handleClickSayMeow = () => {
        write?.();
    }
    
    return (
        <Card
            sx={{
                margin: 2,
                padding: 2,
                width: 600,
                minHeight: 150,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}
        >
            <FormControl
                sx={{ 
                    width: '80%',
                }}
            >
                <InputLabel htmlFor="my-input">Input Messages</InputLabel>
                <Input
                    fullWidth
                    multiline
                    id="my-input"
                    aria-describedby="my-helper-text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </FormControl>
            <FormControl
                sx={{ 
                    width: '50%',
                    mt: 2
                }}
            >
                <Button
                    variant="contained"
                    onClick={handleClickSayMeow}
                    disabled={inProgress || message === ''}
                > 
                    {inProgress ? <CircularProgress size={22} /> : 'Say Meow'}
                </Button>
            </FormControl>
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={snackOpen}
                autoHideDuration={2000}
                onClose={() => setSnackOpen(false)}
            >
                {isSuccess ? (
                    <Alert
                        security="success"
                        sx={{ width: '100%' }}
                        onClose={() => setSnackOpen(false)}
                    >
                        Successfully said MEOW!
                    </Alert>
                ) : (
                    isError ? (
                        <Alert
                            security="error"
                            sx={{ width: '100%' }}
                            onClose={() => setSnackOpen(false)}
                        >
                            {error?.message}
                        </Alert>
                    ) : (
                        <></>
                    )
                )}
                
            </Snackbar>
        </Card>
    )
}
