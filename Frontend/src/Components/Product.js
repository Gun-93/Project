//here all products are imported by link address
const products = [
  //all
  { id: 1, name: "Denim Jacket", category: "Jackets", price: 1200, image: "https://media.istockphoto.com/photos/denim-jacket-with-path-picture-id475570172?k=6&m=475570172&s=612x612&w=0&h=Ws0rOv8zv7IMCu6hyxtsp3m5nR40zpRKAuoHks99R3U=" },
  { id: 2, name: "Slim Fit Pants", category: "Pants", price: 800, image: "https://tse1.mm.bing.net/th/id/OIP.MUtvXF6Yr-21uW9IwMcf9wAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 3, name: "Casual Shirt", category: "Shirts", price: 600, image: "https://i.pinimg.com/originals/30/ae/2e/30ae2e389d02b9e6babe870f4ebf3dfd.jpg" },
  { id: 4, name: "Hoodie", category: "Hoodies", price: 900, image: "https://static.vecteezy.com/system/resources/previews/028/248/129/non_2x/design-mockup-clothes-realistic-3d-rendering-of-blank-hoodies-ai-generated-photo.jpg" },
  { id: 5, name: "Leather Jacket", category: "Jackets", price: 2500, image: "https://images.only.com/15233179/3650138/001/only-leatherbikerjacket-black.jpg?v=0a36b4e8d31b1a3e09284d8fd5dc95f6&width=1024&quality=90" },
  { id: 6, name: "Formal Pants", category: "Pants", price: 1100, image: "https://rukminim2.flixcart.com/image/300/300/xif0q/trouser/b/a/3/xl-rr-women-black-t-pant-r-ridachy-original-imah2ssemhfzj2xs.jpeg?q=90" },
  { id: 7, name: "Checkered Shirt", category: "Shirts", price: 700, image: "https://tse1.explicit.bing.net/th/id/OIP.SHVpQ4NjpN-jBP9M4AhRhAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 8, name: "Zipper Hoodie", category: "Hoodies", price: 950, image: "https://marineparentsinc.com/store/images/pink-hoodie-size.jpg" },
  { id: 9, name: "Bomber Jacket", category: "Jackets", price: 1800, image: "https://th.bing.com/th/id/R.382d9e3bfdeea6f1324563646e2bd1a5?rik=MZumf09N9AepwQ&riu=http%3a%2f%2fwww.onlytheblind.de%2fcdn%2fshop%2fproducts%2f9_128ee0fb-9082-4b17-8b20-b01a68508bbe.png%3fv%3d1664201722%26width%3d2048&ehk=OJ%2fihwl2ZuyKoEwLhseBbIrKBSK9KXTFw6%2f8yRn27qc%3d&risl=&pid=ImgRaw&r=0" },
  { id: 10, name: "Cargo Pants", category: "Pants", price: 950, image: "https://tse1.mm.bing.net/th/id/OIP.F2rE7dWLDd9eEuSUvawaAgHaKT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 11, name: "Linen Shirt", category: "Shirts", price: 850, image: "https://bananarepublic.gap.com/webcontent/0052/947/975/cn52947975.jpg" },
  { id: 12, name: "Pullover Hoodie", category: "Hoodies", price: 1000, image: "https://store.irationmusic.com/cdn/shop/files/NeonHoodie.png?v=1693349535" },
  { id: 13, name: "Winter Jacket", category: "Jackets", price: 3000, image: "https://i5.walmartimages.com/asr/615808ac-253f-44cd-a69e-8d8d9fd47e91.27de1643230b368f4b426a731eb1e3b3.jpeg" },
  { id: 14, name: "Jeans", category: "Pants", price: 1200, image: "https://th.bing.com/th/id/OIP.7GLcyNzmDQdssdINFlwanAHaJ3?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 15, name: "Polo Shirt", category: "Shirts", price: 650, image: "https://tse3.mm.bing.net/th/id/OIP.2j9z-YcSSD4gtYy_llQrNgHaHa?r=0&w=1000&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 16, name: "Oversized Hoodie", category: "Hoodies", price: 1300, image: "https://tse2.mm.bing.net/th/id/OIP.ZGiDFd7bimsvbyzx7JL0xgHaJQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
  
  //shirts
  { id: 17, name: "Blazer Jacket", category: "Jackets", price: 2200, image: "https://i5.walmartimages.com/seo/Bwdbhd-Mens-Blazers-And-Sport-Coats-Mens-Blazer-Coat-Men-s-Sport-Coats-and-Blazers-Linen-Suit-Jacket-Casual-Blazer-for-Men-One-Button-Black-M_ee3e4b7e-9337-46f8-ae14-ae385e3bb027.8dd27c0a927f6f6ed9ac3005276741dc.jpeg" },
  { id: 18, name: "Formal White Shirt", category: "Shirts", price: 700, image: "https://tse3.mm.bing.net/th/id/OIP.aONc3bwnlC4Eu0C0IE-fZAHaJ4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 19, name: "Checked Shirt", category: "Shirts", price: 650, image: "https://tse1.mm.bing.net/th/id/OIP.68db4e4oIkGXJCCh9V6tywHaJc?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 20, name: "Blue Denim Shirt", category: "Shirts", price: 800, image: "https://tse3.mm.bing.net/th/id/OIP.Nl6PKYN4vOIv_3RJfFTmBQHaJS?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 21, name: "Printed Shirt", category: "Shirts", price: 900, image: "https://m.media-amazon.com/images/I/81ELtAf9uKL._UL1500_.jpg" },
  { id: 22, name: "Black Slim Shirt", category: "Shirts", price: 750, image: "https://images.bewakoof.com/original/men-s-black-slim-fit-shirt-549089-1666101006-1.jpg" },
  { id: 23, name: "Casual Polo Shirt", category: "Shirts", price: 850, image: "https://tse4.mm.bing.net/th/id/OIP.WR6QCnitmhjDqNL7NgsJ1QHaJo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 24, name: "Office Wear Shirt", category: "Shirts", price: 950, image: "https://tse1.mm.bing.net/th/id/OIP.WgQNH9gBSW5WmioLaqtg0AHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 25, name: "Party Wear Shirt", category: "Shirts", price: 1100, image: "https://5.imimg.com/data5/ZY/BU/RG/SELLER-99650374/partywear-shirt-500x500.jpg" },
  { id: 26, name: "Linen Summer Shirt", category: "Shirts", price: 1200, image: "https://tse3.mm.bing.net/th/id/OIP.hJd_bbumeHwL90Tzz9XK1QAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 27, name: "Striped Shirt", category: "Shirts", price: 650, image: "https://tse3.mm.bing.net/th/id/OIP.dfYn2tIGR9B5Zt2B_188eAHaJ4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 28, name: "Striped Shirt", category: "Shirts", price: 650, image: "https://images.hellomagazine.com/horizon/original_aspect_ratio/7846ab2c3249-boden-striped-shirt.jpg" },
  
  //jackets
  { id: 29, name: "Winter Puffer Jacket", category: "Jackets", price: 3000, image: "https://tse3.mm.bing.net/th/id/OIP.AOXiRwgb7OGrEaJUh_ES7wHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 30, name: "Bomber Jacket", category: "Jackets", price: 2200, image: "https://i5.walmartimages.com/seo/Men-s-Heavyweight-MA-1-Bomber-Flight-Jacket-S-5XL_1e8bd1a3-02db-42bd-b614-ad5cb6b97c50.1a543f2ef6f8ee27422a435c32ca7ddd.jpeg" },
  { id: 31, name: "Varsity Jacket", category: "Jackets", price: 1800, image: "https://tse4.mm.bing.net/th/id/OIP.rPd9X2MEaI5m-KKO_KGfBgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 32, name: "Trench Coat", category: "Jackets", price: 3500, image: "https://cdnd.lystit.com/photos/2012/06/01/burberry-mercury-midlength-heritage-cotton-trench-coat-product-1-3824627-326438071.jpeg" },
  { id: 33, name: "Suede Jacket", category: "Jackets", price: 2700, image: "https://tse1.mm.bing.net/th/id/OIP.LEvHCi9CSucV_yYh6_hIEAHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 34, name: "Quilted Jacket", category: "Jackets", price: 2600, image: "https://tse1.mm.bing.net/th/id/OIP.4CEvZJs-hrfWHxWT3_G-PQHaJT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 35, name: "Denim Black Jacket", category: "Jackets", price: 2000, image: "https://cdn-img.prettylittlething.com/e/9/2/5/e92550098ca3355eaf37304ad23d6234aae78dc6_clx0897_1.jpg" },
  
  //pants
  { id: 36, name: "Casual Chinos", category: "Pants", price: 1000, image: "https://tse4.mm.bing.net/th/id/OIP.4havmjy_zM6OYWOEn-2tXQHaKu?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 37, name: "Cargo Pants", category: "Pants", price: 1200, image: "https://i5.walmartimages.com/asr/d3e4547a-9246-472c-b7c1-16db8f376a9a_1.223bdef67663b2e53a49654c46f4c142.jpeg" },
  { id: 38, name: "Jogger Pants", category: "Pants", price: 900, image: "https://th.bing.com/th/id/R.2f9ffc78952c5fd9ee164f39da867f39?rik=n0%2bSSydhmbMSYQ&riu=http%3a%2f%2fwww.blankstyle.com%2ffiles%2fimagecache%2fproduct_full%2fm7620_1.jpg&ehk=8NJTP9HdPnoMlLs3qsoi5YwtgCU8mGhX4BWKSPt1gd0%3d&risl=&pid=ImgRaw&r=0" },
  { id: 39, name: "Jeans", category: "Pants", price: 1300, image: "https://www.fullbeauty.com/on/demandware.static/-/Sites-masterCatalog_Roamans/default/dw69d4ca3a/images/hi-res/0549_08475_mc_5350.jpg" },
  { id: 40, name: "Khaki Pants", category: "Pants", price: 1100, image: "https://robbreport.com/wp-content/uploads/2023/06/RR_Khakis_RL.jpg" },
  { id: 41, name: "Track Pants", category: "Pants", price: 800, image: "https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/21532550/2023/4/1/4a78f20b-655e-4b71-bf8b-6f363b0db0871680323000196-Puma-Men-Track-Pants-4881680322999196-1.jpg" },
  { id: 42, name: "Linen Pants", category: "Pants", price: 1400, image: "https://tse1.mm.bing.net/th/id/OIP.wxrsr0uUFPyuFvAdKdDgnAHaLG?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 43, name: "Jeans", category: "Pants", price: 1300, image: "https://i5.walmartimages.com/asr/12d3ee0e-5066-4d26-a98d-b587fb756cc7.4f8b3950887df04c9ef5646f96017260.jpeg" },

  //Hoodies
  { id: 44, name: "Zip-Up Hoodie", category: "Hoodies", price: 1100, image: "https://i.pinimg.com/originals/80/74/66/807466c355e61866403d38735c84f157.jpg" },
  { id: 45, name: "Pullover Hoodie", category: "Hoodies", price: 1000, image: "https://th.bing.com/th/id/OIP.t3-TnCa8av4wkvBtePQB9gHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 46, name: "Graphic Hoodie", category: "Hoodies", price: 1200, image: "https://tse4.mm.bing.net/th/id/OIP.42tfVDZziUVb3Qc1Io2KHQHaKW?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 47, name: "Oversized Hoodie", category: "Hoodies", price: 1300, image: "https://tse1.explicit.bing.net/th/id/OIP.MG0vH-eGLw5x_5PXmUX9jAHaJ4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 48, name: "Sleeveless Hoodie", category: "Hoodies", price: 800, image: "https://tse1.mm.bing.net/th/id/OIP.EorYwnLcxCC1XqWz5bwqcwHaJ2?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 49, name: "Sports Hoodie", category: "Hoodies", price: 1400, image: "https://cdn.fourthwall.com/offer/sh_a770864c-ac52-45bc-9e66-4314ef3ef294/fb23ba5a-a876-4dbd-9529-65b161f4d453.jpeg" },
  { id: 50, name: "Fleece Hoodie", category: "Hoodies", price: 1500, image: "https://images-na.ssl-images-amazon.com/images/I/71eAaz3svYL._AC_UL1500_.jpg" },
  { id: 47, name: "Oversized Hoodie", category: "Hoodies", price: 1300, image: "https://media.boohoo.com/i/boohoo/gzz28713_black_xl/womens-black-warped-back-print-oversized-hoodie/?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit" },

];
export default products;


