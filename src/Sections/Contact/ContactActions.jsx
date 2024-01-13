/* eslint-disable react/prop-types */
import React from 'react';

const ContactActions = ({ refToScroll, description, resetForm, sendEmail }) => {
  return (
    <div ref={refToScroll}>
      {description && (
        <div className="flex gap-2 mt-2">
          <button
            onClick={resetForm}
            className="btn !bg-white btn-sm capitalize"
          >
            Restart
          </button>
          <button
            onClick={sendEmail}
            className="btn !bg-blue-500 !text-white  btn-sm capitalize"
          >
            Send it!
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactActions;