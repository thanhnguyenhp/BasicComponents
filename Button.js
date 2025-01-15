import { TouchableOpacity, Text, StyleSheet } from 'react-native';
const Button = (props) => {
  return (
      <TouchableOpacity style={styles.button} onPress={props.onMyPress}>
        <Text style={styles.button_text}>{props.title}</Text>
      </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    marginBottom: 12,
    marginTop: 12,
  },
  button_text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFFFFF'
  }
});
export default Button;