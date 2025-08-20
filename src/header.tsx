import { useState, useEffect } from "react";
import logo from "./assets/images/logo.svg";
import imageAvatar from "./assets/images/image-avatar.png";
import iconCart from "./assets/images/icon-cart.svg";
import useMediaQuery from "./hooks/useMediaQuery";
import { MenuIcon, CloseIcon, DeleteIcon } from "./assets";

type CartItem = {
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export default function Header({ cart }: { cart: CartItem | null }) {
  const [active, setActive] = useState("Collections");
  const [avatarActive, setAvatarActive] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [localCart, setLocalCart] = useState<CartItem | null>(cart);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    setLocalCart(cart);
  }, [cart]);

  const handleDelete = () => setLocalCart(null);

  const navItems = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <div className="flex h-[75px] w-full justify-around items-center border-b border-gray-200 fixed top-0 z-50 bg-white">
      {/* LEFT SIDE */}
      <div className="flex gap-4 items-center">
        {/* Hamburger button for mobile */}
        {!isAboveMediumScreens && (
          <img
            className="cursor-pointer"
            onClick={() => setIsMenuToggled(true)}
            src={MenuIcon}
            alt="menu-icon"
          />
        )}

        {/* Logo */}
        <img src={logo} alt="logo" />

        {/* Nav items on large screens */}
        {isAboveMediumScreens && (
          <ul className="flex gap-7 ml-smal-screen text-[14px] font-medium">
            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => setActive(item)}
                className={`relative cursor-pointer pb-2 transition-colors ${
                  active === item
                    ? "text-[#1d2025] font-semibold"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {item}
                {active === item && (
                  <span className="absolute left-0 -bottom-[1px] w-full h-[3px] bg-orange-500 rounded"></span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* RIGHT SIDE */}
      <div className="flex gap-[2.5rem] items-center relative">
        {/* Cart Icon */}
        <div className="relative">
          <img
            src={iconCart}
            alt="cart-icon"
            className="cursor-pointer"
            onClick={() => setCartOpen(!cartOpen)}
          />
          {localCart && localCart.quantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold px-2 rounded-full">
              {localCart.quantity}
            </span>
          )}
        </div>

        {/* Avatar */}
        <img
          onClick={() => setAvatarActive(!avatarActive)}
          className={`w-10 h-10 cursor-pointer rounded-full transition-all duration-200 ${
            avatarActive ? "border-2 border-orange-500" : ""
          }`}
          src={imageAvatar}
          alt="user-image"
        />

        {/* Cart Container */}
        {cartOpen && (
          <div className="absolute top-16 right-0 sm:w-80 sm:h-50 w-90 h-70 pad-all bg-white shadow-lg rounded-lg">
            <div className="px-4 py-3 border-b border-gray-200">
              <h2 className="font-bold text-lg">Cart</h2>
            </div>
            <div className="p-4 mt-2">
              {!localCart ? (
                <p className="text-center text-gray-500 py-10">
                  Your cart is empty.
                </p>
              ) : (
                <div>
                  <div className="flex items-center mt-smal-screen margg-top gap-3 mb-6">
                    <img
                      src={localCart.image}
                      alt="product"
                      className="w-12 h-12 rounded-md"
                    />
                    <div className="flex flex-col text-sm text-gray-500 flex-1">
                      <div className="flex justify-between items-center">
                        <p>{localCart.name}</p>
                        <img
                          src={DeleteIcon}
                          alt="Delete"
                          className="w-4 h-4 cursor-pointer"
                          onClick={() => setLocalCart(null)}
                        />
                      </div>
                      <p>
                        ${localCart.price.toFixed(2)} x {localCart.quantity}{" "}
                        <span className="font-bold text-black">
                          ${(localCart.price * localCart.quantity).toFixed(2)}
                        </span>
                      </p>
                    </div>
                  </div>
                  <button className="w-full mt-smal-screen margg-top mt-2 h-[50px] bg-orange-500 hover:bg-[#ff9e54] text-black font-bold rounded-lg transition-all">
                    Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* MOBILE NAVBAR */}
      {isMenuToggled && !isAboveMediumScreens && (
        <div className="fixed inset-0 z-50 flex">
          {/* Sidebar */}
          <div className="bg-white w-52 h-full shadow-md p-6 border-r border-gray-200 relative flex flex-col gap-6">
            {/* Close Button on the LEFT */}
            <img
              src={CloseIcon}
              alt="Close"
              className="w-4 h-4 margi-left cursor-pointer mb-6"
              onClick={() => setIsMenuToggled(false)}
            />

            {/* Nav Items */}
            {navItems.map((item) => (
              <button
                key={item}
                className="text-black font-bold padi-left text-lg text-left  rounded hover:bg-gray-100 transition"
                onClick={() => {
                  setActive(item);
                  setIsMenuToggled(false);
                }}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Overlay */}
          <div
            className="flex-1 bg-black/40"
            onClick={() => setIsMenuToggled(false)}
          ></div>
        </div>
      )}
    </div>
  );
}
