export interface SideBarTS {
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  selected: number;
  options: Option[];
  username: string;
}

interface Option {
  name: string;
}
