import react from "next";
import { useRef, useState } from "react";
import { Layout } from "../../../components";
import { db } from "../../../services/fbase";

import * as S from "./styled";

const Write = () => {
  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef<HTMLInputElement>();

  const handlePreviewImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: any = e.target.files;
    if (file.length === 0) {
      return;
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(file[0]);
      reader.onload = function (e: any) {
        setImgFile(e.target.result);
      };
    }
  };

  const onClickImgDel = () => {
    setImgFile("");
  };
  return (
    <>
      <Layout>
        <S.WriteHeader>레시피 작성</S.WriteHeader>
        <S.WriteBody>
          <S.ForImageContainer>
            <S.RecipeFormContainer>
              <S.PropsContainer>
                <S.PropsTitle>레시피명</S.PropsTitle>
                <S.WriteRecipeTitle placeholder="레시피명을 입력해주세요" />
              </S.PropsContainer>
              <S.PropsContainer>
                <S.PropsTitle>레시피 소개</S.PropsTitle>
                <textarea
                  style={{ height: "80px", resize: "none" }}
                  placeholder="레시피 소개를 입력해주세요"
                ></textarea>
              </S.PropsContainer>
              <S.PropsContainer>
                <S.PropsTitle>카테고리</S.PropsTitle>
                <S.CategorySelector>
                  <option value="KoreanFood">한식</option>
                </S.CategorySelector>
                <S.PropsTitle style={{ marginLeft: "35px" }}>난이도</S.PropsTitle>
                <S.CategorySelector>
                  <option value="Hard">상</option>
                  <option value="Normal">중</option>
                  <option value="Easy">하</option>
                </S.CategorySelector>
              </S.PropsContainer>
            </S.RecipeFormContainer>
            <div>
              {imgFile ? (
                <>
                  <S.PreviewImage src={imgFile} />
                  <S.ImageDeleteBtn onClick={onClickImgDel}>X</S.ImageDeleteBtn>
                </>
              ) : (
                <></>
              )}

              <S.RecipeImage
                type="file"
                accept=".png, .jpg, .jpeg"
                onChange={handlePreviewImg}
                ref={imgRef}
              />
            </div>
          </S.ForImageContainer>
        </S.WriteBody>
      </Layout>
    </>
  );
};

export default Write;
