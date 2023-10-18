import React from "react";
import RowContainer from "./row-container";
import {
  AccountLabel,
  AccountList,
  AccountListItem,
  AccountSection,
  InfoText,
} from "../modules/property-details/style";

const PropertyDetails = ({ account }) => {
  return (
    <AccountSection>
      <AccountLabel>Property details</AccountLabel>
      <RowContainer>
        <AccountList>
          <AccountListItem>
            <InfoText>{account.name}</InfoText>
          </AccountListItem>
          <AccountListItem>
            <InfoText>{account.bankName}</InfoText>
          </AccountListItem>
          <AccountListItem>
            <InfoText>{account.postcode}</InfoText>
          </AccountListItem>
        </AccountList>
      </RowContainer>
    </AccountSection>
  );
};

export default PropertyDetails;
