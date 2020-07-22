import React from "react";

interface FooterProps {
  itemsCount: number;
}

const Footer: React.FC<FooterProps> = (props) => {
  const { itemsCount } = props;
  const itemWord = itemsCount === 1 ? "item" : "items";

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsCount || "No"}</strong> {itemWord}
      </span>
    </footer>
  );
};

export default Footer;
