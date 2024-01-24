import { useState } from "react";
import styles from "./SearchBar.module.css"
// import searchIcon from "./assets/search.png"

function SearchBar(props) {
    const [city, setCity] = useState("");
    
    const sendData = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        props.parentCallback(city)
    };



    return (
        <form className={styles.cityForm} onSubmit={sendData}>
            <input
                type="text"
                value={city}
                placeholder="Input city"
                onChange={(e) => setCity(e.target.value)}

            />
              <button className="search-button" type="submit" ><i className="fa fa-search"></i></button>

        </form>
    );
}
export default SearchBar