import { useParams } from "react-router-dom";
export default function Product() {
  const { product_id } = useParams();
  return (
    <div>
      <h1> Product :{product_id}</h1>
    </div>
  );
}
