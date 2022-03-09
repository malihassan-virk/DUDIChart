import { moderateScale, themes } from '../../setup';

const styles = {
    ItemContainer: {
        flex: 1,
        padding: moderateScale(4),
        margin: 5,
        marginBottom: moderateScale(5),
        borderColor: themes.lightBlue.bgDarkThemeColor,
        borderWidth: 0.5,
        borderRadius: moderateScale(8)
    },
    center: {
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: "100%",
        height: moderateScale(200),
    },
    priceRow: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    priceContainer: {
        justifyContent: "center", flex: 0.6
    },
    offerContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 0.4,
        backgroundColor: themes.lightBlue.bgButton,
        borderRadius: 15, alignSelf: "flex-start",
        padding: 5
    },
    detailsContainer: {
        flex: 1,
        marginTop: 5,
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    details: {
        justifyContent: "center",
        flex: 1,
    },
    subscribe: {
        flex: 1, flexDirection: "row",
        marginTop: 10,
        justifyContent: "center", alignItems: "center"
    },
    add: {
        position: "absolute",
        bottom: 5,
        right: 10,
        height: 36,
        width: 36,
        borderRadius: 18,
        backgroundColor: themes.lightBlue.bgLightThemeColor,
        justifyContent: "center",
        alignItems: "center"
    }

}
export default styles