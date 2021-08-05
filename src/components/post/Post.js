import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import TurnedInNotOutlinedIcon from "@material-ui/icons/TurnedInNotOutlined";
import "./Post.scss";

const Post = () => {
  return (
    <div className="post">
      <div className="post__top">
        <div className="post__userImg-box">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="post__userImg"
          />
        </div>
        <a href="#" className="post__username">
          janedoe
        </a>
        <MoreHorizIcon className="post__top-icon" />
      </div>
      <div className="post__center">
        <img
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="post__img"
        />
      </div>
      <div className="post__bottom">
        <div className="post__icons">
          <FavoriteBorderIcon className="post__icon" />
          <ModeCommentOutlinedIcon className="post__icon" />
          <SendOutlinedIcon className="post__icon" />
          <TurnedInNotOutlinedIcon className="post__icon" />
        </div>
        <span className="post__likes">20,322 likes</span>
        <p className="post__title">
          <a href="#">janedoe</a> Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quos repellendus suscipit vel non nesciunt molestias
          ea obcaecati possimus deserunt voluptates.
        </p>
        <div className="post__comment-box">
          <a href="#" className="post__comment-details">
            View all 2,539 comments
          </a>
          <p className="post__comment">
            <a href="#">xclusive</a> Lorem, ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
          <p className="post__comment">
            <a href="#">maria</a> Lorem, ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
        </div>
        <span className="post__time">23 hours ago</span>
      </div>
    </div>
  );
};

export default Post;
