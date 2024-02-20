export const fetcher = async (url: string, config?: {}) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}${url}`, config);
  return response;
};
