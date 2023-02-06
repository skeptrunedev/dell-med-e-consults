import type { NextPage } from "next";
import Navbar from "../../components/app_shell/Navbar";
import Footer from "../../components/app_shell/Footer";
import WelcomeHeading from "../../components/parameters/WelcomeHeading";
import Xarrow from "react-xarrows";
import { useState, useEffect } from "react";
import DecisionTreeInput from "../../components/util/decision-tree-input";
import {
  calculatePayerCostScheduleAppointmentCallPatient,
  calculatePayerCostCallPatient,
  calculatePayerCostScheduleAppointmentDoNotCallPatient,
  calculatePayerCostDoNotCallPatient,
  calculatePayerCostEConsult,
  calculatePayerCostScheduleAppointmentUsualCare,
  calculatePayerCostUsualCare,
} from "../../utils/decision-tree-calculations";
import { DetermineErrorStateForTextPercent } from "../../utils/helpers";
import { InformationCircleIcon } from "@heroicons/react/outline";

const DecisionTree: NextPage = () => {
  // E-Consult
  const [callPatient, setCallPatient] = useState("60");
  const [doNotCallPatient, setDoNotCallPatient] = useState("40");
  const [scheduleAppointmentCallPatient, setScheduleAppointmentCallPatient] =
    useState("16");
  const [recommendPhysicianCallPatient, setRecommendPhysicianCallPatient] =
    useState("83");
  const [noActionCallPatient, setNoActionCallPatient] = useState("1");
  const [
    patientNoShowCallPatientEConsult,
    setPatientNoShowCallPatientEConsult,
  ] = useState("20");
  const [patientShowsCallPatientEConsult, setPatientShowsCallPatientEConsult] =
    useState("80");
  const [
    scheduleAppointmentDoNotCallPatient,
    setScheduleAppointmentDoNotCallPatient,
  ] = useState("50");
  const [
    recommendPhysicianDoNotCallPatient,
    setRecommendPhysicianDoNotCallPatient,
  ] = useState("50");
  const [
    patientNoShowDoNotCallPatientEConsult,
    setPatientNoShowDoNotCallPatientEConsult,
  ] = useState("30");
  const [
    patientShowsDoNotCallPatientEConsult,
    setPatientShowsDoNotCallPatientEConsult,
  ] = useState("70");

  // Usual Care
  const [scheduleAppointmentUsualCare, setScheduleAppointmentUsualCare] =
    useState("90");
  const [
    doNotScheduleAppointmentUsualCare,
    setDoNotScheduleAppointmentUsualCare,
  ] = useState("10");
  const [patientNoShowUsualCare, setPatientNoShowUsualCare] = useState("10");
  const [patientShowsUsualCare, setPatientShowsUsualCare] = useState("90");

  // LocalStorage
  const [loading, setLoading] = useState(true);

  // Calculations
  const [
    payerCostScheduleAppointmentCallPatient,
    setPayerCostScheduleAppointmentCallPatient,
  ] = useState("0");
  const [
    payerCostScheduleAppointmentDoNotCallPatient,
    setPayerCostScheduleAppointmentDoNotCallPatient,
  ] = useState("0");
  const [payerCostCallPatient, setPayerCostCallPatient] = useState("0");
  const [payerCostDoNotCallPatient, setPayerCostDoNotCallPatient] =
    useState("0");
  const [payerCostEConsult, setPayerCostEConsult] = useState("0");
  const [
    payerCostScheduleAppointmentUsualCare,
    setPayerCostScheduleAppointmentUsualCare,
  ] = useState("0");
  const [payerCostUsualCare, setPayerCostUsualCare] = useState("0");

  const checkPercentageSumEConsultContact = () => {
    const sum = Number(callPatient) + Number(doNotCallPatient);
    return sum === 100;
  };

  const checkPercentageSumInPersonScheduleAppointment = () => {
    const sum =
      Number(doNotScheduleAppointmentUsualCare) +
      Number(scheduleAppointmentUsualCare);
    return sum === 100;
  };

  const checkPercentageSumNoShowUsualCare = () => {
    const sum = Number(patientNoShowUsualCare) + Number(patientShowsUsualCare);
    return sum === 100;
  };

  const checkPercentageSumScheduleAppointmentCallPatient = () => {
    const sum =
      Number(scheduleAppointmentCallPatient) +
      Number(recommendPhysicianCallPatient) +
      Number(noActionCallPatient);
    return sum === 100;
  };

  const checkPercentageSumScheduleAppointmentNoShows = () => {
    const sum =
      Number(patientNoShowCallPatientEConsult) +
      Number(patientShowsCallPatientEConsult);
    return sum === 100;
  };

  const checkPercentageSumScheduleAppointmentDoNotCallPatient = () => {
    const sum =
      Number(scheduleAppointmentDoNotCallPatient) +
      Number(recommendPhysicianDoNotCallPatient);
    return sum === 100;
  };

  const checkPercentageSumDoNotCallPatientNoShows = () => {
    const sum =
      Number(patientNoShowDoNotCallPatientEConsult) +
      Number(patientShowsDoNotCallPatientEConsult);
    return sum === 100;
  };

  useEffect(() => {
    const loadData = () => {
      // E-Consult
      setCallPatient(localStorage.getItem("callPatient") || "60");
      setDoNotCallPatient(localStorage.getItem("doNotCallPatient") || "40");
      setScheduleAppointmentCallPatient(
        localStorage.getItem("scheduleAppointmentCallPatient") || "16"
      );
      setRecommendPhysicianCallPatient(
        localStorage.getItem("recommendPhysicianCallPatient") || "83"
      );
      setNoActionCallPatient(
        localStorage.getItem("noActionCallPatient") || "1"
      );
      setPatientNoShowCallPatientEConsult(
        localStorage.getItem("patientNoShowCallPatientEConsult") || "20"
      );
      setPatientShowsCallPatientEConsult(
        localStorage.getItem("patientShowsCallPatientEConsult") || "80"
      );
      setScheduleAppointmentDoNotCallPatient(
        localStorage.getItem("scheduleAppointmentDoNotCallPatient") || "50"
      );
      setRecommendPhysicianDoNotCallPatient(
        localStorage.getItem("recommendPhysicianDoNotCallPatient") || "50"
      );
      setPatientNoShowDoNotCallPatientEConsult(
        localStorage.getItem("patientNoShowDoNotCallPatientEConsult") || "30"
      );
      setPatientShowsDoNotCallPatientEConsult(
        localStorage.getItem("patientShowsDoNotCallPatientEConsult") || "70"
      );

      // Usual Care
      setScheduleAppointmentUsualCare(
        localStorage.getItem("scheduleAppointmentUsualCare") || "90"
      );
      setDoNotScheduleAppointmentUsualCare(
        localStorage.getItem("doNotScheduleAppointmentUsualCare") || "10"
      );
      setPatientNoShowUsualCare(
        localStorage.getItem("patientNoShowUsualCare") || "10"
      );
      setPatientShowsUsualCare(
        localStorage.getItem("patientShowsUsualCare") || "90"
      );

      // Set Visited
      window.localStorage.setItem("decisionTreeVisited", JSON.stringify(true));

      setLoading(false);
    };
    loadData();
  }, []);

  useEffect(() => {
    if (loading) {
      return;
    }

    // E-Consult
    localStorage.setItem("callPatient", callPatient);
    localStorage.setItem("doNotCallPatient", doNotCallPatient);
    localStorage.setItem(
      "scheduleAppointmentCallPatient",
      scheduleAppointmentCallPatient
    );
    localStorage.setItem(
      "recommendPhysicianCallPatient",
      recommendPhysicianCallPatient
    );
    localStorage.setItem("noActionCallPatient", noActionCallPatient);
    localStorage.setItem(
      "patientNoShowCallPatientEConsult",
      patientNoShowCallPatientEConsult
    );
    localStorage.setItem(
      "patientShowsCallPatientEConsult",
      patientShowsCallPatientEConsult
    );
    localStorage.setItem(
      "scheduleAppointmentDoNotCallPatient",
      scheduleAppointmentDoNotCallPatient
    );
    localStorage.setItem(
      "recommendPhysicianDoNotCallPatient",
      recommendPhysicianDoNotCallPatient
    );
    localStorage.setItem(
      "patientNoShowDoNotCallPatientEConsult",
      patientNoShowDoNotCallPatientEConsult
    );
    localStorage.setItem(
      "patientShowsDoNotCallPatientEConsult",
      patientShowsDoNotCallPatientEConsult
    );

    // Usual Care
    localStorage.setItem(
      "scheduleAppointmentUsualCare",
      scheduleAppointmentUsualCare
    );
    localStorage.setItem(
      "doNotScheduleAppointmentUsualCare",
      doNotScheduleAppointmentUsualCare
    );
    localStorage.setItem("patientNoShowUsualCare", patientNoShowUsualCare);
    localStorage.setItem("patientShowsUsualCare", patientShowsUsualCare);

    // Calculations
    setPayerCostScheduleAppointmentCallPatient(
      calculatePayerCostScheduleAppointmentCallPatient()
    );
    setPayerCostScheduleAppointmentDoNotCallPatient(
      calculatePayerCostScheduleAppointmentDoNotCallPatient()
    );
    setPayerCostCallPatient(calculatePayerCostCallPatient());
    setPayerCostDoNotCallPatient(calculatePayerCostDoNotCallPatient());
    setPayerCostEConsult(calculatePayerCostEConsult());
    setPayerCostScheduleAppointmentUsualCare(
      calculatePayerCostScheduleAppointmentUsualCare()
    );
    setPayerCostUsualCare(calculatePayerCostUsualCare());
  }, [
    callPatient,
    doNotCallPatient,
    scheduleAppointmentCallPatient,
    recommendPhysicianCallPatient,
    noActionCallPatient,
    patientNoShowCallPatientEConsult,
    patientShowsCallPatientEConsult,
    scheduleAppointmentDoNotCallPatient,
    recommendPhysicianDoNotCallPatient,
    patientNoShowDoNotCallPatientEConsult,
    patientShowsDoNotCallPatientEConsult,
    scheduleAppointmentUsualCare,
    doNotScheduleAppointmentUsualCare,
    patientNoShowUsualCare,
    patientShowsUsualCare,
    loading,
  ]);

  return (
    <div suppressHydrationWarning={true}>
      <Navbar {...{ active_page: "Decision Tree" }} />
      <WelcomeHeading {...{ active_page: "DecisionTree" }} />
      <div className="mt-20 hidden justify-center dt:grid">
        <div className="ml-10 grid min-w-[1100px] max-w-[1200px] space-y-16 text-center">
          <div className="grid grid-cols-1 justify-self-center">
            <div
              id="PSC"
              className="rounded-lg bg-slate-100 px-20 py-4 font-semibold"
            >
              Patient Seeks Care
            </div>
          </div>
          <div className="grid grid-cols-2 space-x-28 justify-self-center">
            <div
              id="ECR"
              className="w-fit rounded-lg border-2 border-purple-500 bg-slate-100 px-20 py-4 font-semibold"
            >
              E-Consult
              <div className="mt-2 hidden grid-cols-2 justify-items-start gap-x-2 font-normal">
                <p className="text-green-700">Payor:</p>
                <p className="text-green-700">{payerCostEConsult}</p>
              </div>
            </div>
            <div
              id="UC"
              className="w-fit rounded-lg border-2 border-orange-500 bg-slate-100 px-20 py-4 font-semibold"
            >
              In Person Clinic Visit
              <div className="mt-2 hidden grid-cols-2 justify-items-start gap-x-2 font-normal">
                <p className="text-green-700">Payor:</p>
                <p className="text-green-700">{payerCostUsualCare}</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 justify-self-center">
            <div
              id="CP"
              className="mr-6 w-fit justify-self-end rounded-lg border-2 border-purple-500 bg-purple-100 px-5 py-4 font-semibold"
            >
              <span> Contact Patient </span>
              <DecisionTreeInput
                {...{
                  label: "",
                  placeholder: "",
                  value: callPatient,
                  setValue: setCallPatient,
                  type: "integer",
                  disabled: false,
                  errored:
                    !DetermineErrorStateForTextPercent(callPatient).valid ||
                    !checkPercentageSumEConsultContact(),
                  borderColor: "purple-500",
                }}
              />
              <div className="flex w-full justify-center">
                <div className="mt-2 hidden grid-cols-2 justify-items-start gap-x-2 font-normal">
                  <p className="text-green-700">Payor:</p>
                  <p className="text-green-700">{payerCostCallPatient}</p>
                </div>
              </div>
            </div>
            <div
              id="DCP"
              className="w-fit rounded-lg border-2 border-blue-500 bg-blue-100 px-5 py-4 font-semibold"
            >
              <span> Don{"'"}t Contact Patient </span>
              <DecisionTreeInput
                {...{
                  label: "",
                  placeholder: "",
                  value: doNotCallPatient,
                  setValue: setDoNotCallPatient,
                  type: "integer",
                  disabled: false,
                  errored:
                    !DetermineErrorStateForTextPercent(doNotCallPatient)
                      .valid || !checkPercentageSumEConsultContact(),
                  borderColor: "blue-500",
                }}
              />
              <div className="flex w-full justify-center">
                <div className="mt-2 hidden grid-cols-2 justify-items-start gap-x-2 font-normal">
                  <p className="text-green-700">Payor:</p>
                  <p className="text-green-700">{payerCostDoNotCallPatient}</p>
                </div>
              </div>
            </div>
            <div
              id="SAOne"
              className="mr-6 w-fit rounded-lg border-2 border-yellow-500 bg-yellow-100 px-5 py-4 font-semibold"
            >
              <span> Schedule Appointment </span>
              <DecisionTreeInput
                {...{
                  label: "",
                  placeholder: "",
                  value: scheduleAppointmentUsualCare,
                  setValue: setScheduleAppointmentUsualCare,
                  type: "integer",
                  disabled: false,
                  errored:
                    !DetermineErrorStateForTextPercent(
                      scheduleAppointmentUsualCare
                    ).valid || !checkPercentageSumInPersonScheduleAppointment(),
                  borderColor: "yellow-500",
                }}
              />
              <div className="flex w-full justify-center">
                <div className="mt-2 hidden grid-cols-2 justify-items-start gap-x-2 font-normal">
                  <p className="text-green-700">Payor:</p>
                  <p className="text-green-700">
                    {payerCostScheduleAppointmentUsualCare}
                  </p>
                </div>
              </div>
            </div>
            <div
              id="NA"
              className="w-fit rounded-lg border-2 border-orange-500 bg-red-100 px-5 py-4 font-semibold"
            >
              <span> Unable to Reach </span>
              <DecisionTreeInput
                {...{
                  label: "",
                  placeholder: "",
                  value: doNotScheduleAppointmentUsualCare,
                  setValue: setDoNotScheduleAppointmentUsualCare,
                  type: "integer",
                  disabled: false,
                  errored:
                    !DetermineErrorStateForTextPercent(
                      doNotScheduleAppointmentUsualCare
                    ).valid || !checkPercentageSumInPersonScheduleAppointment(),
                  borderColor: "orange-500",
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-5 space-x-14 justify-self-center px-16">
            <div
              id="SATwo"
              className="mr-6 w-fit justify-self-end rounded-lg border-2 border-purple-500 bg-slate-100 px-5 py-4 font-semibold"
            >
              <span> Schedule Appointment </span>
              <div className="flex w-full justify-center">
                <a href="/faq#contact-patient-schedule-appointment">
                  <InformationCircleIcon className="ml-2 mt-1 h-6 w-6 hover:cursor-pointer hover:text-purple-600" />
                </a>
              </div>
              <DecisionTreeInput
                {...{
                  label: "",
                  placeholder: "",
                  value: scheduleAppointmentCallPatient,
                  setValue: setScheduleAppointmentCallPatient,
                  type: "integer",
                  disabled: false,
                  errored:
                    !DetermineErrorStateForTextPercent(
                      scheduleAppointmentCallPatient
                    ).valid ||
                    !checkPercentageSumScheduleAppointmentCallPatient(),
                  borderColor: "purple-500",
                }}
              />
              <div className="flex w-full justify-center">
                <div className="mt-2 hidden grid-cols-2 justify-items-start gap-x-2 font-normal">
                  <p className="text-green-700">Payor:</p>
                  <p className="text-green-700">
                    {payerCostScheduleAppointmentCallPatient}
                  </p>
                </div>
              </div>
            </div>
            <div
              id="RT"
              className="w-fit rounded-lg border-2 border-purple-500 bg-purple-100 px-5 py-4 font-semibold"
            >
              <span> Make Recommendations </span>
              <div className="flex w-full justify-center">
                <a href="/faq#contact-patient-make-recommendations">
                  <InformationCircleIcon className="ml-2 mt-1 h-6 w-6 hover:cursor-pointer hover:text-purple-600" />
                </a>
              </div>
              <DecisionTreeInput
                {...{
                  label: "",
                  placeholder: "",
                  value: recommendPhysicianCallPatient,
                  setValue: setRecommendPhysicianCallPatient,
                  type: "integer",
                  disabled: false,
                  errored:
                    !DetermineErrorStateForTextPercent(
                      recommendPhysicianCallPatient
                    ).valid ||
                    !checkPercentageSumScheduleAppointmentCallPatient(),
                  borderColor: "purple-500",
                }}
              />
            </div>
            <div
              id="NATwo"
              className="mr-6 w-fit rounded-lg border-2 border-purple-500 bg-purple-100 px-5 py-4 font-semibold"
            >
              <span> Unable to Reach </span>
              <DecisionTreeInput
                {...{
                  label: "",
                  placeholder: "",
                  value: noActionCallPatient,
                  setValue: setNoActionCallPatient,
                  type: "integer",
                  disabled: false,
                  errored:
                    !DetermineErrorStateForTextPercent(noActionCallPatient)
                      .valid ||
                    !checkPercentageSumScheduleAppointmentCallPatient(),
                  borderColor: "purple-500",
                }}
              />
            </div>
            <div
              id="PNSOne"
              className="mr-6 w-fit rounded-lg border-2 border-yellow-500 bg-yellow-100 px-5 py-4 font-semibold"
            >
              <span> Patient No Shows </span>
              <DecisionTreeInput
                {...{
                  label: "",
                  placeholder: "",
                  value: patientNoShowUsualCare,
                  setValue: setPatientNoShowUsualCare,
                  type: "integer",
                  disabled: false,
                  errored:
                    !DetermineErrorStateForTextPercent(patientNoShowUsualCare)
                      .valid || !checkPercentageSumNoShowUsualCare(),
                  borderColor: "yellow-500",
                }}
              />
            </div>
            <div
              id="PAOne"
              className="mr-6 w-fit rounded-lg border-2 border-yellow-500 bg-yellow-100 px-5 py-4 font-semibold"
            >
              <span> Patient Attends </span>
              <DecisionTreeInput
                {...{
                  label: "",
                  placeholder: "",
                  value: patientShowsUsualCare,
                  setValue: setPatientShowsUsualCare,
                  type: "integer",
                  disabled: false,
                  errored:
                    !DetermineErrorStateForTextPercent(patientShowsUsualCare)
                      .valid || !checkPercentageSumNoShowUsualCare(),
                  borderColor: "yellow-500",
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-5 space-x-14 justify-self-center px-16">
            <div
              id="PNSTwo"
              className="mr-6 w-fit justify-self-end rounded-lg border-2 border-purple-500 bg-slate-100 px-5 py-4 font-semibold"
            >
              <span>
                {" "}
                Patient No Shows <br></br> (in person){" "}
              </span>
              <DecisionTreeInput
                {...{
                  label: "",
                  placeholder: "",
                  value: patientNoShowCallPatientEConsult,
                  setValue: setPatientNoShowCallPatientEConsult,
                  type: "integer",
                  disabled: false,
                  errored:
                    !DetermineErrorStateForTextPercent(
                      patientNoShowCallPatientEConsult
                    ).valid || !checkPercentageSumScheduleAppointmentNoShows(),
                  borderColor: "purple-500",
                }}
              />
            </div>
            <div
              id="PATwo"
              className="w-fit rounded-lg border-2 border-purple-500 bg-purple-100 px-10 py-4 font-semibold"
            >
              <span>
                {" "}
                Patient Attends <br></br> (in person){" "}
              </span>
              <DecisionTreeInput
                {...{
                  label: "",
                  placeholder: "",
                  value: patientShowsCallPatientEConsult,
                  setValue: setPatientShowsCallPatientEConsult,
                  type: "integer",
                  disabled: false,
                  errored:
                    !DetermineErrorStateForTextPercent(
                      patientShowsCallPatientEConsult
                    ).valid || !checkPercentageSumScheduleAppointmentNoShows(),
                  borderColor: "purple-500",
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-5 space-x-14 justify-self-center px-16">
            <div></div>
            <div
              id="SAThree"
              className="mr-6 w-fit justify-self-end rounded-lg border-2 border-blue-500 bg-slate-100 px-5 py-4 font-semibold"
            >
              <span> Schedule Appointment </span>
              <div className="flex w-full justify-center">
                <a href="/faq#dont-contact-patient-schedule-appointment">
                  <InformationCircleIcon className="ml-2 mt-1 h-6 w-6 hover:cursor-pointer hover:text-blue-600" />
                </a>
              </div>
              <DecisionTreeInput
                {...{
                  label: "",
                  placeholder: "",
                  value: scheduleAppointmentDoNotCallPatient,
                  setValue: setScheduleAppointmentDoNotCallPatient,
                  type: "integer",
                  disabled: false,
                  errored:
                    !DetermineErrorStateForTextPercent(
                      scheduleAppointmentDoNotCallPatient
                    ).valid ||
                    !checkPercentageSumScheduleAppointmentDoNotCallPatient(),
                  borderColor: "blue-500",
                }}
              />
              <div className="flex w-full justify-center">
                <div className="mt-2 hidden grid-cols-2 justify-items-start gap-x-2 font-normal">
                  <p className="text-green-700">Payor:</p>
                  <p className="text-green-700">
                    {payerCostScheduleAppointmentDoNotCallPatient}
                  </p>
                </div>
              </div>
            </div>
            <div
              id="RTTwo"
              className="w-fit rounded-lg border-2 border-blue-500 bg-blue-100 px-5 py-4 font-semibold"
            >
              <span> Make Recommendations </span>
              <div className="flex w-full justify-center">
                <a href="/faq#dont-contact-patient-make-recommendations">
                  <InformationCircleIcon className="ml-2 mt-1 h-6 w-6 hover:cursor-pointer hover:text-blue-600" />
                </a>
              </div>
              <DecisionTreeInput
                {...{
                  label: "",
                  placeholder: "",
                  value: recommendPhysicianDoNotCallPatient,
                  setValue: setRecommendPhysicianDoNotCallPatient,
                  type: "integer",
                  disabled: false,
                  errored:
                    !DetermineErrorStateForTextPercent(
                      recommendPhysicianDoNotCallPatient
                    ).valid ||
                    !checkPercentageSumScheduleAppointmentDoNotCallPatient(),
                  borderColor: "blue-500",
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-5 space-x-14 justify-self-center px-16">
            <div
              id="PNSThree"
              className="mr-6 w-fit justify-self-end rounded-lg border-2 border-blue-500 bg-slate-100 px-5 py-4 font-semibold"
            >
              <span> Patient No Shows </span>
              <DecisionTreeInput
                {...{
                  label: "",
                  placeholder: "",
                  value: patientNoShowDoNotCallPatientEConsult,
                  setValue: setPatientNoShowDoNotCallPatientEConsult,
                  type: "integer",
                  disabled: false,
                  errored:
                    !DetermineErrorStateForTextPercent(
                      patientNoShowDoNotCallPatientEConsult
                    ).valid || !checkPercentageSumDoNotCallPatientNoShows(),
                  borderColor: "blue-500",
                }}
              />
            </div>
            <div
              id="PAThree"
              className="w-fit rounded-lg border-2 border-blue-500 bg-blue-100 px-5 py-4 font-semibold"
            >
              <span> Patient Attends </span>
              <DecisionTreeInput
                {...{
                  label: "",
                  placeholder: "",
                  value: patientShowsDoNotCallPatientEConsult,
                  setValue: setPatientShowsDoNotCallPatientEConsult,
                  type: "integer",
                  disabled: false,
                  errored:
                    !DetermineErrorStateForTextPercent(
                      patientShowsDoNotCallPatientEConsult
                    ).valid || !checkPercentageSumDoNotCallPatientNoShows(),
                  borderColor: "blue-500",
                }}
              />
            </div>
          </div>

          <Xarrow
            start="PSC"
            end="ECR"
            path="grid"
            gridBreak="50%"
            strokeWidth={2}
            color="black"
            showHead={false}
            showTail={false}
            startAnchor={{ position: "bottom", offset: { x: 0 } }}
            endAnchor={{ position: "top", offset: { x: 0 } }}
          />
          <Xarrow
            start="PSC"
            end="UC"
            path="grid"
            gridBreak="50%"
            strokeWidth={2}
            color="black"
            showHead={false}
            showTail={false}
            startAnchor={{ position: "bottom", offset: { x: 0 } }}
            endAnchor={{ position: "top", offset: { x: 0 } }}
          />
          <Xarrow
            start="ECR"
            end="CP"
            path="grid"
            gridBreak="50%"
            strokeWidth={2}
            color="black"
            showHead={false}
            showTail={false}
            startAnchor={{ position: "bottom", offset: { x: 0 } }}
            endAnchor={{ position: "top", offset: { x: 0 } }}
          />
          <Xarrow
            start="ECR"
            end="DCP"
            path="grid"
            gridBreak="50%"
            strokeWidth={2}
            color="black"
            showHead={false}
            showTail={false}
            startAnchor={{ position: "bottom", offset: { x: 0 } }}
            endAnchor={{ position: "top", offset: { x: 0 } }}
          />
          <Xarrow
            start="UC"
            end="SAOne"
            path="grid"
            gridBreak="50%"
            strokeWidth={2}
            color="black"
            showHead={false}
            showTail={false}
            startAnchor={{ position: "bottom", offset: { x: 0 } }}
            endAnchor={{ position: "top", offset: { x: 0 } }}
          />
          <Xarrow
            start="UC"
            end="NA"
            path="grid"
            gridBreak="50%"
            strokeWidth={2}
            color="black"
            showHead={false}
            showTail={false}
            startAnchor={{ position: "bottom", offset: { x: 0 } }}
            endAnchor={{ position: "top", offset: { x: 0 } }}
          />
          <Xarrow
            start="CP"
            end="SATwo"
            path="grid"
            gridBreak="50%"
            strokeWidth={2}
            color="black"
            showHead={false}
            showTail={false}
            startAnchor={{ position: "bottom", offset: { x: 0 } }}
            endAnchor={{ position: "top", offset: { x: 0 } }}
          />
          <Xarrow
            start="CP"
            end="RT"
            path="grid"
            gridBreak="50%"
            strokeWidth={2}
            color="black"
            showHead={false}
            showTail={false}
            startAnchor={{ position: "bottom", offset: { x: 0 } }}
            endAnchor={{ position: "top", offset: { x: 0 } }}
          />
          <Xarrow
            start="CP"
            end="NATwo"
            path="grid"
            gridBreak="50%"
            strokeWidth={2}
            color="black"
            showHead={false}
            showTail={false}
            startAnchor={{ position: "bottom", offset: { x: 0 } }}
            endAnchor={{ position: "top", offset: { x: 0 } }}
          />
          <Xarrow
            start="SAOne"
            end="PAOne"
            path="grid"
            gridBreak="50%"
            strokeWidth={2}
            color="black"
            showHead={false}
            showTail={false}
            startAnchor={{ position: "bottom", offset: { x: 0 } }}
            endAnchor={{ position: "top", offset: { x: 0 } }}
          />
          <Xarrow
            start="SAOne"
            end="PNSOne"
            path="grid"
            gridBreak="50%"
            strokeWidth={2}
            color="black"
            showHead={false}
            showTail={false}
            startAnchor={{ position: "bottom", offset: { x: 0 } }}
            endAnchor={{ position: "top", offset: { x: 0 } }}
          />
          <Xarrow
            start="SATwo"
            end="PATwo"
            path="grid"
            gridBreak="50%"
            strokeWidth={2}
            color="black"
            showHead={false}
            showTail={false}
            startAnchor={{ position: "bottom", offset: { x: 0 } }}
            endAnchor={{ position: "top", offset: { x: 0 } }}
          />
          <Xarrow
            start="SATwo"
            end="PNSTwo"
            path="grid"
            gridBreak="50%"
            strokeWidth={2}
            color="black"
            showHead={false}
            showTail={false}
            startAnchor={{ position: "bottom", offset: { x: 0 } }}
            endAnchor={{ position: "top", offset: { x: 0 } }}
          />

          <Xarrow
            zIndex={-100}
            start="DCP"
            end="SAThree"
            path="grid"
            dashness={true}
            gridBreak="90%"
            strokeWidth={2}
            color="blue"
            showHead={false}
            showTail={false}
            startAnchor={{ position: "bottom", offset: { x: 0 } }}
            endAnchor={{ position: "top", offset: { x: 0 } }}
          />
          <Xarrow
            zIndex={-100}
            start="DCP"
            end="RTTwo"
            path="grid"
            dashness={true}
            gridBreak="90%"
            strokeWidth={2}
            color="blue"
            showHead={false}
            showTail={false}
            startAnchor={{ position: "bottom", offset: { x: 0 } }}
            endAnchor={{ position: "top", offset: { x: 0 } }}
          />
          <Xarrow
            start="SAThree"
            end="PNSThree"
            path="grid"
            dashness={true}
            gridBreak="50%"
            strokeWidth={2}
            color="blue"
            showHead={false}
            showTail={false}
            startAnchor={{ position: "bottom", offset: { x: 0 } }}
            endAnchor={{ position: "top", offset: { x: 0 } }}
          />
          <Xarrow
            start="SAThree"
            end="PAThree"
            path="grid"
            dashness={true}
            gridBreak="50%"
            strokeWidth={2}
            color="blue"
            showHead={false}
            showTail={false}
            startAnchor={{ position: "bottom", offset: { x: 0 } }}
            endAnchor={{ position: "top", offset: { x: 0 } }}
          />
        </div>
      </div>
      <div className="mt-20 grid justify-center dt:hidden">
        View On Desktop To Access Decision Tree
      </div>

      <div className="mx-4 mt-12 grid px-6 py-6 md:mx-28">
        <a
          href="/results"
          className="h-fit w-fit self-center justify-self-end rounded-xl bg-casal-400 px-16 py-4 text-xl font-medium text-white hover:bg-casal-400/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Calculate
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default DecisionTree;
