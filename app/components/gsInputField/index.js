import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  Text,
} from '@gluestack-ui/themed';
import {StyleSheet} from 'react-native';

const GSInputField = ({
  fieldName,
  fieldType,
  fieldPlaceholder,
  onChangeText,
  errors,
}) => {
  return (
    <FormControl>
      <FormControlLabel>
        <FormControlLabelText>{fieldName}</FormControlLabelText>
      </FormControlLabel>
      <Input borderColor="black">
        <InputField
          type={fieldType}
          placeholder={fieldPlaceholder}
          onChangeText={onChangeText}
        />
      </Input>
      {errors && <Text style={styles.styledError}>{errors}</Text>}
    </FormControl>
  );
};

const styles = StyleSheet.create({
  styledError: {color: 'red'},
});
export default GSInputField;
