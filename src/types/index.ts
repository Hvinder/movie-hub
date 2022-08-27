interface Actor {
  id: string;
  name: string;
}

export interface MovieDetails {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  actors: Actor[];
  category: string[];
}
