import React, {useState} from 'react'
import FormFile from './Forms/FormFile'
import Success from './Forms/Success'

const Preorder = () => {
    const [count,setCount] = useState(0)
    const [info, setInfo] = useState({})
    const increaseCount = () => {
        setCount(count + 1)
    }
    const decreaseCount = () => {
        setCount(count - 1)
    }

    if(count<=0) {
        return (
        <main>
            <FormFile count={count} increaseCount={increaseCount} info={info} />
        </main>
    )
    } else {
        return (
            <main>
                <Success decreaseCount={decreaseCount} count={count}/>
            </main>
        )
    }

    
}

export default Preorder
