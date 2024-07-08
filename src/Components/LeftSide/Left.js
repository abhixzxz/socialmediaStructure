import React, { useState } from "react";
import "../LeftSide/Left.css";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { FiTrendingUp, FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BsBookmark, BsChatDots } from "react-icons/bs";
import {
  RiFileListLine,
  RiNotification3Line,
  RiHeart2Line,
  RiUserFollowLine,
} from "react-icons/ri";
import { MdGroups } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoIosPhotos } from "react-icons/io";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import Profile from "../../assets/profile.jpg";

const Left = ({ profileImg, modelDetails }) => {
  const [btnActive, setBtnActive] = useState("#");
  const [logOutExit, setLogOutExit] = useState(false);

  return (
    <div className="L-features">
      <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
        <div
          onClick={() => setBtnActive("#")}
          id="L-box"
          className={btnActive === "#" ? "active" : ""}
        >
          <AiOutlineHome className="margin" />
          <span>Home</span>
        </div>
      </Link>

      <div
        id="L-box"
        onClick={() => setBtnActive("#explore")}
        className={btnActive === "#explore" ? "active" : ""}
      >
        <AiOutlineSearch className="margin" />
        <span>Explore</span>
      </div>

      <div
        id="L-box"
        onClick={() => setBtnActive("#notifications")}
        className={btnActive === "#notifications" ? "active" : ""}
      >
        <RiNotification3Line className="margin" />
        <span>Notifications</span>
      </div>

      <div
        id="L-box"
        onClick={() => setBtnActive("#messages")}
        className={btnActive === "#messages" ? "active" : ""}
      >
        <BsChatDots className="margin" />
        <span>Messages</span>
      </div>

      <div
        id="L-box"
        onClick={() => setBtnActive("#trending")}
        className={btnActive === "#trending" ? "active" : ""}
      >
        <h1 className="notifi">
          <FiTrendingUp className="margin" />
        </h1>
        <span>Trending</span>
      </div>

      <div
        id="L-box"
        onClick={() => setBtnActive("#followers")}
        className={btnActive === "#followers" ? "active" : ""}
      >
        <RiUserFollowLine className="margin" />
        <span>Followers</span>
      </div>

      <div
        id="L-box"
        onClick={() => setBtnActive("#following")}
        className={btnActive === "#following" ? "active" : ""}
      >
        <HiOutlineUserGroup className="margin" />
        <span>Following</span>
      </div>

      <div
        id="L-box"
        onClick={() => setBtnActive("#groups")}
        className={btnActive === "#groups" ? "active" : ""}
      >
        <MdGroups className="margin" />
        <span>Groups</span>
      </div>

      <div
        id="L-box"
        onClick={() => setBtnActive("#photos")}
        className={btnActive === "#photos" ? "active" : ""}
      >
        <IoIosPhotos className="margin" />
        <span>Photos</span>
      </div>

      <div
        id="L-box"
        onClick={() => setBtnActive("#lists")}
        className={btnActive === "#lists" ? "active" : ""}
      >
        <RiFileListLine className="margin" />
        <span>Lists</span>
      </div>

      <div
        id="L-box"
        onClick={() => setBtnActive("#saved")}
        className={btnActive === "#saved" ? "active" : ""}
      >
        <BsBookmark className="margin" />
        <span>Saved</span>
      </div>

      <div
        id="L-box"
        onClick={() => setBtnActive("#likes")}
        className={btnActive === "#likes" ? "active" : ""}
      >
        <RiHeart2Line className="margin" />
        <span>Likes</span>
      </div>

      <div
        id="L-box"
        onClick={() => setBtnActive("#settings")}
        className={btnActive === "#settings" ? "active" : ""}
      >
        <FiSettings className="margin" />
        <span>Settings</span>
      </div>

      <div className="left-user">
        <Link to="/profile" style={{ textDecoration: "none", color: "black" }}>
          <div className="user-name-userid">
            <img src={profileImg ? profileImg : Profile} alt="" />
            <div className="L-user">
              <h1>{modelDetails ? modelDetails.ModelName : "Abhi"}</h1>
              <span>
                {modelDetails ? modelDetails.ModelUserName : "@Abhi98"}
              </span>
            </div>
          </div>
        </Link>
        <MoreHorizIcon
          onClick={() => setLogOutExit(!logOutExit)}
          className="vert"
        />

        {logOutExit && (
          <div className="logOutExitContainer">
            <button>Add an existing account</button>
            <Link to="/" style={{ width: "100%" }}>
              <button>Log out @Abhi98</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Left;
