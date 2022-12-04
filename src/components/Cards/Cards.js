import React, { useEffect } from "react";
import realEstate from "../../data/realEstate";
import "./cards.css";
import Card from "../Card/Card";
import { parse, format } from "date-fns";

export default function Cards(props) {
  const {
    selectedLocation,
    selectedDate,
    selectedPrice,
    selectedPropertyType,
  } = props;
  const [cards, setCards] = React.useState(realEstate);
  const cardElements = cards.map((card) => <Card key={card.id} {...card} />);

  const filterCards = () => {
    const newCards = realEstate
      .filter((card) => {
        if (selectedDate === "") return true;

        return format(card.dateAvailable, "yyyy-MM-dd") === selectedDate;
      })
      .filter((card) => {
        if (selectedLocation === "") return true;
        return card.state + ", " + card.country === selectedLocation;
      })
      .filter((card) => {
        let { min, max } = selectedPrice;
        min = min || 0;
        max = max || 999999999999;
        return card.price >= min && card.price <= max;
      })
      .filter((card) => {
        if (selectedPropertyType === "") return true;
        return card.propertyType === selectedPropertyType;
      });
    setCards(newCards);
  };

  useEffect(() => {
    filterCards();
  }, [selectedDate, selectedLocation, selectedPrice, selectedPropertyType]);

  return <div className="cards">{cardElements}</div>;
}
