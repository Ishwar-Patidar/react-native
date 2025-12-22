import React from "react";
import { View, Text } from "react-native";
const { StyleSheet } = require('react-native');

function Header({ navigation }: any) {
    
    return (
        <View style={styles.header}>
            <View style={styles.titleWrap}>
                <Text
                    style={styles.title}
                // numberOfLines={1}
                // ellipsizeMode="tail"
                >
                    PracticeProjects
                </Text>
            </View>

            <View style={styles.avatar}>
                <Text style={styles.avatarText} onPress={() => navigation.openDrawer()}>
                    Is
                </Text>
            </View>
        </View>
    );
}

export default Header;


export const styles = StyleSheet.create({
    header: {
        backgroundColor: '#4f46e5',
        paddingVertical: 14,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 4,
    },
    titleWrap: {
        flex: 1,
        marginRight: 12,
    },
    title: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '700',
    },
    avatar: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: 'rgba(255,255,255,0.18)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarText: {
        color: '#fff',
        fontWeight: '700',
    },
});
