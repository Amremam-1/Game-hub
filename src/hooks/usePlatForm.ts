import usePlatFroms from "./usePlatForms";

const usePlatFrom = (id?: number) => {
  const { data: platforms } = usePlatFroms();
  return platforms?.results.find((p) => p.id === id);
};

export default usePlatFrom;
