import {connect} from "react-redux";
import {FooterInterfaceState} from "@/app/interfaces/footerInterface";
import {Footer} from "@/app/components/main/footer/Footer";

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