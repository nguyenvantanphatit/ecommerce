import Blog from "@/components/Blog";
import FlashSale from "@/components/flashSale";
import Hero from "@/components/hero";
import LuckyWheel from "@/components/LuckyWheel";
import PolicyHome from "@/components/policyHome";
import FeaturedProducts from "@/components/productHome";
export default function Home() {
  return (
    <>
      <Hero />
      <FlashSale />
      <FeaturedProducts />
      <LuckyWheel />
      <Blog />
      <PolicyHome />
    </>
  );
}



