import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function GroupRadio() {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">保育士</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="保育士" control={<Radio />} label="Female" />
        <FormControlLabel
          value="保護者保育士"
          control={<Radio />}
          label="Male"
        />
      </RadioGroup>
    </FormControl>
  );
}
