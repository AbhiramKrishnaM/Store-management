<script setup>
import Login from "@/components/section/login/index.vue";
import CustomerCard from "../components/section/customerCard.vue";
import ProductCard from "../components/section/productCard.vue";
import UserAvatarInfo from "../components/section/userAvatarInfo.vue";
import SpecialPackage from "../components/section/specialPackage.vue";
import NewVersion from "../components/section/newVersion.vue";
const customerCard = {
  image: {
    path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoEprVQayH51WidWqyN8jnoaAczBilZFNPg0ePJFywkerljh-CwI7Jkt_sJinuS0A5qxQ&usqp=CAU",
    alt: "image description",
  },
  name: "Maren Lipzuths",
  purchase: {
    total: 20,
    amount: 1200,
  },
};

const productCard = {
  image: {
    path: "https://freesvg.org/img/monkey_nobg.png",
    alt: "monkey",
  },
  product: {
    name: "Monki the monkey",
    amount: 30,
    totalSold: 150,
    discountedAmount: 40,
  },
};

const customerInfo = {
  image: {
    path: "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png",
    alt: "avatar",
  },
  username: "Ahamed-Geidt",
  address: "Montreal, Canada",
  product: {
    quantity: 30,
  },
  customer: {
    count: 35.4,
  },
};

const cardInfo = {
  title: "Your special package",
  subtitle: `  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore iste
          rerum architecto corporis ex. Doloribus enim neque, reprehenderit
          similique, quasi voluptatum delectus doloremque culpa eum rerum
          officia commodi debitis quas?`,
  image: {
    path: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/fa22b92aed2d9e4e17b63c7af717aa24-1626178498456/Art%20_Illustration_2x.png",
    alt: "package",
  },
};
</script>

<template>
  <div>
    <!-- <UserAvatarInfo v-bind="customerInfo" /> -->
    <!-- <SpecialPackage v-bind="cardInfo" /> -->
    <NewVersion />
  </div>
</template>
