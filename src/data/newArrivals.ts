export interface NewArrivalProduct {
  id: number;
  title: string;
  image: string;
  newArrival: boolean;
}

export const newArrivalsData: NewArrivalProduct[] = [
  {
    id: 1,
    title: "Product 1",
    image: "https://i.ibb.co/7WZRtwG/headphone.jpg",
    newArrival: true,
  },
  {
    id: 2,
    title: "Product 2",
    image: "https://i.ibb.co/cXFnLLV/green-brim.png",
    newArrival: true,
  },
  {
    id: 3,
    title: "Product 3",
    image: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
    newArrival: true,
  },
  {
    id: 4,
    title: "Product 4",
    image: "https://i.ibb.co/RvwnBL8/palm-tree-cap.png",
    newArrival: true,
  },
  {
    id: 5,
    title: "Product 5",
    image: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
    newArrival: true,
  },
  {
    id: 6,
    title: "Product 6",
    image: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
    newArrival: true,
  },
  {
    id: 7,
    title: "Product 7",
    image: "https://i.ibb.co/7WZRtwG/headphone.jpg",
    newArrival: false,
  },
];
