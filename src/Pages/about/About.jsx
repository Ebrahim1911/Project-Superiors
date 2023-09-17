import "./about.css";
import Header from "../../component/Header";
import HeaderIamge from "../../images/header_bg_1.jpg";
import storyImage from "../../images/about1.jpg";
import visionImage from "../../images/about2.jpg";
function about() {
  return (
    <>
      <Header title="About Us" image={HeaderIamge}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio officiis
        optio quam error facere aperiam voluptatem dolorem vitae in
        consequuntur? Quo laborum quas in harum atque mollitia quam, natus
        quasi.
      </Header>
      <section className="about-story">
        <div className="container about-story-container">
          <div className="about-section-image">
            <img src={storyImage} alt="Our Story Image" />
          </div>
          <div className="about-section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              animi odit provident ea, ad error inventore ipsam assumenda
              voluptate voluptates ratione pariatur excepturi? Porro enim
              dolorem neque? Mollitia, dolores exercitationem.
            </p>
            <p>
              orem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              animi odit provident ea, ad error inventore ipsam assumenda
              voluptate
            </p>
            <p>
              <p>
                orem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                animi odit provident ea, ad error inventore ipsam assumenda
                voluptate
              </p>
            </p>
          </div>
        </div>
      </section>
      <section className="about-vision">
        <div className="container about-vision-container">
          <div className="about-section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              animi odit provident ea, ad error inventore ipsam assumenda
              voluptate voluptates ratione pariatur excepturi? Porro enim
              dolorem neque? Mollitia, dolores exercitationem.
            </p>
            <p>
              orem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              animi odit provident ea, ad error inventore ipsam assumenda
              voluptate
            </p>
            <p>
              <p>
                orem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                animi odit provident ea, ad error inventore ipsam assumenda
                voluptate
              </p>
            </p>
          </div>
          <div className="about-section-image">
            <img src={visionImage} alt="Our vision Image" />
          </div>
        </div>
      </section>
      <section className="about-mission">
        <div className="container about-mission-container">
          <div className="about-section-image">
            <img src={storyImage} alt="Our Story Image" />
          </div>
          <div className="about-section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              animi odit provident ea, ad error inventore ipsam assumenda
              voluptate voluptates ratione pariatur excepturi? Porro enim
              dolorem neque? Mollitia, dolores exercitationem.
            </p>
            <p>
              orem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              animi odit provident ea, ad error inventore ipsam assumenda
              voluptate
            </p>
            <p>
              <p>
                orem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                animi odit provident ea, ad error inventore ipsam assumenda
                voluptate
              </p>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default about;
