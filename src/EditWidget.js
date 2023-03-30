import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editWidget } from './store'


const EditWidget = () => {
    const { widgets} = useSelector(state => state)
    const { id } = useParams();
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const widget = widgets.find(widge => widge.id === id)

    const edit = async (ev) => {
        ev.preventDefault();
        await dispatch( editWidget({ name, id }));
        navigate('/widgets')
    }

    useEffect(() => {
        const widget = widgets.find(widge => widge.id === id)
            setName(widget ? widget.name : '')
    }, [widgets])


    return (
        <div>
            <form onSubmit={ edit }>
                <input value={ name } onChange={ ev => setName(ev.target.value )}/>
                <button>EDIT</button>
            </form>
        </div>
    )
}

export default EditWidget;