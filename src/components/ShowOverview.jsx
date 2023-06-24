function ShowOverview({ program }) {
  return (
    <div id="overview">
      <div className="flex items-baseline justify-between pt-10">
        <h3 className="pl-4 text-2xl font-bold text-light">
          Dein Workout heute
        </h3>
        <label className="pr-4 text-left text-xs font-normal text-light">
          Trainingsplan
        </label>
      </div>
      <a href={`/program-details/${programId}`} className="rounded-3xl m-5 h-56 flex-col bg-medium px-4 pb-8 pt-24 text-left">
        <h3 className="text-2xl font-bold text-light">Tag 2</h3>
        <h2 className="text-3xl font-bold text-light">{program.name}</h2>
        <div className="h-56">
          <label className="text-xs font-normal text-light">26 Min.</label>
          <label className="text-xs font-normal text-light"> &middot; </label>
          <label className="text-xs font-normal text-light">
            Beweglichkeit
          </label>
        </div>
      </a>
    </div>
  );
}

export default ShowOverview;
