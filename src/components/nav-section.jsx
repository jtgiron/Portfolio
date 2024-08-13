import '../styles/nav-bar.css'
import React, {useState} from 'react'

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <section>
            <div>
                <nav className="navBar">
                    <div className="menuIcon" onClick={toggleMenu}>
                        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </div>
                    <ul className={`ulList ${isOpen ? 'open' : ''}`}>
                        <li className='listItems'><a class="link" href="#"  rel="noopener noreferrer">Sobre mi</a></li>
                        <li className='listItems'><a class="link" href="#"  rel="noopener noreferrer">Habilidades</a></li>
                        <li className='listItems'><a class="link" href="#"  rel="noopener noreferrer">Proyectos</a></li>
                        <li className='listItems'><a class="link" href="#"  rel="noopener noreferrer">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}