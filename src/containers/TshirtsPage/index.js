import { getAllTshirts } from "../../services/tshirts";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./TshirtsPage.module.scss";


const TshirtsPage = () => {
    const [tshirts, setTshirts] = useState([]);

    useEffect(() => {
        (async () => {
            setTshirts(await getAllTshirts());
        })();
    }, []);

 

    return (
        <>
            <tag className={styles.tag}>
            {tshirts.length &&
                tshirts.map((tshirt, idx) => (
                    <Link to={`/tshirts/${tshirt.id}`}>
                        <p key={idx} className={styles.card} >
                        <img src={tshirt.imageURL} alt="tshirt" />
                        <br />
                        {tshirt.tshirtName}
                        <br />
                        {tshirt.size}
                        <br />
                        ${tshirt.price}

                    </p>
                    </Link>
                ))}
            </tag>
        </>
    );
};

export default TshirtsPage;
