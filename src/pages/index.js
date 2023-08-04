import RootLayout from "@/components/Layouts/RootLayout";

export default function HomePage() {
  return (
    <div style={{ paddingTop: "70px" }}>
      <h1>This is home page</h1>
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
