import React from "react";
import { format } from "date-fns";
import { Chip } from "./chip";
import ColumnContainer from "./column-container";
import {
  AccountLabel,
  AccountList,
  AccountListItem,
  AccountListChipItem,
  AccountSection,
  InfoText,
} from "../modules/property-details/style";

const ValuationChange = ({ account }) => {
  const originalPurchasePriceDate = new Date(account.originalPurchasePriceDate);

  // Calculation for valuation difference
  const valuationDifference =
    account.recentValuation.amount - account.originalPurchasePrice;

  // Calculation for valuation difference in percentage
  const valuationDifferencePercentage =
    (valuationDifference / account.originalPurchasePrice) * 100;

  //Get number of years since purchase
  const date = new Date();
  let year = date.getFullYear();

  const numberOfYearsSincePurchase =
    year - originalPurchasePriceDate.getFullYear();

  // Calculation for annual valuation in percentage
  const AnnualValuationPercentage =
    valuationDifferencePercentage / numberOfYearsSincePurchase;

  return (
    <AccountSection>
      <AccountLabel>Valuation change</AccountLabel>
      <ColumnContainer>
        <AccountList>
          <AccountListItem>
            <InfoText>
              {`Purchased for `}
              <span style={{ fontWeight: "bold" }}>
                {new Intl.NumberFormat("en-GB", {
                  style: "currency",
                  currency: "GBP",
                }).format(account.originalPurchasePrice)}
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
              {new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
              }).format(valuationDifference)}
              {` (${valuationDifferencePercentage.toFixed(2)}%)`}
            </Chip>
          </AccountListChipItem>
          <AccountListChipItem>
            <Chip>{`${AnnualValuationPercentage.toFixed(2)}%`} </Chip>
          </AccountListChipItem>
        </AccountList>
      </ColumnContainer>
    </AccountSection>
  );
};

export default ValuationChange;
