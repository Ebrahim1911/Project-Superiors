import Card from "../../UI/card";
function Trainer({ image, name, job, socials }) {
  return (
    <>
      <Card className="trainer">
        <div className="trainer-img">
          <img src={image} alt={name}></img>
        </div>
        <h3>{name}</h3>
        <p>{job}</p>
        <div className="trainer-socials">
          {socials.map(({ icon, link }, index) => {
            return (
              <a key={index} href={link} rel="noreffer nopener" target="_blank">
                {icon}
              </a>
            );
          })}
        </div>
      </Card>
    </>
  );
}

export default Trainer;
