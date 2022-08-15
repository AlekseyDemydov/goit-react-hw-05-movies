const DetailsMovie = ({ data }) => {
  return (
    <div>
      <img src={data.img} alt={data.title} height="300" width="200" />
      <div>
        <h2>
          {data.title}
          <span>({data.year})</span>
        </h2>
        <p>
          User Score: <b>{data.score}%</b>{' '}
        </p>
        <h3>Overview</h3>
        <p>{data.overview}</p>
        <h3>Genres</h3>
        <p>{data.genres}</p>
      </div>
    </div>
  );
};
export default DetailsMovie;
