import { useCallback, useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { BigNumber } from "ethers";
import { fetchEnsName } from "@wagmi/core";

type MeowCardProps = {
    message: String
    author: any
    timestamp: BigNumber
}

export const MeowCard = (props: MeowCardProps) => {
    const { message, author, timestamp } = props;
    const [ensName, setEnsName] = useState('');

    const fetchENSInfo = useCallback(async () => {
        const ensName: any = await fetchEnsName({ address: author, chainId: 1});
        setEnsName(ensName);
    }, [author]);

    useEffect(() => {
        fetchENSInfo();
    }, [author, fetchENSInfo]);
    
    return (
        <Card
            sx={{
                mb: 2,
                mr: 1,
                width: 385
            }}
        >
            <CardContent>
                <Typography sx={{ fontSize: 14, fontWeight: 600 }} color="text.secondary" gutterBottom>{ensName ? ensName : author}</Typography>
                <Typography variant="h5" component="div">{message}</Typography>
                <Typography sx={{ fontSize: 12, mt: 2 }} color="text.secondary" gutterBottom>
                    {new Date(BigNumber.from(timestamp).toNumber() * 1000).toUTCString()}
                </Typography>
            </CardContent>
        </Card>
    )
}
