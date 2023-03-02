const FunctionalGreetingWithProps = (props) => {
    console.log(props)
    return <div>
        <h1>Hello. {props.greeting}, {props.name}.</h1>
        <p>I see you're {props.age} years old.</p>
    </div>
}

export default FunctionalGreetingWithProps