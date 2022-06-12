import { NavLink } from "react-router-dom";

function FooterMsg() {
  return (
    <div className="max-w-md mx-auto mt-6 leading-relaxed text-center text-white">
      <p>The Website is created with lots of 💖 using react and tailwind</p>
      <p>The source code is available on my
        <NavLink to={""}>
          {" "}
          <span className="text-yellow-400">github</span>{" "}
        </NavLink>
        feel free to fork it.
      </p>
      <p>© 2022 @monks_mojo™. All Rights Reserved.</p>
    </div>
  );
}
export default FooterMsg;
