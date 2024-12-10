import Home8Main from "@/components/layout/main/Home8Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Home 8 | Bastun- Business Consulting Next Js Template",
  description: "Home 8 | Bastun- Business Consulting Next Js Template",
};
export default function Home8() {
  return (
    <PageWrapper headerStyle={3} headerBg={"black"} footerStyle={2}>
      <ThemeController />
      <Home8Main />
    </PageWrapper>
  );
}