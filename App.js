import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/images/logo.png";
/*
Head 
    - Logo
    - Nav Items
Body 
    - Search
    - RestContainer
      - RestoCards
        - Img
        - Name of res, Star rating, cusinsines, delivery tie
Footer
    - CopyRight
    Links
    Address
    Contract
*/
const styleCard = {
  backgroundColor: "#f0f0f0",
};
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All"
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
          resData.info.cloudinaryImageId
        }
        alt="res-logo"
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(",")}</h4>
      <h4>{resData.info.avgRating}</h4>
      <h4>{resData.info.costForTwo}</h4>
      {/* <h4>{resData.info.deliveryTime} minutes</h4> */}
    </div>
  );
};

const resList = [
  {
    info: {
      id: "18973",
      name: "Nandhana Palace",
      city: "1",
      slugs: {
        restaurant: "nandhana-palace-koramangala-koramangala",
      },
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/21/c16228db-0f86-484e-b3b4-2fb707f22b76_18973.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Andhra", "South Indian", "North Indian"],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: "18973",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "39K+",
      promoted: true,
      adTrackingId:
        "cid=29630578~p=0~adgrpid=29630578#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=18973~plpr=COLLECTION~st=meghana foods~eid=14053c54-6122-4211-843a-33143a8b5119~srvts=1748888402582~collid=56861",
      sla: {
        deliveryTime: 32,
        minDeliveryTime: 30,
        maxDeliveryTime: 35,
        serviceability: "SERVICEABLE",
        slaString: "30-35 MINS",
        lastMileTravelString: "0.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-03 02:00:00",
        opened: true,
      },
      aggregatedDiscountInfo: {},
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Biryani.png",
            description: "Delivery!",
          },
        ],
      },
      aggregatedDiscountInfoV2: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.3",
          ratingCount: "8.9K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      campaignId: "29630578",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "142291",
      name: "Aroma's Hyderabad House",
      city: "1",
      slugs: {
        restaurant: "aroma39s-hyderabad-house-kalyan-nagar-do-not-use",
      },
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/21/e2495efd-d27d-43c1-960a-010a2085d61b_142291.jpg",
      locality: "Sector 4",
      areaName: "HSR",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Hyderabadi", "Mughlai", "Chinese"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "142291",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "15K+",
      sla: {
        deliveryTime: 33,
        minDeliveryTime: 30,
        maxDeliveryTime: 35,
        serviceability: "SERVICEABLE",
        slaString: "30-35 MINS",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-02 23:59:00",
        opened: true,
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
        logoCtx: {
          text: "BENEFITS",
        },
      },
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "108097",
      name: "Ambur Star Briyani Since 1890",
      city: "1",
      slugs: {
        restaurant: "ambur-star-briyani-btm-2",
      },
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/12/bee2f2d5-6a39-477a-b669-c9df142ed5d0_108097.jpg",
      locality: "2nd Stage",
      areaName: "BTM Layout",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Chettinad", "Andhra", "Beverages", "Seafood"],
      avgRating: 4.5,
      feeDetails: {
        restaurantId: "108097",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "22K+",
      promoted: true,
      adTrackingId:
        "cid=29768173~p=2~adgrpid=29768173#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=108097~plpr=COLLECTION~st=meghana foods~eid=6e94189e-65a4-4a6d-8b66-b3445304c165~srvts=1748888402582~collid=56861",
      sla: {
        deliveryTime: 34,
        minDeliveryTime: 30,
        maxDeliveryTime: 35,
        serviceability: "SERVICEABLE",
        slaString: "30-35 MINS",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-03 00:00:00",
        opened: true,
      },
      aggregatedDiscountInfo: {},
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      aggregatedDiscountInfoV2: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      campaignId: "29768173",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "537139",
      name: "Narmada Chain of Restaurant",
      city: "1",
      slugs: {
        restaurant: "narmada-group-of-hotels-koramangala-koramangala",
      },
      cloudinaryImageId: "gmcud4kfjsy2kf2bbrme",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Andhra", "South Indian"],
      avgRating: 4.5,
      feeDetails: {
        restaurantId: "537139",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "11K+",
      sla: {
        deliveryTime: 38,
        minDeliveryTime: 35,
        maxDeliveryTime: 40,
        serviceability: "SERVICEABLE",
        slaString: "35-40 MINS",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-03 02:00:00",
        opened: true,
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
        logoCtx: {
          text: "BENEFITS",
        },
      },
      externalRatings: {
        aggregatedRating: {
          rating: "4.4",
          ratingCount: "2.3K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "654965",
      name: "Hyderabadi Biryani Hub",
      city: "1",
      slugs: {
        restaurant: "hyderabadi-biryani-hub-btm-btm",
      },
      cloudinaryImageId: "a79403b3daea9a1ede0a7b1ec36bc943",
      locality: "BTM Layout",
      areaName: "BTM Layout",
      costForTwo: "₹250 for two",
      cuisines: [
        "Biryani",
        "Indian",
        "Chinese",
        "Snacks",
        "Fast Food",
        "Beverages",
      ],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "654965",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "1.4K+",
      promoted: true,
      adTrackingId:
        "cid=29630885~p=3~adgrpid=29630885#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=654965~plpr=COLLECTION~st=meghana foods~eid=a0232f78-9864-4b38-83bb-ffb0033a7454~srvts=1748888402582~collid=56861",
      sla: {
        deliveryTime: 28,
        minDeliveryTime: 25,
        maxDeliveryTime: 30,
        serviceability: "SERVICEABLE",
        slaString: "25-30 MINS",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-02 23:59:00",
        opened: true,
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
        logoCtx: {
          text: "BENEFITS",
        },
      },
      externalRatings: {
        aggregatedRating: {
          rating: "3.5",
          ratingCount: "349",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      campaignId: "29630885",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "428",
      name: "Biryani Pot ",
      city: "1",
      slugs: {
        restaurant: "biryani-pot-madiwala-junction-btm",
      },
      cloudinaryImageId: "mdipoyzfzsa7n7igskht",
      locality: "BTM Layout",
      areaName: "BTM Layout",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "428",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "47K+",
      sla: {
        deliveryTime: 29,
        minDeliveryTime: 25,
        maxDeliveryTime: 30,
        serviceability: "SERVICEABLE",
        slaString: "25-30 MINS",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-03 03:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
        logoCtx: {
          text: "BENEFITS",
        },
      },
      externalRatings: {
        aggregatedRating: {
          rating: "3.5",
          ratingCount: "539",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "31627",
      name: "Hyderabad Biryaani House",
      city: "1",
      slugs: {
        restaurant: "hyderabad-biryaani-house-koramangala-koramangala",
      },
      cloudinaryImageId: "r87wnsjxzu9ysekmniju",
      locality: "7th Block",
      areaName: "Koramangala",
      costForTwo: "₹350 for two",
      cuisines: ["Biryani", "North Indian", "Chinese", "Tandoor"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "31627",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "31K+",
      promoted: true,
      adTrackingId:
        "cid=29626979~p=5~adgrpid=29626979#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=31627~plpr=COLLECTION~st=meghana foods~eid=4a86575a-4128-4af3-b4b3-14bb9148e478~srvts=1748888402582~collid=56861",
      sla: {
        deliveryTime: 31,
        minDeliveryTime: 30,
        maxDeliveryTime: 35,
        serviceability: "SERVICEABLE",
        slaString: "30-35 MINS",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-02 23:59:00",
        opened: true,
      },
      aggregatedDiscountInfo: {},
      badges: {},
      aggregatedDiscountInfoV2: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "3.1K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      campaignId: "29626979",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "256957",
      name: "Shanmukha Restaurant",
      city: "1",
      slugs: {
        restaurant: "shanmukha-restaurant-jayanagar-jayanagar",
      },
      cloudinaryImageId: "c5howge9hbdor7uqf949",
      locality: "Marathahalli",
      areaName: "Jayanagar",
      costForTwo: "₹300 for two",
      cuisines: ["Biryani", "Indian", "Chinese", "Tandoor", "Andhra"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "256957",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "16K+",
      sla: {
        deliveryTime: 34,
        minDeliveryTime: 30,
        maxDeliveryTime: 35,
        serviceability: "SERVICEABLE",
        slaString: "30-35 MINS",
        lastMileTravelString: "5.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-03 00:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹199",
        logoCtx: {
          text: "BENEFITS",
        },
      },
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "5.2K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "317106",
      name: "Nandhini Deluxe",
      city: "1",
      slugs: {
        restaurant: "nandhini-deluxe-jayanagar-jayanagar",
      },
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/3/d652db23-eab5-4e90-985f-1b94c39d0f05_317106.jpg",
      locality: "4th Block",
      areaName: "Jayanagar",
      costForTwo: "₹500 for two",
      cuisines: ["Andhra", "Biryani", "Chinese", "North Indian"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "317106",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "5.8K+",
      promoted: true,
      adTrackingId:
        "cid=29669820~p=10~adgrpid=29669820#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=317106~plpr=COLLECTION~st=meghana foods~eid=e1dd5dad-c3ad-4503-aaf4-70a0b071358b~srvts=1748888402582~collid=56861",
      sla: {
        deliveryTime: 39,
        minDeliveryTime: 35,
        maxDeliveryTime: 40,
        serviceability: "SERVICEABLE",
        slaString: "35-40 MINS",
        lastMileTravelString: "7.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-02 23:59:00",
        opened: true,
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹899",
        discountTag: "FLAT DEAL",
        logoCtx: {
          text: "BENEFITS",
        },
      },
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "1.5K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      campaignId: "29669820",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "1007933",
      name: "Anmay Foods - Andhra Style Restaurant",
      city: "1",
      slugs: {
        restaurant: "anmay-foods---andhra-style-restaurant-hsr-hsr",
      },
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/19/5890575e-90f8-4135-a7b7-8cc683332a48_1007933.jpg",
      locality: "Hsr Layout",
      areaName: "HSR Layout",
      costForTwo: "₹400 for two",
      cuisines: [
        "Andhra",
        "Biryani",
        "South Indian",
        "Chinese",
        "North Indian",
      ],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "1007933",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "1.6K+",
      sla: {
        deliveryTime: 34,
        minDeliveryTime: 30,
        maxDeliveryTime: 35,
        serviceability: "SERVICEABLE",
        slaString: "30-35 MINS",
        lastMileTravelString: "5.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-02 23:59:00",
        opened: true,
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹449",
        discountTag: "FLAT DEAL",
        logoCtx: {
          text: "BENEFITS",
        },
      },
      externalRatings: {
        aggregatedRating: {
          rating: "4.6",
          ratingCount: "802",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {},
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
