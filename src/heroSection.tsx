import { useState } from "react";

import {
  Product1,
  Product2,
  Product3,
  Product4,
  Product1Thumb,
  Product2Thumb,
  Product3Thumb,
  Product4Thumb,
  MinusIcon,
  PlusIcon,
  CartIcon,
  NextIcon,
  PreviousIcon,
  CloseIcon,
} from "./assets";

type ImageItem = {
  image: string;
  thumbnail: string;
};

const products: ImageItem[] = [
  { image: Product1, thumbnail: Product1Thumb },
  { image: Product2, thumbnail: Product2Thumb },
  { image: Product3, thumbnail: Product3Thumb },
  { image: Product4, thumbnail: Product4Thumb },
];

export default function Hero({ onAddToCart }: { onAddToCart: Function }) {
  const [selectedPicture, setSelectedPicture] = useState(products[0].image);
  const [count, setCount] = useState(0);
  const [popupOpen, setPopupOpen] = useState(false);

  const currentIndex = products.findIndex((p) => p.image === selectedPicture);

  const handleIncrease = () => setCount((prev) => prev + 1);
  const handleDecrease = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  const handleAddToCart = () => {
    if (count > 0) {
      onAddToCart({
        name: "Fall Limited Edition Sneakers",
        price: 125.0,
        quantity: count,
        image: products[0].thumbnail,
      });
    }
  };

  const goNext = () => {
    const nextIndex = (currentIndex + 1) % products.length;
    setSelectedPicture(products[nextIndex].image);
  };

  const goPrevious = () => {
    const prevIndex = (currentIndex - 1 + products.length) % products.length;
    setSelectedPicture(products[prevIndex].image);
  };

  return (
    <>
      <div className="flex height-small-screen flex-col md:flex-row pt-large-screen justify-center md:gap-[120px] p-4 ">
        {/* LEFT SIDE - IMAGES */}
        <div className="flex flex-col w-full  md:max-w-[400px] items-center">
          {/* Main Image */}
          {/* Main Image with arrows for small screens */}
          <div className="w-full relative flex justify-center">
            <img
              className="w-full h-[380px] sm:h-[330px] lg:rounded-[12px] object-cover cursor-pointer"
              src={selectedPicture}
              alt="Product-image"
              onClick={() => setPopupOpen(true)}
            />

            {/* Previous Arrow */}
            <div
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer sm:hidden"
              onClick={goPrevious}
            >
              <img src={PreviousIcon} alt="Previous" className="w-3 h-3" />
            </div>

            {/* Next Arrow */}
            <div
              className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer sm:hidden"
              onClick={goNext}
            >
              <img src={NextIcon} alt="Next" className="w-3 h-3" />
            </div>
          </div>

          {/* Thumbnails */}
          <div className="hidden md:flex marg-top justify-center gap-4 mt-4 w-full overflow-x-auto">
            {products.map((product, index) => (
              <div
                key={index}
                onClick={() => setSelectedPicture(product.image)}
                className={`relative w-16 h-16 rounded-[8px] cursor-pointer overflow-hidden border-2 transition flex-shrink-0 ${
                  selectedPicture === product.image
                    ? "border-orange-500"
                    : "border-transparent"
                }`}
              >
                <img
                  src={product.thumbnail}
                  alt={`Thumbnail ${index}`}
                  className="w-full h-full object-cover"
                />
                {selectedPicture === product.image && (
                  <div className="absolute inset-0 bg-white/80 rounded-[8px]"></div>
                )}
                {selectedPicture !== product.image && (
                  <div className="absolute inset-0 rounded-[8px] hover:bg-white/70 transition"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - DETAILS */}
        <div className="w-full padd-all md:w-[380px] flex flex-col justify-center">
          <p className="text-[10px] mt-small-screen text-gray-500 font-bold mar-top">
            SNEAKER COMPANY
          </p>
          <h1 className="font-bold mt-small-screen text-3xl marg-top md:text-4xl mt-2 text-[#1d2025ff]">
            Fall Limited Edition Sneakers
          </h1>
          <p className="text-[14px] mt-small-screen mar-top text-gray-500 md:w-[400px] font-medium">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>

          {/* Price Row */}
          <div className="flex justify-between mt-small-screen items-center mt-4 marg-top">
            <div className="flex gap-4 items-center">
              <p className="text-[20px] font-bold text-[#1d2025ff]">$125.00</p>
              <div className="bg-[#1d2025ff] w-[38px] flex justify-center items-center rounded-[4px]">
                <p className="text-[12px] text-white font-bold">50%</p>
              </div>
            </div>
            <p className="text-[12px] text-gray-500 font-bold line-through">
              $250.00
            </p>
          </div>

          {/* Counter + Cart */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full">
            {/* Quantity Selector */}
            <div className="flex items-center mg-smal-screen padd-top-small-screen justify-between bg-gray-100 rounded-[10px] w-full sm:w-[140px] px-4 py-2">
              <img
                src={MinusIcon}
                alt="minus-icon"
                onClick={handleDecrease}
                className="cursor-pointer"
              />
              <p className="text-center font-bold text-xs">{count}</p>
              <img
                src={PlusIcon}
                alt="plus-icon"
                onClick={handleIncrease}
                className="cursor-pointer"
              />
            </div>

            {/* Add to Cart Button */}
            <div
              onClick={handleAddToCart}
              className="bg-orange-500 hover:bg-[#ff9e54] transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center gap-3 text-[#1d2025ff] font-bold rounded-[10px] w-full sm:w-[220px] h-[40px]"
            >
              <button>
                <img
                  className="text-[#1d2025ff] w-4 h-4"
                  src={CartIcon}
                  alt="cart-icon"
                />
              </button>
              <p className="text-xs font-extrabold">Add to cart</p>
            </div>
          </div>
        </div>
      </div>

      {/* POPUP LIGHTBOX */}
      {popupOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="relative">
            <img
              src={selectedPicture}
              alt="Popup-product"
              className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] object-cover rounded-lg"
            />
            {/* Close Button */}
            <img
              src={CloseIcon}
              alt="Close"
              className="absolute top-[-25px] right-0 w-6 h-6 cursor-pointer"
              onClick={() => setPopupOpen(false)}
            />
            {/* Navigation Arrows */}
            <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center absolute top-1/2 left-[-10px]">
              <img
                src={PreviousIcon}
                alt="Previous"
                className="w-3 h-3 cursor-pointer"
                onClick={goPrevious}
              />
            </div>
            <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center absolute top-1/2 right-[-10px]">
              <img
                src={NextIcon}
                alt="Next"
                className="w-3 h-3 cursor-pointer"
                onClick={goNext}
              />
            </div>
            {/* Thumbnails inside popup */}
            <div className="flex gap-3 justify-center mt-4">
              {products.map((product, index) => (
                <img
                  key={index}
                  src={product.thumbnail}
                  alt={`Popup thumb ${index}`}
                  className={`w-16 h-16 cursor-pointer rounded-md border-2 ${
                    selectedPicture === product.image
                      ? "border-orange-500"
                      : "border-transparent"
                  }`}
                  onClick={() => setSelectedPicture(product.image)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
