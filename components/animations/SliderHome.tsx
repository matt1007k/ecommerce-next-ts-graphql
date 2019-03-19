import React, { PureComponent } from "react";
import Slider from "react-animated-slider";

import { MdShoppingBasket } from "react-icons/md";

const content = [
  {
    title: "Vulputate Mollis Ultricies",
    price: "$300",
    discount: "$200",
    button: "Add to cart",
    image:
      "https://falabella.scene7.com/is/image/FalabellaPE/881331170_1?$producto308$&wid=472&hei=472",
    user: "Luan Gjokaj",
    userProfile: "https://i.imgur.com/JSW6mEk.png"
  },
  {
    title: "Tortor Dapibus Commodo",
    price: "$130",
    discount: "$90",
    button: "Add to cart",
    image:
      "https://falabella.scene7.com/is/image/FalabellaPE/881263644_1?$producto308$&wid=472&hei=472",
    user: "Erich Behrens",
    userProfile: "https://i.imgur.com/0Clfnu7.png"
  },
  {
    title: "Phasellus volutpat metus",
    price: "$200",
    discount: "$150",
    button: "Add to cart",
    image:
      "https://falabella.scene7.com/is/image/FalabellaPE/16472291_1?$producto308$&wid=472&hei=472",
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png"
  }
];

export class SliderHome extends PureComponent {
  render() {
    const options = {
      autoplay: 3000
    };
    return (
      <Slider {...options} className="slider-wrapper">
        {content.map((item, index) => (
          <div key={index} className="slider-content">
            <div className="inner">
              <h1>{item.title}</h1>
              <p>
                <span>{item.price}</span>
                <span>{item.discount}</span>
              </p>
              <button className="btn btn-outline-primary">
                <MdShoppingBasket size={25} /> {item.button}
              </button>
            </div>
            <div className="img">
              <img src={item.image} alt={item.title} />
            </div>
            <section>
              <img src={item.userProfile} alt={item.user} />
              <span>
                Posted by <strong>{item.user}</strong>
              </span>
            </section>
          </div>
        ))}
      </Slider>
    );
  }
}

export default SliderHome;
