import { Link } from "react-router-dom";

const Item = (props) => {
    const { id, title, price, pictureUrl } = props;

    return (
        <>
            <Link to={`/item/` + id}>
                <div>
                    <img src={pictureUrl} alt="" className="img"/>
                    <h1>{title}</h1>
                    <h2>{price}</h2>
                </div>
            </Link>
            <style>{`
                .img {
                    width: 300px;
                    height: 300px
                } 
            `}
            </style>
        </>
    );
}

export default Item;