import { useState } from "react";
import Logo from "./Logo";
import ModalComponent from "./ModalComponent";

const Help = () => {
  const [helpMenuOpen, setHelpMenu] = useState(false);
  return (
    <div>
      <button
        className="open-help"
        onClick={() => setHelpMenu((help) => !help)}
      >
        ?
      </button>
      {helpMenuOpen && (
        <ModalComponent toggleModal={() => setHelpMenu(false)}>
          <article>
            <header>
              <h3>How To Play</h3>
            </header>
            <p>
              To play the game is simple! Try to bloq out as many of the squares
              as you can more than your opponent before the time runs out!
            </p>
            <p>
              You can also unbloq your opponents squares by clicking/ double
              clicking on them! <strong>Beware!</strong> Your opponent can do
              the same! Happy playing!
            </p>
          </article>
        </ModalComponent>
      )}
    </div>
  );
};

export default Help;
