
import { useSelector , useDispatch } from "react-redux";


function Counter() {
  const dispath = useDispatch();
  const number = useSelector((state:any) => state.number);
  const color = useSelector((state:any) => state.color);
    return(
        <>
            <div style={{color:color}}>
                {number}
            </div>
            <button onClick={() => {
                dispath({ type : 'PLUS'});
            }}>증가하기</button>
        </>
    )
}
export default  Counter;