import React from 'react';

class MemeGen extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText:"",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        }
    }
    render() {
        return (
            <div>
                memeGen here!!
            </div>
        )
    }
}

export default MemeGen;