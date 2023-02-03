import { FC,  useEffect, useState } from "react";
import { Box, Skeleton } from "@mui/material";
import { BigNumber } from "ethers";

// Hooks
import { useMeows } from "../hooks";

import { MeowCard } from "./MeowCard";

type Meow = {
    author: String
    message: String
    timestamp: BigNumber
}

export const MeowsView: FC = () => {
    const meows: any = useMeows();
    const [meowsData, setMeowsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!meows) return;
        const meowsData = meows.map((meow: any) => {
            return meow;
        })
        setIsLoading(false);
        setMeowsData(meowsData.reverse());
    }, [meows])

    return (
        <Box 
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly'
            }}
        >
            {isLoading ? <Skeleton variant="rounded" width={800} height={200} /> : (
                <>
                    {meowsData.map((meow: Meow, key) => (
                        <MeowCard 
                            key={'meow-card' + key}
                            message={meow.message}
                            author={meow.author}
                            timestamp={meow.timestamp}
                        />
                    ))}
                </>
            )}
            
        </Box>
    )
}
