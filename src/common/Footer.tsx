import { View, Text } from "react-native";

function Footer() {
    return (
        <View style={{ paddingVertical: 12, paddingHorizontal: 16, borderTopWidth: 1, borderTopColor: '#e6e6e6', backgroundColor: '#fafafa', alignItems: 'center' }}>
            <Text style={{ fontSize: 16, fontWeight: '600', color: '#222' }}>PracticeProject</Text>
            <Text style={{ fontSize: 12, color: '#666', marginTop: 4 }}>© {new Date().getFullYear()} Ishwar. All rights reserved.</Text>
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
                <Text style={{ fontSize: 13, color: '#007AFF', marginHorizontal: 8 }}>Privacy</Text>
                <Text style={{ fontSize: 13, color: '#007AFF', marginHorizontal: 8 }}>Terms</Text>
                <Text style={{ fontSize: 13, color: '#007AFF', marginHorizontal: 8 }}>Contact</Text>
            </View>
        </View>
    );
}

export default Footer;
