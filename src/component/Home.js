import React from 'react'
import { Products } from './Products'

const Home = () => {
    return (
        <div className="hero">
            <div className="card bg-dark text-white border-0">
                <img src="https://media.istockphoto.com/photos/its-not-wear-you-wear-its-how-you-wear-it-picture-id1295760261?b=1&k=20&m=1295760261&s=170667a&w=0&h=RyFGNq3OzRA8gFdgCSg72w0ntXeRc8rmeNmUf8-btUs=" class="card-img" alt="bacground" height="550" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">New Season Arrivals</h5>
                        <p className="card-text lead fs-4">CHECK OUT ALL THE TRENDS</p>
                    </div>

                </div>
            </div>
            <Products />
        </div>
    )
}

export default Home

