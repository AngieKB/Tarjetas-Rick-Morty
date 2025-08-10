export interface Character {
  id: string | `${string}-${string}-${string}-${string}-${string}`;
  name: string;
  status: string;
  gender: string;
  image: string;
}
