import Ad from "../components/Ad";
import data from "../data.json";
export default function Home() {
  return (
    <div>
      {data.map((product, i) => {
        return (
          <div key={i}>
            <Ad products={product} />;
          </div>
        );
      })}
    </div>
  );
}
