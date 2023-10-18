/* eslint-disable max-statements */
import { add, format } from "date-fns";
import React from "react";
import { Button } from "../../components/button";
import RowContainer from "../../components/row-container";
import ColumnContainer from "../../components/column-container";
import {
  AccountHeadline,
  AccountLabel,
  AccountList,
  AccountListItem,
  AccountListChipItem,
  AccountSection,
  InfoText,
  Inset,
} from "./style";
import { Chip } from "../../components/chip";

const account = {
  uid: "65156cdc-5cfd-4b34-b626-49c83569f35e",
  deleted: false,
  dateCreated: "2020-12-03T08:55:33.421Z",
  currency: "GBP",
  name: "15 Temple Way",
  bankName: "Residential",
  type: "properties",
  subType: "residential",
  originalPurchasePrice: 250000,
  originalPurchasePriceDate: "2017-09-03",
  recentValuation: { amount: 310000, status: "good" },
  associatedMortgages: [
    {
      name: "HSBC Repayment Mortgage",
      uid: "fb463121-b51a-490d-9f19-d2ea76f05e25",
      currentBalance: -175000,
    },
  ],
  canBeManaged: false,
  postcode: "BS1 2AA",
  lastUpdate: "2020-12-01T08:55:33.421Z",
  updateAfterDays: 30,
};

const Detail = ({}) => {
  let mortgage;
  const lastUpdate = new Date(account.lastUpdate);
  if (account.associatedMortgages.length) {
    mortgage = account.associatedMortgages[0];
  }

  const originalPurchasePriceDate = new Date(account.originalPurchasePriceDate);

  // Calculation for valuation difference - sincePurchase
  const sincePurchase =
    account.recentValuation.amount - account.originalPurchasePrice;

  // Calculation for valuation difference in percentage - sincePurchasePercent
  const sincePurchasePercentage =
    (sincePurchase / account.originalPurchasePrice) * 100;

  //Get number of years since purchase
  const date = new Date();
  let year = date.getFullYear();

  const numberOfYearsSincePurchase =
    year - originalPurchasePriceDate.getFullYear();

  // Calculation for annual valuation in percentage - annualAppreciation
  const AnnualValuationPercentage =
    sincePurchasePercentage / numberOfYearsSincePurchase;

  return (
    <Inset>
      <AccountSection>
        <AccountLabel>Estimated Value</AccountLabel>
        <AccountHeadline>
          {new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
          }).format(account.recentValuation.amount)}
        </AccountHeadline>
        <AccountList>
          <AccountListItem>
            <InfoText>
              {`Last updated ${format(lastUpdate, "do MMM yyyy")}`}
            </InfoText>
          </AccountListItem>
          <AccountListItem>
            <InfoText>
              {`Next update ${format(
                add(lastUpdate, { days: account.updateAfterDays }),
                "do MMM yyyy"
              )}`}
            </InfoText>
          </AccountListItem>
        </AccountList>
      </AccountSection>
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
                }).format(sincePurchase)}
                {` (${sincePurchasePercentage.toFixed(2)}%)`}
              </Chip>
            </AccountListChipItem>
            <AccountListChipItem>
              <Chip>{`${AnnualValuationPercentage.toFixed(2)}%`} </Chip>
            </AccountListChipItem>
          </AccountList>
        </ColumnContainer>
      </AccountSection>
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
      {mortgage && (
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
      )}
      <Button
        // This is a dummy action
        onClick={() => alert("You have navigated to the edit account page")}
      >
        Edit account
      </Button>
    </Inset>
  );
};

export default Detail;
