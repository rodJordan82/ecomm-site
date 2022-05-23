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



    //below is the code for the qty buttons

    const [count, setCount] = useState(1);
	

	const handleIncrement = () => {
		if (count <= tshirt.quantity){
            setCount(count + 1);
        }
	};

	const handleDecrement = () => {
		if (count > 1) {
			setCount(count - 1);
		}
	};

    const handleAddToCart = () => {

    };

    if (tshirt) {
        return (
            <p className={styles.tshirt}>
                <img src={`../.${tshirt.imageURL}`} alt="tshirt" />
                <div className={styles.notImage}>
                <div className={styles.blurb}>
                <p>{tshirt.tshirtName}</p>
                <p>{tshirt.size}</p>
                <p>${tshirt.price - ((tshirt.price/100) * tshirt.discount)}</p>
                </div>
                <div className={styles.Quantity}>
				<button
					className={styles.Quantity_Btn}
					onClick={handleDecrement}
				>
					-
				</button>
				Qty: {count}
				<button
					className={styles.Quantity_Btn}
					onClick={handleIncrement}
				>
					+
				</button>
                </div>
                <div className={styles.addToCart}>
                    <button
                        className={styles.addToCart_Btn}
                        onClick={handleAddToCart}
                    > ADD TO CART!
                    </button>
                </div>
                </ div>

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






