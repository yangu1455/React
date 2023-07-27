import React from 'react'
import Product from "../components/Product";

export default function ProductPage(props) {
  const data = [
    {
      id: 1,
      name: "생어거스틴 새우 듬뿍 팟타이 밀키트",
      price: 16900,
      url: "https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=676/shop/data/goods/1653038314350l0.jpeg",
      alt: "생어거스틴 새우 듬뿍 팟타이 밀키트 이미지",
    },
    {
      id: 2,
      name: "고디바 펄 밀크 초콜릿",
      price: 11000,
      url: "https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=676/shop/data/goods/1574216464832l0.jpg",
      alt: "고디바 펄 밀크 초콜릿 이미지",
    },
    {
      id: 2,
      name: "고디바 펄 밀크 초콜릿",
      price: 11000,
      url: "https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=676/shop/data/goods/1574216464832l0.jpg",
      alt: "고디바 펄 밀크 초콜릿 이미지",
    },
    {
      id: 3,
      name: "서울만두 샤오롱바오 500g",
      price: 10500,
      url: "https://product-image.kurly.com/cdn-cgi/image/quality=85,width=676/product/image/14e8058c-7ded-4fbd-9353-aa7e2e938368.jpg",
      alt: "서울만두 샤오롱바오 500g 이미지",
    },
    {
      id: 4,
      name: "훕훕베이글 시그니처 베이글 12종(택1)",
      price: 3500,
      url: "https://product-image.kurly.com/cdn-cgi/image/quality=85,width=676/product/image/ed769efe-7f76-4abe-b4d3-9ac45d8f2f0b.jpg",
      alt: "훕훕베이글 시그니처 베이글 12종(택1) 이미지",
    },
  ]



  return (
    <div>
      {data.map((d) => 
        <Product
          key={d.id}
          name={d.name}
          price={d.price}
          url={d.url}
          alt={d.alt}
        />
      )}
    </div>
  )
}
