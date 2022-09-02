export interface Actor {
  id: string;
  name: string;
}

interface Category {
  id: string;
  name: string;
}

export interface MovieDetails {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  actors: Actor[];
  categories: Category[];
}

export const MOVIE_MOCK: MovieDetails[] = [
  {
    id: "1",
    name: "Movie title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........",
    actors: [
      { id: "1", name: "Actor name" },
      { id: "2", name: "Actor name" },
    ],
    categories: [
      { id: "1", name: "Category" },
      { id: "2", name: "Category" },
      { id: "3", name: "Category" },
    ],
  },
  {
    id: "2",
    name: "Movie title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........",
    actors: [
      { id: "1", name: "Actor name" },
      { id: "2", name: "Actor name" },
    ],
    categories: [
      { id: "1", name: "Category" },
      { id: "2", name: "Category" },
      { id: "3", name: "Category" },
    ],
  },
  {
    id: "3",
    name: "Movie title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........",
    actors: [
      { id: "1", name: "Actor name" },
      { id: "2", name: "Actor name" },
    ],
    categories: [
      { id: "1", name: "Category" },
      { id: "2", name: "Category" },
      { id: "3", name: "Category" },
    ],
  },
  {
    id: "4",
    name: "Movie title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........",
    actors: [
      { id: "1", name: "Actor name" },
      { id: "2", name: "Actor name" },
    ],
    categories: [
      { id: "1", name: "Category" },
      { id: "2", name: "Category" },
      { id: "3", name: "Category" },
    ],
  },
  {
    id: "5",
    name: "Movie title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........",
    actors: [
      { id: "1", name: "Actor name" },
      { id: "2", name: "Actor name" },
    ],
    categories: [
      { id: "1", name: "Category" },
      { id: "2", name: "Category" },
      { id: "3", name: "Category" },
    ],
  },
  {
    id: "6",
    name: "Movie title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........",
    actors: [
      { id: "1", name: "Actor name" },
      { id: "2", name: "Actor name" },
    ],
    categories: [
      { id: "1", name: "Category" },
      { id: "2", name: "Category" },
      { id: "3", name: "Category" },
    ],
  },
  {
    id: "7",
    name: "Movie title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........",
    actors: [
      { id: "1", name: "Actor name" },
      { id: "2", name: "Actor name" },
    ],
    categories: [
      { id: "1", name: "Category" },
      { id: "2", name: "Category" },
      { id: "3", name: "Category" },
    ],
  },
  {
    id: "8",
    name: "Movie title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........",
    actors: [
      { id: "1", name: "Actor name" },
      { id: "2", name: "Actor name" },
    ],
    categories: [
      { id: "1", name: "Category" },
      { id: "2", name: "Category" },
      { id: "3", name: "Category" },
    ],
  },
  {
    id: "9",
    name: "Movie title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........",
    actors: [
      { id: "1", name: "Actor name" },
      { id: "2", name: "Actor name" },
    ],
    categories: [
      { id: "1", name: "Category" },
      { id: "2", name: "Category" },
      { id: "3", name: "Category" },
    ],
  },
];
