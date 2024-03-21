import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements'; // Assuming you're using react-native-elements
import * as Animatable from 'react-native-animatable';

const FabButton = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        margin: 20,
      }}>
      <TouchableOpacity onPress={toggleExpand}>
        <Animatable.View
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite">
          <Icon name="add" />
        </Animatable.View>
      </TouchableOpacity>

      {expanded && (
        <Animatable.View
          animation="fadeIn"
          duration={500}
          style={{flexDirection: 'row', marginBottom: 20}}>
          <TouchableOpacity>
            <Icon name="icon1" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="icon2" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="icon3" />
          </TouchableOpacity>
          {/* Add more icons as needed */}
        </Animatable.View>
      )}
    </View>
  );
};

export default FabButton;
