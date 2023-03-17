import React from 'react'
import { toast } from 'react-hot-toast';
import Img1 from '../assets/img1.jpg';
import Img2 from '../assets/img2.jpg';
import Img3 from '../assets/img3.jpg';
import Img4 from '../assets/img4.jpg';
import Img5 from '../assets/img5.jpg';
import Img6 from '../assets/img6.jpg';
import Img7 from '../assets/img7.jpg';
import Img8 from '../assets/img8.jpg';
import Img9 from '../assets/img9.jpg';
import Img10 from '../assets/img10.jpg';
import Img11 from '../assets/img11.jpg';
import Img12 from '../assets/img12.jpg';
import Img13 from '../assets/img13.jpg';
import Img14 from '../assets/img14.jpg';
import Img15 from '../assets/img15.jpg';
import { useDispatch } from "react-redux";


const Home = () => {

  const productList = [{
    name: 'Dell Inspiron 15 FHD Touchscreen Laptop',
    price: 599,
    imgSrc: Img2,
    id: 'abcdasajsasa'
  },

  {
    name: 'Samsung Galaxy F22 (Denim Blue, 4GB RAM',
    price: 399,
    imgSrc: Img1,
    id: 'sbasjdsjd'
  },
  {
    name: 'Fitbit Versa fitness Smartwatch',
    price: 199,
    imgSrc: Img3,
    id: 'sbasjdsjdd'
  }

    ,
  {
    name: 'PlayStation 5 Digital Edition',
    price: 399,
    imgSrc: Img4,
    id: 'sbasjdsjdda'
  },
  {
    name: 'Adidas Originals Men Sneaker ',
    price: 49,
    imgSrc: Img5,
    id: 'sbasjdsjddb'
  },
  {
    name: 'Lenovo IdeaCentre AIO 3-2022 Desktop ',
    price: 599,
    imgSrc: Img6,
    id: 'sbasjdsjddc'
  },
  {
    name: 'Yesmotor Motorcycle Half Helmet Retro',
    price: 66.99,
    imgSrc: Img7,
    id: 'sbasjdsjdd'
  },
  {
    name: 'URBANFIND Men Fit Lightweight Jacket',
    price: 33.99,
    imgSrc: Img8,
    id: 'sbasjdsjddc'
  },
  {
    name: 'COOFANDY Men s Formal Fashion Suit',
    price: 38.97,
    imgSrc: Img9,
    id: 'sbasjdsjddd'
  },
  {
    name: 'iPhone 13 Pro Max, 256GB, Sierra Blue',
    price: 1399,
    imgSrc: Img10,
    id: 'sbasjdsjdde'
  },
  {
    name: 'PROCUS-ONE VR Headset | VR Box 3D |',
    price: 40,
    imgSrc: Img11,
    id: 'sbasjdsjdf'
  },
  {
    name: 'Rich Dad Poor Dad Book',
    price: 7.99,
    imgSrc: Img12,
    id: 'sbasjdsjdg'
  },
  {
    name: 'DJI Phantom 4 PRO Professional Drone',
    price: 1400,
    imgSrc: Img13,
    id: 'sbasjdsjdh'
  },
  {
    name: 'DJI OM 4 SE - 3-Axis Smartphone Gimbal',
    price: 99,
    imgSrc: Img14,
    id: 'sbasjdsjdi'
  },
  {
    name: "Under Armour Men's Blitzing 3.0 Cap",
    price: 17.99,
    imgSrc: Img15,
    id: 'sbasjdsjdj'
  }

  ]

  const dispatch = useDispatch();

  const addToCartHandle = (Option) => {
    dispatch({ type: 'addToCart', payload: Option });
    dispatch({ type: 'calculateItems' })
    toast.success("Successfully Added")
  }


  return (
    <div className="home">

      {
        productList.map((i) => (
          <ProductCard
            key={i.id}
            id={i.id}
            imgSrc={i.imgSrc}
            name={i.name}
            price={i.price}
            handle={addToCartHandle}

          />
        ))
      }

    </div>
  )
}

const ProductCard = ({ id, name, price, imgSrc, handle }) => (
  <div className="productcard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => { handle({ name, price, id, handle, quantity: 1, imgSrc }) }}>Add Cart</button>
  </div>
)

export default Home;
