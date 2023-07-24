import React from "react";
import { useAppSelector } from "../../app/hooks";
import { useDispatch } from "react-redux";
import { removeInvestment } from "../../app/slices/investsSlice";

const Table = () => {
  const investData = useAppSelector((state) => state.invests.investsData);
  const dispatch = useDispatch();
  const handleRemoveInvest = (id: number) => {
    dispatch(removeInvestment(id));
  };
  
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-2 mt-5">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-sm text-gray-700 uppercase bg-blue-400 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Current Savings
            </th>
            <th scope="col" className="px-6 py-3">
              Yearly Savings
            </th>
            <th scope="col" className="px-6 py-3">
              Interest Rate (%)
            </th>
            <th scope="col" className="px-6 py-3">
              Investment Duration (years)
            </th>
            <th scope="col" className="px-6 py-3">
              Total Investment
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {investData.map((item) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={item.id}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.id}
              </th>
              <td className="px-6 py-4">${item.currentSavings}</td>
              <td className="px-6 py-4">${item.yearlySavings}</td>
              <td className="px-6 py-4">{item.interestRate}</td>
              <td className="px-6 py-4">{item.investmentDuration}</td>
              <td className="px-6 py-4">${item.totalInvestment}</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => handleRemoveInvest(item.id)}
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 "
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
