//Learning about state


class Counter extends React.Component{
    constructor(props){
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    handleAddOne()  {
        this.setState((pervState) =>{
            return {
                count: pervState.count + 1
            };
        });
    }

    handleMinusOne() {
        this.setState((pervState) => {
          return {
            count: pervState.count - 1
          }; 
        });
    }
    handleReset() {
        this.setState(() => {
            return{
                count: 0
            };
        });
        
    }
    render() {
        return (
             <div>
                 <h1>Count: {this.state.count} </h1>
                 <button onClick={this.handleAddOne}>+1</button>
                 <button onClick={this.handleMinusOne}>-1</button>
                 <button onClick={this.handleReset}>reset</button>
             </div>
        );
    }
}



ReactDOM.render(<Counter />, document.getElementById('app'));
// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounetrApp();
// }
// const minusOne = () => {
//     count--;
//     renderCounetrApp();
// }
// const reset= () => {
//     count = 0;
//     renderCounetrApp();
// }

// const appRoot = document.getElementById('app');

// const renderCounetrApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>Click To Count</button>
//             <button onClick={minusOne}>Click To Subtract</button>
//             <button onClick={reset}>Click To Reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounetrApp();

// ReactDOM.render(templateTwo, appRoot);



// const user = {
//     name: 'Or',
//     Age: 30,
//     location: 'Fuck off!'
// };

// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>;
//     }
// }

// // function name(params) {

// // }

// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymus'}</h1>
//         {(user.Age && user.Age >= 18) && <p>Age: {user.Age}</p>}
//         {getLocation(user.location)}
//     </div>
// );