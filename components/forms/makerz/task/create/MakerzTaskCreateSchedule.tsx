"use client";
import { Input } from "@/components/ui/input";
import React, { ChangeEvent, useState } from "react";
import { handleFormChange } from "./handleFormChange";
import { State } from "./reducerMakerzTaskFor";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type MakerzTaskCreateScheduleProps = {
  state: State;
  dispatch: any;
  handleFormChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void;
  errors: any;
  register: any;
};

const MakerzTaskCreateSchedule = ({
  state,
  dispatch,
  handleFormChange,
  errors,
  register,
}: MakerzTaskCreateScheduleProps) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const now = new Date(); // Current date and time

  // Calculate the end of the current day
  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);

  const minTime = startDate && startDate.toDateString() === now.toDateString() ? now : undefined;
  const maxTime = startDate && startDate.toDateString() === now.toDateString() ? endOfDay : undefined;

  return (
    <div>
      <div className="flex flex-col items-center"></div>
      <div className="flex flex-col justify-center">
        <div className="mt-2 text-center text-md">Publish Live on:</div>
        <div className="text-center">
          <DatePicker
            className="mt-4 p-2 cursor-pointer dark:text-zinc-500"
            selected={startDate}
            onChange={(date: Date | null) => setStartDate(date)}
            showTimeSelect
            dateFormat="Pp"
            placeholderText="Pick a date and time"
            minDate={now}
            minTime={minTime}
            maxTime={maxTime}
          />
          <div className="mt-2 text-center">
            {startDate ? `Selected Date and Time: ${startDate.toLocaleString()}` : "No date and time selected"}
          </div>
        </div>
        <div className="mt-4 text-center text-md">Expires on:</div>
        <div className="text-center">
          <DatePicker
            className="mt-4 p-2 cursor-pointer text-black"
            selected={endDate}
            onChange={(date: Date | null) => setEndDate(date)}
            showTimeSelect
            dateFormat="Pp"
            placeholderText="Pick a date and time"
          />
          <div className="mt-2 text-center">
            {endDate ? `Selected Date and Time: ${endDate.toLocaleString()}` : "No date and time selected"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakerzTaskCreateSchedule;
