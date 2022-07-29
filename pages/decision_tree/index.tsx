import type { NextPage } from 'next'
import Navbar from '../../components/app_shell/Navbar'
import Footer from '../../components/app_shell/Footer'
import WelcomeHeading from '../../components/parameters/WelcomeHeading'
import Xarrow from "react-xarrows";
import { useState, useEffect } from 'react';
import DecisionTreeInput from '../../components/util/decision-tree-input';

const DecisionTree: NextPage = () => {
  // E-Consult
  const [callPatient, setCallPatient] = useState('60');
  const [doNotCallPatient, setDoNotCallPatient] = useState('40');
  const [scheduleAppointmentCallPatient, setScheduleAppointmentCallPatient] = useState('16');
  const [recommendPhysicianCallPatient, setRecommendPhysicianCallPatient] = useState('83');
  const [noActionCallPatient, setNoActionCallPatient] = useState('1');
  const [patientNoShowCallPatientEConsult, setPatientNoShowCallPatientEConsult] = useState('20');
  const [patientShowsCallPatientEConsult, setPatientShowsCallPatientEConsult] = useState('80');
  const [scheduleAppointmentDoNotCallPatient, setScheduleAppointmentDoNotCallPatient] = useState('50');
  const [recommendPhysicianDoNotCallPatient, setRecommendPhysicianDoNotCallPatient] = useState('50');
  const [patientNoShowDoNotCallPatientEConsult, setPatientNoShowDoNotCallPatientEConsult] = useState('70');
  const [patientShowsDoNotCallPatientEConsult, setPatientShowsDoNotCallPatientEConsult] = useState('30');

  // Usual Care
  const [scheduleAppointmentUsualCare, setScheduleAppointmentUsualCare] = useState('90');
  const [doNotScheduleAppointmentUsualCare, setDoNotScheduleAppointmentUsualCare] = useState('10');
  const [patientNoShowUsualCare, setPatientNoShowUsualCare] = useState('10');
  const [patientShowsUsualCare, setPatientShowsUsualCare] = useState('90');

  // LocalStorage
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = () => {
      // E-Consult
      setCallPatient(localStorage.getItem('callPatient') || '60');
      setDoNotCallPatient(localStorage.getItem('doNotCallPatient') || '40');
      setScheduleAppointmentCallPatient(localStorage.getItem('scheduleAppointmentCallPatient') || '16');
      setRecommendPhysicianCallPatient(localStorage.getItem('recommendPhysicianCallPatient') || '83');
      setNoActionCallPatient(localStorage.getItem('noActionCallPatient') || '1');
      setPatientNoShowCallPatientEConsult(localStorage.getItem('patientNoShowCallPatientEConsult') || '20');
      setPatientShowsCallPatientEConsult(localStorage.getItem('patientShowsCallPatientEConsult') || '80');
      setScheduleAppointmentDoNotCallPatient(localStorage.getItem('scheduleAppointmentDoNotCallPatient') || '50');
      setRecommendPhysicianDoNotCallPatient(localStorage.getItem('recommendPhysicianDoNotCallPatient') || '50');
      setPatientNoShowDoNotCallPatientEConsult(localStorage.getItem('patientNoShowDoNotCallPatientEConsult') || '70');
      setPatientShowsDoNotCallPatientEConsult(localStorage.getItem('patientShowsDoNotCallPatientEConsult') || '30');

      // Usual Care
      setScheduleAppointmentUsualCare(localStorage.getItem('scheduleAppointmentUsualCare') || '90');
      setDoNotScheduleAppointmentUsualCare(localStorage.getItem('doNotScheduleAppointmentUsualCare') || '10');
      setPatientNoShowUsualCare(localStorage.getItem('patientNoShowUsualCare') || '10');
      setPatientShowsUsualCare(localStorage.getItem('patientShowsUsualCare') || '90');

      setLoading(false);
    }
    loadData();
  }, []);

  useEffect(() => {
    if(!loading) {
      // E-Consult
      localStorage.setItem('callPatient', callPatient);
      localStorage.setItem('doNotCallPatient', doNotCallPatient);
      localStorage.setItem('scheduleAppointmentCallPatient', scheduleAppointmentCallPatient);
      localStorage.setItem('recommendPhysicianCallPatient', recommendPhysicianCallPatient);
      localStorage.setItem('noActionCallPatient', noActionCallPatient);
      localStorage.setItem('patientNoShowCallPatientEConsult', patientNoShowCallPatientEConsult);
      localStorage.setItem('patientShowsCallPatientEConsult', patientShowsCallPatientEConsult);
      localStorage.setItem('scheduleAppointmentDoNotCallPatient', scheduleAppointmentDoNotCallPatient);
      localStorage.setItem('recommendPhysicianDoNotCallPatient', recommendPhysicianDoNotCallPatient);
      localStorage.setItem('patientNoShowDoNotCallPatientEConsult', patientNoShowDoNotCallPatientEConsult);
      localStorage.setItem('patientShowsDoNotCallPatientEConsult', patientShowsDoNotCallPatientEConsult);

      // Usual Care
      localStorage.setItem('scheduleAppointmentUsualCare', scheduleAppointmentUsualCare);
      localStorage.setItem('doNotScheduleAppointmentUsualCare', doNotScheduleAppointmentUsualCare);
      localStorage.setItem('patientNoShowUsualCare', patientNoShowUsualCare);
      localStorage.setItem('patientShowsUsualCare', patientShowsUsualCare);
    }
  }, [callPatient, doNotCallPatient, scheduleAppointmentCallPatient, recommendPhysicianCallPatient, noActionCallPatient, patientNoShowCallPatientEConsult, patientShowsCallPatientEConsult, scheduleAppointmentDoNotCallPatient, recommendPhysicianDoNotCallPatient, patientNoShowDoNotCallPatientEConsult, patientShowsDoNotCallPatientEConsult, scheduleAppointmentUsualCare, doNotScheduleAppointmentUsualCare, patientNoShowUsualCare, patientShowsUsualCare, loading]);

  return (
    <div suppressHydrationWarning={true}>
      <Navbar {...{ active_page: 'Decision Tree' }} />
      <WelcomeHeading {...{ active_page: 'DecisionTree' }} />
      <div className="grid justify-center mt-20">
        <div className="grid max-w-[1200px] space-y-16 min-w-[1100px] text-center ml-10">
          <div className="grid justify-self-center grid-cols-1">
            <div id="PSC" className="px-20 py-4 bg-slate-100 font-semibold rounded-lg">
              Patient seeks care
            </div>
          </div>
          <div className="grid justify-self-center grid-cols-2 space-x-28">
            <div id="ECR" className="w-fit px-20 py-4 bg-slate-100 font-semibold border-2 rounded-lg border-purple-500">
              E-Consult
            </div>
            <div id="UC" className="w-fit px-20 py-4 bg-slate-100 font-semibold border-2 rounded-lg border-orange-500">
              Usual Care
            </div>
          </div>
          <div className="grid justify-self-center grid-cols-4">
            <div id="CP" className="w-fit px-5 py-4 bg-purple-100 font-semibold border-2 rounded-lg border-purple-500 justify-self-end mr-6">
              <span> Call Patient </span>
              <DecisionTreeInput
                {...{
                  label: '',
                  placeholder: '',
                  value: callPatient,
                  setValue: setCallPatient,
                  type: 'integer',
                  disabled: false,
                  errored: false,
                  borderColor: 'purple-500'
                }}
              />
            </div>
            <div id="DCP" className="w-fit px-5 py-4 bg-blue-100 font-semibold border-2 rounded-lg border-blue-500">
              <span> Don{"'"}t Call Patient </span>
              <DecisionTreeInput
                {...{
                  label: '',
                  placeholder: '',
                  value: doNotCallPatient,
                  setValue: setDoNotCallPatient,
                  type: 'integer',
                  disabled: false,
                  errored: false,
                  borderColor: 'blue-500'
                }}
              />
            </div>
            <div id="SAOne" className="w-fit px-5 py-4 bg-yellow-100 font-semibold border-2 rounded-lg border-yellow-500 mr-6">
              <span> Schedule Appointment </span>
              <DecisionTreeInput
                {...{
                  label: '',
                  placeholder: '',
                  value: scheduleAppointmentUsualCare,
                  setValue: setScheduleAppointmentUsualCare,
                  type: 'integer',
                  disabled: false,
                  errored: false,
                  borderColor: 'yellow-500'
                }}
              />
            </div>
            <div id="NA" className="w-fit px-5 py-4 bg-red-100 font-semibold border-2 rounded-lg border-orange-500">
              <span> No action </span>
              <DecisionTreeInput
                {...{
                  label: '',
                  placeholder: '',
                  value: doNotScheduleAppointmentUsualCare,
                  setValue: setDoNotScheduleAppointmentUsualCare,
                  type: 'integer',
                  disabled: false,
                  errored: false,
                  borderColor: 'orange-500',
                }}
              />
            </div>
          </div>

          <div className="grid justify-self-center grid-cols-5 space-x-14 px-8">
            <div id="SATwo" className="w-fit px-5 py-4 bg-slate-100 font-semibold border-2 rounded-lg border-purple-500 justify-self-end mr-6">
              <span>  Schedule Appointment </span>
              <DecisionTreeInput
                {...{
                  label: '',
                  placeholder: '',
                  value: scheduleAppointmentCallPatient,
                  setValue: setScheduleAppointmentCallPatient,
                  type: 'integer',
                  disabled: false,
                  errored: false,
                  borderColor: 'purple-500'
                }}
              />
            </div>
            <div id="RT" className="w-fit px-5 py-4 bg-purple-100 font-semibold border-2 rounded-lg border-purple-500">
              <span> Recommend Treatment </span>
              <DecisionTreeInput
                {...{
                  label: '',
                  placeholder: '',
                  value: recommendPhysicianCallPatient,
                  setValue: setRecommendPhysicianCallPatient,
                  type: 'integer',
                  disabled: false,
                  errored: false,
                  borderColor: 'purple-500'
                }}
              />
            </div>
            <div id="NATwo" className="w-fit px-5 py-4 bg-purple-100 font-semibold border-2 rounded-lg border-purple-500 mr-6">
              <span> No Action </span>
              <DecisionTreeInput
                {...{
                  label: '',
                  placeholder: '',
                  value: noActionCallPatient,
                  setValue: setNoActionCallPatient,
                  type: 'integer',
                  disabled: false,
                  errored: false,
                  borderColor: 'purple-500'
                }}
              />
            </div>
            <div id="PNSOne" className="w-fit px-5 py-4 bg-yellow-100 font-semibold border-2 rounded-lg border-yellow-500 mr-6">
              <span> Patient No Shows </span>
              <DecisionTreeInput
                {...{
                  label: '',
                  placeholder: '',
                  value: patientNoShowUsualCare,
                  setValue: setPatientNoShowUsualCare,
                  type: 'integer',
                  disabled: false,
                  errored: false,
                  borderColor: 'yellow-500'
                }}
              />
            </div>
            <div id="PAOne" className="w-fit px-5 py-4 bg-yellow-100 font-semibold border-2 rounded-lg border-yellow-500 mr-6">
              <span> Patient Attends </span>
              <DecisionTreeInput
                {...{
                  label: '',
                  placeholder: '',
                  value: patientShowsUsualCare,
                  setValue: setPatientShowsUsualCare,
                  type: 'integer',
                  disabled: false,
                  errored: false,
                  borderColor: 'yellow-500'
                }}
              />
            </div>
          </div>

          <div className="grid justify-self-center grid-cols-5 space-x-14 px-8">
            <div id="PNSTwo" className="w-fit px-5 py-4 bg-slate-100 font-semibold border-2 rounded-lg border-purple-500 justify-self-end mr-6">
              <span>  Patient No Shows </span>
              <DecisionTreeInput
                {...{
                  label: '',
                  placeholder: '',
                  value: patientNoShowCallPatientEConsult,
                  setValue: setPatientNoShowCallPatientEConsult,
                  type: 'integer',
                  disabled: false,
                  errored: false,
                  borderColor: 'purple-500'
                }}
              />
            </div>
            <div id="PATwo" className="w-fit px-10 py-4 bg-purple-100 font-semibold border-2 rounded-lg border-purple-500">
              <span> Patient Attends </span>
              <DecisionTreeInput
                {...{
                  label: '',
                  placeholder: '',
                  value: patientShowsCallPatientEConsult,
                  setValue: setPatientShowsCallPatientEConsult,
                  type: 'integer',
                  disabled: false,
                  errored: false,
                  borderColor: 'purple-500'
                }}
              />
            </div>
          </div>

          <div className="grid justify-self-center grid-cols-5 space-x-14 px-8">
            <div></div>
            <div id="SAThree" className="w-fit px-5 py-4 bg-slate-100 font-semibold border-2 rounded-lg border-blue-500 justify-self-end mr-6">
              <span> Schedule Appointment </span>
              <DecisionTreeInput
                {...{
                  label: '',
                  placeholder: '',
                  value: scheduleAppointmentDoNotCallPatient,
                  setValue: setScheduleAppointmentDoNotCallPatient,
                  type: 'integer',
                  disabled: false,
                  errored: false,
                  borderColor: 'blue-500'
                }}
              />
            </div>
            <div id="RTTwo" className="w-fit px-5 py-4 bg-blue-100 font-semibold border-2 rounded-lg border-blue-500">
              <span> Recommend Treatment </span>
              <DecisionTreeInput
                {...{
                  label: '',
                  placeholder: '',
                  value: recommendPhysicianDoNotCallPatient,
                  setValue: setRecommendPhysicianDoNotCallPatient,
                  type: 'integer',
                  disabled: false,
                  errored: false,
                  borderColor: 'blue-500'
                }}
              />
            </div>
          </div>

          <div className="grid justify-self-center grid-cols-5 space-x-14 px-8">
            <div id="PNSThree" className="w-fit px-5 py-4 bg-slate-100 font-semibold border-2 rounded-lg border-blue-500 justify-self-end mr-6">
              <span> Patient No Shows </span>
              <DecisionTreeInput
                {...{
                  label: '',
                  placeholder: '',
                  value: patientNoShowDoNotCallPatientEConsult,
                  setValue: setPatientNoShowDoNotCallPatientEConsult,
                  type: 'integer',
                  disabled: false,
                  errored: false,
                  borderColor: 'blue-500'
                }}
              />
            </div>
            <div id="PAThree" className="w-fit px-5 py-4 bg-blue-100 font-semibold border-2 rounded-lg border-blue-500">
              <span> Patient Attends </span>
              <DecisionTreeInput
                {...{
                  label: '',
                  placeholder: '',
                  value: patientShowsDoNotCallPatientEConsult,
                  setValue: setPatientShowsDoNotCallPatientEConsult,
                  type: 'integer',
                  disabled: false,
                  errored: false,
                  borderColor: 'blue-500'
                }}
              />
            </div>
          </div>

          <Xarrow start="PSC" end="ECR" path="grid" gridBreak='50%' strokeWidth={2} color='black' showHead={false} showTail={false} startAnchor={{ position: "bottom", offset: { x: 0 } }} endAnchor={{ position: "top", offset: { x: 0 } }} />
          <Xarrow start="PSC" end="UC" path="grid" gridBreak='50%' strokeWidth={2} color='black' showHead={false} showTail={false} startAnchor={{ position: "bottom", offset: { x: 0 } }} endAnchor={{ position: "top", offset: { x: 0 } }} />
          <Xarrow start="ECR" end="CP" path="grid" gridBreak='50%' strokeWidth={2} color='black' showHead={false} showTail={false} startAnchor={{ position: "bottom", offset: { x: 0 } }} endAnchor={{ position: "top", offset: { x: 0 } }} />
          <Xarrow start="ECR" end="DCP" path="grid" gridBreak='50%' strokeWidth={2} color='black' showHead={false} showTail={false} startAnchor={{ position: "bottom", offset: { x: 0 } }} endAnchor={{ position: "top", offset: { x: 0 } }} />
          <Xarrow start="UC" end="SAOne" path="grid" gridBreak='50%' strokeWidth={2} color='black' showHead={false} showTail={false} startAnchor={{ position: "bottom", offset: { x: 0 } }} endAnchor={{ position: "top", offset: { x: 0 } }} />
          <Xarrow start="UC" end="NA" path="grid" gridBreak='50%' strokeWidth={2} color='black' showHead={false} showTail={false} startAnchor={{ position: "bottom", offset: { x: 0 } }} endAnchor={{ position: "top", offset: { x: 0 } }} />
          <Xarrow start="CP" end="SATwo" path="grid" gridBreak='50%' strokeWidth={2} color='black' showHead={false} showTail={false} startAnchor={{ position: "bottom", offset: { x: 0 } }} endAnchor={{ position: "top", offset: { x: 0 } }} />
          <Xarrow start="CP" end="RT" path="grid" gridBreak='50%' strokeWidth={2} color='black' showHead={false} showTail={false} startAnchor={{ position: "bottom", offset: { x: 0 } }} endAnchor={{ position: "top", offset: { x: 0 } }} />
          <Xarrow start="CP" end="NATwo" path="grid" gridBreak='50%' strokeWidth={2} color='black' showHead={false} showTail={false} startAnchor={{ position: "bottom", offset: { x: 0 } }} endAnchor={{ position: "top", offset: { x: 0 } }} />
          <Xarrow start="SAOne" end="PAOne" path="grid" gridBreak='50%' strokeWidth={2} color='black' showHead={false} showTail={false} startAnchor={{ position: "bottom", offset: { x: 0 } }} endAnchor={{ position: "top", offset: { x: 0 } }} />
          <Xarrow start="SAOne" end="PNSOne" path="grid" gridBreak='50%' strokeWidth={2} color='black' showHead={false} showTail={false} startAnchor={{ position: "bottom", offset: { x: 0 } }} endAnchor={{ position: "top", offset: { x: 0 } }} />
          <Xarrow start="SATwo" end="PATwo" path="grid" gridBreak='50%' strokeWidth={2} color='black' showHead={false} showTail={false} startAnchor={{ position: "bottom", offset: { x: 0 } }} endAnchor={{ position: "top", offset: { x: 0 } }} />
          <Xarrow start="SATwo" end="PNSTwo" path="grid" gridBreak='50%' strokeWidth={2} color='black' showHead={false} showTail={false} startAnchor={{ position: "bottom", offset: { x: 0 } }} endAnchor={{ position: "top", offset: { x: 0 } }} />

          <Xarrow zIndex={-100} start="DCP" end="SAThree" path="grid" dashness={true} gridBreak='90%' strokeWidth={2} color='blue' showHead={false} showTail={false} startAnchor={{ position: "bottom", offset: { x: 0 } }} endAnchor={{ position: "top", offset: { x: 0 } }} />
          <Xarrow zIndex={-100} start="DCP" end="RTTwo" path="grid" dashness={true} gridBreak='90%' strokeWidth={2} color='blue' showHead={false} showTail={false} startAnchor={{ position: "bottom", offset: { x: 0 } }} endAnchor={{ position: "top", offset: { x: 0 } }} />
          <Xarrow start="SAThree" end="PNSThree" path="grid" dashness={true} gridBreak='50%' strokeWidth={2} color='blue' showHead={false} showTail={false} startAnchor={{ position: "bottom", offset: { x: 0 } }} endAnchor={{ position: "top", offset: { x: 0 } }} />
          <Xarrow start="SAThree" end="PAThree" path="grid" dashness={true} gridBreak='50%' strokeWidth={2} color='blue' showHead={false} showTail={false} startAnchor={{ position: "bottom", offset: { x: 0 } }} endAnchor={{ position: "top", offset: { x: 0 } }} />
        </div>
      </div>

      <div className="grid mt-12 mx-4 px-6 py-6 md:mx-28">
        <a
          href="/results"
          className="justify-self-end self-center w-fit h-fit px-16 py-4 font-medium rounded-xl text-white text-xl bg-casal-400 hover:bg-casal-400/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </a>
      </div>
      <Footer />
    </div>
  )
}

export default DecisionTree
