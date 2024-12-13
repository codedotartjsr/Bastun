import CheckoutMain from "@/components/layout/main/CheckoutMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Checkout | Bastun- Business Consulting ",
  description: "Checkout | Bastun- Business Consulting ",
};
export default function Checkout() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <CheckoutMain />
    </PageWrapper>
  );
}
