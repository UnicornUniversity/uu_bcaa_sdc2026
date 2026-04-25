function PersonCard({ person, index }) {
  return (
    <div
      style={{
        margin: "4px",
        padding: "4px 8px",
        border: "1px solid #000",
        borderRadius: "16px",
        backgroundColor: index % 2 === 0 ? "#f0f0f0" : "#ffffff",
      }}
    >
      {person.name}, {person.age}, {person.city}
    </div>
  );
}

export default PersonCard;
