import { useSelector } from "react-redux";

const Card = () => {
    const result = useSelector((state) => state);

    return (
        <div>
            {result.reducer}
        </div>
    )
}

export default Card