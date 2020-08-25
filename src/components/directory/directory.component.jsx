import React from 'react';
import { connect } from 'react-redux';
import { createStructureSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
  );

const mapStateToProps = createStructureSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
