export interface SideBarTS {
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  selected: number;
  options: Option[];
}

interface Option {
  name: string;
}
