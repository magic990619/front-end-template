import { usePrepareContractWrite, useContractWrite } from "wagmi";
import { catContractAddress, catABI } from "../constants";

export const useSayMeow = (message: string) => {
    const { config } = usePrepareContractWrite({
        address: catContractAddress,
        abi: catABI,
        functionName: 'sayMeow',
        args: [message]
    });

    const { data, isLoading, isSuccess, write } = useContractWrite(config);

    return {
        data,
        isLoading,
        isSuccess,
        write
    }
}
