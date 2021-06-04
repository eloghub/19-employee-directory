import react, {Component} from "react";
import API from "../utils/API";

class Main extends Component {
    state = {
        users: []
    }
    componentDidMount() {
        API.getAllEmployees().then(data => {
            console.log(data);
            this.setState({users: data.data.results})
        })
    }
    render() {
        return(
            <>
            {this.state.users.length > 0? (<h2>{this.state.users[0].name.first}</h2>): ("")}
            </>
        )
    }
}

export default Main;