import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InvestType } from "../../types/invest";
import { sampleData } from "../../helpers/sampleData";

interface initialStateInterface {
  investsData: InvestType[];
  isOpen: boolean;
}
const storedData = JSON.parse(localStorage.getItem("tableData") || "[]");
const initialState: initialStateInterface = {
  isOpen: false,
  investsData: !storedData || storedData.length === 0 ? sampleData : storedData,
};

const investsSlice = createSlice({
  name: "invests",
  initialState,
  reducers: {
    addInvestment: (state, action: PayloadAction<InvestType>) => {
      const {
        currentSavings,
        yearlySavings,
        interestRate,
        investmentDuration,
        totalInvestment,
      } = action.payload;
      const newId =
        state.investsData.length > 0
          ? state.investsData[state.investsData.length - 1].id + 1
          : 1;
      const newInvestment = {
        id: newId,
        currentSavings,
        yearlySavings,
        interestRate,
        investmentDuration,
        totalInvestment,
      };
      state.investsData.push(newInvestment);
      window.localStorage.setItem(
        "tableData",
        JSON.stringify(state.investsData)
      );
    },
    removeInvestment: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const existingItem = state.investsData.find((item) => item.id === id);
      if (existingItem) {
        state.investsData = state.investsData.filter((item) => item.id !== id);
        window.localStorage.setItem(
          "tableData",
          JSON.stringify(state.investsData)
        );
      }
    },
    handleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { addInvestment, removeInvestment, handleModal } =
  investsSlice.actions;
export default investsSlice.reducer;
