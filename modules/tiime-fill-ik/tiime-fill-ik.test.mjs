import { formatDateToTiimeCalendarLabel } from "./utils.mjs";
import { test } from "node:test";

test('[tiime-fill-ik] transform ilucca date to tiime date picker label ',  (t) => {
    t.assert.equal(formatDateToTiimeCalendarLabel("2024-11-27"), "27 novembre 2024");
});