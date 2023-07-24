import React from "react";
import { useDispatch } from "react-redux";
import { handleModal } from "../../app/slices/investsSlice";

const ModalButton = () => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(handleModal());
  };
  return (
    <button
      className="fixed bottom-8 right-8 w-12 h-12 bg-blue-300 rounded-full flex justify-center items-center hover:bg-blue-400 transition-colors duration-200"
      onClick={handleOpenModal}
    >
      <span className="text-3xl mb-2">+</span>
    </button>
  );
};

export default ModalButton;
