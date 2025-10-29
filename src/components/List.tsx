import { FlatList, ScrollView, Text, View } from "react-native";

function List(props: any) {
    console.warn(props);
    return (<>
        {/* <ScrollView> */}
        {/* {props.list.map((item: any) => (
                <View key={item.id} style={{ margin: 10, padding: 10, borderWidth: 1, borderColor: '#000' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>Id : {item.id}</Text>
                    <Text style={{ fontSize: 14, marginBottom: 5 }}>User Id : {item.userId}</Text>
                    <Text style={{ fontSize: 14, marginBottom: 5 }}>Title : {item.title}</Text>
                    <Text style={{ fontSize: 14 }}>Body : {item.body}</Text>
                </View>
            ))} */}
        {/* </ScrollView> */}

        <Text style = {{ color: "green", fontSize: 20 }}>List</Text>
        <FlatList data={props.list} renderItem={({ item }) =>
            <View key={item.id} style={{ margin: 10, padding: 10, borderWidth: 1, borderColor: '#000' }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>Id : {item.id}</Text>
                <Text style={{ fontSize: 14, marginBottom: 5 }}>User Id : {item.userId}</Text>
                <Text style={{ fontSize: 14, marginBottom: 5 }}>Title : {item.title}</Text>
                <Text style={{ fontSize: 14 }}>Body : {item.body}</Text>
            </View>
        } />

    </>);
}

export default List;
