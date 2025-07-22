import React, { createContext, useContext, useState } from 'react';

const ConfirmationContext = createContext();

export const useConfirmation = () => useContext(ConfirmationContext);

export const ConfirmationProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [onConfirm, setOnConfirm] = useState(() => () => {});
  const [onCancel, setOnCancel] = useState(() => () => {});

  const ask = ({ msg, onConfirmAction, onCancelAction }) => {
    setMessage(msg);
    setOnConfirm(() => onConfirmAction || (() => {}));
    setOnCancel(() => onCancelAction || (() => {}));
    setIsOpen(true);
  };

  const confirm = () => {
    setIsOpen(false);
    onConfirm();
  };

  const cancel = () => {
    setIsOpen(false);
    onCancel();
  };

  return (
    <ConfirmationContext.Provider value={{ ask }}>
      {children}
      {isOpen && (
        <div className="confirmation-modal">
          <p>{message}</p>
          <button onClick={confirm}>Yes</button>
          <button onClick={cancel}>No</button>
        </div>
      )}
    </ConfirmationContext.Provider>
  );
};
