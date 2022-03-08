import "./styles.css";
import ToggleComponent from "./customhooks/1-useToggle/ToggleComponent";
import UseUpdateComp from "./customhooks/4-useUpdatComponent/useUpdateComp";
import ArrayComp from "./customhooks/5-useArray/ArrayComponent";
import PrevValComp from "./customhooks/6-usePrevious/PrevValComp";
import StorageComponent from "./customhooks/7-useStorage/StorageComponent";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ToggleComponent />
      <UseUpdateComp />
      <ArrayComp />
      <PrevValComp />
      <StorageComponent />
    </div>
  );
}
