import {} from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Nav.module.css'

function Nav() {
  return (
    <>
      <header className={styles.nav}>
        <h2>Projeto</h2>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/produtos">Produtos</Link>
            </li>
            <li>
              <Link to="conteudo">Conteudo</Link>
            </li>
            <li>
              <Link to="/cadastrar/produto">Cadastrar Produto</Link>
            </li>
            <li>
              <Link to="/login">LOGIN</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Nav;
