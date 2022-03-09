import { moderateScale, themes } from '../../setup';

const styles = {
    checkOutButton: {
        position: 'absolute',
        left: 0, right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes.lightBlue.bgButton2,
        height: 50,
        shadowColor: "black",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        bottom: 35,
        marginHorizontal: 15,
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 1,
    },
    checkoutText: {
        color: 'white',
        fontSize: 15,
        fontWeight: "700"
    },
    vatText: {
        fontSize: 10,
        color: themes.lightBlue.textDarkGrayColor
    },
    vatTextContainer: {
        flex: 0.1,
        justifyContent: 'center',
        margin: 15,
        marginTop: 0,
    },
    buyButton: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    receiptContainer: {

        flex: 0.1,
        justifyContent: 'center',
        margin: 15,
        borderWidth: 0.7,
        borderColor: themes.lightBlue.bgDarkThemeColor

    },
    receiptBgImage: {

        width: "50%",
        height: "100%",
        position: "absolute",
        opacity: 0.3,
        alignSelf: "center",
        zIndex: -1

    },
    receiptItemImage:{

        width: 100,
        height: 100,
        opacity: 0.9,
        alignSelf: "center",
    },
    flex1: {
        flex: 0.1
    },
    flex1Text: {
        fontSize: 10,
        color: themes.lightBlue.textDarkGrayColor
    },
    flex1Text2: {
        fontSize: 13,
        color: "black"
    },
    itemContainer:{ 
        borderTopColor:"white",
    borderTopWidth:1,
    padding: 5,
    flexDirection:"row"
    },
    addplusContainer:{ 
        justifyContent: "center", 
        alignItems: "center", 
        flex: 0.3, 
        padding: 8
    },
    titleText:{ 
        fontSize: 13, 
        color: themes.lightBlue.textDarkGrayColor 
    },
    amountText:{ 
        fontSize: 13, 
        color:"black",
    },
    addviewContainer:{ 
        justifyContent: "center", 
        alignItems: "center", 
        flex: 0.2,
         padding: 8,
    backgroundColor:"white"
    },
    addShowText:{ 
        fontSize: 14,
         color: 'black',
         fontWeight:"700" 
        },
  
    addRemove: {
        flex: 1, flexDirection: "row",
        marginTop: 20,
        justifyContent: "flex-start", 
        alignItems: "center"
    },
    promoConatiner: {
        flex: 0.1,
        justifyContent: 'center',
        margin: 15, marginTop: 0,
        borderColor: themes.lightBlue.textDarkThemeColor,
        borderWidth: 1,
    },
    promoText: {
        fontSize: 15,
        color: themes.lightBlue.textDarkGrayColor
    },
    promoTextConbtainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    promoButtonContainer: {
        flex: 0.35,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3,
        borderLeftColor: 'gray',
        borderLeftWidth: 1
    },
    promoTextInput: {
        height: 40,
        color: themes.lightBlue.textDarkThemeColor,
        fontSize: 15,
    },
    promoTextInputContainer: {
        flex: 0.65,
        justifyContent: 'center'
    },
    promoTextInputButton: {
        flex: 0.1,
        padding: 5,
        backgroundColor: 'white',
        minHeight: 50,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    addImage:{
        width:35,
        height:35
    },
    

}
export default styles