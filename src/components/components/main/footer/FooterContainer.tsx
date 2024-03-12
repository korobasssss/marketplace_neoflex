import {connect} from "react-redux";
import {Footer} from "@/components/components/main/footer/Footer";
import {FooterInterfaceState} from "@/components/interfaces/footerInterface";

const mapStateToProps = (state: FooterInterfaceState) => {
    return {
        appName: state.contacts.appName,
        contacts: state.contacts.contacts,
        rules: state.contacts.rules,
        contactsArr: state.contacts.contactsArr,
        pointsApp: state.contacts.pointsApp
    }
}

const mapDispatchToProps = {

}

export const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(Footer)