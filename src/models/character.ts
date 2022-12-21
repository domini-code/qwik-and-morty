
  export interface Pagination {
    count: number;
    pages: number;
    next: string;
    prev?: string | null;
  }

  export interface Location {
    name: string;
    url: string;
  }

  export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Location;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: Date;
  }

  export interface CharacterResponse {
    info: Pagination;
    results: Character[];
  }

