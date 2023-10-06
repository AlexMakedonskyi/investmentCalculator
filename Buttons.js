import React from "react";

function Buttons(props) {
	const resetData = (event) => {
		event.preventDefault();
		props.clearInputsHandler();
	}

	const subMitData = (event) => {
		event.preventDefault();
		props.submitForm();
		props.clearInputsHandler();
	}

  return (
    <div>
      <button type="reset" className="buttonAlt" onClick={resetData}>
        Reset
      </button>
      <button type="submit" className="button" onClick={subMitData}>
        Calculate
      </button>
    </div>
  );
}

export default Buttons;
