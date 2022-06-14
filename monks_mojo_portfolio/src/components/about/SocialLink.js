function SocialLink(props) {
  return (
    <li>
      <a
        className="block mx-2 transition-opacity rounded-full hover:opacity-90 focus:outline-none focus:opacity-75"
        href={props.socialLink}
        rel="noreferrer"
        target="_blank"
      >
        <span className="sr-only"> {props.socialName} </span>
        <img src={props.socialIcon} alt={props.socialName} />
      </a>
    </li>
  );
}

export default SocialLink;
