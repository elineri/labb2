import {Link} from "react-router-dom";

export default function Home(){
    return(
        <>
        <nav>
            <ul className="my-list">
                <li>Home</li>
                <li>
                    <Link to="/labb2/portfolio">Portfolio</Link>
                </li>
            </ul>
        </nav>
        <main>
            <h2>Home</h2>
            <p>Hello, this is my home page</p>
        </main>
    </>
    );
}