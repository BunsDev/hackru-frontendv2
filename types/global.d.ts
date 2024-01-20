interface DayInfo {
  day: string;
  times: { time: string; event: string }[];
}

type day = string;
type Schedule = Record<day, DayInfo>;
