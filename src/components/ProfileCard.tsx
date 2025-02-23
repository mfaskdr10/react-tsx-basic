type ProfileCardProps = {
  name?: string;
  year: number;
  job?: string;
};

const ProfileCard = (props: ProfileCardProps) => {
  const { name = "Anonymous", year, job } = props;

  return (
    <>
      <div className="card">
        <p>Nama: {name}</p>
        <p>Birth Year: {year}</p>
        {job && <p>Job: {job}</p>}
      </div>
    </>
  );
};

export default ProfileCard;
