import React from 'react';

export default props => {
    return (
        <form>
            <div className='form-group'>
                <label>{props.label}</label>
                <input {...props} className='form-control'/>
            </div>

        </form>
        )
}


