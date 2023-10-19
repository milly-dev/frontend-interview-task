// Calculation for annual valuation in percentage
export const getAnnualAppreciationPercentage = (
  sincePurchasePercentage,
  originalPurchasePriceDate
) => {
  //Get number of years since purchase
  const date = new Date();
  let year = date.getFullYear();

  const numberOfYearsSincePurchase =
    year - originalPurchasePriceDate.getFullYear();

  return sincePurchasePercentage / numberOfYearsSincePurchase;
};

// Calculation for valuation difference
export const getSincePurchase = (account) => {
  return account.recentValuation.amount - account.originalPurchasePrice;
};

// Calculation for valuation difference in percentage
export const getSincePurchasePercentage = (sincePurchase, account) => {
  return (sincePurchase / account.originalPurchasePrice) * 100;
};
