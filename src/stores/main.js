import { defineStore } from "pinia";

const main = defineStore("main", () => {
  const navigation = [
    {
      id: 0,
      name: "Home",
      to: "/home",
      activeIcon: "teenyicons:home-solid",
      inactiveIcon: "teenyicons:home-outline",
    },
    {
      id: 1,
      name: "Products",
      to: "/products",
      activeIcon: "teenyicons:bag-solid",
      inactiveIcon: "teenyicons:bag-outline",
    },
    {
      id: 2,
      name: "Orders",
      to: "/orders",
      activeIcon: "teenyicons:list-layout-solid",
      inactiveIcon: "teenyicons:list-layout-outline",
    },
    {
      id: 3,
      name: "Analytics",
      to: "/analytics",
      activeIcon: "teenyicons:pie-chart-alt-solid",
      inactiveIcon: "teenyicons:pie-chart-alt-outline",
    },
    {
      id: 4,
      name: "Date",
      to: "/date",
      activeIcon: "teenyicons:calendar-solid",
      inactiveIcon: "teenyicons:calendar-outline",
    },
    {
      id: 5,
      name: "Settings",
      to: "/settings",
      activeIcon: "teenyicons:cog-solid",
      inactiveIcon: "teenyicons:cog-outline",
    },
  ];

  return {
    navigation,
  };
});
