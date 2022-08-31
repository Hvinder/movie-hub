import { MovieDetails } from "../types";
import axios from "./config";

interface FetchMoviesProps {
  page: string;
  limit: string;
  search?: string;
}

export const fetchMovies = async ({
  page,
  limit,
  search,
}: FetchMoviesProps) => {
  let url = `movies?page=${page}&limit=${limit}`;
  if (search) {
    url = `${url}&search=${search}`;
  }
  try {
    const data = await axios.get<MovieDetails[]>(url);
    return data;
  } catch (err) {
    console.error(err);
  }
};
