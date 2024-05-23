import React from "react";

const Help = () => {
  return (
    <div className="px-[50px] flex flex-col gap-[30px] items-center">
      <p className="text-xl font-bold">Select your Query</p>
      <ul className="flex flex-col gap-2">
        <li>
          <input type="radio" name="query" id="query1" />
          <label htmlFor="query1">Query1</label>
        </li>
        <li>
          <input type="radio" name="query" id="query2" />
          <label htmlFor="query2">Query2</label>
        </li>
        <li>
          <input type="radio" name="query" id="query3" />
          <label htmlFor="query3">Query3</label>
        </li>
        <li>
          <input type="radio" name="query" id="query4" />
          <label htmlFor="query4">Query4</label>
        </li>
        <li>
          <input type="radio" name="query" id="query5" />
          <label htmlFor="query5">Query5</label>
        </li>
        <li>
          <input type="radio" name="query" id="query6" />
          <label htmlFor="query6">Query6</label>
        </li>
        <li>
          <input type="radio" name="query" id="query7" />
          <label htmlFor="query7">Query7</label>
        </li>
      </ul>
    </div>
  );
};

export default Help;