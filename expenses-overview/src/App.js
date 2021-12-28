
import './App.css';
import React from "react";
import { parse } from "papaparse";

function App() {
  const [transactions, setTransactions] = React.useState([[]]);

  return (
    <div>
      <h1 className="text-center text-4xl">Transaction Import</h1>
        <div
          className={`p-6 my-2 mx-auto max-w-md border-2`}
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDrop={(e) => {
            e.preventDefault();
            Array.from(e.dataTransfer.files)
              .filter(file => file.type === "text/csv")
              .forEach(async (file) => {
                const text = await file.text();
                const result = parse(text);
                setTransactions(existing => [...existing, ...result.data])
                console.log(result)
              });

          }}
        >
          Drop CSV here.
        </div>
        <ul>
          {transactions.map((transaction) => (
          <li>
            <strong>{transaction[0]}</strong> {transaction[6]} {transaction[8]} {transaction[10]} {transaction [4]}
          </li>
          ))}   
        </ul>
    </div>
  );
}

export default App;
