export interface Question {
  id: string;
  title: string;
  indexStatus: string;
  variants: Variants[];
}

export interface Variants {
  id: string;
  index: string;
  text: string;
  status: boolean;
}

export interface WinResults {
  id: string,
  indexStatus: string,
  isWin: boolean,
  result: ResultDto,
}

export interface ResultDto {
  currency: string,
  total: string,
}

export interface StatusAnswerDto {
  id: string,
  statusClass: string,
}
