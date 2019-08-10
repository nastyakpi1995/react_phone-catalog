import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Loading from './Loading';

const PhonesPage = ({ phones, phoneId, urlImg }) => (
  phones.length === 0 && phoneId === null
    ? <Loading />
    : (
      phones.map(phone => (
        <div
          key={phone.id}
          className="catalog__phones"
        >
          <div className="card" data-qa="card">
            <img
              src={
                `${urlImg}/${phone.imageUrl}`
              }
              alt="Motorrola"
              className="card__img"
            />
            <div className="card__text">{phone.name}</div>
            <div>
              <NavLink to={`/phones/${phone.id}`}>{ phone.id}</NavLink>
            </div>
            <div className="card__block-price">
              <div className="card__price">details:</div>
              <div className="card__price-number">{phone.snippet}</div>
            </div>
            <button type="submit">
              Add
            </button>
          </div>
        </div>
      )))
);

PhonesPage.propTypes = {
  phones: PropTypes.shape(
    PropTypes.string,
    PropTypes.string,
    PropTypes.object,
  ).isRequired,
  phoneId: PropTypes.string.isRequired,
  urlImg: PropTypes.string.isRequired,
};

export default PhonesPage;