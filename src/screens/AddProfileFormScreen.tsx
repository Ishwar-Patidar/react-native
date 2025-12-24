import { useState } from "react";
import { Button, ScrollView, Switch, Text, TextInput, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import { checkValidatedInputs } from "../utils/Utils";
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
// import DocumentPicker from 'react-native-document-picker';

function AddProfileFormScreen() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [gender, setGender] = useState('male');
    const [agree, setAgree] = useState(false);
    const [country, setCountry] = useState('');
    const [file, setFile] = useState<any>(null);
    const [date, setDate] = useState<Date | null>(null);
    const [time, setTime] = useState<Date | null>(null);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);

    const pickFile = async () => {
        console.log("pick file in process");
        
        // try {
        //     const result = await DocumentPicker.pickSingle({
        //         type: DocumentPicker.types.allFiles,
        //     });

        //     setFile(result);
        // } catch (error: any) {
        //     if (DocumentPicker.isCancel(error)) {
        //         console.log('User cancelled');
        //     } else {
        //         console.log(error);
        //     }
        // }
    };

    const handleSubmit = () => {
        const formData = {
            name,
            email,
            age,
            password,
            gender,
            agree,
            country,
            fileName: file?.name,
            date,
            time,
            phone,
            username
        };
        const isValid = checkValidatedInputs('Email', email) &&
            checkValidatedInputs('Password', password) &&
            checkValidatedInputs('Name', name);
        if (!isValid) {
            return;
        }
        console.log(formData);
    };
    return (<>
        <View style={{ margin: 5, padding: 20, backgroundColor: "#eed0d060" }}>
            <ScrollView>
            <View>
                <Text style={styles.label}>Name:</Text>
                <TextInput value={name} onChangeText={setName} style={styles.textBox} placeholder="Enter Name" />
            </View>
            <View>
                <Text style={styles.label}>Username:</Text>
                <TextInput value={username} onChangeText={setUsername} style={styles.textBox} placeholder="Enter username" />
            </View>
            <View>
                <Text style={styles.label}>Mobile Number:</Text>
                <TextInput value={phone} onChangeText={setPhone} keyboardType="numeric" style={styles.textBox} placeholder="Enter mobile number" />
            </View>
            <View>
                <Text style={styles.label}>Email:</Text>
                <TextInput value={email} onChangeText={setEmail} keyboardType="email-address" style={styles.textBox} placeholder="Enter email" />
            </View>

            <View>
                <Text style={styles.label}>Age:</Text>
                <TextInput value={age} onChangeText={setAge} keyboardType="numeric" style={styles.textBox} placeholder="Enter age" />
            </View>

            <View>
                <Text style={styles.label}>Password:</Text>
                <TextInput value={password} onChangeText={setPassword} secureTextEntry style={styles.textBox} placeholder="Enter password" />
            </View>
            <View>
                <Text style={styles.label}>Confirm Password:</Text>
                <TextInput value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry style={styles.textBox} placeholder="Enter confirm password" />
            </View>

            <View>
                <Text style={styles.label}>Gender:</Text>
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => setGender('male')}>
                        <Text style={gender === 'male' ? styles.radioActive : styles.radio}>
                            ⭕ Male
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setGender('female')}>
                        <Text style={gender === 'female' ? styles.radioActive : styles.radio}>
                            ⭕ Female
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <Text style={styles.label}>Country</Text>
                <View style={styles.dropdown}>
                    <Picker selectedValue={country} onValueChange={setCountry}>
                        <Picker.Item label="Select Country" value="" />
                        <Picker.Item label="India" value="india" />
                        <Picker.Item label="USA" value="usa" />
                        <Picker.Item label="UK" value="uk" />
                    </Picker>
                </View>
            </View>

            <View>
                <TouchableOpacity style={styles.fileBtn} onPress={pickFile}>
                    <Text>Select File</Text>
                </TouchableOpacity>
                {file && <Text style={styles.fileText}>{file.name}</Text>}
            </View>

            <View>
                <Text style={styles.label}>Select Date</Text>
                <TouchableOpacity
                    style={styles.input}
                    onPress={() => setShowDatePicker(true)}
                >
                    <Text>
                        {date ? date.toDateString() : 'Choose Date'}
                    </Text>
                </TouchableOpacity>

                {showDatePicker && (
                    <DateTimePicker
                        value={date || new Date()}
                        mode="date"
                        display="default"
                        dateFormat="day month year"
                        onChange={(event, selectedDate) => {
                            setShowDatePicker(false);
                            console.log(event);
                            
                            if (selectedDate) setDate(selectedDate);
                        }}
                    />
                )}
            </View>
            <View>
                <Text style={styles.label}>Select Time</Text>

                <TouchableOpacity
                    style={styles.input}
                    onPress={() => setShowTimePicker(true)}
                >
                    <Text>
                        {time
                            ? time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                            : 'Choose Time'}
                    </Text>
                </TouchableOpacity>

                {showTimePicker && (
                    <DateTimePicker
                        value={time || new Date()}
                        mode="time"
                        display="default"
                        onChange={(event, selectedTime) => {
                            console.log(event);
                            
                            setShowTimePicker(false);
                            if (selectedTime) setTime(selectedTime);
                        }}
                    />
                )}
            </View>


            <View style={styles.checkboxRow}>
                <Switch value={agree} onValueChange={setAgree} />
                <Text style={{ marginLeft: 8 }}>I agree to terms</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            </ScrollView>
        </View>
    </>);
}

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    textBox: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#36b64bff',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    row: {
        flexDirection: 'row',
        gap: 20,
        marginVertical: 8,
    },
    radio: {
        color: '#555',
    },
    radioActive: {
        color: '#2563eb',
        fontWeight: '600',
    },
    checkboxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 12,
    },
    dropdown: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        marginVertical: 10,
    },
    fileBtn: {
        borderWidth: 1,
        borderColor: '#aaa',
        padding: 12,
        borderRadius: 6,
        alignItems: 'center',
        marginTop: 10,
    },
    fileText: {
        marginTop: 6,
        fontSize: 12,
        color: '#555',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        borderRadius: 6,
        marginBottom: 12,
        justifyContent: 'center',
    }
})

export default AddProfileFormScreen;
