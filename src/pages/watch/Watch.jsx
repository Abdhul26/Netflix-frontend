import "./watch.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackIcon />
        Home
      </div>
      <iframe
        autoPlay={true}
        progress
        control
        src="https://www.youtube.com/embed/04-R_ARsklg?autoplay=1&mute=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        loop
      />
    </div>
  );
};

export default Watch;
