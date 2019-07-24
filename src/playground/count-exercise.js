// // JSX — Javascript XML

// const app = {
//     title: "Indecision App",
//     subtitle: "Put your life in the hands of a computer",
//     options: ['One', 'Two']
// }

// const template = (
//     <div>
//         <h1>{app.title}</h1>
//         {app.subtitle && <p>{app.subtitle}</p>}
        
//         <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
//         <ol>
//             <li>item 1</li>
//             <li>item 2</li>
//         </ol>
//     </div>
// );
// const user = {
//     name: "Wesley Jones",
//     age: 21,
//     location: "Downingtown"
// }

// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>;
//     } 
// }

// let count = 0;

// const addOne = () => {
//     console.log("add one");
//     count++;
//     renderCounterApp();
// };
// const minusOne = () => {
//     console.log("minus one");
//     count--;
//     renderCounterApp();
// };
// const resetCount = () => {
//     console.log("reset count");
//     count = 0;
//     renderCounterApp();
// };

// const appRoot = document.getElementById("app");

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={resetCount}>Reset</button>
//         </div>  
//     );

//     ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp();


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        const json = localStorage.getItem('count');
        const count = JSON.parse(json);
        
        if (!isNaN(count)) {
            this.setState(() => ({count}));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            const json = JSON.stringify(this.state.count);
            localStorage.setItem('count', json);
        }
        // console.log('saving data', json);
    }

    handleAddOne() {
        this.setState((previousState) => {
            return {
                count: previousState.count + 1
            };
        });
    }
    handleMinusOne() {
        this.setState((previousState) => {
            return {
                count: previousState.count - 1
            };
        });
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

// Counter.defaultProps = {
//     count: 0
// };

ReactDOM.render(<Counter />, document.getElementById('app'));