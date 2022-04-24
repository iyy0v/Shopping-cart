import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        imageURL: 'https://picsum.photos/200',
        tags: ['tag1', 'tag2', 'tag3']
    };

    styles = {
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "Arial",
    }

    constructor() { // To solve the undefined 'this' problem in functions
        super();
        this.handleIncrement = this.handleIncrement.bind(this); // Return a new version of the previous function that contains 'this' in it
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
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
        this.setState({ count: this.state.count + 1 }); // New method
    }

    render() {
        return ( 
            <div>
                <img src={this.state.imageURL} alt=""/><br/>
                <span style={ this.styles } >count: {this.formatCount()}</span><br/>
                <button onClick={ () => this.handleIncrement({ id: 1 }) }>Increment</button>
                {this.state.tags.length === 0 && "Please create new Tags !"} 
                {this.renderTags()}
            </div> 
        );
    }

}

export default Counter;