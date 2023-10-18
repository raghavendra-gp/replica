import { Carousel } from "react-bootstrap";

const CarouselPage = () => {
  return (
    <Carousel
      style={{
        marginLeft: "10vh",
        marginRight: "10vh",
        marginTop: "13vh",
      }}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://plus.unsplash.com/premium_photo-1683133493443-0eee93bfe24f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="happy"
          style={{
            width: "100%",
            maxHeight: "84vh",
            borderRadius: "40px",
            objectFit: "fill", // Ensure the image covers the container
          }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://plus.unsplash.com/premium_photo-1683140424111-e5daaa960cfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="happy"
          style={{
            width: "100%",
            maxHeight: "84vh",
            borderRadius: "40px",
            objectFit: "fill", // Ensure the image covers the container
          }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://plus.unsplash.com/premium_photo-1682097792671-dd57e82e5f2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="happy"
          style={{
            width: "100%",
            maxHeight: "84vh",
            borderRadius: "40px",
            objectFit: "fill", // Ensure the image covers the container
          }}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselPage;
