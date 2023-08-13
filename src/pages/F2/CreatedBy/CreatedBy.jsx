import CreateCard from "./CreateCard/CreateCard";
import "./CreatedBy.scss";

const pm = {
  role: "Project manager",
  name: "Albert Flores",
  link: "#",
  photo: "./img/Ellipse.jpg",
};
export default (CreatedBy) => {
  return (
    <div className="CreatedBy">
      <h2>Site was created by </h2>
      <CreateCard {...pm} />
      <CreateCard {...pm} />
      <CreateCard {...pm} />
      <CreateCard {...pm} />
      <CreateCard {...pm} />
      <CreateCard {...pm} />
      <CreateCard {...pm} />
      <CreateCard {...pm} />
    </div>
  );
};
