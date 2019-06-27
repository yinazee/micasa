export const addHome = home => {
  return {
    type: 'ADD_HOME',
    home
  };
};

export const removeHome = id => {
  return {
    type: 'REMOVE_HOME',
    id
  };
};

export const addReview = location => {
  return {
    type: 'ADD_REVIEW',
    review
  };
};

export const removeReview = id => {
  return {
    type: 'REMOVE_REVIEW',
    id
  };
};
