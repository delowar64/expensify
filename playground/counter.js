
// class Counter extends React.Component{
//     constructor(props) {
//         super(props);
//         this.handleAdd = this.handleAdd.bind(this);
//         this.handleMinus = this.handleMinus.bind(this);
//         this.handleReset = this.handleReset.bind(this);
//         this.state = {
//             count: 0
//         };
//     }
//     handleAdd() {
//         this.setState(prvState => {
//             return { count: prvState.count + 1 }
//         })
//     }
//     handleMinus() {
//         this.setState(prvState => {
//             return {count: prvState.count - 1}
//         })
//     }
//     handleReset() {
//         this.setState(prvState => {
//             return {count: 0}
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <h2>Count: {this.state.count}</h2>
//                 <button onClick={this.handleAdd} className="btn btn-primary">+1</button>
//                 <button onClick={this.handleMinus} className="btn btn-primary ml-2 mr-2">-1</button>
//                 <button onClick={this.handleReset} className="btn btn-primary">Reset</button>
//             </div>
//         )
//     }
// }

