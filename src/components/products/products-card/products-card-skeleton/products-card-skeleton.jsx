import styles from "./products-card-skeleton.module.scss";
import {classNames} from "../../../../utils/classNames";
import Skeleton from "../../../global/skeleton/skeleton";

function ProductsCardSkeleton(props) {
    const {
        className,
        ...other
    } = props;

    return (
        <div className={classNames([styles.card, className])} {...other}>
            <Skeleton className={classNames([styles.card_img])}/>
            <Skeleton className={classNames(["h4-skeleton", styles.card_title])}/>
            <Skeleton className={classNames(["p-skeleton", styles.card_paragraph])}/>
            <Skeleton className={classNames(["p-skeleton", styles.card_price])}/>
        </div>
    );
}

export default ProductsCardSkeleton;