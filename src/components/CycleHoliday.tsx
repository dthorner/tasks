import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "New Years"
    | "Valentines"
    | "July Fourth"
    | "Halloween"
    | "Christmas";

function nextHolidayAlphabetic(h: Holiday): Holiday {
    if (h === "Christmas") {
        return "Halloween";
    } else if (h === "Halloween") {
        return "July Fourth";
    } else if (h === "July Fourth") {
        return "New Years";
    } else if (h === "New Years") {
        return "Valentines";
    } else {
        return "Christmas";
    }
}

function nextHolidayYearly(h: Holiday): Holiday {
    if (h === "New Years") {
        return "Valentines";
    } else if (h === "Valentines") {
        return "July Fourth";
    } else if (h === "July Fourth") {
        return "Halloween";
    } else if (h === "Halloween") {
        return "Christmas";
    } else {
        return "New Years";
    }
}

function holidayEmoji(holiday: Holiday): string {
    if (holiday === "New Years") {
        return "🎉";
    } else if (holiday === "Valentines") {
        return "💘";
    } else if (holiday === "July Fourth") {
        return "🇺🇲";
    } else if (holiday === "Halloween") {
        return "🎃";
    } else {
        return "✝️";
    }
}

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("New Years");

    return (
        <div>
            <span>Holiday: {holidayEmoji(holiday)}</span>
            <span>
                <Button
                    onClick={() => setHoliday(nextHolidayAlphabetic(holiday))}
                >
                    Alphabet
                </Button>
            </span>
            <span>
                <Button onClick={() => setHoliday(nextHolidayYearly(holiday))}>
                    Year
                </Button>
            </span>
        </div>
    );
}
