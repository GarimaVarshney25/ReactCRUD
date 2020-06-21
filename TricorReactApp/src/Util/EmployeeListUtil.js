export const getSortSymbol = (field, sortInfo) => {
   if (field === sortInfo.sortingField) {
        if (sortInfo.sortingMethod) {
            return '↑';
        } else {
            return '↓';
        }
    } 
    else {
      return '↕';
    }
};
