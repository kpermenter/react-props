const AdamsComponent = (props) => {
    return <div>
        {props.greeting},
        {props.name}
    </div>
}

const Banana = (props) => {

    if (!props.imageURL) {
        return null
    }

    return <div>
        <h1>Fruits!</h1>
        <img src={props.imageURL} />
    </div>
}

const App = () => {
    return <div>
        <AdamsComponent greeting="hello" name="adam" />
        <Banana />
    </div>
}

ReactDOM.render(<App />, document.getElementById('root'))