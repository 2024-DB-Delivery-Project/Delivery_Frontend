import { SelectChangeEvent } from "@mui/material";

interface SelectorTS {
  id: string; // Select의 고유 ID
  index: number; // 현재 Selector의 인덱스
  options: string[]; // 옵션 리스트
  //   value: number | ""; // 현재 선택된 값
  //   onChange: (index: number, value: number) => void; // 부모에게 값 전달
}

interface HandleChange {
  event: SelectChangeEvent<number>;
  index: number;
}

export { SelectorTS, HandleChange };
