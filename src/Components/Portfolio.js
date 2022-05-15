import {Link} from "react-router-dom";
import {useState, useEffect} from "react";

export default function Portfolio(){
    const [name, setName] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/elineri/repos')
        .then(res => res.json())
        .then(data => {
            setName((prevname) => [...prevname,
                {
                    name: data[0].name,
                    description: data[0].description,
                    html_url: data[0].html_url
                }
            ]);
        });
    },[]);

    return(
        <div className="App">
            <nav>
                <ul className="my-list">
                    <li>
                        <Link to="/labb2/">Home</Link>
                    </li>
                    <li>Portfolio</li>
                </ul>
            </nav>
            <main>
                <h2>Min Portfolio</h2>
                {
                    name.map((names) => {
                        <>
                            <h3>{names.name}</h3>
                            <p>{names.description}</p>
                            <p>
                                <a href={names.html_url}>{names.url}</a>
                            </p>
                        </>
                    })
                }
            </main>
        </div>
    );
}