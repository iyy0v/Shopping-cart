import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value, // 'this.props' is predifined and returns the props of the element (except for 'key')
        imageURL: 'https://picsum.photos/100',
        tags: ['tag1', 'tag2', 'tag3']
    };

    styles = {
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "Arial",
    }
    /* OLD WAY 
    constructor() { // To solve the undefined 'this' problem in functions
        super();
        this.handleIncrement = this.handleIncrement.bind(this); // Return a new version of the previous function that contains 'this' in it
    }
    */
    formatCount() {
        const { value: value } = this.state;
        return value === 0 ? 'Zero' : value;
    }

    renderTags() {
        if(this.state.tags.length === 0) return <p>'There are no tags!'</p>;
        else return <ul>
                        { this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }
                    </ul>
    }

    handleIncrement = (product) => {
        console.log(product);
        // Old method : create a 'newState' then make the changement on it then put it in 'setState()'
        this.setState({ value: this.state.value + 1 }); // New method
    }

    render() {
        return ( 
            <div>
                <h3>Counter #{this.props.id}</h3>
                <img src={this.state.imageURL} alt=""/><br/>
                <span style={ this.styles } >count: {this.formatCount()}</span><br/>
                <button onClick={ () => this.handleIncrement(this) }>Increment</button>
                {this.state.tags.length === 0 && "Please create new Tags !"} 
                {this.renderTags()}
            </div> 
        );
    }

}

export default Counter;