import "./featured.scss";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

const featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="catageory">
          <span>{type === "movie" ? "movies" : "series"}</span>
          <select name="genre" id="genre">
            <option>genre</option>
            <option value="action">action</option>
            <option value="drama">drama</option>
            <option value="romance">romance</option>
            <option value="triller">triller</option>
          </select>
        </div>
      )}
      <img
        src="https://images.pexels.com/photos/1488315/pexels-photo-1488315.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="info">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqHtDwZArGrFyDkyY2mfADF-0XSCwYw-vdcg&usqp=CAU"
          alt=""
        />

        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          repellendus maxime mollitia labore unde minima eaque harum assumenda
          amet voluptates porro quisquam perspiciatis nobis, eligendi, dicta,
          corporis dolorem sed at?
        </div>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon />
            <span>Play Video</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            <span>Details</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default featured;
