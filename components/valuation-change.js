import React from "react";
import { format } from "date-fns";
import { Chip } from "./ui/chip";
import ColumnContainer from "./ui/column-container";
import {
  AccountLabel,
  AccountList,
  AccountListItem,
  AccountListChipItem,
  AccountSection,
  InfoText,
} from "../modules/property-details/style";
import {
  getAnnualAppreciationPercentage,
  getSincePurchasePercentage,
  getSincePurchase,
} from "../utils/helpers";
import { formatToCurrency } from "../utils/formating";

const ValuationChange = ({ account }) => {
  const sincePurchase = getSincePurchase(account);

  const originalPurchasePriceDate = new Date(account.originalPurchasePriceDate);

  const sincePurchasePercentage = getSincePurchasePercentage(
    sincePurchase,
    account
  );

  const annualAppreciationPercentage = getAnnualAppreciationPercentage(
    sincePurchasePercentage,
    originalPurchasePriceDate
  );

  return (
    <AccountSection>
      <AccountLabel>Valuation change</AccountLabel>
      <ColumnContainer>
        <AccountList>
          <AccountListItem>
            <InfoText>
              {`Purchased for `}
              <span style={{ fontWeight: "bold" }}>
                {formatToCurrency(account.originalPurchasePrice)}
              </span>
              {` in ${format(originalPurchasePriceDate, "MMM yyyy")}`}
            </InfoText>
          </AccountListItem>
          <AccountListItem>
            <InfoText>Since purchased</InfoText>
          </AccountListItem>
          <AccountListItem>
            <InfoText>Annual appreciation</InfoText>
          </AccountListItem>
        </AccountList>
        <AccountList>
          <AccountListChipItem>
            <Chip>
              {formatToCurrency(sincePurchase)}
              {` (${sincePurchasePercentage.toFixed(2)}%)`}
            </Chip>
          </AccountListChipItem>
          <AccountListChipItem>
            <Chip>{`${annualAppreciationPercentage.toFixed(2)}%`} </Chip>
          </AccountListChipItem>
        </AccountList>
      </ColumnContainer>
    </AccountSection>
  );
};

export default ValuationChange;
