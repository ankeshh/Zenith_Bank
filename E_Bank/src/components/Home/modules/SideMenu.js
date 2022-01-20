import React from "react";
import { withRouter } from "react-router";
import { CardIcon, DashboardIcon, IconText, LocationIcon, SideGrid, SideGridElementComponent, SideGridElements, 
    TransactionIcon, AccountIcon, BeneficiaryIcon, MessageIcon,SettingsIcon} from "../HomeElements";

class SideMenu extends React.Component {
    render() {
        return (
            <>
                <SideGrid>
                    <SideGridElementComponent>
                        <SideGridElements>
                            <DashboardIcon/>
                            <IconText to="/home">Dashboard</IconText>
                        </SideGridElements>
                        <SideGridElements>
                            <AccountIcon/>
                            <IconText to="/account">Accounts</IconText>
                        </SideGridElements>
                        <SideGridElements>
                            <BeneficiaryIcon/>
                            <IconText to="/beneficiary">Beneficiary</IconText>
                        </SideGridElements>
                        <SideGridElements>
                            <TransactionIcon/>
                            <IconText to="/transaction">Transaction</IconText>
                        </SideGridElements>
                        <SideGridElements>
                            <CardIcon/>
                            <IconText to='/card'>Card</IconText>
                        </SideGridElements>
                        <SideGridElements>
                            <MessageIcon/>
                            <IconText to='/message'>Message</IconText>
                        </SideGridElements>
                        <SideGridElements>
                            <LocationIcon/>
                            <IconText to='/location'>Locate Us</IconText>
                        </SideGridElements>
                        <SideGridElements>
                            <SettingsIcon />
                            <IconText to='/settings'>Settings</IconText>
                        </SideGridElements>
                    </SideGridElementComponent>
                </SideGrid>
            </>
        )
    }
}

export default withRouter(SideMenu);