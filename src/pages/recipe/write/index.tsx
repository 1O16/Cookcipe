import { addDoc, collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  listAll,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import { Layout, Quill } from "../../../components";
import MaterialEdit from "../../../components/MatrialAdd/MaterialEdit";
import MaterialInput from "../../../components/MatrialAdd/MaterialInput";
import MaterialList from "../../../components/MatrialAdd/MaterialList";
import { db, storage } from "../../../services/fbase";

import * as S from "./styled";

interface MaterialProps {
  id: number;
  text: string;
}

const Write = () => {
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("");
  const [materials, setMaterials] = useState<MaterialProps[]>([]);
  const [selectedMaterial, setSelectedMaterial] = useState<boolean | null>(null);
  const [editToggle, setEditToggle] = useState<boolean>(false);
  const [recipeContent, setRecipeContent] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);

  const quillRef = useRef<ReactQuill>(null);
  const nextId = useRef<number>(1);

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

  const onClickAddDoc = () => {
    addDoc(collection(db, "recipe"), {
      title: title,
      desc: desc,
      img: imageList,
      materials: materials,
      content: recipeContent,
      category: category,
      difficulty: difficulty,
      createdAt: serverTimestamp(),
    });
  };

  const imageListRef = ref(storage, "images/");

  const uploadImage = () => {
    if (imageUpload === null) return;

    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url]);
      });
    });
  };

  const deleteImage = () => {
    setImageList([]);
    if (!imageUpload) return;
    const deleteRef = ref(storage, `images/${imageUpload.name}`);

    deleteObject(deleteRef)
      .then(() => {
        console.log("delete success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    listAll(imageListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <Layout>
      <S.WriteHeader>레시피 작성</S.WriteHeader>
      <S.WriteBody>
        <S.ForImageContainer>
          <S.RecipeFormContainer>
            <S.PropsContainer>
              <S.PropsTitle>레시피명</S.PropsTitle>
              <S.WriteRecipeTitle
                value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setTitle(e.target.value);
                }}
                placeholder="레시피명을 입력해주세요"
              />
            </S.PropsContainer>
            <S.PropsContainer>
              <S.PropsTitle>레시피 소개</S.PropsTitle>
              <S.WriteRecipeDesc
                style={{ resize: "none" }}
                value={desc}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                  setDesc(e.target.value);
                }}
                placeholder="레시피 소개를 입력해주세요"
              ></S.WriteRecipeDesc>
            </S.PropsContainer>
            <S.PropsContainer>
              <S.PropsTitle>카테고리</S.PropsTitle>
              <S.CategorySelector
                value={category}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  setCategory(e.target.value);
                }}
              >
                <option>카테고리</option>
                <option value="KoreanFood">한식</option>
                <option value="JapaneseFood">일식</option>
                <option value="ChineseFood">중식</option>
                <option value="WesternFood">양식</option>
                <option value="Simple">자취음식</option>
                <option value="Dessert">디저트</option>
                <option value="Salad">샐러드</option>
              </S.CategorySelector>
              <S.PropsTitle style={{ marginLeft: "35px" }}>난이도</S.PropsTitle>
              <S.CategorySelector
                value={difficulty}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  setDifficulty(e.target.value);
                }}
              >
                <option>난이도</option>
                <option value="Hard">상</option>
                <option value="Normal">중</option>
                <option value="Easy">하</option>
              </S.CategorySelector>
            </S.PropsContainer>
          </S.RecipeFormContainer>
          <div>
            {imageList ? (
              <>
                {imageList.map((el) => {
                  return <S.PreviewImage src={el} key={el} />;
                })}
                <S.ImageDeleteBtn onClick={deleteImage}>X</S.ImageDeleteBtn>
              </>
            ) : (
              <></>
            )}
            <pre
              style={{ fontWeight: "600", position: "absolute", marginTop: "20px", zIndex: "1" }}
            >
              완성된 요리 사진을 <br />
              업로드해주세요!
            </pre>
            {imageList.map((el) => {
              return <S.PreviewImage src={el} key={el} />;
            })}
            <S.RecipeImage
              type="file"
              accept=".png, .jpg, .jpeg"
              onChange={(e) => {
                setImageUpload(e.target.files[0]);
              }}
            />
            <button onClick={uploadImage}>이미지 업로드</button>
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
          </S.PropsContainer>
        </S.RecipeFormContainer>
        <S.RecipeFormContainer>
          <Link href="/">
            <S.PropsContainer>
              <S.RecipeSubmitButton onClick={onClickAddDoc}>올리기</S.RecipeSubmitButton>
            </S.PropsContainer>
          </Link>
        </S.RecipeFormContainer>
      </S.WriteBody>
    </Layout>
  );
};

export default Write;
