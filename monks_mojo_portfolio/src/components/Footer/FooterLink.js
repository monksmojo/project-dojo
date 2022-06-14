function FooterLink(props) {
  return (
    <li>
      <a
        href={props.linkTo}
        rel="noreferrer"
        className="text-white transition hover:text-yellow-400"
        target="_blank"
      >
        <span className="sr-only">{props.linkName}</span>

        <img src={props.icon} alt={props.linkName} />
      </a>
    </li>
  );
}

export default FooterLink;
