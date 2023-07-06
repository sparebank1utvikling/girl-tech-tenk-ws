import { useParams } from "react-router-dom";

export const AccountDetails = () => {
  let { accountNumber } = useParams();

  return <>Kontoinfo for {accountNumber}</>;
};
