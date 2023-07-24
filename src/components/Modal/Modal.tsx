import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { handleModal } from "../../app/slices/investsSlice";
import useOutsideClick from "../../hooks/useOutsideClick";

interface IModal {
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<IModal> = ({ title, children }) => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(handleModal());
  };

  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, handleOpenModal);
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div
            ref={ref}
            className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
          >
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold mt-2">{title}</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={handleOpenModal}
              >
                <span className="bg-transparent text-black text-3xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">{children}</div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
export default Modal;
