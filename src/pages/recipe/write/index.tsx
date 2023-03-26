import react from "next";
import { Layout } from "../../../components";

import * as S from "./styled";

const Write = () => {
  return (
    <>
      <Layout>
        <S.WriteHeader>레시피 작성</S.WriteHeader>
      </Layout>
    </>
  );
};

export default Write;
