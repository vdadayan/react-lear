import React, { useState } from 'react';

const ProfileStatusWithHooks = (props) => {
    console.log(props);
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const acivateEditMode = () => {
        setEditMode(true)
    }
    const deacivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }
    
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return(
        <div>
            {!editMode && 
                <p onDoubleClick={acivateEditMode}>{props.status || 'sadasda'}</p>
            }
            {editMode &&
                <div>
                    <input
                        onChange={onStatusChange}
                        autoFocus={true} 
                        type="text"
                        value={status}
                        onBlur={deacivateEditMode}
                        />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;