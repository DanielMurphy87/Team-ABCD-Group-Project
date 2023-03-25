import './footer.scss';

const Footer: React.FC = () =>
<>
    <footer className='footer'>
        <nav>
            <ul className='footerUlFlex'>
                <li><p>This site uses 2 public APIs:</p></li>
                <li><p><a href="https://www.themealdb.com/api.php">The Meal DB</a>&#169; 2023 TheMealDB</p></li>
                <li><p><a href="https://www.thecocktaildb.com/api.php">The Cocktail DB</a>&#169; 2023 TheCocktailDB.</p></li>
            </ul>
        </nav>
    </footer>
</>

export default Footer;