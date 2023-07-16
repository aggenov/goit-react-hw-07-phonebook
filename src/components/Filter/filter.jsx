
import { useDispatch, useSelector } from 'react-redux';
import { Label, Input } from './Filter.styled'
import { changeFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {

  const dispatch = useDispatch();
  const filter = useSelector(selectFilter)

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name='contactsFilter'
        value={filter}
        onChange={(event) => dispatch(changeFilter(event.currentTarget.value))}>
      </Input>
    </Label>
  );
};