
export const IMG_CDN_URL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_140,h_140,c_fill/";



export const MENU_API ="https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING";

// export const swiggy_menu_api_URL =
// "https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=";


export const options = {
  method: "GET",
  headers: {
    Authorization: "",
  },
};
// menu items api card type key

export const MENU_ITEM_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
export const RESTAURANT_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";





  export const swiggy_api_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.679466959904303&lng=77.50065922737122&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
// "https://corsproxy.io/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.9351929%26lng%3D77.62448069999999%26page_type%3DDESKTOP_WEB_LISTING";
// "https://corsproxy.io/?" +
// encodeURIComponent(
//   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
// );
// "https://corsproxy.org/?" +
// encodeURIComponent(
//   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
// );

// Swiggy API to get Restaurant Menu data with corsproxy
export const CDN_URL="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const swiggy_menu_api_URL =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=";
// "https://corsproxy.io/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D25.4358011%26lng%3D81.846311%26restaurantId=";
// "https://corsproxy.io/?" +
// encodeURIComponent(
//   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="
// );
// "https://corsproxy.org/?" +
// encodeURIComponent(
//   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="
// );