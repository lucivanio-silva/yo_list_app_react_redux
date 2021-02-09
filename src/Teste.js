import React from 'react'

const Teste = ()=> 
    <div className='container-fluid p-0'>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a className="navbar-brand" href="#"><i className="fas fa-check-circle"></i> YO LIST</a>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarMainToggler" arial-expanded="false" 
                aria-controls="navbarMainToggler" aria-label="Toggle navigation">

                <span className="navbar-toggler-icon"></span>
            </button>
            
            {/*O navibar-collapse da uma ajeitada no icone do menu e faz ele ficar visível mesmo em tamanho grande*/}
            <section className="collapse navbar-collapse" id="navbarMainToggler">
                <div className='navbar-nav'>
                    <a className='nav-item nav-link' href='#'>Home</a>
                    <a className='nav-item nav-link' href='#'>Chanel</a>
                    <a className='nav-item nav-link' href='#'>Login</a>
                </div>
            </section>
        </nav>

        <footer className="footer bg-dark text-center text-light" style={{position:'absolute', bottom:'0', width:'100%', height: '30px'}}>
            <i class="fab fa-airbnb"></i> <small>YO LIST app -2020</small>
        </footer>
    </div>

export default Teste