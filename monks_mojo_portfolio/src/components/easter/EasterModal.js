import EasterBody from "./EasterBody";
import EasterFooter from "./EasterFooter";
import EasterHeader from "./EasterHeader";
import { hideEaster, showEaster } from "../../Styled";

function EasterModal(props) {
  return (
    <div id="large-modal" className={props.showModal ? showEaster : hideEaster}>
      <div className="flex justify-center relative p-4 w-full h-full md:h-auto">
        <div className="relative rounded-lg shadow bg-gray-900 border-8 border-white">
          <EasterHeader setShow={() => props.setShowModal(false)} />
          <EasterBody />
          <EasterFooter />
        </div>
      </div>
    </div>
  );
}

export default EasterModal;
