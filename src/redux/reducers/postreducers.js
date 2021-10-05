import {
  GetAllProduct,
  GetSingleProduct,
  GetSorted,
  FilterData,
  SearchData,
  ClearSearchData,
  WishListData,
  CartData,
  Removing_Product_Wishlist,
  AddOrderDetails,
  OrderData,
  OrderType
} from "../actions/constactions";

const initialState = {
  allProducts: [],
  singleProduct: {},
  sortP: false,
  sortedProduct: [],
  searchP: false,
  searchProduct: [],
  wishListProduct: [],
  cartProduct: [],
  cartPricing: {},
  orderDetails: {},
  orderProducts: [],
  orderType:"Recent Orders",
};

// Reducers
const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GetAllProduct:
      return {
        ...state,
        allProducts: action.payload || [],
        sortedProduct: action.payload,
      };

    case GetSingleProduct:
      return {
        ...state,
        singleProduct: action.payload,
      };

    case GetSorted:
      let sortOption = action.payload;
      let AllProductsData = [...state.sortedProduct];
      if (sortOption == "ah") {
        return {
          ...state,
          sortedProduct: state.allProducts,
          sortP: false,
        };
      } else if (sortOption == "plh") {
        let sortData = AllProductsData.sort((a, b) => a.price - b.price);
        return {
          ...state,
          sortedProduct: sortData,
          sortP: true,
        };
      } else if (sortOption == "phl") {
        let sortData = AllProductsData.sort((a, b) => b.price - a.price);
        return {
          ...state,
          sortedProduct: sortData,
          sortP: true,
        };
      } else if (sortOption == "rlh") {
        let sortData = AllProductsData.sort((a, b) => a.rating - b.rating);
        return {
          ...state,
          sortedProduct: sortData,
          sortP: true,
        };
      } else if (sortOption == "rhl") {
        let sortData = AllProductsData.sort((a, b) => b.rating - a.rating);
        return {
          ...state,
          sortedProduct: sortData,
          sortP: true,
        };
      }

    case FilterData:
      return {
        ...state,
        allProducts: action.payload,
      };

    case SearchData:
      return {
        ...state,
        searchP: true,
        searchProduct: action.payload,
      };

    case ClearSearchData:
      return {
        ...state,
        searchP: false,
        searchProduct: [],
      };

    case WishListData:
      return {
        ...state,
        wishListProduct: action.payload,
      };

    case Removing_Product_Wishlist:
      return {
        ...state,
        wishListProduct: state.wishListProduct.filter(
          (item) => item._id != action.payload
        ),
      };

    case CartData:
      return {
        ...state,
        cartProduct: action.products,
        cartPricing: action.pricing,
      };

    case AddOrderDetails:
      return {
        ...state,
        orderDetails: action.payload,
      };

    case OrderData:
      return {
        ...state,
        orderProducts: action.payload,
      };

    case OrderType:
      return {
        ...state,
        orderType: action.payload
      }

    default:
      return state;
  }
};

export default ProductReducer;
