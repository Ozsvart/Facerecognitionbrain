import React, { Component } from 'react'
import FaceRecognition from './Components/FaceRecognition/FaceRecognition'
import Navigation from './Components/Navigation/Navigation'
import Signin from './Components/Signin/Signin'
import Register from './Components/Register/Register'
import Logo from './Components/Logo/Logo'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import Rank from './Components/Rank/Rank'
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            input: '',
            route: 'signin',
            isSignedIn: false,
        }
    }

    onInputChange = (event) => {
        console.log(event.target.value)
    }

    onButtonSubmit = () => {
        // TODO - make IMAGE_URL an input
        const IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg'

        // Based on Clarifai documentation: https://docs.clarifai.com/api-guide/predict/images + https://docs.clarifai.com/clarifai-basics/quick-start/your-first-predictions
        const PAT = '92f20638e6404fee913bff8aa8de4559' // PAT (Personal Access Token) can be found in the portal under Authentification
        const USER_ID = 'avyqoyfd7q6o'
        const APP_ID = 'test'
        const MODEL_ID = 'general-image-recognition'
        const MODEL_VERSION_ID = 'aa7f35c01e0642fda5cf400f543e7c40'

        const payload = JSON.stringify({
            user_app_id: {
                user_id: USER_ID,
                app_id: APP_ID,
            },
            inputs: [
                {
                    data: {
                        image: {
                            url: IMAGE_URL,
                        },
                    },
                },
            ],
        })

        const requestOptions = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                Authorization: `Key ${PAT}`,
            },
            body: payload,
        }

        fetch(
            `https://api.clarifai.com/v2/models/${MODEL_ID}/versions/${MODEL_VERSION_ID}/outputs`,
            requestOptions,
        )
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log('error', error))
    }

    onRouteChange = (route) => {
        if (route === 'signout') {
            this.setState({ isSignedIn: false })
        } else if (route === 'home') {
            this.setState({ isSignedIn: true })
        }
        this.setState({ route: route })
    }

    render() {
        return (
            <div className="App">
                <Navigation
                    isSignedIn={this.state.isSignedIn}
                    onRouteChange={this.onRouteChange}
                />
                {this.state.route === 'home' ? (
                    <div>
                        <Logo />
                        <Rank />
                        <ImageLinkForm
                            onInputChange={this.onInputChange}
                            onButtonSubmit={this.onButtonSubmit}
                        />
                        <FaceRecognition />
                    </div>
                ) : this.state.route === 'signin' ? (
                    <Signin onRouteChange={this.onRouteChange} />
                ) : (
                    <Register onRouteChange={this.onRouteChange} />
                )}
            </div>
        )
    }
}

export default App
