import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import Platforms from "../data/Platforms";
import APIClient from "../services/api-client";
import Platform from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatFroms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: Platforms,
  });
export default usePlatFroms;
