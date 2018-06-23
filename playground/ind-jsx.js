// const app = {
//     name: 'Indecision App',
//     desc: 'Simple React App Practice.',
//     root: document.getElementById('root'),
//     options: []
// }

// const onFormSubmit = e => {
//     e.preventDefault();
//     const option = e.target.elements.option.value;
//     if (option) {
//         app.options.push(option);
//         e.target.elements.option.value = '';
//         templateRender();
//     }
// };

// const onFormReset = () => {
//     app.options = [];
//     templateRender();
// };

// const onMakeDecision = () => {
//     const randNum = Math.floor(Math.random() * app.options.length);
//     const option = app.options[randNum];
//     templateRender();
// };

// const templateRender = () => {
//     const template = (
//         <div>
//             <div className="container">
//                 <h1> {app.name} </h1>    
//                 <p>{app.desc}</p>
//             </div> 
//             <div className="container">
//                 <div className="row">
//                     <div className="col-6">
//                         <p>{app.options.length ? 'Here are your options' : 'No options'}</p>
//                         <ol>
//                             {
//                                 app.options.map((opt, ind) => <li key={ind}> {opt} </li>)
//                             }
//                         </ol>    
//                         <button disabled={app.options.length === 0} onClick={onFormReset} className="btn btn-danger mb-2">Remove All</button>
//                         <button disabled={app.options.length === 0} onClick={onMakeDecision} className="btn btn-success mb-2 ml-2">Make Decision</button>
//                         <hr/>
//                         <form onSubmit={onFormSubmit}>
//                             <div className="form-group">
//                                 <input className="form-control" type="text" name="option" />
//                             </div>    
//                             <form-group>
//                                 <button className="btn btn-primary">Add Option</button>
//                             </form-group>
//                         </form>
//                     </div>
//                 </div>    
//             </div>
//         </div>    
//     ); 
//     ReactDOM.render(template, app.root);
// };

// templateRender();