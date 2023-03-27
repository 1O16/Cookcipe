import react from "next";
import { Layout } from "../../../components";
import { db } from "../../../services/fbase";

import * as S from "./styled";

const Write = () => {
  return (
    <>
      <Layout>
        <S.WriteHeader>레시피 작성</S.WriteHeader>
        <S.WriteBody>.</S.WriteBody>
      </Layout>
    </>
  );
};

export default Write;
