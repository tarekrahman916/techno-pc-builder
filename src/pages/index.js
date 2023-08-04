import RootLayout from "@/components/Layouts/RootLayout";
import TopBanner from "@/components/UI/HomeComponents/TopBanner";

export default function HomePage() {
  return (
    <div>
      <TopBanner />
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
