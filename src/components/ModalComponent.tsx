import React, { FC } from "react";
import Logo from "./Logo";

interface props {
  children: React.ReactNode;
  toggleModal?: () => void;
}

const ModalComponent: FC<props> = ({ children, toggleModal }) => {
  return (
    <div className="modal" onClick={toggleModal}>
      <div className="container-fluid help">
        <div className="row">
          <div className="center-align col s12">
            <div className="container">
              <Logo classNames="logo-md -fit" />
            </div>
          </div>
          <div className="center-align col s12">
            <div className="container">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
