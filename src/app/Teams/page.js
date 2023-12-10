import TeamCard from "../Components/Team";

const Teams = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}`);
  const randomUser = await response.json();

  // console.log(randomUser);

  return (
    <div>
      <div className="py-10 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          {/* Text Start */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Meet Our Team</h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 lg:text-2xl ">
              This is a section of some simplfe filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated
            </p>
          </div>
          {/* Text End */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4 lg:gap-8">
            {randomUser.results.map((user) => {
              return <TeamCard key={user.login.uuid} firstName={user.name.first} lastName={user.name.last} imageProfile={user.picture.large} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
