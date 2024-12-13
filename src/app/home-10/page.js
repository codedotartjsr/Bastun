import Home10Main from "@/components/layout/main/Home10Main";

import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Home 10 | Bastun- Business Consulting ",
  description: "Home 10 | Bastun- Business Consulting ",
};
export default function Home10() {
  return (
    <PageWrapper headerStyle={4} footerStyle={4} headerType={3}>
      <ThemeController />
      <Home10Main />
    </PageWrapper>
  );
}
