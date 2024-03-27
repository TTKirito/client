enum Gender {
  WOMEN = "Women",
  Men = "Men",
}
enum Position {
  DESIGN = "Design",
  DEVELOP = "Develop",
}
enum Status {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}
export interface Account {
  id: number;
  dob: Date;
  status: Status;
  position: Position;
  owner: string;
  gender: Gender;
  created_at: Date;
}
