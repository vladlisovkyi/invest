import React, { useState } from "react";
import Input from "../Input/Input";
import { addInvestment, handleModal } from "../../app/slices/investsSlice";
import { useDispatch } from "react-redux";

const initialState = {
  currentSavings: 10000,
  yearlySavings: 12000,
  interestRate: 7,
  investmentDuration: 4,
};

interface InvestFormState {
  currentSavings: number;
  yearlySavings: number;
  interestRate: number;
  investmentDuration: number;
}

const Form = () => {
  const [investForm, setInvestForm] = useState<InvestFormState>(initialState);
  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvestForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onCalculate = () => {
    const { currentSavings, yearlySavings, interestRate, investmentDuration } =
      investForm;

    const rate = 1 + interestRate / 100;
    const totalInvestment =
      +currentSavings * Math.pow(1 + +rate, +investmentDuration) +
      +yearlySavings * ((Math.pow(1 + +rate, +investmentDuration) - 1) / +rate);

    return +totalInvestment.toFixed(2);
  };

  const onSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const isFormValid = Object.values(investForm).every(
      (value) => value !== "" && value > 0
    );
    if (!isFormValid) return;
    const totalInvestment = await onCalculate();

    const newInvestment = { id: 0, totalInvestment, ...investForm };
    dispatch(addInvestment(newInvestment));
    setInvestForm(initialState);
    dispatch(handleModal());
  };

  return (
    <form className="px-6 py-2 max-w-2xl rounded-lg flex flex-col gap-4 items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
        <Input
          label="Current Savings"
          name="currentSavings"
          value={investForm.currentSavings}
          onChange={handleChange}
          placeholder="Current Savings"
          className="mb-2"
        />
        <Input
          label="Yearly Savings"
          name="yearlySavings"
          value={investForm.yearlySavings}
          onChange={handleChange}
          placeholder="Yearly Savings"
          className="mb-2"
        />
        <Input
          label="Expected Interest (%)"
          name="interestRate"
          value={investForm.interestRate}
          onChange={handleChange}
          placeholder="Expected Interest"
          className="mb-2"
        />
        <Input
          label="Investment Duration (years)"
          name="investmentDuration"
          value={investForm.investmentDuration}
          onChange={handleChange}
          placeholder="Investment Duration"
          className="mb-2"
        />
      </div>
      <button
        className="px-6 py-3 bg-green-400 hover:bg-green-500 rounded-lg text-center transition-colors duration-200"
        onClick={onSubmit}
      >
        Calculate
      </button>
    </form>
  );
};

export default Form;
