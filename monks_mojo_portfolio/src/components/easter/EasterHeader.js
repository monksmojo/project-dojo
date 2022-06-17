function EasterHeader(props) {
  return (
    <div className="flex justify-between items-center p-5 rounded-t border-b border-gray-600">
      <h3 className="text-xl font-bold bg-violet-400 rounded-lg p-2 text-black">
        Om Tat Sat
      </h3>
      <button
        type="button"
        className="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
        data-modal-toggle="large-modal"
        onClick={props.setShow}
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default EasterHeader;
