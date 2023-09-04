import useData from "./useData"

interface PlatForm{
    id: number;
    name: string;
    slug : string;
}

const usePlatFrom = () => useData<PlatForm>("/platforms/lists/parents")

export default usePlatFrom;
