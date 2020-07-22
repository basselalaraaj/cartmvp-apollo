import React from "react";
import Footer from "./Footer";
import CartList from "../containers/CartList";

interface MainSectionProps {
  itemsCount: number;
}

const MainSection: React.FC<MainSectionProps> = ({ itemsCount }) => (
  <section className="main">
    <CartList />
    {!!itemsCount && <Footer itemsCount={itemsCount} />}
  </section>
);

export default MainSection;
