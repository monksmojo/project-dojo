function SkillBadge(props) {
  return (
    <div className="flex flex-col items-center w-1/2 p-6  md:w-1/3 xl:w-1/4">
      <img src={props.badge} alt={props.badgeTxt} />
      <h1 className="font-bold">{props.badgeTxt}</h1>
    </div>
  );
}
export default SkillBadge;
