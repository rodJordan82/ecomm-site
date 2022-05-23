import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./TshirtPage.module.scss"
import { findByIdTshirt } from "../../services/tshirts";

const TshirtPage = () => {
    const [tshirt, setTshirt] = useState(null);
    const { id } = useParams();
    console.log(tshirt);

    useEffect(() => {
        (async () => {
            setTshirt(await findByIdTshirt(id));
        })();
    }, [id]);

    if (tshirt) {
        return (
            <p className={styles.tshirt}>
                <img src={`../.${tshirt.imageURL}`} alt="tshirt" />
                <br />
                {tshirt.tshirtName}
                <br />
                {tshirt.size}
                <br />
                ${tshirt.price}
                {}
            </p>
        );
    } else {
        return (
            <p>
                Record with {"=>"} {id} could not be found
            </p>
        );
    }
};

export default TshirtPage;
