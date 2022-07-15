import type { NextPage } from 'next'
import Navbar from '../../components/app_shell/Navbar'
import Footer from '../../components/app_shell/Footer'
import WelcomeHeading from '../../components/parameters/WelcomeHeading'
import Xarrow from "react-xarrows";

const DecisionTree: NextPage = () => {
    return (
      <div suppressHydrationWarning={true}>
        <Navbar { ...{ active_page: 'Parameters' } }/>
        <WelcomeHeading { ...{ active_page: 'DecisionTree' } }/>
        <div className="grid w-full space-y-16">
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
            <div id="CP" className="w-fit px-20 py-4 bg-purple-100 font-semibold border-2 rounded-lg border-purple-500 justify-self-end mr-6">
              Call Patient
            </div>
            <div id="DCP" className="w-fit px-20 py-4 bg-blue-100 font-semibold border-2 rounded-lg border-blue-500">
              Don{"'"}t Call Patient
            </div>
            <div id="SAOne" className="w-fit px-20 py-4 bg-yellow-100 font-semibold border-2 rounded-lg border-yellow-500 mr-6">
              Schedule Appointment
            </div>
            <div id="NA" className="w-fit px-20 py-4 bg-red-100 font-semibold border-2 rounded-lg border-orange-500">
              No action
            </div>
          </div>

          <div className="grid justify-self-center grid-cols-5 space-x-14 px-8">
            <div id="SATwo" className="w-fit px-14 py-4 bg-slate-100 font-semibold border-2 rounded-lg border-purple-500 justify-self-end mr-6">
              Schedule Appointment
            </div>
            <div id="RT" className="w-fit px-10 py-4 bg-purple-100 font-semibold border-2 rounded-lg border-purple-500">
              Recommend Treatment
            </div>
            <div id="NATwo" className="w-fit px-20 py-4 bg-purple-100 font-semibold border-2 rounded-lg border-purple-500 mr-6">
              No Action
            </div>
            <div id="PNSOne" className="w-fit px-14 py-4 bg-yellow-100 font-semibold border-2 rounded-lg border-yellow-500 mr-6">
              Patient No Shows
            </div>
            <div id="PAOne" className="w-fit px-14 py-4 bg-yellow-100 font-semibold border-2 rounded-lg border-yellow-500 mr-6">
              Patient Attends
            </div>
          </div>

          <div className="grid justify-self-center grid-cols-5 space-x-14 px-8">
            <div id="PNSTwo" className="w-fit px-14 py-4 bg-slate-100 font-semibold border-2 rounded-lg border-purple-500 justify-self-end mr-6">
              Patient No Shows
            </div>
            <div id="PATwo" className="w-fit px-10 py-4 bg-purple-100 font-semibold border-2 rounded-lg border-purple-500">
              Patient Attends
            </div>
          </div>

          <div className="grid justify-self-center grid-cols-5 space-x-14 px-8">
            <div></div>
            <div id="SAThree" className="w-fit px-10 py-4 bg-slate-100 font-semibold border-2 rounded-lg border-blue-500 justify-self-end mr-6">
              Schedule Appointment
            </div>
            <div id="RTTwo" className="w-fit px-10 py-4 bg-blue-100 font-semibold border-2 rounded-lg border-blue-500">
              Recommend Treatment
            </div>
          </div>

          <div className="grid justify-self-center grid-cols-5 space-x-14 px-8">
            <div id="PNSThree" className="w-fit px-10 py-4 bg-slate-100 font-semibold border-2 rounded-lg border-blue-500 justify-self-end mr-6">
              Patient No Shows
            </div>
            <div id="PAThree" className="w-fit px-10 py-4 bg-blue-100 font-semibold border-2 rounded-lg border-blue-500">
              Patient Attends
            </div>
          </div>

          <Xarrow start="PSC" end="ECR" path="grid" gridBreak='50%' strokeWidth={2} color='black' showHead={false} showTail={false} startAnchor={ { position: "bottom", offset: { x: 0 } } } endAnchor={ { position: "top", offset: { x: 0 } } }/>
          <Xarrow start="PSC" end="UC" path="grid" gridBreak='50%' strokeWidth={2} color='black' showHead={false} showTail={false} startAnchor={ { position: "bottom", offset: { x: 0 } } } endAnchor={ { position: "top", offset: { x: 0 } } }/>
          <Xarrow start="ECR" end="CP" path="grid" gridBreak='50%' strokeWidth={2} color='black' showHead={false} showTail={false} startAnchor={ { position: "bottom", offset: { x: 0 } } } endAnchor={ { position: "top", offset: { x: 0 } } }/>
          <Xarrow start="ECR" end="DCP" path="grid" gridBreak='50%' strokeWidth={2} color='black' showHead={false} showTail={false} startAnchor={ { position: "bottom", offset: { x: 0 } } } endAnchor={ { position: "top", offset: { x: 0 } } }/>
          <Xarrow start="UC" end="SAOne" path="grid" gridBreak='50%' strokeWidth={2} color='black' showHead={false} showTail={false} startAnchor={ { position: "bottom", offset: { x: 0 } } } endAnchor={ { position: "top", offset: { x: 0 } } }/>
          <Xarrow start="UC" end="NA" path="grid" gridBreak='50%' strokeWidth={2} color='black' showHead={false} showTail={false} startAnchor={ { position: "bottom", offset: { x: 0 } } } endAnchor={ { position: "top", offset: { x: 0 } } }/>
          <Xarrow start="CP" end="SATwo" path="grid" gridBreak='50%' strokeWidth={2} color='black' showHead={false} showTail={false} startAnchor={ { position: "bottom", offset: { x: 0 } } } endAnchor={ { position: "top", offset: { x: 0 } } }/>
          <Xarrow start="CP" end="RT" path="grid" gridBreak='50%' strokeWidth={2} color='black' showHead={false} showTail={false} startAnchor={ { position: "bottom", offset: { x: 0 } } } endAnchor={ { position: "top", offset: { x: 0 } } }/>
          <Xarrow start="CP" end="NATwo" path="grid" gridBreak='50%' strokeWidth={2} color='black' showHead={false} showTail={false} startAnchor={ { position: "bottom", offset: { x: 0 } } } endAnchor={ { position: "top", offset: { x: 0 } } }/>
          <Xarrow start="SAOne" end="PAOne" path="grid" gridBreak='50%' strokeWidth={2} color='black' showHead={false} showTail={false} startAnchor={ { position: "bottom", offset: { x: 0 } } } endAnchor={ { position: "top", offset: { x: 0 } } }/>
          <Xarrow start="SAOne" end="PNSOne" path="grid" gridBreak='50%' strokeWidth={2} color='black' showHead={false} showTail={false} startAnchor={ { position: "bottom", offset: { x: 0 } } } endAnchor={ { position: "top", offset: { x: 0 } } }/>
          <Xarrow start="SATwo" end="PATwo" path="grid" gridBreak='50%' strokeWidth={2} color='black' showHead={false} showTail={false} startAnchor={ { position: "bottom", offset: { x: 0 } } } endAnchor={ { position: "top", offset: { x: 0 } } }/>
          <Xarrow start="SATwo" end="PNSTwo" path="grid" gridBreak='50%' strokeWidth={2} color='black' showHead={false} showTail={false} startAnchor={ { position: "bottom", offset: { x: 0 } } } endAnchor={ { position: "top", offset: { x: 0 } } }/>

          <Xarrow zIndex={-100} start="DCP" end="SAThree" path="grid" dashness={true} gridBreak='90%' strokeWidth={2} color='blue' showHead={false} showTail={false} startAnchor={ { position: "bottom", offset: { x: 0 } } } endAnchor={ { position: "top", offset: { x: 0 } } }/>
          <Xarrow zIndex={-100} start="DCP" end="RTTwo" path="grid" dashness={true} gridBreak='90%' strokeWidth={2} color='blue' showHead={false} showTail={false} startAnchor={ { position: "bottom", offset: { x: 0 } } } endAnchor={ { position: "top", offset: { x: 0 } } }/>
          <Xarrow start="SAThree" end="PNSThree" path="grid" dashness={true} gridBreak='50%' strokeWidth={2} color='blue' showHead={false} showTail={false} startAnchor={ { position: "bottom", offset: { x: 0 } } } endAnchor={ { position: "top", offset: { x: 0 } } }/>
          <Xarrow start="SAThree" end="PAThree" path="grid" dashness={true} gridBreak='50%' strokeWidth={2} color='blue' showHead={false} showTail={false} startAnchor={ { position: "bottom", offset: { x: 0 } } } endAnchor={ { position: "top", offset: { x: 0 } } }/>
        </div>

        <div className="grid">
          <button
            type="button"
            className="justify-self-end self-center mr-32 mt-16 w-fit h-fit px-8 py-4 border-2 border-blue-600 font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-600/70 focus:outline-none focus:ring-none"
          >
            Change Probabilities
          </button>
      </div>
        <Footer />
      </div>
    )
}

export default DecisionTree
