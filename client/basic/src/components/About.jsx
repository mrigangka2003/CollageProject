import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h3>Mrigangka Datta</h3>
        <div >
          <div className="dpAndPara" style={{ margin: "5px", padding: "5px", display: "flex" }}>
            <p style={{ margin: "5px", padding: "5px", display: "flex" }}>
              this project is made to get some concepts clear and to get good
              marks in an internal exam
            </p>
            <img
              src="https://pbs.twimg.com/profile_images/1767243951273394176/b9sLNkJR_400x400.jpg"
              alt=""
              width={150}
            />
          </div>
          <div style={{ margin: "5px", padding: "5px" }}>
            <Link
              style={{ margin: "5px", padding: "5px" }}
              to={"https://github.com/mrigangka2003"}
              target="_blank"
            >
              github
            </Link>
            <Link
              style={{ margin: "5px", padding: "5px" }}
              to={"https://twitter.com/mrigangkadatta"}
              target="_blank"
            >
              Twitter
            </Link>
            <Link
              style={{ margin: "5px", padding: "5px" }}
              to={"https://www.linkedin.com/in/mrigangka/"}
              target="_blank"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
