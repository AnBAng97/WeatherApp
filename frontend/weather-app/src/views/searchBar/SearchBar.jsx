import { useState } from "react";
import styles from "./SearchBar.module.css"
import { useMediaQuery } from 'react-responsive'

function SearchBar(props) {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const [city, setCity] = useState("");
    
    const sendData = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        props.cityCallback(city)
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