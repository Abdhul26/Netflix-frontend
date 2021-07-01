import "./listitem.scss";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { useState } from "react";
const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://youtu.be/04-R_ARsklg";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseDown={() => setIsHovered(false)}
    >
      <img
        src="https://images.pexels.com/photos/3381533/pexels-photo-3381533.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      {isHovered && (
        <>
          <iframe
            src="https://www.youtube.com/embed/04-R_ARsklg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            loop
          />
          <div className="iteminfo">
            <div className="icons">
              <PlayArrowIcon className="icon" />
              <FavoriteBorderOutlinedIcon className="icon" />
              <ThumbUpAltOutlinedIcon className="icon" />
              <ThumbDownOutlinedIcon className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>Duration:1 hours 20 min</span>
              <span>New</span>
              <span>Release:2020</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quo
              vel velit repudiandae veniam officiis fugiat quia, dolorem
              excepturi libero repellendus tempora atque. Cum nostrum
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
