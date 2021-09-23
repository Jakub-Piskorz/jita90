import { useSelector, useDispatch } from 'react-redux'
import { plusOne, minusOne, selectNoob } from './noobSlice'
const Noob = (props) => {
  const dispatch = useDispatch()
  const noobs = useSelector(selectNoob)
  return (
    <div>
      <button onClick={() => dispatch(plusOne())}>+1</button>
      <p>{noobs}</p>
      <button onClick={() => dispatch(minusOne())}>-1</button>
    </div>
  )
}

export default Noob
