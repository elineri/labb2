import {Link} from "react-router-dom";
import {useState, useEffect} from "react";

export default function Portfolio(){
    const [name, setName] = useState([]);
    const [isPending, setIsPending] = useState(true); // Loading message

    useEffect(() => {
        setTimeout(() => {
            fetch('https://api.github.com/users/elineri/repos')
            .then(res => res.json())
            .then(data => {
                setName((prevname) => [...prevname,
                    {
                        name: data[1].name,
                        description: data[1].description,
                        html_url: data[1].html_url
                    },
                    {
                        name: data[2].name,
                        description: data[2].description,
                        html_url: data[2].html_url
                    },
                    {
                        name: data[3].name,
                        description: data[3].description,
                        html_url: data[3].html_url
                    }
                ]);
                setIsPending(false); // Remove loading message when data had been loaded
            });
        }, 1000);
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
                <h2>My Portfolio</h2>
                {isPending && <div>Loading...</div>} 
                {
                    name.map((names) => (
                        <>
                            <h3>{names.name}</h3>
                            <p>{names.description}</p>
                            <p>
                                <a href={names.html_url}>{names.html_url}</a>
                            </p>
                        </>
                    ))
                }
            </main>
        </div>
    );
}