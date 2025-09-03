export interface ProductInterface {
  ownerInfo: {
    name: string;
    email: string;
    phone: string;
  };
  _id: string;
  category: string;
  subcategory: string;
  title: string;
  brand: string;
  views: number;
  condition: string;
  price: number;
  features: string;
  description: string;
  city: string;
  delivery: boolean;
  barter: boolean;
  status: boolean;
  media: [
    {
      url: string;
      type: string;
      _id: string;
    }
  ];
  createdAt: string;
  offers: [];
  __v: 0;
}
