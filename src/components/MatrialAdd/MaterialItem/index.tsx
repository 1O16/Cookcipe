import react from "next";

import { MdModeEditOutline, MdRemoveCircleOutline, MdFiberManualRecord } from "react-icons/md";
import * as S from "./styled";

interface MaterialItemProps {
  material?: any;
  editToggle: boolean;
  onRemoveMaterial: (id: number) => void;
  onChangeSelectedMaterial: (material: any) => void;
  onEditToggle: () => void;
}

const MaterialItem = ({
  material,
  editToggle,
  onRemoveMaterial,
  onChangeSelectedMaterial,
  onEditToggle,
}: MaterialItemProps) => {
  const { id, text } = material;
  return (
    <S.MaterialItem>
      <S.FlexDiv>
        <MdFiberManualRecord size="8" style={{ padding: "10px" }} />
        <S.MaterialText>{text}</S.MaterialText>
      </S.FlexDiv>
      <S.FlexDiv>
        <S.MaterialEdit
          onClick={() => {
            onChangeSelectedMaterial(material);
            onEditToggle();
          }}
        >
          <MdModeEditOutline
            size="20"
            style={{ padding: "5px", marginLeft: "5px", cursor: "pointer" }}
          />
        </S.MaterialEdit>
        {editToggle ? (
          <></>
        ) : (
          <S.MaterialDelete onClick={() => onRemoveMaterial(id)}>
            <MdRemoveCircleOutline
              size="24"
              color="red"
              style={{ padding: "5px", cursor: "pointer" }}
            />
          </S.MaterialDelete>
        )}
      </S.FlexDiv>
    </S.MaterialItem>
  );
};

export default MaterialItem;
