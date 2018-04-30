class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggleVisibilty = this.handleToggleVisibilty.bind(this);
        this.state = {
            visibilty: false
        };
    }


    handleToggleVisibilty() {
        this.setState((prevState) => {
            return {
                visibilty: !prevState.visibilty
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibilty}>
                    {this.state.visibilty ? 'Hide details' : 'Show Details'}
                </button>
                {this.state.visibilty && (
                    <div>
                        <p>These are some details you can now see!</p>
                    </div>
                )}
            </div>
        );
    }

}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
