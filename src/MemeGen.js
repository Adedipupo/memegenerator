import React from 'react';

class MemeGen extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText:"",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: [ ]
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(){

    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            this.setState({allMemeImgs : memes})
        })
    }

    render() {
        return (
            <div>
                <form className="meme-form">
                  <input type="text" 
                     name="topText" 
                     placeholder="topText"
                     value={this.state.topText}   
                     onChange={this.handleChange}
                  />

                {this.state.randomImg}

                <input type="text"
                    name="bottomText"
                    placeholder="bottomText"
                    value={this.state.bottomText}
                    onChange={this.handleChange}
                />


                    <button>Gen</button>
                </form>
            </div>
        )
    }
}

export default MemeGen;