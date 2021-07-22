import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Slider() {
  return (
    <section className="relative mt-7 shadow-2xl max-w-screen-2xl mx-auto">
      <div />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            loading="lazy"
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/07003EE660ABB5B858A4F0F766C79EE7BE1ADE41E2C8FD4E8998DF9E04505A77/scale?width=1440&aspectRatio=3.91&format=jpeg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/46B428B48739ED520A3ED05C60E048ADA6FC0BCC2DB2B2F897092C466BF6F5FA/scale?width=1440&aspectRatio=3.91&format=jpeg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EE1A5A21FD503240A3D781CB05A17B528318E8429D879BCC42BFEBD644EF9C54/badging?width=1440&aspectRatio=3.91&format=jpeg&label=scrim391"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/07003EE660ABB5B858A4F0F766C79EE7BE1ADE41E2C8FD4E8998DF9E04505A77/scale?width=1440&aspectRatio=3.91&format=jpeg"
            alt=""
          />
        </div>
      </Carousel>
    </section>
  );
}

export default Slider;
