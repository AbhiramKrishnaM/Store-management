import { defineStore } from "pinia";

export const useMain = defineStore("main", () => {
  const links = [
    {
      id: 0,
      name: "Home",
      to: "/",
      icon: "ion:home",
    },
    {
      id: 1,
      name: "Products",
      to: "/products",
      icon: "ion:bag-handle",
    },
    {
      id: 2,
      name: "Orders",
      to: "/orders",
      icon: "ion:logo-dropbox",
    },
    {
      id: 3,
      name: "Analytics",
      to: "/analytics",
      icon: "ion:md-list-box",
    },
    {
      id: 4,
      name: "Date",
      to: "/date",
      icon: "ion:calendar",
    },
    {
      id: 5,
      name: "Settings",
      to: "/settings",
      icon: "ion:md-settings",
    },
  ];

  const logout = {
    name: "Logout",
    icon: "ion:log-out",
  };

  return {
    links,
    logout,
  };
});
