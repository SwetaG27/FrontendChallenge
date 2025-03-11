import { useLocation, useNavigate } from "react-router-dom";

const Page = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { seatNo, seatDetail } = location.state;
  const alphabet = ["A", "B", "C", "D", "E", "F"];

  const value = seatDetail.map((a) => {
    const [row, col] = a.split("-").map((a) => Number(a));
    return `${row + 1}${alphabet[col]}`;
  });

  return (
    <div className="flex flex-col gap-5 items-center mt-10">
      <h1 className="font-bold">Final Selection</h1>
      <p>No.of Seats:{seatNo}</p>
      <p>Seats: {value.join(" ")}</p>
      <div className="flex gap-5">
        <button
          onClick={() => navigate("/")}
          className="bg-orange-300 px-5 py-1 rounded-lg"
        >
          &lt; Modify selection
        </button>
        <button className="bg-blue-400 px-5 py-1 rounded-lg">Finish</button>
      </div>
    </div>
  );
};
export default Page;
