import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { TechCard } from "../TechCard";
import { ListTech } from "./styled";

export function TechList() {
  const { tech } = useContext(TechContext);

  return (
    <>
      <ListTech>
        {tech.map((elem) => (
          <TechCard key={elem.title} elem={elem} />
        ))}
      </ListTech>
    </>
  );
}
