export const fields = [
  // Section headers (these will be skipped in rendering)
  {
    title: "about product",
  },
  {
    title: "category",
    value: "category",
    type: "select",
    required: true,
    options: [
      { value: "electronics", label: "Electronics" },
      { value: "clothing", label: "Clothing & Fashion" },
      { value: "home", label: "Home & Garden" },
      { value: "sports", label: "Sports & Recreation" },
      { value: "books", label: "Books & Media" },
      { value: "automotive", label: "Automotive" },
      { value: "toys", label: "Toys & Games" },
      { value: "other", label: "Other" },
    ],
  },
  {
    title: "subcategory",
    value: "subcategory",
    type: "text",
    placeholder: "e.g., Smartphones, Laptops, Jackets, etc.",
    required: true,
  },
  {
    title: "title",
    value: "title",
    type: "text",
    placeholder: "Give your item a catchy title",
    required: true,
    fullWidth: true,
  },
  {
    title: "brand",
    value: "brand",
    type: "text",
    placeholder: "e.g., Apple, Samsung, Nike",
    required: false,
  },
  {
    title: "condition",
    value: "condition",
    type: "select",
    required: true,
    options: [
      { value: "new", label: "Brand New" },
      { value: "used", label: "Used" },
    ],
  },
  // {
  //   title: "key features",
  //   value: "features",
  //   type: "textarea",
  //   placeholder: "List the main features and specifications (optional)",
  //   required: false,
  //   fullWidth: true,
  //   rows: 3
  // },
  {
    title: "description",
    value: "description",
    type: "textarea",
    placeholder:
      "Describe your item in detail. Include any flaws, history, or special notes.",
    required: true,
    fullWidth: true,
    rows: 4,
  },

  // Dealing section header
  {
    title: "dealing",
  },
  {
    title: "price",
    value: "price",
    type: "number",
    placeholder: "Enter price in your local currency",
    required: true,
    min: 0,
    step: 0.01,
  },
  {
    title: "city/location",
    value: "city",
    type: "text",
    placeholder: "Where is the item located?",
    required: true,
  },
  {
    title: "offer delivery",
    value: "delivery",
    type: "checkbox",
    required: false,
  },
  {
    title: "accept barter/trade",
    value: "barter",
    type: "checkbox",
    required: false,
  },

  // Your info section header
  {
    title: "your info",
  },
  {
    title: "your name",
    value: "ownerInfo.name",
    type: "text",
    placeholder: "How should buyers contact you?",
    required: true,
  },
  {
    title: "email address",
    value: "ownerInfo.email",
    type: "email",
    placeholder: "your.email@example.com",
    required: true,
  },
  {
    title: "phone number",
    value: "ownerInfo.phone",
    type: "text",
    placeholder: "Your contact number (optional)",
    required: false,
  },
];

export const headings = [
  {
    title: "about product",
    start: 0,
    end: 8,
  },
  {
    title: "dealing",
    start: 8,
    end: 13,
  },
  {
    title: "your info",
    start: 13,
    end: 16,
  },
];
