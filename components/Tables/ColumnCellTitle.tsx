import React from "react";
import { Badge } from "../ui/badge";
import { AiOutlineShareAlt, AiOutlineHeart, AiOutlineFileDone, AiOutlineFileText, AiOutlineCheckSquare } from "react-icons/ai";

type ColumnCellTitleProps = {
  row: any;
  label: any;
};

const ColumnCellTitle = ({ row, label }: ColumnCellTitleProps) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleCellTitleClick = () => {
    setExpanded(!expanded);
    // alert(row.getValue("title"));
    console.log(row.getAllCells());
  };

  const handleActionButtonClick =
    (value: string) =>
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.stopPropagation();
      alert(value);
    };

  return (
    <div
      className="flex cursor-pointer flex-col p-4"
      onClick={handleCellTitleClick}
    >
      {" "}
      <div className="flex space-x-2">
        {label && (
          <Badge
            className="border border-zinc-300 font-light dark:border-zinc-600"
            variant="outline"
          >
            {label.label}
          </Badge>
        )}
        <span
          className={`max-w-[400px] truncate font-medium ${expanded && "text-lg"}`}
        >
          {row.getValue("title")}
        </span>
      </div>
      {expanded && (
        <div className="mt-4 max-w-[450px]">
          {/* {row.getValue("description")} */}
          {/* <p className="text-md font-bold">{row.getValue("title")}</p> */}
          <p className="font-bold"> {row.original["brand"]}</p>
          <p className="font-light">
            This is the description for {row.original["description"]}
          </p>
          <div className="mt-4 flex flex-row justify-start gap-2">


            <button
              className="flex flex-row items-center rounded-xl border border-zinc-200 px-4 py-2"
              onClick={handleActionButtonClick("Detail")}
            >
              <AiOutlineFileText className="mr-1" />
              <div className="text-sm">Detail/Images</div>

            </button>

            <button
              className="flex flex-row items-center rounded-xl border border-zinc-200 px-4 py-2"
              onClick={handleActionButtonClick("Validate")}
            >
              <AiOutlineCheckSquare className="mr-1" />
              <div className="text-sm">Validate</div>
            </button>



            <button
              className="flex flex-row items-center rounded-xl border border-zinc-200 px-4 py-2"
              onClick={handleActionButtonClick("Favorite")}
            >
              <AiOutlineHeart className="mr-1" />
              <div className="text-sm">Favorite</div>
            </button>

            <button
              className="flex flex-row items-center rounded-xl border border-zinc-200 px-4 py-2"
              onClick={handleActionButtonClick("Share")}
            >
              <AiOutlineShareAlt className="mr-1" />
              <div className="text-sm">Share</div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColumnCellTitle;
