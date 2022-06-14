function NavIcons(props) {
  return (
    <li>
      <a
        href={props.externalLink}
        target="_blank"
        rel="noreferrer"
        className="block py-2 px-4 text-sm hover:bg-gray-600 text-gray-200 hover:text-white"
      >
        <span className="mr-2">{props.linkName}</span>
        {props.children}
      </a>
    </li>
  );
}

export default NavIcons;
