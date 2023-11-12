import { useSelector,useDispatch } from "react-redux";
import {View, StyleSheet,FlatList} from 'react-native';
import { fectchContactsSuccess } from "./Store";
import ContactListItem from "./ContactListItem";




const keyExtractor =({phone}) =>phone;

const fectchContacts = async()=>{
    const data = await fetch("https://randomuser.me/api/?results=50")
    const ContactData = await data.json();
    return ContactData.results.map(mapContacts);
};
const Contacts =({}) => {
    const{contacts} = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(()=> {
        fectchContacts()
        .then(
            contacts =>{
                dispatch(fectchContactsSuccess(contacts));
            }
        )
        .catch(
            e=>{

            }
        )
    },[])
    
    const renderContacts =({item}) =>{
        const{name, avatar ,phone} = item;
        return <ContactListItem
        name={name}
        avatar={avatar}
        phone={phone}
        onPress={()=> navigation.navigate("ProfileContact",{contact:item})}
        />;
    };
    const styles= StyleSheet.create({
        container: {
            justifyContent:'center',
            flex:1,
            paddingHorizontal:10,
        },
    });
    return (
        <View style={styles.container}>
            <FlatList
            data={contacts}
            keyExtractor={keyExtractor}
            renderItem={renderContacts}
            />
        </View>
    );
    
};
export default Contacts;