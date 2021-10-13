import {add, remove, empty, reset} from './noobSlice'
import { useSelector, useDispatch } from 'react-redux'
import store from '../store'
import {useEffect, useState} from 'react'

const Noob = () => {
    const noob = useSelector(state => state.noob.value) 
    const dispatch = useDispatch()
    const [addInput, setAddInput] = useState('test');
    const [removeInput, setRemoveInput] = useState('test');

    return <div>
        <h2>This is Noob component</h2>
        <p>List of noobs:</p>
        <p><ul>
            {noob.map(item => <li>{item}</li>)}
            </ul></p>
        <div>
            <input id="add-input" type="text" value={addInput} onChange={e => setAddInput(e.target.value)} />
            <button onClick={() => dispatch(add(addInput))}>Add</button>
        </div>
        <div>
            <input id="remove-input" type="text" value={removeInput} onChange={e => setRemoveInput(e.target.value)} />
            <button onClick={() => dispatch(remove(removeInput))}>Remove</button>
        </div>
        <div>
            <button onClick={() => dispatch(empty())}>Empty</button>
        </div>
        <div>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    </div>
}
export default Noob