"use client"; 

import { useState, useEffect } from "react";
import CardProdutos from '@/components/cardProduto';

export default function Produtos() {
    const [listaProdutos, setListaProdutos] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(dados => setListaProdutos(dados.products || [])); 
    }, []);

    return (
        <main>
            {listaProdutos?.length > 0 && (
                <div className="container-produtos">
                    {listaProdutos.map(p => (
                        <CardProdutos key={p.id} produto={p} />
                    ))}
                </div>
            )}
        </main>
    );
}