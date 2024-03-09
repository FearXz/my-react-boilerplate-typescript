export interface Movie {
  idFilm: number;
  title: string;
  description: string;
  cover: string;
}

export interface UserProfile {
  idUser: number;
  username: string;
  email: string;
  avatar: string;
  token: string;
}
