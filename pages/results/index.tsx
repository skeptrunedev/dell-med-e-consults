import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Navbar from "../../components/app_shell/Navbar";
import Footer from "../../components/app_shell/Footer";
import ResultsHeading from "../../components/results/ResultsHeading";
import Modal from "../../components/app_shell/Modal";
import WTPTable from "../../components/results/WTPTable";
import { calculatePayerCostCallPatient, calculatePayerCostDoNotCallPatient, calculatePayerCostEConsult, calculatePayerCostScheduleAppointmentCallPatient, calculatePayerCostScheduleAppointmentDoNotCallPatient, calculatePayerCostScheduleAppointmentUsualCare, calculatePayerCostUsualCare } from "../../utils/decision-tree-calculations";

const Results: NextPage = () => {
  const [showModalParameters, setShowModalParameters] =
    useState<boolean>(false);
  const [showModalDecisionTree, setShowModalDecisionTree] =
    useState<boolean>(false);

  useEffect(() => {
    const parametersVisited = JSON.parse(
      window.localStorage.getItem("parametersVisited") || "false"
    );
    setShowModalParameters(!parametersVisited);

    const decisionTreeVisited = JSON.parse(
      window.localStorage.getItem("decisionTreeVisited") || "false"
    );
    setShowModalDecisionTree(!decisionTreeVisited);

    calculatePayerCostScheduleAppointmentCallPatient();

    calculatePayerCostScheduleAppointmentDoNotCallPatient();

    calculatePayerCostCallPatient();
    calculatePayerCostDoNotCallPatient();
    calculatePayerCostEConsult();

    calculatePayerCostScheduleAppointmentUsualCare();
    calculatePayerCostUsualCare();
  }, []);

  const displayErrorModal = () => {
    if (showModalParameters) {
      return <Modal {...{ pageLink: "parameters", pageName: "Parameters" }} />;
    }
    if (showModalDecisionTree) {
      return (
        <Modal {...{ pageLink: "decision_tree", pageName: "Decision Tree" }} />
      );
    }
  };

  return (
    <div>
      <Navbar {...{ active_page: "Results" }} />
      <ResultsHeading {...{ active_page: "Results" }} />
      {displayErrorModal()}
      <WTPTable />
      <Footer />
    </div>
  );
};

export default Results;
