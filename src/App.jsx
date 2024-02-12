import { useState } from "react";

function App() {
  const [status, setStatus] = useState({
    check1: false,
    check2: false,
    check3: false,
    check4: false,
  });
  console.log(status);
  return (
    <>
      <h1>Hello sandy</h1>
      <div>
        <div>
          <input
            checked={
              status.check1 && status.check2 && status.check3 && status.check4
            }
            onChange={() =>
              setStatus({
                check1: !status.check1,
                check2: !status.check2,
                check3: !status.check3,
                check4: !status.check4,
              })
            }
            type="checkbox"
            name="select all"
            id="all"
          />
          <label htmlFor="select">Select all</label>
        </div>

        {/* checkboxs */}
        <div>
          <input
            onChange={() =>
              setStatus({
                ...status,
                check1: !status.check1,
              })
            }
            checked={status.check1}
            type="checkbox"
            name="check1"
            id="check1"
          />
          <label htmlFor="check1">CHECK 1</label>
        </div>
        <div>
          <input
            onChange={() =>
              setStatus({
                ...status,
                check2: !status.check2,
              })
            }
            checked={status.check2}
            type="checkbox"
            name="check2"
            id="check2"
          />
          <label htmlFor="check2">CHECK 2</label>
        </div>
        <div>
          <input
            onChange={() =>
              setStatus({
                ...status,
                check3: !status.check3,
              })
            }
            checked={status.check3}
            type="checkbox"
            name="check3"
            id="check3"
          />
          <label htmlFor="check3">CHECK 3</label>
        </div>
        <div>
          <input
            onChange={() =>
              setStatus({
                ...status,
                check4: !status.check4,
              })
            }
            checked={status.check4}
            type="checkbox"
            name="check4"
            id="check4"
          />
          <label htmlFor="check4">CHECK 4</label>
        </div>
      </div>
    </>
  );
}

export default App;
