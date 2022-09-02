import { MovieDetails } from "../types";
import axios from "./config";

interface FetchMoviesProps {
  page: number;
  limit: number;
  search?: string;
}

export const fetchMovies = async ({
  page,
  limit,
  search,
}: FetchMoviesProps) => {
  let url = `/movies?page=${page}&limit=${limit}`;
  if (search) {
    url = `${url}&search=${search}`;
  }
  try {
    const data = await axios.get<MovieDetails[]>(url);
    return data.data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchMovie = async ({ id }: { id: string }) => {
  try {
    const data = await axios.get<MovieDetails>(`/movie?id=${id}`);
    return data.data;
  } catch (err) {
    console.error(err);
  }
};
