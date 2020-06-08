import React, {Component} from "react"
import './DownloadBtn.css'
class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.imgChange = this.imgChange.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({ allMemeImgs: memes })
            })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ randomImg: randMemeImg })
    }
    imgChange(event){
      this.setState({
        randomImg: URL.createObjectURL(event.target.files[0])
      })
    }
    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />
                    <input type="file" name="filename" accept="image/gif, image/jpeg, image/png" onChange={this.imgChange} />
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <center><img src={this.state.randomImg} alt="Image" /></center>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
                <center>
                  <button className="btn"><i className="fa fa-download"></i><a href={this.state.randomImg} download={this.state.randomImg} > Download</a></button>
                </center>
            </div>
        )
    }
}

export default MemeGenerator
