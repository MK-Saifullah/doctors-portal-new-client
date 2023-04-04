import React from "react";

const ConfirmationModal = ({message, confirmation, closeModal, successAction}) => {
  return (
    <div style={{opacity:100}}>
      {/* The button to open modal */}
   

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-sm">
           {message}
          </h3>
          <p className="py-4">
            {confirmation}
          </p>
          <div className="modal-action">
            <label htmlFor="confirmation-modal" className="btn" onClick={successAction}>
             Confirm Delete!
            </label>
            <label htmlFor="confirmation-modal" className="btn btn-error" onClick={closeModal}>
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
