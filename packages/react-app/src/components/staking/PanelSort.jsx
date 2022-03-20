import React from 'react';
import { MdArrowDropUp } from 'react-icons/md';
import './PanelSort.scoped.scss';

const SortHeader = ({
  sort,
  title,
  value,
  updateSort,
  toggleDirection,
  active,
  sortDirection,
}) => {
  const headerClass = `sort-by panel-sort-table-header ${
    active ? 'active' : ''
  } ${active && sortDirection === 0 ? 'asc' : ''} ${
    active && sortDirection === 1 ? 'desc' : ''
  }`;

  return (
    <th className={headerClass}>
      {sort ? (
        <a href='#/' className='sort-by-link'>
          <span onClick={() => updateSort(value)}>{title}</span>
          <MdArrowDropUp
            onClick={toggleDirection}
            className='material-icons notranslate'
          />
        </a>
      ) : (
        <span>{title}</span>
      )}
    </th>
  );
};

const PanelSort = ({
  sortField,
  properties,
  sortDirection,
  setSortField,
  toggleDirection,
}) => {
  const sortFields = properties.map((p) => (
    <SortHeader
      key={p.value}
      {...p}
      updateSort={setSortField}
      toggleDirection={toggleDirection}
      sort={p.sortable}
      active={p.value === sortField}
      sortDirection={sortDirection}
    />
  ));
  return (
    <thead>
      <tr className={`panel-sort-container`}>
        <th>#</th>
        {sortFields}
      </tr>
    </thead>
  );
};

export default PanelSort;
