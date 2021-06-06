import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    }

    acivateEditMode = () => {
        this.setState( {
            editMode: true
        } )
    }

    deacivateEditMode = () => {
        this.setState( {
            editMode: false
        } )
    }

    render() {
        console.log(this.props);
        return (
            <div>
                {!this.state.editMode && 
                    <p onDoubleClick={this.acivateEditMode}>{this.props.profile.aboutMe}</p>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deacivateEditMode} type="text" value={this.props.profile.aboutMe} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus