import React from "react";
import Header from "../components/Header/Header";
import Table from "../components/Table/Table";
import Modal from "../components/Modal/Modal";
import ModalButton from "../components/Modal/ModalButton";
import { useAppSelector } from "../app/hooks";
import Form from "../components/Form/Form";

const Home = () => {
  const showModal = useAppSelector((state) => state.invests.isOpen);
  const investData = useAppSelector((state) => state.invests.investsData);
  return (
    <>
      <Header />
      <main>
        <h3 className="text-2xl mt-10 mb-5 text-center">Your Investments</h3>
        <p className="mt-1 text-md font-normal text-gray-700">
          Browse a list of your investments designed to help you work and play,
          stay organized, get answers, keep in touch, grow your business, and
          more.
        </p>
        {investData.length ? (
          <Table />
        ) : (
          <p className="font-semibold text-lg text-center mt-4">
            No Investments yet...
          </p>
        )}
        {showModal && (
          <Modal title="Create New Investment" children={<Form />} />
        )}
        <ModalButton />
      </main>
    </>
  );
};

export default Home;
