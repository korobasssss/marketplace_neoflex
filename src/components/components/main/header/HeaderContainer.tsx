import {connect} from "react-redux";
import {HeaderInterfaceState} from "@/components/interfaces/headerInterface";
import {Header} from "@/components/components/main/header/Header";

const mapStateToProps = (state: HeaderInterfaceState) => {
    return {
        appName: state.contacts.appName
    }
}

const mapDispatchToProps = {

}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)