import React from "react";
import {
  AccountLabel,
  AccountList,
  AccountListItem,
  AccountSection,
  InfoText,
} from "../modules/property-details/style";
import RowContainer from "./ui/row-container";

const Mortgage = ({ account }) => {
  return (
    <AccountSection>
      <AccountLabel>Mortgage</AccountLabel>
      <RowContainer
        // This is a dummy action
        onClick={() => alert("You have navigated to the mortgage page")}
      >
        <AccountList>
          <AccountListItem>
            <InfoText>
              {new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
              }).format(
                Math.abs(account.associatedMortgages[0].currentBalance)
              )}
            </InfoText>
          </AccountListItem>
          <AccountListItem>
            <InfoText>{account.associatedMortgages[0].name}</InfoText>
          </AccountListItem>
        </AccountList>
      </RowContainer>
    </AccountSection>
  );
};

export default Mortgage;
