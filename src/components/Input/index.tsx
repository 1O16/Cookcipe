import react from "next";

import * as S from "./styled";

const Input = ({ ...props }) => (
  <>
    <S.InputElements {...props} />
  </>
);

export default Input;
