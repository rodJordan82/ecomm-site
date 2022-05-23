import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className={styles.Nav}>
            <div>
                <Link to="/tshirt">Plain Black Tees</Link>
            </div>
            {/* removed below link to stop customers having access...should be behind password but no time of working that out */}
            {/* <div>
                <Link to="/tshirts/create">Create Tshirt</Link>
            </div> */}
        </div>
    );
};

export default Nav;
