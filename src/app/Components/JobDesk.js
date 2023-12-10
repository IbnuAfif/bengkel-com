import TeamCard from "./Team";

export default JobDesk = () => {
  const JobDescription = ["Pemilik", "Manajer", "Team Leader", "Ahli Kelistrikan", "Teknisi Senior", "Teknisi", "Mekanik", "Mekanik"];

  return console.log(JobDescription());

  {
    JobDescription.map((job, index) => {
      return <TeamCard key={index} tugas={job} />;
    });
  }
};
