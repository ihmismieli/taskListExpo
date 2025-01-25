import { FlatList, Text, View, StyleSheet, ItemSeparatorComponent } from "react-native";

export default function TaskList({ tasks }) {

    const ListEmptyComponent = () => {
        return (
            <Text style={styles.listEmpty}>No data available</Text>
        );

    }

    return (
        <FlatList
            data={tasks}
            ListEmptyComponent={ListEmptyComponent}
            renderItem={({ item }) =>(
                <View style={styles.listItem}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={{ color : item.priority === "high" ? '#FF1654' : 'black' }}>{item.priority}</Text>
                </View>
           )}
          ItemSeparatorComponent={<View style={styles.separator}/>}
        />
    );
}

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        width: '80%',
        margin: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#F1F2F6',
        padding: 10,
        borderRadius: 15,
    },
    separator: {
        backgroundColor: '#4C5760',
        height: 1.5,
        width: '90%',
        alignSelf: 'center',
    },
    listEmpty: {
        fontWeight:'200',
        fontStyle:'italic',
    },
    itemTitle: {
        fontSize: 20,
    },
})