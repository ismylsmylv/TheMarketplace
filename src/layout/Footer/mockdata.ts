export const links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Categories",
    url: "/categories",
    sublinks: [
      {
        title: "Electronics",
        url: "/categories/electronics",
        subcategories: [
          { title: "Mobile Phones", url: "/categories/electronics/mobiles" },
          { title: "Laptops", url: "/categories/electronics/laptops" },
          { title: "Cameras", url: "/categories/electronics/cameras" },
        ],
      },
      {
        title: "Fashion",
        url: "/categories/fashion",
        subcategories: [
          { title: "Men's Clothing", url: "/categories/fashion/men" },
          { title: "Women's Clothing", url: "/categories/fashion/women" },
          { title: "Accessories", url: "/categories/fashion/accessories" },
        ],
      },
      {
        title: "Home & Garden",
        url: "/categories/home-garden",
        subcategories: [
          { title: "Furniture", url: "/categories/home-garden/furniture" },
          { title: "Kitchen", url: "/categories/home-garden/kitchen" },
          { title: "Outdoor", url: "/categories/home-garden/outdoor" },
        ],
      },
    ],
  },
  {
    title: "Sell",
    url: "/sell",
  },
  {
    title: "My Account",
    url: "/account",
    sublinks: [
      { title: "Orders", url: "/account/orders" },
      { title: "Messages", url: "/account/messages" },
      { title: "Wishlist", url: "/account/wishlist" },
      { title: "Settings", url: "/account/settings" },
    ],
  },
  {
    title: "Help & Support",
    url: "/help",
  },
];
