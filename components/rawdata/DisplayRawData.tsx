import React from "react";

type DisplayRawDataProps = {
  data: any;
};

const DisplayRawData = ({ data }: DisplayRawDataProps) => {
  return (
    <div>
      {" "}
      <hr className="mt-4" />
      <h3 className="my-4 text-lg">Raw Data</h3>
      <hr className="mt-4" />
      <div className="mt-4">
        {data &&
          Object.entries(data).map(([key, value]) => (
            <div className="p-1" key={key}>
              <strong>{key}: </strong>
              {Array.isArray(value) ? value.join(", ") : value?.toString()}
            </div>
          ))}
      </div>
    </div>
  );
};

export default DisplayRawData;
