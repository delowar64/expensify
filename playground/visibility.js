// class VisibilityToggle extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             visibility: true
//         }
//         this.handleVisibility = this.handleVisibility.bind(this);
//     }
//     handleVisibility() {
//         this.setState(prvState => {
//             return { visibility: !prvState.visibility }
//         })
//     }
//     render() {
//         return(
//             <div>
//                 <button onClick={this.handleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
//                 {this.state.visibility && (
//                     <p>Hey, this is the details.</p>
//                 )}
//             </div>
//         )
//     }
// }