import React from 'react';

import RandomCat from './RandomCat';

class CatList extends React.Component {
render() {
    return (
      <section className="section-cats">
        <h1>All Cats Are Beautiful</h1>
        	<ul className="section-cats_list">
          <li><RandomCat width="200px" height="200px"/></li>
          <li><RandomCat width="200px" height="400px"/></li>
          <li>
            <i><RandomCat /></i> cats
          </li>
        </ul>
      </section>
    );
  }
}

export default CatList;