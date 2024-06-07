import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { Text, TouchableOpacity, View } from 'react-native';

export const showToast = ({ type, message }) => Toast.show({
  type: type || 'error',
  text1: message
});

export const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  // success: (props) => (
  //   <BaseToast
  //     {...props}
  //     style={{ height: 'auto' }}
  //     contentContainerStyle={{ paddingHorizontal: 15 }}
  //     text1Style={{
  //       fontSize: 15,
  //       fontWeight: '400'
  //     }}
  //   />
  // ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: (props) => (
    <ErrorToast
      {...props}
      text1Props={{ numberOfLines: 5 }}
    // text1Style={{
    //   fontSize: 17
    // }}
    // text2Style={{
    //   fontSize: 15
    // }}
    />
  ),
  /*
    Or create a completely new type - `tomatoToast`,
    building the layout from scratch.

    I can consume any custom `props` I want.
    They will be passed when calling the `show` method (see below)
  */
  customError: ({ text1, props }) => (
    <View style={{ height: 60, width: '100%', backgroundColor: 'tomato' }}>
      <Text>{text1}</Text>
    </View>
  )
};