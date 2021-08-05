import "./Topbar.scss";
import HomeIcon from "@material-ui/icons/Home";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import CancelIcon from "@material-ui/icons/Cancel";

const topbar = () => {
  return (
    <div className="topbar">
      {/* <div className="topbar__dropdown">
        <span className="topbar__dropdown-title">Recent</span>
        <span className="topbar__dropdown-info">No recent searches</span>
      </div> */}
      <div className="topbar__wrapper">
        <div className="topbar__left">
          <img
            src="img/logo.png"
            alt="instagram logo"
            className="topbar__logo"
          />
        </div>
        <div className="topbar__center">
          <input
            type="text"
            className="search"
            placeholder="&#x1f50d;
 Search"
          />
          <CancelIcon className="search__icon" />
        </div>
        <div className="topbar__right">
          <HomeIcon className="topbar__icon" />
          <SendOutlinedIcon className="topbar__icon" />
          <ExploreOutlinedIcon className="topbar__icon" />
          <FavoriteBorderOutlinedIcon className="topbar__icon" />
          <div className="topbar__profile-box">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="profile"
              className="topbar__profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default topbar;
