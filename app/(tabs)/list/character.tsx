export interface Character {
    id: number;
    name: string;
    images: string[];
}

export interface ApiResponse {
    characters: Character[];
  }