import React ,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from '../List/index';
import './style.css';

export default class Footer extends Component {
    render() {
        let tutorials = ["HTML Tutorial","CSS Tutorial","Bootstrap Tutorials","JavaScript Tutorial"];
        let quizes = ["HTML Quiz","CSS Quiz","Bootstrap Quiz","JavaScript Quiz"];
        let examples = ["HTML Example","CSS Example","Bootstrap Example","JavaScript Example"];
        return(
            <div className="row TextColor bg-secondary">
            <div className="col text-center">
                <h2>Top Tutorials</h2>
                <List listItems={tutorials}/>
            </div>
            <div className="col">
                <h2>Top Examples</h2>
                <List listItems={quizes}/>
            </div>
            <div className="col">
                <h2>Top Quiz</h2>
                <List listItems={examples}/>
            </div>
        </div>
        );
    }
}