// let visibility = false;

// const toggleDetails = () => {
//     visibility = !visibility;   
//     renderBuildIt();
// }

// const appRoot = document.getElementById("app");


// const renderBuildIt = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleDetails}>
//                 {visibility ? "Hide details" : "Show details"}
//             </button>
//             {visibility && (
//                 <p>Secret Details!</p>
//             )}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// }

// renderBuildIt();


class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };            
        });
    }
    render() {
        const title = "Visibility Toggle";
        const secret = "Luke dies in episode 8";

        return (
            <div>
                <h1>{title}</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? "Hide details" : "Show details"}</button>
                {this.state.visibility && <p>{secret}</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));