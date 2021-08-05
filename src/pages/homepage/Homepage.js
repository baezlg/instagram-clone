import Posts from "../../components/posts/Posts";
import Status from "../../components/status/Status";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="home">
      <div className="home__wrapper">
        <div className="home__left">
          <Status />
          <Posts />
        </div>
        <div className="home__right">
          <div className="user">
            <div className="user__img-wrapper">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="user__img"
              />
            </div>
            <p className="user__username">
              <span>janedoe</span>
              <span>Jane Doe</span>
            </p>
            <a href="#" className="user__switch-btn">
              Switch
            </a>
          </div>
          <div className="suggestion">
            <p className="suggestion__title">
              <span>Suggestions For You</span>
              <a href="#" className="suggestion__btn">
                See All
              </a>
            </p>
            <div className="suggestion__wrapper">
              <div className="suggestion__img-box">
                <img
                  src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="suggestion__img"
                />
              </div>
              <p className="suggestion__name">
                <a href="#">Christina</a>
                <span>New to instagram</span>
              </p>
              <a href="#" className="suggestion__btn--2">
                Follow
              </a>
            </div>
            <div className="suggestion__wrapper">
              <div className="suggestion__img-box">
                <img
                  src="https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="suggestion__img"
                />
              </div>
              <p className="suggestion__name">
                <a href="#">CynthiaMorgan</a>
                <span>Follows you</span>
              </p>
              <a href="#" className="suggestion__btn--2">
                Follow
              </a>
            </div>
            <div className="suggestion__wrapper">
              <div className="suggestion__img-box">
                <img
                  src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="suggestion__img"
                />
              </div>
              <p className="suggestion__name">
                <a href="#">Andretodd</a>
                <span>Followed by maria_dvalii + 2 more</span>
              </p>
              <a href="#" className="suggestion__btn--2">
                Follow
              </a>
            </div>
            <div className="suggestion__wrapper">
              <div className="suggestion__img-box">
                <img
                  src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="suggestion__img"
                />
              </div>
              <p className="suggestion__name">
                <a href="#">Sabrina</a>
                <span>Followed by john_doe + 4 more</span>
              </p>
              <a href="#" className="suggestion__btn--2">
                Follow
              </a>
            </div>
            <div className="suggestion__wrapper">
              <div className="suggestion__img-box">
                <img
                  src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="suggestion__img"
                />
              </div>
              <p className="suggestion__name">
                <a href="#">Mariafoxx</a>
                <span>Followed by pedro_lane + 3 more</span>
              </p>
              <a href="#" className="suggestion__btn--2">
                Follow
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
