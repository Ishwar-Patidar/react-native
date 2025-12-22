import { Button, Text, TextInput, View } from "react-native";
import { StyleSheet } from "react-native";

function FormScreen() {
    return ( <>
        <View style={{margin:5, padding: 20, backgroundColor:"#eed0d060"}}>
            <View>
                <Text style={styles.label}>Username:</Text>
                <TextInput style={styles.textBox} placeholder="Enter username"/>
            </View>
            <View>
                <Text style={styles.label}>Mobile Number:</Text>
                <TextInput style={styles.textBox} placeholder="Enter mobile number"/>
            </View>
            <View>
                <Text style={styles.label}>Email:</Text>
                <TextInput style={styles.textBox} placeholder="Enter email"/>
            </View>
            <View>
                <Text style={styles.label}>Password:</Text>
                <TextInput style={styles.textBox} placeholder="Enter password"/>
            </View>
            <View>
                <Text style={styles.label}>Confirm Password:</Text>
                <TextInput style={styles.textBox} placeholder="Enter confirm password"/>
            </View>

            <View style={{marginTop: 20, width: '50%', alignSelf: 'center'}}>
                <Button color={'#36b64bff'} title="Submit" onPress={() => {}}/>
            </View>
        </View>
    </> );
}

const styles = StyleSheet.create({
    label:{
        fontSize: 16,
        marginBottom: 5,
    },
    textBox: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    }
})

export default FormScreen;
