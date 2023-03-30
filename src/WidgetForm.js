import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useNavigate, useParams} from 'react-router-dom'
import { createWidget, editWidget } from './store'

const WidgetForm = () => {
    const { widgets } = useSelector(state => state)
    const { id } = useParams();
    const [name, setName] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        const widget = widgets.find(widget => widget.id === id);
        setName(widget ? widget.name : '')
    }, [id, widgets])

    const save = async (ev) => {
        ev.preventDefault()
        if(!id){
            await dispatch(createWidget({ name }));
            navigate('/widgets')
        } else {
            await dispatch(editWidget({ name, id}));
            navigate('/widgets')
        }
        
    }
    
    return (
        
        <form onSubmit={ save }>
            <input value={ name } onChange={(ev)=> setName(ev.target.value)} />
            <button>{id ? "Update" : 'Create'}</button>
        </form>
    )
}

export default WidgetForm;