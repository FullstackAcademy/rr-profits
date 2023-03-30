import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

const Widgets = () => {
    const {widgets} = useSelector(state => state)
   
    return (
        <div>
            <ul>
                {widgets.map( widget => {
                    return (
                        <li key={widget.id}>
                        <Link to={ `/widgets/${widget.id}`}>
                            { widget.name }
                            </Link>

                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Widgets;