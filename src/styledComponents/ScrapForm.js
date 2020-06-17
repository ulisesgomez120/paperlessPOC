import React from "react";
import styled from "styled-components";

const ScrapForm = () => {
  return (
    <React.Fragment>
      <h2>Scrap Log</h2>
      <form>
        <div>
          <h3>Type</h3>
          <input type="radio" id="A" name="type" value="A" checked />
          <label for="A">A - Cause Clear/Actionable</label>

          <input type="radio" id="B" name="type" value="B" />
          <label for="B">B - Cause Clear/Not Actionable</label>

          <input type="radio" id="C" name="type" value="C" />
          <label for="C">C - Cause Unclear</label>
        </div>
        <div>
          <h3>Spool #</h3>
          <input type="number" />
        </div>
        <div>
          <h3>Reason</h3>
          <input type="text" />
        </div>
        <div>
          <h3>Weight</h3>
          <input type="number" />
        </div>
        <div>
          <h3>Operator</h3>
          <input type="text" />
        </div>
      </form>
    </React.Fragment>
  );
};

export default ScrapForm;
