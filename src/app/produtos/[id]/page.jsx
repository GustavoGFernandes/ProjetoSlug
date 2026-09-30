
"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import "./produto.css";

export default function DetalheProduto({ params }) {
  const resolvedParams = use(params);
  const id = resolvedParams?.id;

  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((dados) => {
          setProduto(dados);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [id]);

  
  if (loading) {
    return <p style={{ padding: "2rem" }}>Carregando produto...</p>;
  }

  
  if (!produto || produto.message) {
    return (
      <main className="container-detalhes">
        <h2>Produto não encontrado!</h2>
        <Link href="/produtos" className="btn-voltar">
          ← Voltar para produtos
        </Link>
      </main>
    );
  }

  return (
    <main className="container-detalhes">
      <Link href="/produtos" className="btn-voltar">
        ← Voltar para produtos
      </Link>

      <div className="card-detalhes">
        <div className="imagem-container">
          <img src={produto.thumbnail} alt={produto.title} />
        </div>

        <div className="info-container">
          <h1>{produto.title}</h1>
          <p className="marca">Marca: {produto.brand || "Genérico"}</p>
          <p className="categoria">Categoria: {produto.category}</p>
          <p className="descricao">{produto.description}</p>

          <div className="precos">
            <span className="preco">${produto.price}</span>
            <span className="desconto">-{produto.discountPercentage}% OFF</span>
          </div>

          <ul className="especificacoes">
            <li>Avaliação: {produto.rating} / 5</li>
            <li>Estoque: {produto.stock} unidades</li>
            <li>SKU: {produto.sku}</li>
            <li>Status: {produto.availabilityStatus}</li>
          </ul>
        </div>
      </div>
    </main>
  );
}