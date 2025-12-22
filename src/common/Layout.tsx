import { View, Text, ScrollView } from "react-native";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
    console.log("Hello");
    
    return (
        <View >
            <Header />
            
            <Footer />
        </View>
     );
}

export default Layout;
