import { Button, Carousel } from "antd";
import styles from "@/styles/Home.module.css";
import { PlayCircleOutlined } from "@ant-design/icons";

const items = [
  {
    key: "1",
    title: "Choose Your Favorite Computer/Laptop",
    content:
      "We are constantly expanding our product range as well as improving our service quality. We offer the best selection of quality products that you can buy online or purchase from our outlets. Stay connected and stay tuned for new exciting products. Remember, we have the largest collection of IT products in Bangladesh. Lastly, it is our highest priority to create the best online shopping experience for every customer in Bangladesh. ",
  },
  {
    key: "2",
    title: "Choose Your Favorite Computer/Laptop",
    content:
      "We are constantly expanding our product range as well as improving our service quality. We offer the best selection of quality products that you can buy online or purchase from our outlets. Stay connected and stay tuned for new exciting products. Remember, we have the largest collection of IT products in Bangladesh. Lastly, it is our highest priority to create the best online shopping experience for every customer in Bangladesh.",
  },
  {
    key: "3",
    title: "Choose Your Favorite Computer/Laptop",
    content:
      "We are constantly expanding our product range as well as improving our service quality. We offer the best selection of quality products that you can buy online or purchase from our outlets. Stay connected and stay tuned for new exciting products. Remember, we have the largest collection of IT products in Bangladesh. Lastly, it is our highest priority to create the best online shopping experience for every customer in Bangladesh.",
  },
];

const TopBanner = () => {
  return (
    <div
      style={{
        paddingTop: "70px",
      }}
    >
      <Carousel style={{ padding: "0px" }} autoplay>
        {items.map((item) => {
          return (
            <div key={item.key} className={styles.heroBlock}>
              <div className={styles.bannerContent}>
                <div
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "30px",
                      fontWeight: "bold",
                      marginBottom: "20px",
                      lineHeight: "1.2",
                      color: "white",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: "white" }}>{item.content}</p>
                </div>
                <div className="btnHolder">
                  <Button
                    type="primary"
                    style={{ borderRadius: "0" }}
                    size="large"
                  >
                    Learn More
                  </Button>
                  <Button
                    size="large"
                    type="default"
                    style={{
                      backgroundColor: "white",
                      borderColor: "gray",
                      marginLeft: "10px",
                      borderRadius: "0",
                    }}
                    icon={<PlayCircleOutlined style={{ color: "grey" }} />}
                  >
                    Watch Demo
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default TopBanner;
