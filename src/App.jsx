import { useEffect, useState } from 'react'
import './App.css'
import Sidebar from './sidebar/Sidebar'

function App() {
    const [mahsulotlar, setMahsulotlar] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => setMahsulotlar(data.products))
    }, [])


    const filteredProducts = mahsulotlar.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase()) || product.category.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div>
            <header>
                <div className="container">
                    <div>
                        <h1>Logo</h1>
                        <div className="div">
                            <i className="fa-solid fa-magnifying-glass" id='i'></i>
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        <p>Home</p>
                        <select>
                            <option value="">Explore</option>
                        </select>
                    </div>
                    <div className='h-left'>
                        <i className="fa-solid fa-bell"></i>
                        <i className="fa-solid fa-message"></i>
                        <button>Wallet</button>
                        <img src="./Ellipse 258.png" alt="" />
                    </div>
                </div>
            </header>

            <Sidebar />

            <main>
                <div className="container">
                    <div className="mainTop">
                        <p>571,632 items</p>
                        <div>
                            <select name="" id="">
                                <option value="">All Items</option>
                            </select>
                            <select name="" id="">
                                <option value="">Sort By</option>
                            </select>
                        </div>
                    </div>

                    <div className="cards">
                        {filteredProducts.map((m, i) => (
                            <div className="card" key={i}>
                                <img src={m.images[0]} alt="" />
                                <div>
                                    <h3>Categories: {m.category}</h3>
                                    <p>Rating: {m.rating}</p>
                                </div>
                                <div>
                                    <h2>{m.title}</h2>
                                    <h2>Price: ${m.price}</h2>
                                </div>
                                <div>
                                    <i className="fa-solid fa-heart"></i>
                                    <button>Buy Now</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App
