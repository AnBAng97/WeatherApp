import { useState } from "react";
import styles from "./SearchBar.module.css"
// import searchIcon from "./assets/search.png"

function SearchBar() {
    const [city, setCity] = useState("");


    return (
        <form class={styles.cityForm}>
            <input
                type="text"
                value={city}
                placeholder="Input city"
                onChange={(e) => setCity(e.target.value)}

            />
              <button class="search-button" type="submit"><i class="fa fa-search"></i></button>

        </form>
    );
}
export default SearchBar