import {moderateScale} from '../setup';

const styles = {
//Category Header
  
    HeaderContainer: {
        justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginHorizontal: 4,
    },
    HeaderButton:{
        flex: 1 / 3, 
        justifyContent: "center", 
                    alignItems: "center",
                    paddingVertical: 10,
                    margin: 4,
                    borderRadius: 8,
    },
    HeaderText:{
        textAlign: 'left',
        fontSize: moderateScale(14),
        fontWeight: '500'
    },

    //Category Switcher
    Switchercontainer:{
        marginTop:3,
        alignItems: 'center',
         justifyContent: 'center',
    },
    SwitcherButton:{
        padding: 8,
                                    borderWidth: 2,
                                    borderRadius: 12,
                                    backgroundColor: "white",
    },
    SwitcherText:{
        fontWeight: 15,
        fontWeight: "500",
    }

}
export default styles