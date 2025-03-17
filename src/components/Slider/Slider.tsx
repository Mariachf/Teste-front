import React, { useEffect, useState } from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { URLHash } from "@splidejs/splide-extension-url-hash";
import './Slider.scss';

interface ProductType {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
}

const ProductSlider: React.FC = () => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);  
    const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null); 
    const [quantity, setQuantity] = useState(1); 

    
    useEffect(() => {
        fetch("/users.json", {
            headers: { accept: "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data && Array.isArray(data.products)) {
                    setProducts(data.products);
                }
            })
            .catch((err) => console.error("Erro ao carregar os dados:", err));
    }, []);

    
    const openModal = (product: ProductType) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    
    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <section className="container-slider"> 
            <div className="product-slider">
                <Splide
                    options={{
                        type: "loop",
                        perPage: 4,
                        perMove: 4,
                        gap: "1rem",
                        pagination: false,
                        breakpoints: {
                            768: { perPage: 1 },
                        },
                    }}
                    extensions={{ URLHash }}
                >
                    {products.map((product, index) => (
                        <SplideSlide key={index} data-splide-hash={`produto${index + 1}`}>
                            <div className="product-card">
                                <div className="product-card-1">
                                    <img src={product.photo} alt={product.productName} />
                                    <h3>{product.productName}</h3>
                                    <h5>{product.descriptionShort}</h5>
                                    <p className="desconto">De: <s>R$ {(product.price + 10).toFixed(2)}</s></p>
                                    <p className="preco">Por: R$ {product.price.toFixed(2)}</p>
                                    <p className="parcela">ou 2x de R$ {(product.price / 2).toFixed(2)} sem juros</p>
                                    <p className="frete">Frete Grátis</p>
                                    <button onClick={() => openModal(product)}>Comprar</button>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>

           
            {isModalOpen && <div className="modal-overlay" onClick={closeModal}></div>}            

           
            {isModalOpen && selectedProduct && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="close-modal" onClick={closeModal}>X</button>
                        <img src={selectedProduct.photo} alt={selectedProduct.productName} />
                    </div>
                    <div className="modal-product-info">
                        <div className="info">
                            <h5>{selectedProduct.productName}</h5>
                        
                            <p className="preco">R$ {selectedProduct.price.toFixed(2)}</p>
                        </div>

                        <div className="detalhes">
                            <p>Many desktop publishing packages and web page editors now many desktop publishing</p>
                            <a href="##">Veja mais detalhes do produto </a>
                        </div>

                        <div className="quantity">
                        
                        <button  className="quantity-btn-menos" onClick={decrementQuantity}>-</button>
                        <input 
                            type="number" 
                            value={quantity} 
                            readOnly 
                            aria-label="Quantidade do produto" 
                        />
                        <button className="quantity-btn-mais" onClick={incrementQuantity}>+</button>
                        <button className="btn-compra">COMPRAR</button>
                    </div>
                    
                </div>
            </div>
        )}
    </section>
    );
};

export default ProductSlider;
