class IndecisionApp extends React.Component {
   constructor(props) {
       super(props);
       this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
       this.state = {
           options: ['Thing one ', 'Thing two ', 'Thing four ']
       }
   }
   
   handleDeleteOptions() {
       this.setState(() => {
           return{
               options: []
           };
       });
   }
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0}/>
                <Options 
                options={this.state.options} 
                handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {

        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert("handlePick");
    }
    render() {
        return (
            <div>
                <button 
                onClick={this.handlePick}
                disabled={!this.props.hasOptions}
                >
                What Should I Do?
                </button>
            </div>
        );
    }
}

//Challenge from course

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
          </div>
        );
    }
}


class AddOption extends React.Component {
    onFormSubmit(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if (option) {
            alert(option);
            e.target.elements.option.value = ' ';
        }
    };
    render() {
        return (
            <div>
            <form onSubmit={this.onFormSubmit}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
             </div>
        );
    }
}
// End of challenge




ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

