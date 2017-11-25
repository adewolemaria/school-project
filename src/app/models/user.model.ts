export interface User {
  displayName: string;
  center: string;
  photoUrl: string; 
  type: string;
  type_center: string; 
}

export interface UserId extends User {
  id: string;
}

export interface Student extends User {
  points: number;
}

export interface Mentor extends User {}