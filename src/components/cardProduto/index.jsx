import Link from "next/link";
import "./cardProduto.css";

export default function CardProduto({ produto }) {
  return (
    <div className="wrapper-produto">
      <img src={produto.thumbnail} alt={produto.title} />
      <h3>{produto.title}</h3>
      <Link href={`/produtos/${produto.id}`}>Saiba mais</Link>
    </div>
  );
}