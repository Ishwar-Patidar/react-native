import { Alert } from "react-native";

export const checkValidatedInputs = (label: string, value: any) => {
    if (!value.trim()) {
        Alert.alert('Validation Error', `${label} cannot be empty.`);
        return false;
    }

    switch (label) {
        case 'Email': {
            const email = String(value).trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                Alert.alert('Validation Error', 'Please enter a valid email address.');
                return false;
            }
            break;
        }
        case 'Password': {
            const password = String(value);
            if (password.length < 6) {
                Alert.alert('Validation Error', 'Password must be at least 6 characters long.');
                return false;
            }
            break;
        }
        case 'Phone': {
            const phone = String(value).trim();
            const digits = phone.replace(/\D/g, '');
            if (digits.length < 10) {
                Alert.alert('Validation Error', 'Please enter a valid phone number.');
                return false;
            }
            break;
        }
        case 'Age': {
            const n = Number(String(value).trim());
            if (Number.isNaN(n) || n < 0) {
                Alert.alert('Validation Error', 'Please enter a valid age.');
                return false;
            }
            break;
        }
        default:
            break;
    }
    return true;
}