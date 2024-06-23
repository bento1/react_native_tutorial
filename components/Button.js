import { Pressable, Text,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const ButtonTypes={
    NUMBER:'NUMBER',
    OPERATOR:'OPERATOR'
}

const Colors ={
    NUMBER:['#71717a','#3f3f46'],
    OPERATOR:['#f59e0b','#b45309']
}
function Button({title,onPress,buttonStyle,buttonType}){
    return (
        <Pressable
        style={({pressed})=>
            [styles.button,
                {backgroundColor:Colors[buttonType][0]},
                pressed&&{backgroundColor:Colors[buttonType][1]},
                buttonStyle,
            ]
        }
        onPressOut={onPress}
        >
            <Text style={styles.title}>{title}</Text>
        </Pressable>

    );
}
// Button.defaultProps={
//     buttonType:ButtonTypes.NUMBER,
// };

Button.propTypes ={
    title:PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    buttonStyle: PropTypes.object,
};

const styles = StyleSheet.create({
    button:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#71717a',
        // borderWidth:1,
    },
    title:{
        color:'#ffffff',
        fontSize:50,
    }
});

export {ButtonTypes};
export default Button;