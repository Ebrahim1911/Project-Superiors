import Header from "../../component/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import "./gallery.css";
function Gallery() {
  const gallaryLength = 12;
  const images = [];
  for (let i = 1; i <= gallaryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`));
  }
  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, omnis
        voluptas officia libero officiis a fugiat. Modi sequi atque commodi. Et,
        nisi
      </Header>
      <section className="gallery">
        <div className="container gallery-container">
          {images.map((img, index) => {
            return (
              <article key={index}>
                <img src={img} alt={`Gallery Image ${index + 1}`} />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Gallery;
