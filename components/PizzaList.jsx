import PizzaCard from "./PizzaCard";
export default function PizzaList({ pizzaList }) {
  return (
    <>
      {pizzaList.map((pizza) => (
        <PizzaCard key={pizza._id} pizza={pizza} />
      ))}
    </>
  );
}
