import { addFrameSchema } from "backtest-kit";
import { FrameName } from "../../enum/FrameName";

addFrameSchema({
  frameName: FrameName.Jan2026Frame,
  interval: "1m",
  startDate: new Date("2026-01-01T00:00:00Z"),
  endDate: new Date("2026-01-31T23:59:59Z"),
  note: "January 2026",
});
