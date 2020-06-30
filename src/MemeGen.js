import React from 'react';

class MemeGen extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText:"",
            randomImg: "http://i.imgflip.com/1bij.jpg"
        }
        
    }
    componentDidMount(){
        
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