import breads from '../../database/breads.json';
import cakes from '../../database/cakes.json';
import muffins from '../../database/muffins.json';

export const pAchangeCategory = (category) => {
  return (dispatch) => {
    dispatch({
      type: 'CHANGE_CATEGORY',
      payload: category,
    });
  };
};

export const pAfetchBreadsData = () => {
  return (dispatch) => {
    dispatch({
      type: 'GET_BREADS_DATA',
      payload: breads,
    });
  };
};

export const pAfetchCakesData = () => {
  return (dispatch) => {
    dispatch({
      type: 'GET_CAKES_DATA',
      payload: cakes,
    });
  };
};

export const pAfetchMuffinsData = () => {
  return (dispatch) => {
    dispatch({
      type: 'GET_MUFFINS_DATA',
      payload: muffins,
    });
  };
};
