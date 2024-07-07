import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    orders: [
      {
        user: "Alex Shatov",
        address: "Mripur-1",
        products: "12",
        date: "July 31, 2023",
        price: "890.66",
        status: "Completed",
      },
      {
        user: "Philip Harbach",
        address: "Dhonmondi",
        products: "19",
        date: "July 31, 2023",
        price: "340.16",
        status: "Confirmed",
      },
      {
        user: "Mirko Fisuk",
        address: "Uttara-6",
        products: "09",
        date: "July 31, 2023",
        price: "530.76",
        status: "Pending",
      },
      {
        user: "Olga Semklo",
        address: "Gulshan-1",
        products: "14",
        date: "July 31, 2023",
        price: "280.57",
        status: "Cancelled",
      },
      {
        user: "Burak Long",
        address: "Mirpur-12",
        products: "10",
        date: "July 31, 2023",
        price: "567.34",
        status: "Processing",
      },
    ],
    products: [
      {
        productInfo: "Moringa",
        category: "Medicine",
        stock: "12",
        suppliers: "Square",
        price: "89.66",
      },
      {
        productInfo: "Antibiotic 250 mg",
        category: "Heart",
        stock: "19",
        suppliers: "Acme",
        price: "34.16",
      },
      {
        productInfo: "Headache Relief",
        category: "Head",
        stock: "09",
        suppliers: "Beximco",
        price: "53.76",
      },
      {
        productInfo: "Pharmacy",
        category: "Hand",
        stock: "14",
        suppliers: "ACI",
        price: "28.57",
      },
      {
        productInfo: "Magnesium",
        category: "Leg",
        stock: "10",
        suppliers: "Uniliver",
        price: "56.34",
      },
    ],
    suppliers: [
      {
        user: "Alex Shatov",
        address: "Mripur-1",
        company: "Square",
        deliveryDate: "August 1, 2023",
        ammount: "6952.53",
        status: "Active",
      },
      {
        user: "Philip Harbach",
        address: "Dhonmondi",
        company: "Acme",
        deliveryDate: "August 1, 2023",
        ammount: "8527.58",
        status: "Active",
      },
      {
        user: "Mirko Fisuk",
        address: "Uttara-6",
        company: "Beximco",
        deliveryDate: "August 1, 2023",
        ammount: "2698.50",
        status: "Active",
      },
      {
        user: "Olga Semklo",
        address: "Gulshan-1",
        company: "ACI",
        deliveryDate: "August 1, 2023",
        ammount: "9852.64",
        status: "Active",
      },
      {
        user: "Burak Long",
        address: "Mirpur-12",
        company: "Uniliver",
        deliveryDate: "August 1, 2023",
        ammount: "1736.90",
        status: "Deactive",
      },
    ],
    customers: [
      {
        user: "Alex Shatov",
        email: "alexshatov@gmail.com",
        address: "Mripur-1",
        phone: "+8801736985253",
        date: "Aug 1, 2023",
      },
      {
        user: "Philip Harbach",
        email: "philip.h@gmail.com",
        address: "Dhonmondi",
        phone: "+8801636985275",
        date: "Aug 1, 2023",
      },
      {
        user: "Mirko Fisuk",
        email: "mirkofisuk@gmail.com",
        address: "Uttara-6",
        phone: "+8801336985214",
        date: "Aug 1, 2023",
      },
      {
        user: "Olga Semklo",
        email: "olga.s@cool.design",
        address: "Gulshan-1",
        phone: "+8801736985264",
        date: "Aug 1, 2023",
      },
      {
        user: "Burak Long",
        email: "longburak@gmail.com",
        address: "Mirpur-12",
        phone: "+8801736984514",
        date: "Aug 1, 2023",
      },
    ],
    isLoading: false,
    isError: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder;
  },
});

export const dataReducer = dataSlice.reducer;
