import React from 'react';

export default class App extends React.Component {
  constructor() {
      super();
      this.state = {
        data:[]
      };
  }

  componentDidMount() {
    fetch("/restaurants")
      .then(res => res.json())
      .then(res => this.setState({data: res}))
      .catch(e => alert(e));
  }

  render() {
    return (
       <div className='table-responsive col-sm-offset-1 col-sm-10'>
          <table className='table table-condensed table-striped table-bordered table-hover no-margin'>
            <thead>
                  <tr>
                    <th>Restaurant</th>
                    <th>Location</th>
                    <th align='center'>Rating</th>
                  </tr>
             </thead>
             <tbody>
                {this.state.data.map((restaurant, i) => <TableRow key = {i} data = {restaurant} />)}
             </tbody>
          </table>
       </div>
    );
  }
}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.location}</td>
            <td align='center'>{this.props.data.rating}</td>
         </tr>
      );
   }
}
