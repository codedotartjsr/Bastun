import FaqMain from "@/components/layout/main/FaqMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "FAQ | Bastun- Business Consulting ",
  description: "Faq | Bastun- Business Consulting ",
};
export default function Faq() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <FaqMain />
    </PageWrapper>
  );
}
