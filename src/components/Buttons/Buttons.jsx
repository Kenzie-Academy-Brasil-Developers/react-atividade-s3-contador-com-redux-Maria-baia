import { useDispatch } from "react-redux";
import { addCount, subCount } from "../../store/modules/counter/action";

const Buttons = () => {
    const dispatch = useDispatch();

    return(
        <div>
            <button onClick={() => dispatch(addCount(1))}>+</button>
            <button onClick={() => dispatch(subCount(1))}>-</button>
        </div>
    )
}

export default Buttons