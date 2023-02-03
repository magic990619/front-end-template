import { useContractRead } from "wagmi";
import { catContractAddress, catABI } from "../constants";

export const useMeows = () => {
    const { data } = useContractRead({
        address: catContractAddress,
        abi: catABI,
        functionName: 'getAllMeows',
        watch: true
    });
    return data;
}
