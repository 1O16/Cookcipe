import react from "next";
import { useCallback, useRef, useState } from "react";
import ReactQuill from "react-quill";
import { Layout, Quill } from "../../../components";
import MaterialEdit from "../../../components/MatrialAdd/MaterialEdit";
import MaterialInput from "../../../components/MatrialAdd/MaterialInput";
import MaterialList from "../../../components/MatrialAdd/MaterialList";
import { db } from "../../../services/fbase";

import * as S from "./styled";

interface MaterialProps {
  id: number;
  text: string;
}

const Write = () => {
  const [materials, setMaterials] = useState<MaterialProps[]>([]);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [editToggle, setEditToggle] = useState(false);
  const [imgFile, setImgFile] = useState("");
  const [recipeContent, setRecipeContent] = useState("");

  const quillRef = useRef<ReactQuill>(null);
  const nextId = useRef(1);
  const imgRef = useRef<HTMLInputElement>();

  const onWriteMaterial = useCallback(
    (text: string) => {
      const material = {
        id: nextId.current,
        text,
      };
      setMaterials(materials.concat(material));
      nextId.current += 1;
    },
    [materials]
  );

  const onRemoveMaterial = useCallback(
    (id: number) => {
      setMaterials(materials.filter((material) => material.id !== id));
    },
    [materials]
  );

  const onEditToggle = () => {
    if (selectedMaterial) {
      setSelectedMaterial(null);
    }
    setEditToggle((prev) => !prev);
  };

  const onChangeSelectedMaterial = (material: any) => {
    setSelectedMaterial(material);
  };

  const onUpdateMaterial = (id: number, text: string) => {
    onEditToggle();
    setMaterials(
      materials.map((material) => (material.id === id ? { ...material, text } : material))
    );
  };

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
                <S.WriteRecipeDesc
                  style={{ resize: "none" }}
                  placeholder="레시피 소개를 입력해주세요"
                ></S.WriteRecipeDesc>
              </S.PropsContainer>
              <S.PropsContainer>
                <S.PropsTitle>카테고리</S.PropsTitle>
                <S.CategorySelector>
                  <option value="KoreanFood">한식</option>
                  <option value="JapaneseFood">일식</option>
                  <option value="ChineseFood">중식</option>
                  <option value="WesternFood">양식</option>
                  <option value="Simple">자취음식</option>
                  <option value="Desert">디저트</option>
                  <option value="Salad">샐러드</option>
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
          <S.RecipeFormContainer
            style={{ borderTop: "1px solid #848484", marginTop: "40px", paddingTop: "30px" }}
          >
            <S.PropsContainer>
              <S.MaterialTemplate>
                <S.FlexDiv>
                  <S.PropsTitle>재료</S.PropsTitle>
                  <MaterialInput onWriteMaterial={onWriteMaterial} />
                </S.FlexDiv>
                <MaterialList
                  materials={materials}
                  editToggle={editToggle}
                  onEditToggle={onEditToggle}
                  onRemoveMaterial={onRemoveMaterial}
                  onChangeSelectedMaterial={onChangeSelectedMaterial}
                />
                {editToggle && (
                  <MaterialEdit
                    selectedMaterial={selectedMaterial}
                    onUpdateMaterial={onUpdateMaterial}
                  />
                )}
              </S.MaterialTemplate>
            </S.PropsContainer>
          </S.RecipeFormContainer>
          <S.RecipeFormContainer
            style={{ borderTop: "1px solid #848484", marginTop: "40px", paddingTop: "30px" }}
          >
            <S.PropsContainer>
              <S.PropsTitle style={{ fontWeight: "bold", fontSize: "24px" }}>레시피</S.PropsTitle>
              <Quill
                quillRef={quillRef}
                recipeContent={recipeContent}
                setRecipeContent={setRecipeContent}
              />
              {/* <S.WriteRecipeDesc
                style={{ width: "100%", height: "800px", resize: "none" }}
                placeholder="레시피를 입력해주세요"
              ></S.WriteRecipeDesc> */}
            </S.PropsContainer>
          </S.RecipeFormContainer>
        </S.WriteBody>
      </Layout>
    </>
  );
};

export default Write;
