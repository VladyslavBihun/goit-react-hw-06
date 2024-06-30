// SearchBox.jsx

import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/store";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filters.name);

  const handleChange = (evt) => {
    dispatch(setFilter(evt.target.value));
  };
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={value} onChange={handleChange}></input>
    </div>
  );
};

export default SearchBox;
