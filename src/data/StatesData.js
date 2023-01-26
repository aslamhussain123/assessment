import riderimg from '../assets/images/rider.png';
import rider1img from '../assets/images/rider1.png';
import rider2img from '../assets/images/rider2.png';
import vendorimg from '../assets/images/vend.png';

//Active orders
export const ActiveOrdersData = [
    {
      order_type: "delivery",
      order_number: "12345",
      customer: {
        name: "Tommy Hatcher",
        zip_code: "3342",
        number: `+08877288447`,
        img:riderimg 
      },
      order_time: "299-12-12",
      vendors: {
          image: vendorimg,
        },
      rider: {
        name: "Bill Cohen",
        id: "RD-123",
      },
      order_amount: {
        subtotal: "$"+ 347,
      },
    },
    {
      order_type: "Squad",
      order_number: "8778",
      customer: {
        name: "John Smith",
        zip_code: "90210",
        number: `+4462665552`,
        img:rider1img
      },
      order_time: "2023-11-29",
      vendors: 
        {
          image: vendorimg,
        },
      
      rider: {
        name: "Natasha",
        id: "RD-123",
      },
      order_amount: {
        subtotal: "$"+ 34.97,
      },
    },
    {
      order_type: "Normal",
      order_number: "12345",
      customer: {
        name: "John Smith",
        zip_code: "90210",
        number: `+08877288447`,
        img:rider2img
      },
      order_time: "2022-12-25",
      vendors: 
        {
          image: vendorimg,
        },
      
      rider: {
        name: "Jane Doe",
        id: "RD-123",
      },
      order_amount: {
        subtotal: "$"+ 34.97,
      },
    },
    {
      order_type: "Normal",
      order_number: "12345",
      customer: {
        name: "Hillary",
        zip_code: "90210",
        number: `+355533578`,
        img:riderimg
      },
      order_time: "44-12-25",
      vendors: 
        {
          image: vendorimg,
        },
      
      rider: {
        name: "JAli karam",
        id: "RD-123",
      },
      order_amount: {
        subtotal: "$"+ 34.97,
      },
    },
    {
      order_type: "delivery",
      order_number: "12345",
      customer: {
        name: "John Smith",
        zip_code: "90210",
        number: `+2236343`,
        img:riderimg
      },
      order_time: "2022-12-25",
      vendors: 
        {
          image: vendorimg,
        },
      
      rider: {
        name: "Jane Doe",
        id: "RD-123",
      },
      order_amount: {
        subtotal: "$"+ 34.97,
      },
    },
    {
      order_type: "delivery",
      order_number: "12345",
      customer: {
        name: "John Smith",
        zip_code: "90210",
        number: `+98766687555`,
        img:riderimg
      },
      order_time: "2022-12-25",
      vendors: 
        {
          image: vendorimg,
        },
      
      rider: {
        name: "Jane Doe",
        id: "RD-123",
      },
      order_amount: {
        subtotal: "$"+ 34.97,
      },
    },
  ];
  // user statistics
export const UserStatisticData = [
    {
        id:1,
        icon: "fa fa-users",
        name:"Customers",
        total: 4003,
    },
    {
        id:2,
        icon: "fa fa-shopping-bag",
        name:"Orders",
        total: 7669,
    },
    {
        id:3,
        icon: "fa fa-car",
        name:"Delivery",
        total: 9888,
    },
    {
        id:4,
        icon: "fa fa-user",
        name:"Users",
        total: 68899,
    },
    {
        id:5,
        icon: "fa fa-hand-holding-dollar",
        name:"Revenue",
        total: "$"+9900,
    },
    {
        id:6,
        icon: "fa fa-star",
        name:"AvgRating",
        total: 4.4,
    },
    {
        id:7,
        icon: "fa fa-chart-line",
        name:"AvgRev per Customer",
        total: "$"+677,
    },
    {
        id:8,
        icon: "fa fa-circle-dollar-to-slot",
        name:"AvgRev per User",
        total: "$"+8788,
    },
]

export const InsightData = [
    {
        id:1,
        title:"Order Acceptance",
        icon: "fa fa-child-reaching",
        profit: 16+"%",
        btnClass: "phaseOneBtn",
        btnText:"Phase 1 Goal"
    },
    {
        id:2,
        title:"Reaching Vendor",
        icon: "fa fa-industry",
        profit: 95+"%",
        btnClass: "phaseTwoBtn",
        btnText:"Phase 2 Goal"
    },
    {
        id:3,
        title:"Delivery Order",
        icon: "fa fa-sack-dollar",
        profit: 87+"%",
        btnClass: "btnUnlimited",
        btnText:"Unlimited Goal"
    },
    {
        id:4,
        title:"Clearing Payments",
        icon: "fa fa-credit-card",
        profit: 65+"%",
        btnClass: "btnNone",
        btnText:"None"
    },
    {
        id:5,
        title:"Total Quality Score",
        icon: "fa fa-star",
        profit: 16+"%",
        btnClass: "phaseOneBtn",
        btnText:"Phase 1 Goal"
    },
]

// Top Riders data
export const TopRiders =[
    {
        id:1,
        image: riderimg,
        name:'Christina ',
        revenuePerMonth:'$'+ 12233,
        processedOrdersPerMonth: 723,
        totalRev: '$'+ 8234,
        goodimpression: 13,
        badimpression: 8
    },
    {
        id:2,
        image: rider1img,
        name:'Alex Willaim',
        revenuePerMonth:'$'+ 98966,
        processedOrdersPerMonth: 66128,
        totalRev: '$'+ 4543,
        goodimpression: 99,
        badimpression: 6
    },
    {
        id:3,
        image: rider2img,
        name:'Desi Accent',
        revenuePerMonth:'$'+ 7966,
        processedOrdersPerMonth: 67,
        totalRev: '$'+ 4566,
        goodimpression: 88,
        badimpression: 6
    },

]