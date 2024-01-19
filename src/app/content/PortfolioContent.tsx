import React from 'react';

function PortfolioContent() {
    return (
        <div className="card bg-transparent mb-3 container text-center mt-4">
            <div className="row g-0">
                <div className="col-md-8">
                    <div className="card-body">
                        <h5><span className="badge bg-primary">Portfolio</span></h5>
                        <p className="fw-bold">
                            Aqui podras encontrar todos mis trabajos y proyectos que he realizado con herramientas tales como ReactJS, NextJS, Bootstrap, HTML, CSS, Photoshop, Canva, Sony Vegas, Wordpress, GitHub, entre otros mas.
                        </p>
                        <a className="btn btn-primary" href="/portfolio" role="button">Ir a la página de Portfolio</a>
                    </div>
                </div>
                <div className="col-md-4">
                    <img src="image/portfolio.png" className="img-fluid rounded-end" alt="portfolioimagen" />
                </div>
            </div>
        </div>

    )
}

export default PortfolioContent