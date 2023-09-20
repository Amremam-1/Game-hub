import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "28257b631bf641248a547599ebb36501",
  },
});

// class ApiClient<T> {
//   endpoint: string;

//   constructor(endpoint: string) {
//     this.endpoint = endpoint;
//   }

//   get = () => {
//     return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
//   };

//   post = (data: T) => {
//     return axiosInstance.post<T>(this.endpoint).then((res) => res.data);
//   };
// }

// export default ApiClient;
