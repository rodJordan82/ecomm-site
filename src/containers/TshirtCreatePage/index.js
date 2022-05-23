import { createRecordTshirt } from "../../services/tshirts";
import styles from "./TshirtCreatePage.module.scss";

const TshirtCreatePage = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData(e.target);



        let formObj = {};

        for (let key of form.keys()) {
            formObj[key] = form.get(key);
        }

        formObj = {
            ...formObj,
            isFavourite: formObj.isFavourite ? true : false,
        };

        await createRecordTshirt(formObj);
        // create firestore function for saving objects in my tshirt collection

        e.target.reset();
    };

    return (
        <div className={styles.TshirtCreatePage}>
            <div>
                <h2>Create a Tshirt record</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="tshirtName">Tshirt Name</label>
                        <input
                            id="tshirtName"
                            name="tshirtName"
                            type="text"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="size">
                            Size
                        </label>
                        <select id="size" name="size">
                                <option value="Small">Small</option>
                                <option value="Medium">Medium</option>
                                <option value="Large">Large</option>
                                <option value="X Large">X Large</option>
                                <option value="XX Large">XX Large</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="quantity">
                            Update stock quantity
                        </label>
                        <input
                            id="quantity"
                            name="quantity"
                            type="number"
                            min="1"
                            max="99"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="price">
                            RRP
                        </label>
                        <input
                            id="price"
                            name="price"
                            type="text"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="discount">
                            Discont on item, as a percentage
                        </label>
                        <input
                            id="discount"
                            name="discount"
                            type="number"
                            min="0"
                            max="75"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="isFavourite">
                            Favourite?
                        </label>
                        <input
                            id="isFavourite"
                            name="isFavourite"
                            type="checkbox"
                        />
                    </div>
                    <div>
                        <label htmlFor="imageURL">
                            URL for tshirt image
                        </label>
                        <input
                            id="imageURL"
                            name="imageURL"
                            type="text"
                        />
                    </div>

                    <button type="submit">Submit Data</button>
                </form>
            </div>
        </div>
    );
};

export default TshirtCreatePage;
