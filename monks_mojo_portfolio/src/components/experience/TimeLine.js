function TimeLine(props) {
  return (
    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
      <h3 className="text-xl font-semibold tracking-wide">
        {props.companyName}{" "}
      </h3>
      <time className="text-xs tracking-wide uppercase text-gray-200">
        {props.period}
      </time>
      <p className="mt-3">{props.description}</p>
    </div>
  );
}

export default TimeLine;
