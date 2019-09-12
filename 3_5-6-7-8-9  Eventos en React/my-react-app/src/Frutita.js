import React from 'react';

class Frutita extends React.Component {
    constructor(){
        super();
        this.state = {
            popularFruits: ['kiwi', 'pinneaple', 'strawberry'],
            newFruit: ''
          };
    }
    handleClick(ev){
        this.setState({
            newFruit: ev.target.value
          });
        //   console.log(newFruit);
        }
        render() {
            const frutis = this.state.popularFruits;
            const intemFruti = frutis.map((fruti, i) =>
            <div key={i}>{fruti}</div>)
            // const spreadFrutis = [...frutis];
            console.log(...frutis);
            return (
                
                <div>
                {intemFruti}
                <input type="text" value=""></input>
                <button onClick={this.handleClick}>Añadir</button>
            </div>

        );
    }
}
export default Frutita;