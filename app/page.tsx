import FeaturedWorks from "@/components/FeaturedWorks";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import RecentPosts from "@/components/RecentPosts";

export default function Home() {
  return (
   <div>
    <Navbar />
    <HeroSection />
    <RecentPosts />
    <FeaturedWorks />
    <Footer />
   </div>
  );
}
