import logo from "./logo.svg";
import "./App.css";
import FetchApi from "./components/FetchApi";
import HookCounter from "./components/HookCounter";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import Bind from "./components/Bind";
import Refs from "./Refs";
import Fragments from "./Fragments";
import ValidateProps from "./components/ValidateProps";
import Counter from "./components/Counter";
import Memo from "./components/Memo";
import HookTwo from "./components/HookTwo";
import HookThree from "./components/HookThree";
import HookFour from "./components/HookFour";
import EffectHook from "./components/EffectHook";
import EffectCounterHook from "./components/EffectCounterHook";
import Fetching from "./components/Fetching";
import HoverMessge from "./components/HoverMessge";
import UseEffectHook from "./components/UseEffectHook";
import UseStateHook from "./components/UseStateHook";
import ContextC from "./components/ContextC";
import React from "react";
import ReducerHook from "./components/ReducerHook";
import FetchReducer from "./components/FetchReducer";
import CallbackHook from "./components/CallbackHook";
import UseMemoHook from "./components/UseMemoHook";
import UseRefHook from "./components/UseRefHook";
import TimerRefhook from "./components/TimerRefhook";
import UseContextHook from "./components/UseContextHook";
export const UserContext = React.createContext();
export const UserChannel = React.createContext();

function App() {
  return (
    <div className="App">
      <UseContextHook />
      {/* <TimerRefhook /> */}
      {/* <TimerRefhook /> */}
      {/* <UseRefHook /> */}
      {/* <UseMemoHook prop1={5} prop2={4} /> */}
      {/* <CallbackHook /> */}
      {/* <FetchReducer /> */}
      {/* <ReducerHook /> */}
      {/* <UserContext.Provider value={"John"}>
        <UserChannel.Provider value={"Cena"}>
          <ContextC />
        </UserChannel.Provider>
      </UserContext.Provider> */}
      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      {/* <HoverMessge message="Click me!">Hover over me</HoverMessge> */}
      {/* <Fetching /> */}
      {/* <EffectCounterHook /> */}
      {/* <EffectHook /> */}
      {/* <HookFour /> */}
      {/* <HookThree /> */}
      {/* <HookTwo /> */}
      {/* <Memo /> */}
      {/* <Memo age="19" /> */}
      {/* <Counter /> */}
      {/* <ValidateProps /> */}
      {/* <Fragments /> */}
      {/* <Refs /> */}
      {/* <Bind /> */}
      {/* <ParentComp /> */}
      {/* <PureComp /> */}
      {/* <HookCounter /> */}
      {/* <FetchApi /> */}
      {/* <FetchApi title="React Dev" /> */}
    </div>
  );
}

export default App;
