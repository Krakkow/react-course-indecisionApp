console.log('App.js is running');



const app = {
    title: 'Title',
    subtitle: 'Subtitle',
    options: []
};


//const template = <p>This is JSX from app.js</p>;
const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = ' ';
        render();
    }
};

const wipeAll = () => {
    app.options = [];
    render();
};

const OnMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>Subtitle: {app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options: ' + app.options : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={OnMakeDecision}>What should I do?</button>
            <button onClick={wipeAll}>Wipe All!</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}> Option: {option}</li>
                    })
                    /*We could've also use the short version for the arrow function here like so:
                    
                         app.options.map((option) => <li key={option}> Option: {option}</li>)
                        
                    */
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);

}

render();